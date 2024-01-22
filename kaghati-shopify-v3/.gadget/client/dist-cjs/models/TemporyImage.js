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
var TemporyImage_exports = {};
__export(TemporyImage_exports, {
  DefaultTemporyImageSelection: () => DefaultTemporyImageSelection,
  TemporyImageManager: () => TemporyImageManager
});
module.exports = __toCommonJS(TemporyImage_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultTemporyImageSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "src": {
    "mimeType": true,
    "url": true
  },
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
const apiIdentifier = "temporyImage";
const pluralApiIdentifier = "temporyImages";
async function createTemporyImage(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createTemporyImage",
    DefaultTemporyImageSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "temporyImage": {
        value: newVariables.temporyImage,
        required: false,
        type: "CreateTemporyImageInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateTemporyImage(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateTemporyImage",
    DefaultTemporyImageSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "temporyImage": {
        value: newVariables.temporyImage,
        required: false,
        type: "UpdateTemporyImageInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteTemporyImage(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteTemporyImage",
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
class TemporyImageManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one temporyImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "temporyImage",
          id,
          DefaultTemporyImageSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "temporyImage",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultTemporyImageSelection
      }
    );
    /**
    * Finds one temporyImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "temporyImage",
          id,
          DefaultTemporyImageSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "temporyImage",
        modelApiIdentifier: "temporyImage",
        defaultSelection: DefaultTemporyImageSelection
      }
    );
    /**
    * Finds many temporyImage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "temporyImages",
          DefaultTemporyImageSelection,
          "temporyImage",
          options
        );
      },
      {
        type: "findMany",
        operationName: "temporyImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultTemporyImageSelection
      }
    );
    /**
    * Finds the first matching temporyImage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "temporyImages",
          DefaultTemporyImageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "temporyImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultTemporyImageSelection
      }
    );
    /**
    * Finds the first matching temporyImage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "temporyImages",
          DefaultTemporyImageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "temporyImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultTemporyImageSelection
      }
    );
    /**
    * Finds one temporyImage by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "temporyImages",
          "id",
          value,
          DefaultTemporyImageSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "temporyImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultTemporyImageSelection
      }
    );
    this.create = Object.assign(
      createTemporyImage,
      {
        type: "action",
        operationName: "createTemporyImage",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultTemporyImageSelection,
        variables: {
          "temporyImage": {
            required: false,
            type: "CreateTemporyImageInput"
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
          "bulkCreateTemporyImages",
          DefaultTemporyImageSelection,
          "temporyImage",
          "temporyImages",
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
        operationName: "bulkCreateTemporyImages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "temporyImages",
        isBulk: true,
        defaultSelection: DefaultTemporyImageSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateTemporyImagesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateTemporyImage,
      {
        type: "action",
        operationName: "updateTemporyImage",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultTemporyImageSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "temporyImage": {
            required: false,
            type: "UpdateTemporyImageInput"
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
          "bulkUpdateTemporyImages",
          DefaultTemporyImageSelection,
          "temporyImage",
          "temporyImages",
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
        operationName: "bulkUpdateTemporyImages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "temporyImages",
        isBulk: true,
        defaultSelection: DefaultTemporyImageSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateTemporyImagesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteTemporyImage,
      {
        type: "action",
        operationName: "deleteTemporyImage",
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
          "bulkDeleteTemporyImages",
          null,
          "temporyImage",
          "temporyImages",
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
        operationName: "bulkDeleteTemporyImages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "temporyImages",
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
  DefaultTemporyImageSelection,
  TemporyImageManager
});
//# sourceMappingURL=TemporyImage.js.map
