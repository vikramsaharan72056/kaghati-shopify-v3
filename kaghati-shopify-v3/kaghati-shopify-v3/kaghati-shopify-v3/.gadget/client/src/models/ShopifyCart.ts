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
      ShopifyCart,
      ShopifyCartSort,
      ShopifyCartFilter,
      AvailableShopifyCartSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCartSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "note": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "token": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCart". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCartOrDefault<Options extends Selectable<AvailableShopifyCartSelection>> = DeepFilterNever<
  Select<
    ShopifyCart,
    DefaultSelection<
      AvailableShopifyCartSelection,
      Options,
      typeof DefaultShopifyCartSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCartManager#findOne` method */
export interface FindOneShopifyCartOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCartSelection;
};

/** Options that can be passed to the `ShopifyCartManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCartOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCartSelection;
};

/** Options that can be passed to the `ShopifyCartManager#findMany` method */
export interface FindManyShopifyCartsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCartSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCartSort | ShopifyCartSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCartFilter | ShopifyCartFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCartManager#findFirst` method */
export interface FindFirstShopifyCartOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCartSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCartSort | ShopifyCartSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCartFilter | ShopifyCartFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCartManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCartOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCartSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCartSort | ShopifyCartSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCartFilter | ShopifyCartFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyCart";
const pluralApiIdentifier = "shopifyCarts";





/** All the actions available at the collection level and record level for "shopifyCart" */
export class ShopifyCartManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCart by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCartOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCart";
  modelApiIdentifier: "shopifyCart";
  defaultSelection: typeof DefaultShopifyCartSelection;
  selectionType: AvailableShopifyCartSelection;
  optionsType: FindOneShopifyCartOptions;
  schemaType: Query["shopifyCart"];
} = Object.assign(
  async <Options extends FindOneShopifyCartOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCartOptions>) => {
    return await findOneRunner<SelectedShopifyCartOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCartSelection,
  } as any
)

  
    /**
 * Finds one shopifyCart by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCartOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCart";
  modelApiIdentifier: "shopifyCart";
  defaultSelection: typeof DefaultShopifyCartSelection;
  selectionType: AvailableShopifyCartSelection;
  optionsType: MaybeFindOneShopifyCartOptions;
  schemaType: Query["shopifyCart"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCartOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCartOptions>) => {
    const record = await findOneRunner<SelectedShopifyCartOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCartSelection,
  } as any
)

  
    /**
 * Finds many shopifyCart. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCartsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCartsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCartOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCarts";
  modelApiIdentifier: "shopifyCart";
  defaultSelection: typeof DefaultShopifyCartSelection;
  selectionType: AvailableShopifyCartSelection;
  optionsType: FindManyShopifyCartsOptions;
  schemaType: Query["shopifyCart"];
} = Object.assign(
  async <Options extends FindManyShopifyCartsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCartsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCartOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCartOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCartSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCart. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCartOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCarts";
  modelApiIdentifier: "shopifyCart";
  defaultSelection: typeof DefaultShopifyCartSelection;
  selectionType: AvailableShopifyCartSelection;
  optionsType: FindFirstShopifyCartOptions;
  schemaType: Query["shopifyCart"];
} = Object.assign(
  async <Options extends FindFirstShopifyCartOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCartOrDefault<Options>>(
      this,
      "shopifyCarts",
      DefaultShopifyCartSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCarts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCartSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCart. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCartOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCarts";
  modelApiIdentifier: "shopifyCart";
  defaultSelection: typeof DefaultShopifyCartSelection;
  selectionType: AvailableShopifyCartSelection;
  optionsType: MaybeFindFirstShopifyCartOptions;
  schemaType: Query["shopifyCart"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCartOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCartOrDefault<Options>>(
      this,
      "shopifyCarts",
      DefaultShopifyCartSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCarts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCartSelection,
  } as any
);

  
    /**
  * Finds one shopifyCart by its token. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findByToken: {
  <Options extends FindOneShopifyCartOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCartOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCartOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "token";
  operationName: "shopifyCarts";
  modelApiIdentifier: "shopifyCart";
  defaultSelection: typeof DefaultShopifyCartSelection;
  selectionType: AvailableShopifyCartSelection;
  optionsType: FindOneShopifyCartOptions;
  schemaType: Query["shopifyCart"];
} = Object.assign(
  async <Options extends FindOneShopifyCartOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCartOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyCartOrDefault<Options>
      > & SelectedShopifyCartOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyCartOrDefault<Options>>(
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
    defaultSelection: DefaultShopifyCartSelection,
  } as any
)

  
}
