"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyOrderTransaction_exports = {};
__export(ShopifyOrderTransaction_exports, {
  DefaultShopifyOrderTransactionSelection: () => DefaultShopifyOrderTransactionSelection,
  ShopifyOrderTransactionManager: () => ShopifyOrderTransactionManager
});
module.exports = __toCommonJS(ShopifyOrderTransaction_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultShopifyOrderTransactionSelection = {
  "__typename": true,
  "amount": true,
  "authorization": true,
  "authorizationExpiresAt": true,
  "createdAt": true,
  "currency": true,
  "errorCode": true,
  "extendedAuthorizationAttributes": true,
  "gateway": true,
  "id": true,
  "kind": true,
  "message": true,
  "paymentDetails": true,
  "paymentId": true,
  "paymentsRefundAttributes": true,
  "processedAt": true,
  "receipt": true,
  "shopifyCreatedAt": true,
  "sourceName": true,
  "status": true,
  "test": true,
  "totalUnsettledSet": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyOrderTransaction";
const pluralApiIdentifier = "shopifyOrderTransactions";
class ShopifyOrderTransactionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyOrderTransaction",
          id,
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyOrderTransaction",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyOrderTransaction",
          id,
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyOrderTransaction",
        modelApiIdentifier: "shopifyOrderTransaction",
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds many shopifyOrderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyOrderTransactions",
          DefaultShopifyOrderTransactionSelection,
          "shopifyOrderTransaction",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyOrderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyOrderTransactions",
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyOrderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyOrderTransactions",
          DefaultShopifyOrderTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyOrderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderTransactionSelection
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyOrderTransactionSelection,
  ShopifyOrderTransactionManager
});
//# sourceMappingURL=ShopifyOrderTransaction.js.map
