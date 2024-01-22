import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifySellingPlanGroupProductVariantSelection = {
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
const apiIdentifier = "shopifySellingPlanGroupProductVariant";
const pluralApiIdentifier = "shopifySellingPlanGroupProductVariants";
class ShopifySellingPlanGroupProductVariantManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifySellingPlanGroupProductVariant by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifySellingPlanGroupProductVariant",
          id,
          DefaultShopifySellingPlanGroupProductVariantSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlanGroupProductVariant",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection
      }
    );
    /**
    * Finds one shopifySellingPlanGroupProductVariant by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifySellingPlanGroupProductVariant",
          id,
          DefaultShopifySellingPlanGroupProductVariantSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlanGroupProductVariant",
        modelApiIdentifier: "shopifySellingPlanGroupProductVariant",
        defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection
      }
    );
    /**
    * Finds many shopifySellingPlanGroupProductVariant. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifySellingPlanGroupProductVariants",
          DefaultShopifySellingPlanGroupProductVariantSelection,
          "shopifySellingPlanGroupProductVariant",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifySellingPlanGroupProductVariants",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlanGroupProductVariant. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlanGroupProductVariants",
          DefaultShopifySellingPlanGroupProductVariantSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifySellingPlanGroupProductVariants",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlanGroupProductVariant. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlanGroupProductVariants",
          DefaultShopifySellingPlanGroupProductVariantSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySellingPlanGroupProductVariants",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection
      }
    );
  }
}
export {
  DefaultShopifySellingPlanGroupProductVariantSelection,
  ShopifySellingPlanGroupProductVariantManager
};
//# sourceMappingURL=ShopifySellingPlanGroupProductVariant.js.map
