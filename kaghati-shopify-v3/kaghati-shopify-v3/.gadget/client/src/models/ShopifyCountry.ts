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
      ShopifyCountry,
      ShopifyCountrySort,
      ShopifyCountryFilter,
      AvailableShopifyCountrySelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCountrySelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "tax": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCountry". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCountryOrDefault<Options extends Selectable<AvailableShopifyCountrySelection>> = DeepFilterNever<
  Select<
    ShopifyCountry,
    DefaultSelection<
      AvailableShopifyCountrySelection,
      Options,
      typeof DefaultShopifyCountrySelection
    >
  >>;

/** Options that can be passed to the `ShopifyCountryManager#findOne` method */
export interface FindOneShopifyCountryOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCountrySelection;
};

/** Options that can be passed to the `ShopifyCountryManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCountryOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCountrySelection;
};

/** Options that can be passed to the `ShopifyCountryManager#findMany` method */
export interface FindManyShopifyCountriesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCountrySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCountrySort | ShopifyCountrySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCountryFilter | ShopifyCountryFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCountryManager#findFirst` method */
export interface FindFirstShopifyCountryOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCountrySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCountrySort | ShopifyCountrySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCountryFilter | ShopifyCountryFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCountryManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCountryOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCountrySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCountrySort | ShopifyCountrySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCountryFilter | ShopifyCountryFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyCountry";
const pluralApiIdentifier = "shopifyCountries";





/** All the actions available at the collection level and record level for "shopifyCountry" */
export class ShopifyCountryManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCountry by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCountryOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCountryOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCountryOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCountry";
  modelApiIdentifier: "shopifyCountry";
  defaultSelection: typeof DefaultShopifyCountrySelection;
  selectionType: AvailableShopifyCountrySelection;
  optionsType: FindOneShopifyCountryOptions;
  schemaType: Query["shopifyCountry"];
} = Object.assign(
  async <Options extends FindOneShopifyCountryOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCountryOptions>) => {
    return await findOneRunner<SelectedShopifyCountryOrDefault<Options>>(
      this,
      "shopifyCountry",
      id,
      DefaultShopifyCountrySelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCountry",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCountrySelection,
  } as any
)

  
    /**
 * Finds one shopifyCountry by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCountryOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCountryOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCountryOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCountry";
  modelApiIdentifier: "shopifyCountry";
  defaultSelection: typeof DefaultShopifyCountrySelection;
  selectionType: AvailableShopifyCountrySelection;
  optionsType: MaybeFindOneShopifyCountryOptions;
  schemaType: Query["shopifyCountry"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCountryOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCountryOptions>) => {
    const record = await findOneRunner<SelectedShopifyCountryOrDefault<Options>>(
      this,
      "shopifyCountry",
      id,
      DefaultShopifyCountrySelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCountry",
    modelApiIdentifier: "shopifyCountry",
    defaultSelection: DefaultShopifyCountrySelection,
  } as any
)

  
    /**
 * Finds many shopifyCountry. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCountriesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCountriesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCountryOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCountries";
  modelApiIdentifier: "shopifyCountry";
  defaultSelection: typeof DefaultShopifyCountrySelection;
  selectionType: AvailableShopifyCountrySelection;
  optionsType: FindManyShopifyCountriesOptions;
  schemaType: Query["shopifyCountry"];
} = Object.assign(
  async <Options extends FindManyShopifyCountriesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCountriesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCountryOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCountryOrDefault<Options>>(
      this,
      "shopifyCountries",
      DefaultShopifyCountrySelection,
      "shopifyCountry",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCountries",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCountrySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCountry. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCountryOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCountryOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCountryOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCountries";
  modelApiIdentifier: "shopifyCountry";
  defaultSelection: typeof DefaultShopifyCountrySelection;
  selectionType: AvailableShopifyCountrySelection;
  optionsType: FindFirstShopifyCountryOptions;
  schemaType: Query["shopifyCountry"];
} = Object.assign(
  async <Options extends FindFirstShopifyCountryOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCountryOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCountryOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCountryOrDefault<Options>>(
      this,
      "shopifyCountries",
      DefaultShopifyCountrySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCountries",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCountrySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCountry. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCountryOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCountryOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCountryOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCountries";
  modelApiIdentifier: "shopifyCountry";
  defaultSelection: typeof DefaultShopifyCountrySelection;
  selectionType: AvailableShopifyCountrySelection;
  optionsType: MaybeFindFirstShopifyCountryOptions;
  schemaType: Query["shopifyCountry"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCountryOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCountryOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCountryOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCountryOrDefault<Options>>(
      this,
      "shopifyCountries",
      DefaultShopifyCountrySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCountries",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCountrySelection,
  } as any
);

  
}
