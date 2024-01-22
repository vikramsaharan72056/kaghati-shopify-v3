import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCustomerPaymentMethodSelection = {
  "__typename": true,
  "adminGraphqlApiId": true,
  "createdAt": true,
  "id": true,
  "instrument": true,
  "revokedAt": true,
  "revokedReason": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCustomerPaymentMethod";
const pluralApiIdentifier = "shopifyCustomerPaymentMethods";
class ShopifyCustomerPaymentMethodManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCustomerPaymentMethod by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCustomerPaymentMethod",
          id,
          DefaultShopifyCustomerPaymentMethodSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerPaymentMethod",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerPaymentMethodSelection
      }
    );
    /**
    * Finds one shopifyCustomerPaymentMethod by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCustomerPaymentMethod",
          id,
          DefaultShopifyCustomerPaymentMethodSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerPaymentMethod",
        modelApiIdentifier: "shopifyCustomerPaymentMethod",
        defaultSelection: DefaultShopifyCustomerPaymentMethodSelection
      }
    );
    /**
    * Finds many shopifyCustomerPaymentMethod. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCustomerPaymentMethods",
          DefaultShopifyCustomerPaymentMethodSelection,
          "shopifyCustomerPaymentMethod",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCustomerPaymentMethods",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerPaymentMethodSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomerPaymentMethod. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomerPaymentMethods",
          DefaultShopifyCustomerPaymentMethodSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCustomerPaymentMethods",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerPaymentMethodSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomerPaymentMethod. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomerPaymentMethods",
          DefaultShopifyCustomerPaymentMethodSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCustomerPaymentMethods",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerPaymentMethodSelection
      }
    );
    /**
    * Finds one shopifyCustomerPaymentMethod by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyCustomerPaymentMethods",
          "id",
          value,
          DefaultShopifyCustomerPaymentMethodSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerPaymentMethods",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerPaymentMethodSelection
      }
    );
  }
}
export {
  DefaultShopifyCustomerPaymentMethodSelection,
  ShopifyCustomerPaymentMethodManager
};
//# sourceMappingURL=ShopifyCustomerPaymentMethod.js.map
