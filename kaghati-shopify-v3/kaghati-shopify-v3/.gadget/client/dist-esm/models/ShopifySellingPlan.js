import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifySellingPlanSelection = {
  "__typename": true,
  "billingPolicy": true,
  "category": true,
  "createdAt": true,
  "deliveryPolicy": true,
  "description": true,
  "id": true,
  "inventoryPolicy": true,
  "name": true,
  "options": true,
  "position": true,
  "pricingPolicies": true,
  "shopifyCreatedAt": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifySellingPlan";
const pluralApiIdentifier = "shopifySellingPlans";
class ShopifySellingPlanManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifySellingPlan by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifySellingPlan",
          id,
          DefaultShopifySellingPlanSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlan",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanSelection
      }
    );
    /**
    * Finds one shopifySellingPlan by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifySellingPlan",
          id,
          DefaultShopifySellingPlanSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlan",
        modelApiIdentifier: "shopifySellingPlan",
        defaultSelection: DefaultShopifySellingPlanSelection
      }
    );
    /**
    * Finds many shopifySellingPlan. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifySellingPlans",
          DefaultShopifySellingPlanSelection,
          "shopifySellingPlan",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifySellingPlans",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlan. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlans",
          DefaultShopifySellingPlanSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifySellingPlans",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlan. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlans",
          DefaultShopifySellingPlanSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySellingPlans",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanSelection
      }
    );
  }
}
export {
  DefaultShopifySellingPlanSelection,
  ShopifySellingPlanManager
};
//# sourceMappingURL=ShopifySellingPlan.js.map
