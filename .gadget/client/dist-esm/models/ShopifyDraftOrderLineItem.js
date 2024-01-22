import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyDraftOrderLineItemSelection = {
  "__typename": true,
  "appliedDiscount": true,
  "createdAt": true,
  "fulfillmentService": true,
  "giftCard": true,
  "grams": true,
  "id": true,
  "name": true,
  "price": true,
  "properties": true,
  "quantity": true,
  "requiresShipping": true,
  "sku": true,
  "taxLines": true,
  "taxable": true,
  "title": true,
  "updatedAt": true,
  "variantTitle": true,
  "vendor": true
};
;
;
;
;
;
const apiIdentifier = "shopifyDraftOrderLineItem";
const pluralApiIdentifier = "shopifyDraftOrderLineItems";
class ShopifyDraftOrderLineItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDraftOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDraftOrderLineItem",
          id,
          DefaultShopifyDraftOrderLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDraftOrderLineItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderLineItemSelection
      }
    );
    /**
    * Finds one shopifyDraftOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDraftOrderLineItem",
          id,
          DefaultShopifyDraftOrderLineItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDraftOrderLineItem",
        modelApiIdentifier: "shopifyDraftOrderLineItem",
        defaultSelection: DefaultShopifyDraftOrderLineItemSelection
      }
    );
    /**
    * Finds many shopifyDraftOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDraftOrderLineItems",
          DefaultShopifyDraftOrderLineItemSelection,
          "shopifyDraftOrderLineItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDraftOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyDraftOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDraftOrderLineItems",
          DefaultShopifyDraftOrderLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDraftOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyDraftOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDraftOrderLineItems",
          DefaultShopifyDraftOrderLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDraftOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDraftOrderLineItemSelection
      }
    );
  }
}
export {
  DefaultShopifyDraftOrderLineItemSelection,
  ShopifyDraftOrderLineItemManager
};
//# sourceMappingURL=ShopifyDraftOrderLineItem.js.map
