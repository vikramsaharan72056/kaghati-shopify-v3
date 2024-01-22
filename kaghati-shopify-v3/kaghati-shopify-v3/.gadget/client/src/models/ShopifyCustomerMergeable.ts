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
      ShopifyCustomerMergeable,
      ShopifyCustomerMergeableSort,
      ShopifyCustomerMergeableFilter,
      AvailableShopifyCustomerMergeableSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCustomerMergeableSelection = {
  "__typename": true,
  "createdAt": true,
  "errorFields": true,
  "id": true,
  "isMergeable": true,
  "mergeInProgress": true,
  "reason": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomerMergeable". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerMergeableOrDefault<Options extends Selectable<AvailableShopifyCustomerMergeableSelection>> = DeepFilterNever<
  Select<
    ShopifyCustomerMergeable,
    DefaultSelection<
      AvailableShopifyCustomerMergeableSelection,
      Options,
      typeof DefaultShopifyCustomerMergeableSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCustomerMergeableManager#findOne` method */
export interface FindOneShopifyCustomerMergeableOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerMergeableSelection;
};

/** Options that can be passed to the `ShopifyCustomerMergeableManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerMergeableOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerMergeableSelection;
};

/** Options that can be passed to the `ShopifyCustomerMergeableManager#findMany` method */
export interface FindManyShopifyCustomerMergeablesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerMergeableSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerMergeableSort | ShopifyCustomerMergeableSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerMergeableFilter | ShopifyCustomerMergeableFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerMergeableManager#findFirst` method */
export interface FindFirstShopifyCustomerMergeableOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerMergeableSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerMergeableSort | ShopifyCustomerMergeableSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerMergeableFilter | ShopifyCustomerMergeableFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerMergeableManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerMergeableOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerMergeableSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerMergeableSort | ShopifyCustomerMergeableSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerMergeableFilter | ShopifyCustomerMergeableFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyCustomerMergeable";
const pluralApiIdentifier = "shopifyCustomerMergeables";





/** All the actions available at the collection level and record level for "shopifyCustomerMergeable" */
export class ShopifyCustomerMergeableManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCustomerMergeable by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCustomerMergeableOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerMergeableOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCustomerMergeable";
  modelApiIdentifier: "shopifyCustomerMergeable";
  defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
  selectionType: AvailableShopifyCustomerMergeableSelection;
  optionsType: FindOneShopifyCustomerMergeableOptions;
  schemaType: Query["shopifyCustomerMergeable"];
} = Object.assign(
  async <Options extends FindOneShopifyCustomerMergeableOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerMergeableOptions>) => {
    return await findOneRunner<SelectedShopifyCustomerMergeableOrDefault<Options>>(
      this,
      "shopifyCustomerMergeable",
      id,
      DefaultShopifyCustomerMergeableSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCustomerMergeable",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerMergeableSelection,
  } as any
)

  
    /**
 * Finds one shopifyCustomerMergeable by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCustomerMergeableOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerMergeableOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCustomerMergeable";
  modelApiIdentifier: "shopifyCustomerMergeable";
  defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
  selectionType: AvailableShopifyCustomerMergeableSelection;
  optionsType: MaybeFindOneShopifyCustomerMergeableOptions;
  schemaType: Query["shopifyCustomerMergeable"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCustomerMergeableOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerMergeableOptions>) => {
    const record = await findOneRunner<SelectedShopifyCustomerMergeableOrDefault<Options>>(
      this,
      "shopifyCustomerMergeable",
      id,
      DefaultShopifyCustomerMergeableSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCustomerMergeable",
    modelApiIdentifier: "shopifyCustomerMergeable",
    defaultSelection: DefaultShopifyCustomerMergeableSelection,
  } as any
)

  
    /**
 * Finds many shopifyCustomerMergeable. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCustomerMergeablesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerMergeablesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCustomerMergeables";
  modelApiIdentifier: "shopifyCustomerMergeable";
  defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
  selectionType: AvailableShopifyCustomerMergeableSelection;
  optionsType: FindManyShopifyCustomerMergeablesOptions;
  schemaType: Query["shopifyCustomerMergeable"];
} = Object.assign(
  async <Options extends FindManyShopifyCustomerMergeablesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerMergeablesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCustomerMergeableOrDefault<Options>>(
      this,
      "shopifyCustomerMergeables",
      DefaultShopifyCustomerMergeableSelection,
      "shopifyCustomerMergeable",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCustomerMergeables",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerMergeableSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomerMergeable. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCustomerMergeableOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerMergeableOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCustomerMergeables";
  modelApiIdentifier: "shopifyCustomerMergeable";
  defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
  selectionType: AvailableShopifyCustomerMergeableSelection;
  optionsType: FindFirstShopifyCustomerMergeableOptions;
  schemaType: Query["shopifyCustomerMergeable"];
} = Object.assign(
  async <Options extends FindFirstShopifyCustomerMergeableOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerMergeableOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerMergeableOrDefault<Options>>(
      this,
      "shopifyCustomerMergeables",
      DefaultShopifyCustomerMergeableSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCustomerMergeables",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerMergeableSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomerMergeable. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCustomerMergeableOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerMergeableOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCustomerMergeables";
  modelApiIdentifier: "shopifyCustomerMergeable";
  defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
  selectionType: AvailableShopifyCustomerMergeableSelection;
  optionsType: MaybeFindFirstShopifyCustomerMergeableOptions;
  schemaType: Query["shopifyCustomerMergeable"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCustomerMergeableOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerMergeableOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerMergeableOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerMergeableOrDefault<Options>>(
      this,
      "shopifyCustomerMergeables",
      DefaultShopifyCustomerMergeableSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCustomerMergeables",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerMergeableSelection,
  } as any
);

  
}
