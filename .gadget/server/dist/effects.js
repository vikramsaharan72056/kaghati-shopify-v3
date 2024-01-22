import { ChangeTracking, GadgetRecord } from "@gadgetinc/api-client-core";
import {
  InternalError,
  InvalidActionInputError,
  InvalidStateTransitionError,
  MisconfiguredActionError,
  NoSessionForAuthenticationError,
  PermissionDeniedError,
  UserNotSetOnSessionError
} from "./errors";
import { Globals, actionContextLocalStorage } from "./globals";
import { modelListIndex, modelsMap } from "./metadata";
import { AppTenancyKey } from "./tenancy";
import { assert } from "./utils";
function getBelongsToRelationParams(model, params) {
  const belongsToParams = {};
  for (const field of Object.values(model.fields)) {
    if (field.fieldType != "BelongsTo")
      continue;
    const modelParams = typeof params[model.apiIdentifier] === "object" ? params[model.apiIdentifier] : void 0;
    const belongsToParam = modelParams && typeof modelParams[field.apiIdentifier] === "object" ? modelParams[field.apiIdentifier] : void 0;
    const belongsToId = belongsToParam?.[LINK_PARAM] !== void 0 ? belongsToParam[LINK_PARAM] : belongsToParam?.id;
    if (belongsToId !== void 0) {
      belongsToParams[`${field.apiIdentifier}Id`] = belongsToId;
    }
  }
  return belongsToParams;
}
function createGadgetRecord(apiIdentifier, data) {
  const model = getModelByApiIdentifier(apiIdentifier);
  return new GadgetRecord({
    ...data,
    __typename: model.graphqlTypeName
  });
}
function applyParams(params, record) {
  const model = getModelByTypename(record.__typename);
  Object.assign(record, params[model.apiIdentifier], getBelongsToRelationParams(model, params));
}
async function save(record) {
  const context = maybeGetActionContextFromLocalStorage();
  const api = assert(context ? context.api : getCurrentContext().api, "api client is missing from the current context");
  const model = getModelByTypename(record.__typename);
  await (await Globals.modelValidator(model.key)).validate({ api, logger: Globals.logger }, record);
  if (!api.internal[model.apiIdentifier]) {
    throw new InternalError(
      `Gadget API client doesn't have an internal model manager for ${model.apiIdentifier} to run a Save Record function -- has it finished regenerating or was it recently removed?`
    );
  }
  let result;
  if ("createdAt" in record && record.createdAt) {
    result = await api.internal[model.apiIdentifier].update(record.id, {
      [model.apiIdentifier]: changedAttributes(model, record)
    });
  } else {
    result = await api.internal[model.apiIdentifier].create({
      [model.apiIdentifier]: writableAttributes(model, record)
    });
  }
  Object.assign(record, { ...result });
  record.flushChanges(ChangeTracking.SinceLastPersisted);
}
async function deleteRecord(record) {
  const context = maybeGetActionContextFromLocalStorage();
  const api = assert(context ? context.api : getCurrentContext().api, "api client is missing from the current context");
  const scope = context ? context.scope : {};
  const model = getModelByTypename(record.__typename);
  const id = assert(record.id, `record.id not set on record in scope, has the record been persisted?`);
  if (!api.internal[model.apiIdentifier]) {
    throw new InternalError(
      `Gadget API client doesn't have an internal model manager for ${model.apiIdentifier} to run a Delete Record effect -- has it finished regenerating or was it recently removed?`
    );
  }
  await api.internal[model.apiIdentifier].delete(id);
  scope.recordDeleted = true;
}
const ShopifyShopState = {
  Installed: { created: "installed" },
  Uninstalled: { created: "uninstalled" }
};
const ShopifySyncState = {
  Created: "created",
  Running: "running",
  Completed: "completed",
  Errored: "errored"
};
const ShopifyBulkOperationState = {
  Created: "created",
  Completed: "completed",
  Canceled: "canceled",
  Failed: "failed",
  Expired: "expired"
};
const ShopifySellingPlanGroupProductVariantState = {
  Started: "started",
  Created: "created",
  Deleted: "deleted"
};
const ShopifySellingPlanGroupProductState = {
  Started: "started",
  Created: "created",
  Deleted: "deleted"
};
function transitionState(record, transition) {
  const stringRecordState = typeof record.state === "string" ? record.state : JSON.stringify(record.state);
  const stringTransitionFrom = typeof transition.from === "string" ? transition.from : JSON.stringify(transition.from);
  if (transition.from && stringRecordState !== stringTransitionFrom) {
    throw new InvalidStateTransitionError(void 0, {
      state: record.state,
      expectedFrom: transition.from
    });
  }
  record.state = transition.to;
}
async function shopifySync(params, record) {
  const context = getActionContextFromLocalStorage();
  const effectAPIs = context.effectAPIs;
  const syncRecord = assert(
    record,
    "cannot start a shop sync from this action"
  );
  const shopId = assert(syncRecord.shopId, "a shop is required to start a sync");
  if (!syncRecord.models || Array.isArray(syncRecord.models) && syncRecord.models.every((m) => typeof m == "string")) {
    try {
      await effectAPIs.sync(
        syncRecord.id.toString(),
        shopId,
        syncRecord.syncSince,
        syncRecord.models,
        syncRecord.force,
        params.startReason
      );
    } catch (error) {
      Globals.logger.error({ error, connectionSyncId: syncRecord.id }, "an error occurred starting shop sync");
      throw error;
    }
  } else {
    throw new InvalidActionInputError("Models must be an array of api identifiers");
  }
}
async function abortSync(params, record) {
  const context = getActionContextFromLocalStorage();
  const effectAPIs = context.effectAPIs;
  const syncRecord = assert(record, "a record is required to abort a shop sync");
  const syncId = assert(syncRecord.id, "a sync id is required to start a sync");
  if (!params.errorMessage) {
    record.errorMessage = "Sync aborted";
  }
  Globals.logger.info({ userVisible: true, connectionSyncId: syncId }, "aborting sync");
  try {
    await effectAPIs.abortSync(syncId.toString());
  } catch (error) {
    Globals.logger.error({ error, connectionSyncId: syncId }, "an error occurred aborting sync");
    throw error;
  }
}
async function preventCrossShopDataAccess(params, record, options) {
  const context = getActionContextFromLocalStorage();
  if (context.type != "effect") {
    throw new Error("Can't prevent cross shop data access outside of an action effect");
  }
  if (!params) {
    throw new Error(
      "The `params` parameter is required in preventCrossShopDataAccess(params, record, options?: { shopBelongsToField: string })"
    );
  }
  if (!record) {
    throw new Error(
      "The `record` parameter is required in preventCrossShopDataAccess(params, record, options?: { shopBelongsToField: string })"
    );
  }
  const model = context.model;
  const appTenancy = context[AppTenancyKey];
  const shopBelongsToField = options?.shopBelongsToField;
  if (appTenancy?.shopify?.shopId === void 0) {
    return;
  }
  if (!model) {
    return;
  }
  const shopId = String(appTenancy.shopify.shopId);
  if (model.key == ShopifyShopKey) {
    if (record && String(record.id) !== shopId) {
      throw new PermissionDeniedError();
    }
    return;
  }
  const fieldsIsBelongsToShopifyShop = Object.values(model.fields).filter(
    (f) => f.fieldType === "BelongsTo" /* BelongsTo */ && f.configuration.relatedModelKey === ShopifyShopKey
  );
  if (fieldsIsBelongsToShopifyShop.length === 0) {
    throw new MisconfiguredActionError("This model is missing a related shop field.");
  }
  if (fieldsIsBelongsToShopifyShop.length > 1 && !shopBelongsToField) {
    throw new MisconfiguredActionError(
      "This function is missing a related shop field option. `shopBelongsToField` is a required option parameter if the model has more than one related shop field."
    );
  }
  let relatedField = fieldsIsBelongsToShopifyShop[0];
  if (shopBelongsToField) {
    const selectedField = Object.values(model.fields).find((f) => f.apiIdentifier === shopBelongsToField);
    if (!selectedField) {
      throw new MisconfiguredActionError("The selected shop relation field does not exist.");
    }
    if (selectedField.fieldType !== "BelongsTo" /* BelongsTo */ || selectedField.configuration.relatedModelKey !== ShopifyShopKey) {
      throw new MisconfiguredActionError(
        "The selected shop relation field should be a `Belongs To` relationship to the `Shopify Shop` model."
      );
    } else {
      relatedField = selectedField;
    }
  }
  const input = params[model.apiIdentifier];
  if (Globals.platformModules.lodash().isObjectLike(input)) {
    const objectInput = input;
    if (objectInput[relatedField.apiIdentifier]) {
      if (String(objectInput[relatedField.apiIdentifier][LINK_PARAM]) !== shopId) {
        throw new PermissionDeniedError();
      }
    } else {
      objectInput[relatedField.apiIdentifier] = {
        [LINK_PARAM]: shopId
      };
    }
  } else {
    params[model.apiIdentifier] = {
      [relatedField.apiIdentifier]: {
        [LINK_PARAM]: shopId
      }
    };
  }
  if (record) {
    const value = record.getField(relatedField.apiIdentifier);
    if (value) {
      const recordShopId = typeof value === "object" ? value[LINK_PARAM] : value;
      if (String(recordShopId) !== shopId) {
        throw new PermissionDeniedError();
      }
    } else {
      record.setField(relatedField.apiIdentifier, {
        [LINK_PARAM]: shopId
      });
    }
  }
}
async function finishBulkOperation(record) {
  if (!record?.id) {
    Globals.logger.warn(`Expected bulk operation record to be present for action`);
    return;
  }
  const context = getActionContextFromLocalStorage();
  const shopifyAPI = await context.connections.shopify.forShopId(record.shopId);
  if (!shopifyAPI) {
    Globals.logger.error(`Could not instantiate Shopify client for shop ID ${record.shopId}`);
    return;
  }
  const bulkOperation = (await shopifyAPI.graphql(`query {
        node(id: "${ShopifyBulkOperationGIDForId(record.id)}") {
          ... on BulkOperation {
            id
            status
            errorCode
            createdAt
            completedAt
            objectCount
            fileSize
            url
            type
            partialDataUrl
            rootObjectCount
          }
        }
      }`)).node;
  const { status, errorCode, type } = bulkOperation;
  Object.assign(record, {
    ...bulkOperation,
    status: status?.toLowerCase(),
    errorCode: errorCode?.toLowerCase(),
    type: type?.toLowerCase(),
    id: record.id
  });
}
async function globalShopifySync(params) {
  const context = maybeGetActionContextFromLocalStorage();
  const effectAPIs = assert(
    context ? context.effectAPIs : getCurrentContext().effectAPIs,
    "effect apis is missing from the current context"
  );
  const api = assert(context ? context.api : getCurrentContext().api, "api client is missing from the current context");
  const { apiKeys, syncSince, models, force, startReason } = params;
  const { shopModelIdentifier, installedViaKeyFieldIdentifier, runShopSyncIdentifier, accessTokenIdentifier, forceFieldIdentifier } = await effectAPIs.getSyncIdentifiers();
  const pageSize = 250;
  let pageInfo = { first: pageSize, hasNextPage: true };
  const results = [];
  if (apiKeys && apiKeys.length > 0) {
    try {
      while (pageInfo.hasNextPage) {
        const records = await api.internal[shopModelIdentifier].findMany({
          filter: {
            [installedViaKeyFieldIdentifier]: {
              in: apiKeys
            },
            state: {
              inState: "created.installed"
            },
            planName: {
              notIn: ["frozen", "fraudulent", "cancelled"]
            }
          },
          first: pageInfo.first,
          after: pageInfo.endCursor
        });
        results.push(...records);
        pageInfo = records.pagination.pageInfo;
      }
    } catch (error) {
      Globals.logger.info({ userVisible: true, error, apiKeys }, "could not get shops for all API keys");
      throw error;
    }
    for (const result of results) {
      if (Globals.platformModules.lodash().isEmpty(result[accessTokenIdentifier]) || result.state?.created == "uninstalled") {
        Globals.logger.info({ shopId: result.id }, "skipping sync for shop without access token or is uninstalled");
        continue;
      }
      try {
        const response = await api.mutate(
          `
            mutation runSync($shopId: GadgetID!, $domain: String!, $syncSince: DateTime, $models: JSON${forceFieldIdentifier ? ", $force: Boolean" : ""}, $startReason: String) {
              ${runShopSyncIdentifier}(shopifySync:{
                domain:$domain
                syncSince:$syncSince
                models:$models
                ${forceFieldIdentifier ? `${forceFieldIdentifier}:$force` : ""}
                shop:{
                  _link:$shopId
                }
              }, startReason: $startReason) {
                success
                errors {
                  message
                }
              }
            }
          `,
          {
            shopId: result.id,
            domain: result.domain,
            syncSince,
            models,
            ...forceFieldIdentifier ? { force } : void 0,
            startReason
          }
        );
        if (response[runShopSyncIdentifier] && !response[runShopSyncIdentifier].success) {
          Globals.logger.warn(
            { userVisible: true, shop: result, error: response[runShopSyncIdentifier].errors },
            "couldn't start sync for shop"
          );
        }
      } catch (error) {
        Globals.logger.warn({ userVisible: true, error, shop: result }, "couldn't start sync for shop");
      }
    }
  } else {
    throw new InvalidActionInputError("missing at least 1 api key");
  }
}
function legacySetUser() {
  const context = getActionContextFromLocalStorage();
  if (!context.scope.authenticatedUser) {
    throw new UserNotSetOnSessionError(
      "The authenticated user could not be saved to the session when logging in. Make sure the user has a role assigned to them."
    );
  }
  if (!context.session) {
    throw new NoSessionForAuthenticationError(
      "Unable to authenticate because the request was made with no session in context to transition."
    );
  }
  context.session.set("user", { [LINK_PARAM]: context.scope.authenticatedUser.id });
}
function legacyUnsetUser() {
  const context = getActionContextFromLocalStorage();
  if (!context.session) {
    throw new NoSessionForAuthenticationError("Unable to unset users on session because the request was made with no session.");
  }
  context.session.delete("user");
}
async function legacySuccessfulAuthentication(params) {
  const context = getActionContextFromLocalStorage();
  const { api, scope } = context;
  const user = (await api.internal.user.findMany({ filter: { email: { equals: params.email } } }))[0];
  let result = false;
  if (user && params.password && user.password?.hash) {
    if (await Globals.platformModules.bcrypt().compare(params.password, user.password.hash)) {
      scope.authenticatedUser = user;
      result = true;
    }
  }
  Globals.logger.info({ email: params.email, userId: user?.id, result }, "login attempt");
  if (!result) {
    throw new Error("Invalid email or password");
  }
}
function getActionContextFromLocalStorage() {
  return assert(actionContextLocalStorage.getStore(), "this effect function should only be called from within an action");
}
function maybeGetActionContextFromLocalStorage() {
  return actionContextLocalStorage.getStore();
}
function getCurrentContext() {
  return assert(Globals.requestContext.get("requestContext"), "no gadget context found on request");
}
const LINK_PARAM = "_link";
function writableAttributes(model, record) {
  const fieldsByApiIdentifier = Globals.platformModules.lodash().keyBy(Object.values(model.fields), "apiIdentifier");
  return Globals.platformModules.lodash().pickBy(record, (v, k) => fieldsByApiIdentifier[k]?.internalWritable);
}
function changedAttributes(model, record) {
  const changes = record.changes();
  const attributes = Object.keys(changes).reduce((attrs, key) => {
    attrs[key] = record[key];
    return attrs;
  }, {});
  return writableAttributes(model, attributes);
}
const getModelByApiIdentifier = (apiIdentifier) => {
  const typename = modelListIndex[`api:${apiIdentifier}`];
  if (!typename) {
    throw new InternalError(`Model ${apiIdentifier} not found in available model metadata`, {
      availableApiIdentifiers: Object.keys(modelListIndex)
    });
  }
  return getModelByTypename(typename);
};
const getModelByTypename = (typename) => {
  if (!typename) {
    throw new InternalError(`No typename found on record, __typename must be set for accessing model metadata`);
  }
  const model = modelsMap[typename];
  if (!model) {
    throw new InternalError(`Model with typename ${typename} not found in available model metadata`, {
      availableTypenames: Object.keys(modelsMap)
    });
  }
  return model;
};
var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["ID"] = "ID";
  FieldType2["Number"] = "Number";
  FieldType2["String"] = "String";
  FieldType2["Enum"] = "Enum";
  FieldType2["RichText"] = "RichText";
  FieldType2["DateTime"] = "DateTime";
  FieldType2["Email"] = "Email";
  FieldType2["URL"] = "URL";
  FieldType2["Money"] = "Money";
  FieldType2["File"] = "File";
  FieldType2["Color"] = "Color";
  FieldType2["Password"] = "Password";
  FieldType2["Computed"] = "Computed";
  FieldType2["HasManyThrough"] = "HasManyThrough";
  FieldType2["BelongsTo"] = "BelongsTo";
  FieldType2["HasMany"] = "HasMany";
  FieldType2["HasOne"] = "HasOne";
  FieldType2["Boolean"] = "Boolean";
  FieldType2["Model"] = "Model";
  FieldType2["Object"] = "Object";
  FieldType2["Array"] = "Array";
  FieldType2["JSON"] = "JSON";
  FieldType2["Code"] = "Code";
  FieldType2["EncryptedString"] = "EncryptedString";
  FieldType2["Vector"] = "Vector";
  FieldType2["Any"] = "Any";
  FieldType2["Null"] = "Null";
  FieldType2["RecordState"] = "RecordState";
  FieldType2["RoleAssignments"] = "RoleAssignments";
  return FieldType2;
})(FieldType || {});
const shopifyModelKey = (modelName) => {
  const modelKey = modelName.replaceAll(" ", "");
  return `DataModel-Shopify-${modelKey}`;
};
const ShopifyShopKey = shopifyModelKey("Shop");
const ShopifyBulkOperationGIDForId = (id) => `gid://shopify/BulkOperation/${id}`;
export {
  FieldType,
  ShopifyBulkOperationState,
  ShopifySellingPlanGroupProductState,
  ShopifySellingPlanGroupProductVariantState,
  ShopifyShopState,
  ShopifySyncState,
  abortSync,
  applyParams,
  createGadgetRecord,
  deleteRecord,
  finishBulkOperation,
  globalShopifySync,
  legacySetUser,
  legacySuccessfulAuthentication,
  legacyUnsetUser,
  preventCrossShopDataAccess,
  save,
  shopifySync,
  transitionState
};
//# sourceMappingURL=effects.js.map
