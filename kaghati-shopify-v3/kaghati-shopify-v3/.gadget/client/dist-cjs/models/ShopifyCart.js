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
var ShopifyCart_exports = {};
__export(ShopifyCart_exports, {
  DefaultShopifyCartSelection: () => DefaultShopifyCartSelection,
  ShopifyCartManager: () => ShopifyCartManager
});
module.exports = __toCommonJS(ShopifyCart_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
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
        return await (0, import_api_client_core.findOneRunner)(
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
        const record = await (0, import_api_client_core.findOneRunner)(
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
        return await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyCarts",
          DefaultShopifyCartSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
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
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyCartSelection,
  ShopifyCartManager
});
//# sourceMappingURL=ShopifyCart.js.map
