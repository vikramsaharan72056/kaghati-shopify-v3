import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyDutySelection = {
  "__typename": true,
  "countryCodeOfOrigin": true,
  "createdAt": true,
  "harmonizedSystemCode": true,
  "id": true,
  "presentmentMoney": true,
  "shopMoney": true,
  "taxLines": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyDuty";
const pluralApiIdentifier = "shopifyDuties";
class ShopifyDutyManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDuty",
          id,
          DefaultShopifyDutySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDuty",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDutySelection
      }
    );
    /**
    * Finds one shopifyDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDuty",
          id,
          DefaultShopifyDutySelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDuty",
        modelApiIdentifier: "shopifyDuty",
        defaultSelection: DefaultShopifyDutySelection
      }
    );
    /**
    * Finds many shopifyDuty. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDuties",
          DefaultShopifyDutySelection,
          "shopifyDuty",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDutySelection
      }
    );
    /**
    * Finds the first matching shopifyDuty. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDuties",
          DefaultShopifyDutySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDutySelection
      }
    );
    /**
    * Finds the first matching shopifyDuty. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDuties",
          DefaultShopifyDutySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDutySelection
      }
    );
  }
}
export {
  DefaultShopifyDutySelection,
  ShopifyDutyManager
};
//# sourceMappingURL=ShopifyDuty.js.map
