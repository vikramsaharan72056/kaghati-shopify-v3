"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyPickupOrder_exports = {};
__export(ShopifyPickupOrder_exports, {
  DefaultShopifyPickupOrderSelection: () => DefaultShopifyPickupOrderSelection,
  ShopifyPickupOrderManager: () => ShopifyPickupOrderManager
});
module.exports = __toCommonJS(ShopifyPickupOrder_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyPickupOrderSelection = {
  "__typename": true,
  "address": true,
  "createdAt": true,
  "id": true,
  "inventoryManagementVarient": true,
  "name": true,
  "service": true,
  "shipmentStatus": true,
  "shippingCompany": true,
  "status": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyPickupOrder";
const pluralApiIdentifier = "shopifyPickupOrders";
async function createShopifyPickupOrder(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyPickupOrder": {
        value: newVariables.shopifyPickupOrder,
        required: false,
        type: "CreateShopifyPickupOrderInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyPickupOrder(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyPickupOrder": {
        value: newVariables.shopifyPickupOrder,
        required: false,
        type: "UpdateShopifyPickupOrderInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyPickupOrder(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyPickupOrder",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
async function trackShopifyPickupOrder(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "trackShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
async function cancelShopifyPickupOrder(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "cancelShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyPickupOrderManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyPickupOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyPickupOrder",
          id,
          DefaultShopifyPickupOrderSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyPickupOrder",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPickupOrderSelection
      }
    );
    /**
    * Finds one shopifyPickupOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyPickupOrder",
          id,
          DefaultShopifyPickupOrderSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyPickupOrder",
        modelApiIdentifier: "shopifyPickupOrder",
        defaultSelection: DefaultShopifyPickupOrderSelection
      }
    );
    /**
    * Finds many shopifyPickupOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          "shopifyPickupOrder",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyPickupOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPickupOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyPickupOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyPickupOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPickupOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyPickupOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyPickupOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPickupOrderSelection
      }
    );
    /**
    * Finds one shopifyPickupOrder by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "shopifyPickupOrders",
          "id",
          value,
          DefaultShopifyPickupOrderSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyPickupOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPickupOrderSelection
      }
    );
    this.create = Object.assign(
      createShopifyPickupOrder,
      {
        type: "action",
        operationName: "createShopifyPickupOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          "shopifyPickupOrder": {
            required: false,
            type: "CreateShopifyPickupOrderInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCreateShopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          "shopifyPickupOrder",
          "shopifyPickupOrders",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyPickupOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyPickupOrders",
        isBulk: true,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyPickupOrdersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyPickupOrder,
      {
        type: "action",
        operationName: "updateShopifyPickupOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyPickupOrder": {
            required: false,
            type: "UpdateShopifyPickupOrderInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkUpdateShopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          "shopifyPickupOrder",
          "shopifyPickupOrders",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyPickupOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyPickupOrders",
        isBulk: true,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyPickupOrdersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyPickupOrder,
      {
        type: "action",
        operationName: "deleteShopifyPickupOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkDeleteShopifyPickupOrders",
          null,
          "shopifyPickupOrder",
          "shopifyPickupOrders",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteShopifyPickupOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyPickupOrders",
        isBulk: true,
        defaultSelection: null,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    this.track = Object.assign(
      trackShopifyPickupOrder,
      {
        type: "action",
        operationName: "trackShopifyPickupOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkTrack action with the given inputs.
    */
    this.bulkTrack = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkTrackShopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          "shopifyPickupOrder",
          "shopifyPickupOrders",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkTrack"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkTrackShopifyPickupOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyPickupOrders",
        isBulk: true,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    this.cancel = Object.assign(
      cancelShopifyPickupOrder,
      {
        type: "action",
        operationName: "cancelShopifyPickupOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkCancel action with the given inputs.
    */
    this.bulkCancel = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCancelShopifyPickupOrders",
          DefaultShopifyPickupOrderSelection,
          "shopifyPickupOrder",
          "shopifyPickupOrders",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkCancel"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCancelShopifyPickupOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyPickupOrders",
        isBulk: true,
        defaultSelection: DefaultShopifyPickupOrderSelection,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyPickupOrderSelection,
  ShopifyPickupOrderManager
});
//# sourceMappingURL=ShopifyPickupOrder.js.map
