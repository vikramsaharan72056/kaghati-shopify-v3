import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyFulfillmentServiceSelection = {
  "__typename": true,
  "callbackUrl": true,
  "createdAt": true,
  "format": true,
  "fulfillmentOrdersOptIn": true,
  "handle": true,
  "id": true,
  "inventoryManagement": true,
  "name": true,
  "permitsSkuSharing": true,
  "requiresShippingMethod": true,
  "trackingSupport": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyFulfillmentService";
const pluralApiIdentifier = "shopifyFulfillmentServices";
class ShopifyFulfillmentServiceManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillmentService",
          id,
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentService",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillmentService",
          id,
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentService",
        modelApiIdentifier: "shopifyFulfillmentService",
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          "shopifyFulfillmentService",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
  }
}
export {
  DefaultShopifyFulfillmentServiceSelection,
  ShopifyFulfillmentServiceManager
};
//# sourceMappingURL=ShopifyFulfillmentService.js.map
