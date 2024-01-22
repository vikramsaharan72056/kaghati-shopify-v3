import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyDraftOrderSelection = {
  "__typename": true,
  "appliedDiscount": true,
  "billingAddress": true,
  "completedAt": true,
  "createdAt": true,
  "currency": true,
  "email": true,
  "id": true,
  "invoiceSentAt": true,
  "invoiceUrl": true,
  "name": true,
  "note": true,
  "noteAttributes": true,
  "order": true,
  "poNumber": true,
  "shippingAddress": true,
  "shippingLine": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "subtotalPrice": true,
  "tags": true,
  "taxExempt": true,
  "taxExemptions": true,
  "taxLines": true,
  "taxesIncluded": true,
  "totalPrice": true,
  "totalTax": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyDraftOrder";
const pluralApiIdentifier = "shopifyDraftOrders";
class ShopifyDraftOrderManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDraftOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDraftOrder",
          id,
          DefaultShopifyDraftOrderSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDraftOrder",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderSelection
      }
    );
    /**
    * Finds one shopifyDraftOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDraftOrder",
          id,
          DefaultShopifyDraftOrderSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDraftOrder",
        modelApiIdentifier: "shopifyDraftOrder",
        defaultSelection: DefaultShopifyDraftOrderSelection
      }
    );
    /**
    * Finds many shopifyDraftOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDraftOrders",
          DefaultShopifyDraftOrderSelection,
          "shopifyDraftOrder",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDraftOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyDraftOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDraftOrders",
          DefaultShopifyDraftOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDraftOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyDraftOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDraftOrders",
          DefaultShopifyDraftOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDraftOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderSelection
      }
    );
  }
}
export {
  DefaultShopifyDraftOrderSelection,
  ShopifyDraftOrderManager
};
//# sourceMappingURL=ShopifyDraftOrder.js.map
