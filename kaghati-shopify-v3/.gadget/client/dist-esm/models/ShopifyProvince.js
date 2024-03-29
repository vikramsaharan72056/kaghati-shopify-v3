import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyProvinceSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "tax": true,
  "taxName": true,
  "taxPercentage": true,
  "taxType": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyProvince";
const pluralApiIdentifier = "shopifyProvinces";
class ShopifyProvinceManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyProvince by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyProvince",
          id,
          DefaultShopifyProvinceSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProvince",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProvinceSelection
      }
    );
    /**
    * Finds one shopifyProvince by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyProvince",
          id,
          DefaultShopifyProvinceSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProvince",
        modelApiIdentifier: "shopifyProvince",
        defaultSelection: DefaultShopifyProvinceSelection
      }
    );
    /**
    * Finds many shopifyProvince. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyProvinces",
          DefaultShopifyProvinceSelection,
          "shopifyProvince",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyProvinces",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProvinceSelection
      }
    );
    /**
    * Finds the first matching shopifyProvince. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProvinces",
          DefaultShopifyProvinceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyProvinces",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProvinceSelection
      }
    );
    /**
    * Finds the first matching shopifyProvince. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProvinces",
          DefaultShopifyProvinceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProvinces",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProvinceSelection
      }
    );
  }
}
export {
  DefaultShopifyProvinceSelection,
  ShopifyProvinceManager
};
//# sourceMappingURL=ShopifyProvince.js.map
