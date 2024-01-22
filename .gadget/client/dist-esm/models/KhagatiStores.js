import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
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
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
  return await actionRunner(
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "khagatiStoress",
          DefaultKhagatiStoresSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
        return await findOneByFieldRunner(
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
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
        return await actionRunner(
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
export {
  DefaultKhagatiStoresSelection,
  KhagatiStoresManager
};
//# sourceMappingURL=KhagatiStores.js.map
