import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      ShopifyCustomer,
      ShopifyCustomerSort,
      ShopifyCustomerFilter,
      AvailableShopifyCustomerSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCustomerSelection = {
  "__typename": true,
  "acceptsMarketing": true,
  "acceptsMarketingUpdatedAt": true,
  "createdAt": true,
  "currency": true,
  "email": true,
  "emailMarketingConsent": true,
  "firstName": true,
  "id": true,
  "lastName": true,
  "lastOrderName": true,
  "marketingOptInLevel": true,
  "metafield": true,
  "multipassIdentifier": true,
  "note": true,
  "ordersCount": true,
  "phone": true,
  "shopifyCreatedAt": true,
  "shopifyState": true,
  "shopifyUpdatedAt": true,
  "smsMarketingConsent": true,
  "statistics": true,
  "tags": true,
  "taxExempt": true,
  "taxExemptions": true,
  "totalSpent": true,
  "updatedAt": true,
  "verifiedEmail": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomer". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerOrDefault<Options extends Selectable<AvailableShopifyCustomerSelection>> = DeepFilterNever<
  Select<
    ShopifyCustomer,
    DefaultSelection<
      AvailableShopifyCustomerSelection,
      Options,
      typeof DefaultShopifyCustomerSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCustomerManager#findOne` method */
export interface FindOneShopifyCustomerOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerSelection;
};

/** Options that can be passed to the `ShopifyCustomerManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerSelection;
};

/** Options that can be passed to the `ShopifyCustomerManager#findMany` method */
export interface FindManyShopifyCustomersOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerSort | ShopifyCustomerSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerFilter | ShopifyCustomerFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerManager#findFirst` method */
export interface FindFirstShopifyCustomerOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerSort | ShopifyCustomerSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerFilter | ShopifyCustomerFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerSort | ShopifyCustomerSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerFilter | ShopifyCustomerFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyCustomer";
const pluralApiIdentifier = "shopifyCustomers";





/** All the actions available at the collection level and record level for "shopifyCustomer" */
export class ShopifyCustomerManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCustomer by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCustomerOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCustomer";
  modelApiIdentifier: "shopifyCustomer";
  defaultSelection: typeof DefaultShopifyCustomerSelection;
  selectionType: AvailableShopifyCustomerSelection;
  optionsType: FindOneShopifyCustomerOptions;
  schemaType: Query["shopifyCustomer"];
} = Object.assign(
  async <Options extends FindOneShopifyCustomerOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerOptions>) => {
    return await findOneRunner<SelectedShopifyCustomerOrDefault<Options>>(
      this,
      "shopifyCustomer",
      id,
      DefaultShopifyCustomerSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCustomer",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerSelection,
  } as any
)

  
    /**
 * Finds one shopifyCustomer by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCustomerOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCustomer";
  modelApiIdentifier: "shopifyCustomer";
  defaultSelection: typeof DefaultShopifyCustomerSelection;
  selectionType: AvailableShopifyCustomerSelection;
  optionsType: MaybeFindOneShopifyCustomerOptions;
  schemaType: Query["shopifyCustomer"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCustomerOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerOptions>) => {
    const record = await findOneRunner<SelectedShopifyCustomerOrDefault<Options>>(
      this,
      "shopifyCustomer",
      id,
      DefaultShopifyCustomerSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCustomer",
    modelApiIdentifier: "shopifyCustomer",
    defaultSelection: DefaultShopifyCustomerSelection,
  } as any
)

  
    /**
 * Finds many shopifyCustomer. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCustomersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCustomers";
  modelApiIdentifier: "shopifyCustomer";
  defaultSelection: typeof DefaultShopifyCustomerSelection;
  selectionType: AvailableShopifyCustomerSelection;
  optionsType: FindManyShopifyCustomersOptions;
  schemaType: Query["shopifyCustomer"];
} = Object.assign(
  async <Options extends FindManyShopifyCustomersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCustomerOrDefault<Options>>(
      this,
      "shopifyCustomers",
      DefaultShopifyCustomerSelection,
      "shopifyCustomer",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCustomers",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomer. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCustomerOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCustomers";
  modelApiIdentifier: "shopifyCustomer";
  defaultSelection: typeof DefaultShopifyCustomerSelection;
  selectionType: AvailableShopifyCustomerSelection;
  optionsType: FindFirstShopifyCustomerOptions;
  schemaType: Query["shopifyCustomer"];
} = Object.assign(
  async <Options extends FindFirstShopifyCustomerOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerOrDefault<Options>>(
      this,
      "shopifyCustomers",
      DefaultShopifyCustomerSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCustomers",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomer. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCustomerOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCustomers";
  modelApiIdentifier: "shopifyCustomer";
  defaultSelection: typeof DefaultShopifyCustomerSelection;
  selectionType: AvailableShopifyCustomerSelection;
  optionsType: MaybeFindFirstShopifyCustomerOptions;
  schemaType: Query["shopifyCustomer"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCustomerOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerOrDefault<Options>>(
      this,
      "shopifyCustomers",
      DefaultShopifyCustomerSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCustomers",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerSelection,
  } as any
);

  
}
