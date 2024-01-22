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
var KhagatiStores_exports = {};
__export(KhagatiStores_exports, {
  DefaultKhagatiStoresSelection: () => DefaultKhagatiStoresSelection,
  KhagatiStoresManager: () => KhagatiStoresManager
});
module.exports = __toCommonJS(KhagatiStores_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultKhagatiStoresSelection = {
  "__typename": true,
  "address": true,
  "city": true,
  "createdAt": true,
  "email": true,
  "googleMap": true,
  "id": true,
  "isBackupWarehouse": true,
  "mobNumber": true,
  "pincode": true,
  "selectBackupWarehouse": true,
  "state": true,
  "status": true,
  "storeCode": true,
  "storeName": true,
  "storeTier": true,
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
const apiIdentifier = "khagatiStores";
const pluralApiIdentifier = "khagatiStoress";
async function createKhagatiStores(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createKhagatiStores",
    DefaultKhagatiStoresSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "khagatiStores": {
        value: newVariables.khagatiStores,
        required: false,
        type: "CreateKhagatiStoresInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateKhagatiStores(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateKhagatiStores",
    DefaultKhagatiStoresSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "khagatiStores": {
        value: newVariables.khagatiStores,
        required: false,
        type: "UpdateKhagatiStoresInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteKhagatiStores(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteKhagatiStores",
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
class KhagatiStoresManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one khagatiStores by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "khagatiStores",
          id,
          DefaultKhagatiStoresSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "khagatiStores",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultKhagatiStoresSelection
      }
    );
    /**
    * Finds one khagatiStores by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "khagatiStores",
          id,
          DefaultKhagatiStoresSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "khagatiStores",
        modelApiIdentifier: "khagatiStores",
        defaultSelection: DefaultKhagatiStoresSelection
      }
    );
    /**
    * Finds many khagatiStores. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "khagatiStoress",
          DefaultKhagatiStoresSelection,
          "khagatiStores",
          options
        );
      },
      {
        type: "findMany",
        operationName: "khagatiStoress",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultKhagatiStoresSelection
      }
    );
    /**
    * Finds the first matching khagatiStores. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "khagatiStoress",
          DefaultKhagatiStoresSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "khagatiStoress",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultKhagatiStoresSelection
      }
    );
    /**
    * Finds the first matching khagatiStores. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "khagatiStoress",
          DefaultKhagatiStoresSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "khagatiStoress",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultKhagatiStoresSelection
      }
    );
    /**
    * Finds one khagatiStores by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "khagatiStoress",
          "id",
          value,
          DefaultKhagatiStoresSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "khagatiStoress",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultKhagatiStoresSelection
      }
    );
    this.create = Object.assign(
      createKhagatiStores,
      {
        type: "action",
        operationName: "createKhagatiStores",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultKhagatiStoresSelection,
        variables: {
          "khagatiStores": {
            required: false,
            type: "CreateKhagatiStoresInput"
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
          "bulkCreateKhagatiStores",
          DefaultKhagatiStoresSelection,
          "khagatiStores",
          "khagatiStores",
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
        operationName: "bulkCreateKhagatiStores",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "khagatiStores",
        isBulk: true,
        defaultSelection: DefaultKhagatiStoresSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateKhagatiStoresInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateKhagatiStores,
      {
        type: "action",
        operationName: "updateKhagatiStores",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultKhagatiStoresSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "khagatiStores": {
            required: false,
            type: "UpdateKhagatiStoresInput"
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
          "bulkUpdateKhagatiStores",
          DefaultKhagatiStoresSelection,
          "khagatiStores",
          "khagatiStores",
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
        operationName: "bulkUpdateKhagatiStores",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "khagatiStores",
        isBulk: true,
        defaultSelection: DefaultKhagatiStoresSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateKhagatiStoresInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteKhagatiStores,
      {
        type: "action",
        operationName: "deleteKhagatiStores",
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
          "bulkDeleteKhagatiStores",
          null,
          "khagatiStores",
          "khagatiStores",
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
        operationName: "bulkDeleteKhagatiStores",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "khagatiStores",
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
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultKhagatiStoresSelection,
  KhagatiStoresManager
});
//# sourceMappingURL=KhagatiStores.js.map
