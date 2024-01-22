import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyThemeSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "previewable": true,
  "processing": true,
  "role": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "themeStoreId": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyTheme";
const pluralApiIdentifier = "shopifyThemes";
class ShopifyThemeManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyTheme by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyTheme",
          id,
          DefaultShopifyThemeSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyTheme",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyThemeSelection
      }
    );
    /**
    * Finds one shopifyTheme by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyTheme",
          id,
          DefaultShopifyThemeSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyTheme",
        modelApiIdentifier: "shopifyTheme",
        defaultSelection: DefaultShopifyThemeSelection
      }
    );
    /**
    * Finds many shopifyTheme. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyThemes",
          DefaultShopifyThemeSelection,
          "shopifyTheme",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyThemes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyThemeSelection
      }
    );
    /**
    * Finds the first matching shopifyTheme. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyThemes",
          DefaultShopifyThemeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyThemes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyThemeSelection
      }
    );
    /**
    * Finds the first matching shopifyTheme. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyThemes",
          DefaultShopifyThemeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyThemes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyThemeSelection
      }
    );
  }
}
export {
  DefaultShopifyThemeSelection,
  ShopifyThemeManager
};
//# sourceMappingURL=ShopifyTheme.js.map
