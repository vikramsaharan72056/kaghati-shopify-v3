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
      ShopifyFulfillmentLineItem,
      ShopifyFulfillmentLineItemSort,
      ShopifyFulfillmentLineItemFilter,
      AvailableShopifyFulfillmentLineItemSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "discountedTotalSet": true,
  "id": true,
  "originalTotalSet": true,
  "quantity": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentLineItem,
    DefaultSelection<
      AvailableShopifyFulfillmentLineItemSelection,
      Options,
      typeof DefaultShopifyFulfillmentLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyFulfillmentLineItem";
const pluralApiIdentifier = "shopifyFulfillmentLineItems";





/** All the actions available at the collection level and record level for "shopifyFulfillmentLineItem" */
export class ShopifyFulfillmentLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentLineItem";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindOneShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItem",
      id,
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentLineItem";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: MaybeFindOneShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItem",
      id,
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentLineItem",
    modelApiIdentifier: "shopifyFulfillmentLineItem",
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindManyShopifyFulfillmentLineItemsOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      DefaultShopifyFulfillmentLineItemSelection,
      "shopifyFulfillmentLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindFirstShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
);

  
    /**
  * Finds one shopifyFulfillmentLineItem by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyFulfillmentLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindOneShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > & SelectedShopifyFulfillmentLineItemOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      "id",
      value,
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
)

  
}
