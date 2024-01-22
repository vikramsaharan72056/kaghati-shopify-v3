import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCustomerMergeableSelection = {
  "__typename": true,
  "createdAt": true,
  "errorFields": true,
  "id": true,
  "isMergeable": true,
  "mergeInProgress": true,
  "reason": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCustomerMergeable";
const pluralApiIdentifier = "shopifyCustomerMergeables";
class ShopifyCustomerMergeableManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCustomerMergeable by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCustomerMergeable",
          id,
          DefaultShopifyCustomerMergeableSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerMergeable",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerMergeableSelection
      }
    );
    /**
    * Finds one shopifyCustomerMergeable by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCustomerMergeable",
          id,
          DefaultShopifyCustomerMergeableSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerMergeable",
        modelApiIdentifier: "shopifyCustomerMergeable",
        defaultSelection: DefaultShopifyCustomerMergeableSelection
      }
    );
    /**
    * Finds many shopifyCustomerMergeable. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCustomerMergeables",
          DefaultShopifyCustomerMergeableSelection,
          "shopifyCustomerMergeable",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCustomerMergeables",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerMergeableSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomerMergeable. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomerMergeables",
          DefaultShopifyCustomerMergeableSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCustomerMergeables",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerMergeableSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomerMergeable. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomerMergeables",
          DefaultShopifyCustomerMergeableSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCustomerMergeables",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerMergeableSelection
      }
    );
  }
}
export {
  DefaultShopifyCustomerMergeableSelection,
  ShopifyCustomerMergeableManager
};
//# sourceMappingURL=ShopifyCustomerMergeable.js.map
