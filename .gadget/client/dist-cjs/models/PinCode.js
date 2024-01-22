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
var PinCode_exports = {};
__export(PinCode_exports, {
  DefaultPinCodeSelection: () => DefaultPinCodeSelection,
  PinCodeManager: () => PinCodeManager
});
module.exports = __toCommonJS(PinCode_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultPinCodeSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "pincode": true,
  "storeId": true,
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
const apiIdentifier = "pinCode";
const pluralApiIdentifier = "pinCodes";
async function createPinCode(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createPinCode",
    DefaultPinCodeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "pinCode": {
        value: newVariables.pinCode,
        required: false,
        type: "CreatePinCodeInput"
      }
    },
    options,
    null,
    false
  );
}
async function updatePinCode(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updatePinCode",
    DefaultPinCodeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "pinCode": {
        value: newVariables.pinCode,
        required: false,
        type: "UpdatePinCodeInput"
      }
    },
    options,
    null,
    false
  );
}
async function deletePinCode(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deletePinCode",
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
class PinCodeManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one pinCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "pinCode",
          id,
          DefaultPinCodeSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "pinCode",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultPinCodeSelection
      }
    );
    /**
    * Finds one pinCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "pinCode",
          id,
          DefaultPinCodeSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "pinCode",
        modelApiIdentifier: "pinCode",
        defaultSelection: DefaultPinCodeSelection
      }
    );
    /**
    * Finds many pinCode. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "pinCodes",
          DefaultPinCodeSelection,
          "pinCode",
          options
        );
      },
      {
        type: "findMany",
        operationName: "pinCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultPinCodeSelection
      }
    );
    /**
    * Finds the first matching pinCode. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "pinCodes",
          DefaultPinCodeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "pinCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultPinCodeSelection
      }
    );
    /**
    * Finds the first matching pinCode. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "pinCodes",
          DefaultPinCodeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "pinCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultPinCodeSelection
      }
    );
    /**
    * Finds one pinCode by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "pinCodes",
          "id",
          value,
          DefaultPinCodeSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "pinCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultPinCodeSelection
      }
    );
    this.create = Object.assign(
      createPinCode,
      {
        type: "action",
        operationName: "createPinCode",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultPinCodeSelection,
        variables: {
          "pinCode": {
            required: false,
            type: "CreatePinCodeInput"
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
          "bulkCreatePinCodes",
          DefaultPinCodeSelection,
          "pinCode",
          "pinCodes",
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
        operationName: "bulkCreatePinCodes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "pinCodes",
        isBulk: true,
        defaultSelection: DefaultPinCodeSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreatePinCodesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updatePinCode,
      {
        type: "action",
        operationName: "updatePinCode",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultPinCodeSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "pinCode": {
            required: false,
            type: "UpdatePinCodeInput"
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
          "bulkUpdatePinCodes",
          DefaultPinCodeSelection,
          "pinCode",
          "pinCodes",
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
        operationName: "bulkUpdatePinCodes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "pinCodes",
        isBulk: true,
        defaultSelection: DefaultPinCodeSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdatePinCodesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deletePinCode,
      {
        type: "action",
        operationName: "deletePinCode",
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
          "bulkDeletePinCodes",
          null,
          "pinCode",
          "pinCodes",
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
        operationName: "bulkDeletePinCodes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "pinCodes",
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
  DefaultPinCodeSelection,
  PinCodeManager
});
//# sourceMappingURL=PinCode.js.map
