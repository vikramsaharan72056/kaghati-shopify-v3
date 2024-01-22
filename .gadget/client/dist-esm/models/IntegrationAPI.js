import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultIntegrationAPISelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
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
const apiIdentifier = "integrationAPI";
const pluralApiIdentifier = "integrationAPIs";
async function createIntegrationAPI(options) {
  return await actionRunner(
    this,
    "createIntegrationAPI",
    DefaultIntegrationAPISelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {},
    options,
    null,
    false
  );
}
async function updateIntegrationAPI(id, options) {
  return await actionRunner(
    this,
    "updateIntegrationAPI",
    DefaultIntegrationAPISelection,
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
async function deleteIntegrationAPI(id, options) {
  return await actionRunner(
    this,
    "deleteIntegrationAPI",
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
class IntegrationAPIManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one integrationAPI by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "integrationAPI",
          id,
          DefaultIntegrationAPISelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "integrationAPI",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultIntegrationAPISelection
      }
    );
    /**
    * Finds one integrationAPI by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "integrationAPI",
          id,
          DefaultIntegrationAPISelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "integrationAPI",
        modelApiIdentifier: "integrationAPI",
        defaultSelection: DefaultIntegrationAPISelection
      }
    );
    /**
    * Finds many integrationAPI. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "integrationAPIs",
          DefaultIntegrationAPISelection,
          "integrationAPI",
          options
        );
      },
      {
        type: "findMany",
        operationName: "integrationAPIs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultIntegrationAPISelection
      }
    );
    /**
    * Finds the first matching integrationAPI. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "integrationAPIs",
          DefaultIntegrationAPISelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "integrationAPIs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultIntegrationAPISelection
      }
    );
    /**
    * Finds the first matching integrationAPI. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "integrationAPIs",
          DefaultIntegrationAPISelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "integrationAPIs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultIntegrationAPISelection
      }
    );
    /**
    * Finds one integrationAPI by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "integrationAPIs",
          "id",
          value,
          DefaultIntegrationAPISelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "integrationAPIs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultIntegrationAPISelection
      }
    );
    this.create = Object.assign(
      createIntegrationAPI,
      {
        type: "action",
        operationName: "createIntegrationAPI",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultIntegrationAPISelection,
        variables: {},
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkCreateIntegrationAPIs",
          DefaultIntegrationAPISelection,
          "integrationAPI",
          "integrationAPIs",
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
        operationName: "bulkCreateIntegrationAPIs",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "integrationAPIs",
        isBulk: true,
        defaultSelection: DefaultIntegrationAPISelection,
        variables: {
          inputs: {
            required: true,
            type: "[JSON!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    this.update = Object.assign(
      updateIntegrationAPI,
      {
        type: "action",
        operationName: "updateIntegrationAPI",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultIntegrationAPISelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkUpdateIntegrationAPIs",
          DefaultIntegrationAPISelection,
          "integrationAPI",
          "integrationAPIs",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkUpdate"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateIntegrationAPIs",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "integrationAPIs",
        isBulk: true,
        defaultSelection: DefaultIntegrationAPISelection,
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
    this.delete = Object.assign(
      deleteIntegrationAPI,
      {
        type: "action",
        operationName: "deleteIntegrationAPI",
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
        return await actionRunner(
          this,
          "bulkDeleteIntegrationAPIs",
          null,
          "integrationAPI",
          "integrationAPIs",
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
        operationName: "bulkDeleteIntegrationAPIs",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "integrationAPIs",
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
export {
  DefaultIntegrationAPISelection,
  IntegrationAPIManager
};
//# sourceMappingURL=IntegrationAPI.js.map
