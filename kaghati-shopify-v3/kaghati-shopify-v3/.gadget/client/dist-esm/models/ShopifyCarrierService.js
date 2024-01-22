import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCarrierServiceSelection = {
  "__typename": true,
  "active": true,
  "callbackUrl": true,
  "carrierServiceType": true,
  "createdAt": true,
  "format": true,
  "id": true,
  "name": true,
  "serviceDiscovery": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCarrierService";
const pluralApiIdentifier = "shopifyCarrierServices";
class ShopifyCarrierServiceManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCarrierService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCarrierService",
          id,
          DefaultShopifyCarrierServiceSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCarrierService",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCarrierServiceSelection
      }
    );
    /**
    * Finds one shopifyCarrierService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCarrierService",
          id,
          DefaultShopifyCarrierServiceSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCarrierService",
        modelApiIdentifier: "shopifyCarrierService",
        defaultSelection: DefaultShopifyCarrierServiceSelection
      }
    );
    /**
    * Finds many shopifyCarrierService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCarrierServices",
          DefaultShopifyCarrierServiceSelection,
          "shopifyCarrierService",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCarrierServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCarrierServiceSelection
      }
    );
    /**
    * Finds the first matching shopifyCarrierService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCarrierServices",
          DefaultShopifyCarrierServiceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCarrierServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCarrierServiceSelection
      }
    );
    /**
    * Finds the first matching shopifyCarrierService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCarrierServices",
          DefaultShopifyCarrierServiceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCarrierServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCarrierServiceSelection
      }
    );
  }
}
export {
  DefaultShopifyCarrierServiceSelection,
  ShopifyCarrierServiceManager
};
//# sourceMappingURL=ShopifyCarrierService.js.map
