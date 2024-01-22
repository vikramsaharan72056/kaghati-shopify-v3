import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCustomerSelection = {
  "__typename": true,
  "acceptsMarketing": true,
  "acceptsMarketingUpdatedAt": true,
  "createdAt": true,
  "currency": true,
  "email": true,
  "emailMarketingConsent": true,
  "firstName": true,
  "id": true,
  "lastName": true,
  "lastOrderName": true,
  "marketingOptInLevel": true,
  "metafield": true,
  "multipassIdentifier": true,
  "note": true,
  "ordersCount": true,
  "phone": true,
  "shopifyCreatedAt": true,
  "shopifyState": true,
  "shopifyUpdatedAt": true,
  "smsMarketingConsent": true,
  "statistics": true,
  "tags": true,
  "taxExempt": true,
  "taxExemptions": true,
  "totalSpent": true,
  "updatedAt": true,
  "verifiedEmail": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCustomer";
const pluralApiIdentifier = "shopifyCustomers";
class ShopifyCustomerManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCustomer by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCustomer",
          id,
          DefaultShopifyCustomerSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCustomer",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerSelection
      }
    );
    /**
    * Finds one shopifyCustomer by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCustomer",
          id,
          DefaultShopifyCustomerSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCustomer",
        modelApiIdentifier: "shopifyCustomer",
        defaultSelection: DefaultShopifyCustomerSelection
      }
    );
    /**
    * Finds many shopifyCustomer. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCustomers",
          DefaultShopifyCustomerSelection,
          "shopifyCustomer",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCustomers",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomer. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomers",
          DefaultShopifyCustomerSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCustomers",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomer. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomers",
          DefaultShopifyCustomerSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCustomers",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerSelection
      }
    );
  }
}
export {
  DefaultShopifyCustomerSelection,
  ShopifyCustomerManager
};
//# sourceMappingURL=ShopifyCustomer.js.map
