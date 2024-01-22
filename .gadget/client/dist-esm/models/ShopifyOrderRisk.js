import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyOrderRiskSelection = {
  "__typename": true,
  "causeCancel": true,
  "createdAt": true,
  "display": true,
  "id": true,
  "merchantMessage": true,
  "message": true,
  "recommendation": true,
  "score": true,
  "source": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyOrderRisk";
const pluralApiIdentifier = "shopifyOrderRisks";
class ShopifyOrderRiskManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyOrderRisk by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyOrderRisk",
          id,
          DefaultShopifyOrderRiskSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyOrderRisk",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderRiskSelection
      }
    );
    /**
    * Finds one shopifyOrderRisk by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyOrderRisk",
          id,
          DefaultShopifyOrderRiskSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyOrderRisk",
        modelApiIdentifier: "shopifyOrderRisk",
        defaultSelection: DefaultShopifyOrderRiskSelection
      }
    );
    /**
    * Finds many shopifyOrderRisk. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyOrderRisks",
          DefaultShopifyOrderRiskSelection,
          "shopifyOrderRisk",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyOrderRisks",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderRiskSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderRisk. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderRisks",
          DefaultShopifyOrderRiskSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyOrderRisks",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderRiskSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderRisk. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderRisks",
          DefaultShopifyOrderRiskSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyOrderRisks",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderRiskSelection
      }
    );
  }
}
export {
  DefaultShopifyOrderRiskSelection,
  ShopifyOrderRiskManager
};
//# sourceMappingURL=ShopifyOrderRisk.js.map
