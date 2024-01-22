import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCountrySelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "tax": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCountry";
const pluralApiIdentifier = "shopifyCountries";
class ShopifyCountryManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCountry by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCountry",
          id,
          DefaultShopifyCountrySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCountry",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCountrySelection
      }
    );
    /**
    * Finds one shopifyCountry by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCountry",
          id,
          DefaultShopifyCountrySelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCountry",
        modelApiIdentifier: "shopifyCountry",
        defaultSelection: DefaultShopifyCountrySelection
      }
    );
    /**
    * Finds many shopifyCountry. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCountries",
          DefaultShopifyCountrySelection,
          "shopifyCountry",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCountries",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCountrySelection
      }
    );
    /**
    * Finds the first matching shopifyCountry. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCountries",
          DefaultShopifyCountrySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCountries",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCountrySelection
      }
    );
    /**
    * Finds the first matching shopifyCountry. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCountries",
          DefaultShopifyCountrySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCountries",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCountrySelection
      }
    );
  }
}
export {
  DefaultShopifyCountrySelection,
  ShopifyCountryManager
};
//# sourceMappingURL=ShopifyCountry.js.map
