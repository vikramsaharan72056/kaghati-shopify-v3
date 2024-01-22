import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCustomerAddressSelection = {
  "__typename": true,
  "address1": true,
  "address2": true,
  "city": true,
  "company": true,
  "country": true,
  "countryCode": true,
  "countryName": true,
  "createdAt": true,
  "firstName": true,
  "id": true,
  "lastName": true,
  "name": true,
  "phone": true,
  "province": true,
  "provinceCode": true,
  "updatedAt": true,
  "zipCode": true
};
;
;
;
;
;
const apiIdentifier = "shopifyCustomerAddress";
const pluralApiIdentifier = "shopifyCustomerAddresses";
class ShopifyCustomerAddressManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCustomerAddress by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCustomerAddress",
          id,
          DefaultShopifyCustomerAddressSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerAddress",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerAddressSelection
      }
    );
    /**
    * Finds one shopifyCustomerAddress by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCustomerAddress",
          id,
          DefaultShopifyCustomerAddressSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCustomerAddress",
        modelApiIdentifier: "shopifyCustomerAddress",
        defaultSelection: DefaultShopifyCustomerAddressSelection
      }
    );
    /**
    * Finds many shopifyCustomerAddress. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCustomerAddresses",
          DefaultShopifyCustomerAddressSelection,
          "shopifyCustomerAddress",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCustomerAddresses",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerAddressSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomerAddress. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomerAddresses",
          DefaultShopifyCustomerAddressSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCustomerAddresses",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerAddressSelection
      }
    );
    /**
    * Finds the first matching shopifyCustomerAddress. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCustomerAddresses",
          DefaultShopifyCustomerAddressSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCustomerAddresses",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCustomerAddressSelection
      }
    );
  }
}
export {
  DefaultShopifyCustomerAddressSelection,
  ShopifyCustomerAddressManager
};
//# sourceMappingURL=ShopifyCustomerAddress.js.map
