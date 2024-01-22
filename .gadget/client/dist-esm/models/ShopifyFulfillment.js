import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyFulfillmentSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "notifyCustomer": true,
  "originAddress": true,
  "receipt": true,
  "service": true,
  "shipmentStatus": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "trackingCompany": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true,
  "variantInventoryManagement": true
};
;
;
;
;
;
const apiIdentifier = "shopifyFulfillment";
const pluralApiIdentifier = "shopifyFulfillments";
class ShopifyFulfillmentManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillment",
          id,
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillment",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillment",
          id,
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillment",
        modelApiIdentifier: "shopifyFulfillment",
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds many shopifyFulfillment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
  }
}
export {
  DefaultShopifyFulfillmentSelection,
  ShopifyFulfillmentManager
};
//# sourceMappingURL=ShopifyFulfillment.js.map
