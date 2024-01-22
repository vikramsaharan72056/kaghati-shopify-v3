import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifySellingPlanGroupSelection = {
  "__typename": true,
  "appId": true,
  "createdAt": true,
  "description": true,
  "id": true,
  "merchantCode": true,
  "name": true,
  "options": true,
  "position": true,
  "shopifyCreatedAt": true,
  "summary": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifySellingPlanGroup";
const pluralApiIdentifier = "shopifySellingPlanGroups";
class ShopifySellingPlanGroupManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifySellingPlanGroup by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifySellingPlanGroup",
          id,
          DefaultShopifySellingPlanGroupSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlanGroup",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupSelection
      }
    );
    /**
    * Finds one shopifySellingPlanGroup by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifySellingPlanGroup",
          id,
          DefaultShopifySellingPlanGroupSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySellingPlanGroup",
        modelApiIdentifier: "shopifySellingPlanGroup",
        defaultSelection: DefaultShopifySellingPlanGroupSelection
      }
    );
    /**
    * Finds many shopifySellingPlanGroup. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifySellingPlanGroups",
          DefaultShopifySellingPlanGroupSelection,
          "shopifySellingPlanGroup",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifySellingPlanGroups",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlanGroup. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlanGroups",
          DefaultShopifySellingPlanGroupSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifySellingPlanGroups",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupSelection
      }
    );
    /**
    * Finds the first matching shopifySellingPlanGroup. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySellingPlanGroups",
          DefaultShopifySellingPlanGroupSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySellingPlanGroups",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySellingPlanGroupSelection
      }
    );
  }
}
export {
  DefaultShopifySellingPlanGroupSelection,
  ShopifySellingPlanGroupManager
};
//# sourceMappingURL=ShopifySellingPlanGroup.js.map
