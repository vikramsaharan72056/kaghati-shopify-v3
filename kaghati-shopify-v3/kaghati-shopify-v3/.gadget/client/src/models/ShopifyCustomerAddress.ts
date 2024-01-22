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
      ShopifyCustomerAddress,
      ShopifyCustomerAddressSort,
      ShopifyCustomerAddressFilter,
      AvailableShopifyCustomerAddressSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCustomerAddressSelection = {
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
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomerAddress". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerAddressOrDefault<Options extends Selectable<AvailableShopifyCustomerAddressSelection>> = DeepFilterNever<
  Select<
    ShopifyCustomerAddress,
    DefaultSelection<
      AvailableShopifyCustomerAddressSelection,
      Options,
      typeof DefaultShopifyCustomerAddressSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCustomerAddressManager#findOne` method */
export interface FindOneShopifyCustomerAddressOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerAddressSelection;
};

/** Options that can be passed to the `ShopifyCustomerAddressManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerAddressOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerAddressSelection;
};

/** Options that can be passed to the `ShopifyCustomerAddressManager#findMany` method */
export interface FindManyShopifyCustomerAddressesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerAddressSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerAddressSort | ShopifyCustomerAddressSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerAddressFilter | ShopifyCustomerAddressFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerAddressManager#findFirst` method */
export interface FindFirstShopifyCustomerAddressOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerAddressSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerAddressSort | ShopifyCustomerAddressSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerAddressFilter | ShopifyCustomerAddressFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerAddressManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerAddressOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerAddressSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerAddressSort | ShopifyCustomerAddressSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerAddressFilter | ShopifyCustomerAddressFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyCustomerAddress";
const pluralApiIdentifier = "shopifyCustomerAddresses";





/** All the actions available at the collection level and record level for "shopifyCustomerAddress" */
export class ShopifyCustomerAddressManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCustomerAddress by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCustomerAddressOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerAddressOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerAddressOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCustomerAddress";
  modelApiIdentifier: "shopifyCustomerAddress";
  defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
  selectionType: AvailableShopifyCustomerAddressSelection;
  optionsType: FindOneShopifyCustomerAddressOptions;
  schemaType: Query["shopifyCustomerAddress"];
} = Object.assign(
  async <Options extends FindOneShopifyCustomerAddressOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerAddressOptions>) => {
    return await findOneRunner<SelectedShopifyCustomerAddressOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCustomerAddressSelection,
  } as any
)

  
    /**
 * Finds one shopifyCustomerAddress by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCustomerAddressOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerAddressOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerAddressOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCustomerAddress";
  modelApiIdentifier: "shopifyCustomerAddress";
  defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
  selectionType: AvailableShopifyCustomerAddressSelection;
  optionsType: MaybeFindOneShopifyCustomerAddressOptions;
  schemaType: Query["shopifyCustomerAddress"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCustomerAddressOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerAddressOptions>) => {
    const record = await findOneRunner<SelectedShopifyCustomerAddressOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCustomerAddressSelection,
  } as any
)

  
    /**
 * Finds many shopifyCustomerAddress. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCustomerAddressesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerAddressesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerAddressOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCustomerAddresses";
  modelApiIdentifier: "shopifyCustomerAddress";
  defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
  selectionType: AvailableShopifyCustomerAddressSelection;
  optionsType: FindManyShopifyCustomerAddressesOptions;
  schemaType: Query["shopifyCustomerAddress"];
} = Object.assign(
  async <Options extends FindManyShopifyCustomerAddressesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerAddressesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerAddressOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCustomerAddressOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCustomerAddressSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomerAddress. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCustomerAddressOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerAddressOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerAddressOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCustomerAddresses";
  modelApiIdentifier: "shopifyCustomerAddress";
  defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
  selectionType: AvailableShopifyCustomerAddressSelection;
  optionsType: FindFirstShopifyCustomerAddressOptions;
  schemaType: Query["shopifyCustomerAddress"];
} = Object.assign(
  async <Options extends FindFirstShopifyCustomerAddressOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerAddressOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerAddressOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerAddressOrDefault<Options>>(
      this,
      "shopifyCustomerAddresses",
      DefaultShopifyCustomerAddressSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCustomerAddresses",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerAddressSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomerAddress. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCustomerAddressOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerAddressOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerAddressOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCustomerAddresses";
  modelApiIdentifier: "shopifyCustomerAddress";
  defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
  selectionType: AvailableShopifyCustomerAddressSelection;
  optionsType: MaybeFindFirstShopifyCustomerAddressOptions;
  schemaType: Query["shopifyCustomerAddress"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCustomerAddressOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerAddressOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerAddressOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerAddressOrDefault<Options>>(
      this,
      "shopifyCustomerAddresses",
      DefaultShopifyCustomerAddressSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCustomerAddresses",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerAddressSelection,
  } as any
);

  
}
