import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyRefundSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "note": true,
  "processedAt": true,
  "restock": true,
  "shopifyCreatedAt": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyRefund";
const pluralApiIdentifier = "shopifyRefunds";
class ShopifyRefundManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyRefund",
          id,
          DefaultShopifyRefundSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefund",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyRefund",
          id,
          DefaultShopifyRefundSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyRefund",
        modelApiIdentifier: "shopifyRefund",
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds many shopifyRefund. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          "shopifyRefund",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
  }
}
export {
  DefaultShopifyRefundSelection,
  ShopifyRefundManager
};
//# sourceMappingURL=ShopifyRefund.js.map
