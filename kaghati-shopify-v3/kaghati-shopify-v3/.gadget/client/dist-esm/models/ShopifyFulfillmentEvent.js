import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyFulfillmentEventSelection = {
  "__typename": true,
  "address1": true,
  "city": true,
  "country": true,
  "createdAt": true,
  "estimatedDeliveryAt": true,
  "happenedAt": true,
  "id": true,
  "latitude": true,
  "longitude": true,
  "message": true,
  "province": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "updatedAt": true,
  "zipCode": true
};
;
;
;
;
;
const apiIdentifier = "shopifyFulfillmentEvent";
const pluralApiIdentifier = "shopifyFulfillmentEvents";
class ShopifyFulfillmentEventManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillmentEvent",
          id,
          DefaultShopifyFulfillmentEventSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentEvent",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentEventSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillmentEvent",
          id,
          DefaultShopifyFulfillmentEventSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentEvent",
        modelApiIdentifier: "shopifyFulfillmentEvent",
        defaultSelection: DefaultShopifyFulfillmentEventSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentEvent. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillmentEvents",
          DefaultShopifyFulfillmentEventSelection,
          "shopifyFulfillmentEvent",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentEvents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentEventSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentEvent. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentEvents",
          DefaultShopifyFulfillmentEventSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentEvents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentEventSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentEvent. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentEvents",
          DefaultShopifyFulfillmentEventSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentEvents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentEventSelection
      }
    );
  }
}
export {
  DefaultShopifyFulfillmentEventSelection,
  ShopifyFulfillmentEventManager
};
//# sourceMappingURL=ShopifyFulfillmentEvent.js.map
