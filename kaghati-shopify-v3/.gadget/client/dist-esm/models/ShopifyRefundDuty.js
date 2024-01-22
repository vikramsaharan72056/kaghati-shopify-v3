import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyRefundDutySelection = {
  "__typename": true,
  "amountSet": true,
  "createdAt": true,
  "id": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyRefundDuty";
const pluralApiIdentifier = "shopifyRefundDuties";
class ShopifyRefundDutyManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyRefundDuty",
          id,
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefundDuty",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyRefundDuty",
          id,
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyRefundDuty",
        modelApiIdentifier: "shopifyRefundDuty",
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds many shopifyRefundDuty. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          "shopifyRefundDuty",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds one shopifyRefundDuty by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyRefundDuties",
          "id",
          value,
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
  }
}
export {
  DefaultShopifyRefundDutySelection,
  ShopifyRefundDutyManager
};
//# sourceMappingURL=ShopifyRefundDuty.js.map
