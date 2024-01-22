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
      ShopifyFulfillmentOrderLineItem,
      ShopifyFulfillmentOrderLineItemSort,
      ShopifyFulfillmentOrderLineItemFilter,
      AvailableShopifyFulfillmentOrderLineItemSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentOrderLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "quantity": true,
  "remainingQuantity": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentOrderLineItem,
    DefaultSelection<
      AvailableShopifyFulfillmentOrderLineItemSelection,
      Options,
      typeof DefaultShopifyFulfillmentOrderLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentOrderLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyFulfillmentOrderLineItem";
const pluralApiIdentifier = "shopifyFulfillmentOrderLineItems";





/** All the actions available at the collection level and record level for "shopifyFulfillmentOrderLineItem" */
export class ShopifyFulfillmentOrderLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentOrderLineItem";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: FindOneShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItem",
      id,
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentOrderLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentOrderLineItem";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: MaybeFindOneShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItem",
      id,
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentOrderLineItem",
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem",
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrderLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentOrderLineItems";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: FindManyShopifyFulfillmentOrderLineItemsOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrderLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItems",
      DefaultShopifyFulfillmentOrderLineItemSelection,
      "shopifyFulfillmentOrderLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentOrderLineItems";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: FindFirstShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItems",
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentOrderLineItems";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItems",
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
);

  
}
