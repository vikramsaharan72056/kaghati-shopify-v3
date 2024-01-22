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
      ShopifyInventoryItem,
      ShopifyInventoryItemSort,
      ShopifyInventoryItemFilter,
      AvailableShopifyInventoryItemSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyInventoryItemSelection = {
  "__typename": true,
  "cost": true,
  "countryCodeOfOrigin": true,
  "countryHarmonizedSystemCodes": true,
  "createdAt": true,
  "harmonizedSystemCode": true,
  "id": true,
  "provinceCodeOfOrigin": true,
  "requiresShipping": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "sku": true,
  "tracked": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyInventoryItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyInventoryItemOrDefault<Options extends Selectable<AvailableShopifyInventoryItemSelection>> = DeepFilterNever<
  Select<
    ShopifyInventoryItem,
    DefaultSelection<
      AvailableShopifyInventoryItemSelection,
      Options,
      typeof DefaultShopifyInventoryItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyInventoryItemManager#findOne` method */
export interface FindOneShopifyInventoryItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryItemSelection;
};

/** Options that can be passed to the `ShopifyInventoryItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyInventoryItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryItemSelection;
};

/** Options that can be passed to the `ShopifyInventoryItemManager#findMany` method */
export interface FindManyShopifyInventoryItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryItemSort | ShopifyInventoryItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryItemFilter | ShopifyInventoryItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyInventoryItemManager#findFirst` method */
export interface FindFirstShopifyInventoryItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryItemSort | ShopifyInventoryItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryItemFilter | ShopifyInventoryItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyInventoryItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyInventoryItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryItemSort | ShopifyInventoryItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryItemFilter | ShopifyInventoryItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyInventoryItem";
const pluralApiIdentifier = "shopifyInventoryItems";





/** All the actions available at the collection level and record level for "shopifyInventoryItem" */
export class ShopifyInventoryItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyInventoryItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyInventoryItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyInventoryItem";
  modelApiIdentifier: "shopifyInventoryItem";
  defaultSelection: typeof DefaultShopifyInventoryItemSelection;
  selectionType: AvailableShopifyInventoryItemSelection;
  optionsType: FindOneShopifyInventoryItemOptions;
  schemaType: Query["shopifyInventoryItem"];
} = Object.assign(
  async <Options extends FindOneShopifyInventoryItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryItemOptions>) => {
    return await findOneRunner<SelectedShopifyInventoryItemOrDefault<Options>>(
      this,
      "shopifyInventoryItem",
      id,
      DefaultShopifyInventoryItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyInventoryItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyInventoryItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyInventoryItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyInventoryItem";
  modelApiIdentifier: "shopifyInventoryItem";
  defaultSelection: typeof DefaultShopifyInventoryItemSelection;
  selectionType: AvailableShopifyInventoryItemSelection;
  optionsType: MaybeFindOneShopifyInventoryItemOptions;
  schemaType: Query["shopifyInventoryItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyInventoryItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyInventoryItemOrDefault<Options>>(
      this,
      "shopifyInventoryItem",
      id,
      DefaultShopifyInventoryItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyInventoryItem",
    modelApiIdentifier: "shopifyInventoryItem",
    defaultSelection: DefaultShopifyInventoryItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyInventoryItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyInventoryItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyInventoryItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyInventoryItems";
  modelApiIdentifier: "shopifyInventoryItem";
  defaultSelection: typeof DefaultShopifyInventoryItemSelection;
  selectionType: AvailableShopifyInventoryItemSelection;
  optionsType: FindManyShopifyInventoryItemsOptions;
  schemaType: Query["shopifyInventoryItem"];
} = Object.assign(
  async <Options extends FindManyShopifyInventoryItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyInventoryItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyInventoryItemOrDefault<Options>>(
      this,
      "shopifyInventoryItems",
      DefaultShopifyInventoryItemSelection,
      "shopifyInventoryItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyInventoryItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyInventoryItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyInventoryItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyInventoryItems";
  modelApiIdentifier: "shopifyInventoryItem";
  defaultSelection: typeof DefaultShopifyInventoryItemSelection;
  selectionType: AvailableShopifyInventoryItemSelection;
  optionsType: FindFirstShopifyInventoryItemOptions;
  schemaType: Query["shopifyInventoryItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyInventoryItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyInventoryItemOrDefault<Options>>(
      this,
      "shopifyInventoryItems",
      DefaultShopifyInventoryItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyInventoryItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyInventoryItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyInventoryItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyInventoryItems";
  modelApiIdentifier: "shopifyInventoryItem";
  defaultSelection: typeof DefaultShopifyInventoryItemSelection;
  selectionType: AvailableShopifyInventoryItemSelection;
  optionsType: MaybeFindFirstShopifyInventoryItemOptions;
  schemaType: Query["shopifyInventoryItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyInventoryItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyInventoryItemOrDefault<Options>>(
      this,
      "shopifyInventoryItems",
      DefaultShopifyInventoryItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyInventoryItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryItemSelection,
  } as any
);

  
}
