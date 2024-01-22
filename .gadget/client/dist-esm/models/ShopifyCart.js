import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCartSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "note": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "token": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCart";
const pluralApiIdentifier = "shopifyCarts";
class ShopifyCartManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCart by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCart",
          id,
          DefaultShopifyCartSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCart",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCartSelection
      }
    );
    /**
    * Finds one shopifyCart by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCart",
          id,
          DefaultShopifyCartSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCart",
        modelApiIdentifier: "shopifyCart",
        defaultSelection: DefaultShopifyCartSelection
      }
    );
    /**
    * Finds many shopifyCart. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCarts",
          DefaultShopifyCartSelection,
          "shopifyCart",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCarts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCartSelection
      }
    );
    /**
    * Finds the first matching shopifyCart. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCarts",
          DefaultShopifyCartSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCarts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCartSelection
      }
    );
    /**
    * Finds the first matching shopifyCart. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCarts",
          DefaultShopifyCartSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCarts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCartSelection
      }
    );
    /**
    * Finds one shopifyCart by its token. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findByToken = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyCarts",
          "token",
          value,
          DefaultShopifyCartSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "token",
        operationName: "shopifyCarts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCartSelection
      }
    );
  }
}
export {
  DefaultShopifyCartSelection,
  ShopifyCartManager
};
//# sourceMappingURL=ShopifyCart.js.map
