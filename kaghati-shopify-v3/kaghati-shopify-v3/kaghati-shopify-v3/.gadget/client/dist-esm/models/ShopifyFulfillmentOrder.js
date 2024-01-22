import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyFulfillmentOrderSelection = {
  "__typename": true,
  "assignedLocation": true,
  "createdAt": true,
  "deliveryMethod": true,
  "destination": true,
  "fulfillAt": true,
  "fulfillBy": true,
  "fulfillmentHolds": true,
  "id": true,
  "internationalDuties": true,
  "merchantRequests": true,
  "requestStatus": true,
  "status": true,
  "supportedActions": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyFulfillmentOrder";
const pluralApiIdentifier = "shopifyFulfillmentOrders";
class ShopifyFulfillmentOrderManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillmentOrder",
          id,
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentOrder",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillmentOrder",
          id,
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentOrder",
        modelApiIdentifier: "shopifyFulfillmentOrder",
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          "shopifyFulfillmentOrder",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
  }
}
export {
  DefaultShopifyFulfillmentOrderSelection,
  ShopifyFulfillmentOrderManager
};
//# sourceMappingURL=ShopifyFulfillmentOrder.js.map
