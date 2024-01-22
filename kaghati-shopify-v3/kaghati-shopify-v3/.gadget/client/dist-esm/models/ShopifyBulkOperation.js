import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyBulkOperationSelection = {
  "__typename": true,
  "completedAt": true,
  "createdAt": true,
  "errorCode": true,
  "fileSize": true,
  "id": true,
  "objectCount": true,
  "partialDataUrl": true,
  "query": true,
  "rootObjectCount": true,
  "state": true,
  "status": true,
  "type": true,
  "updatedAt": true,
  "url": true
};
;
;
;
;
;
const apiIdentifier = "shopifyBulkOperation";
const pluralApiIdentifier = "shopifyBulkOperations";
class ShopifyBulkOperationManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyBulkOperation",
          id,
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyBulkOperation",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyBulkOperation",
          id,
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyBulkOperation",
        modelApiIdentifier: "shopifyBulkOperation",
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds many shopifyBulkOperation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyBulkOperations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyBulkOperations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyBulkOperations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
  }
}
export {
  DefaultShopifyBulkOperationSelection,
  ShopifyBulkOperationManager
};
//# sourceMappingURL=ShopifyBulkOperation.js.map
