import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyOrderTransactionSelection = {
  "__typename": true,
  "amount": true,
  "authorization": true,
  "authorizationExpiresAt": true,
  "createdAt": true,
  "currency": true,
  "errorCode": true,
  "extendedAuthorizationAttributes": true,
  "gateway": true,
  "id": true,
  "kind": true,
  "message": true,
  "paymentDetails": true,
  "paymentId": true,
  "paymentsRefundAttributes": true,
  "processedAt": true,
  "receipt": true,
  "shopifyCreatedAt": true,
  "sourceName": true,
  "status": true,
  "test": true,
  "totalUnsettledSet": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyOrderTransaction";
const pluralApiIdentifier = "shopifyOrderTransactions";
class ShopifyOrderTransactionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyOrderTransaction",
          id,
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyOrderTransaction",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyOrderTransaction",
          id,
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyOrderTransaction",
        modelApiIdentifier: "shopifyOrderTransaction",
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds many shopifyOrderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyOrderTransactions",
          DefaultShopifyOrderTransactionSelection,
          "shopifyOrderTransaction",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyOrderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderTransactions",
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyOrderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderTransactions",
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyOrderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
  }
}
export {
  DefaultShopifyOrderTransactionSelection,
  ShopifyOrderTransactionManager
};
//# sourceMappingURL=ShopifyOrderTransaction.js.map
