import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifySellingPlanGroupProductSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "state": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifySellingPlanGroupProduct";
const pluralApiIdentifier = "shopifySellingPlanGroupProducts";
class ShopifySellingPlanGroupProductManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifySellingPlanGroupProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifySellingPlanGroupProduct",
          id,
          DefaultShopifySellingPlanGroupProductSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlanGroupProduct",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductSelection
      }
    );
    /**
    * Finds one shopifySellingPlanGroupProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifySellingPlanGroupProduct",
          id,
          DefaultShopifySellingPlanGroupProductSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlanGroupProduct",
        modelApiIdentifier: "shopifySellingPlanGroupProduct",
        defaultSelection: DefaultShopifySellingPlanGroupProductSelection
      }
    );
    /**
    * Finds many shopifySellingPlanGroupProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifySellingPlanGroupProducts",
          DefaultShopifySellingPlanGroupProductSelection,
          "shopifySellingPlanGroupProduct",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifySellingPlanGroupProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlanGroupProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlanGroupProducts",
          DefaultShopifySellingPlanGroupProductSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifySellingPlanGroupProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlanGroupProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlanGroupProducts",
          DefaultShopifySellingPlanGroupProductSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySellingPlanGroupProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductSelection
      }
    );
  }
}
export {
  DefaultShopifySellingPlanGroupProductSelection,
  ShopifySellingPlanGroupProductManager
};
//# sourceMappingURL=ShopifySellingPlanGroupProduct.js.map
