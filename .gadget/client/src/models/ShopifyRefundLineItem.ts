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
      ShopifyRefundLineItem,
      ShopifyRefundLineItemSort,
      ShopifyRefundLineItemFilter,
      AvailableShopifyRefundLineItemSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyRefundLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "quantity": true,
  "restockType": true,
  "subtotal": true,
  "subtotalSet": true,
  "totalTax": true,
  "totalTaxSet": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRefundLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRefundLineItemOrDefault<Options extends Selectable<AvailableShopifyRefundLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyRefundLineItem,
    DefaultSelection<
      AvailableShopifyRefundLineItemSelection,
      Options,
      typeof DefaultShopifyRefundLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyRefundLineItemManager#findOne` method */
export interface FindOneShopifyRefundLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundLineItemSelection;
};

/** Options that can be passed to the `ShopifyRefundLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRefundLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundLineItemSelection;
};

/** Options that can be passed to the `ShopifyRefundLineItemManager#findMany` method */
export interface FindManyShopifyRefundLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundLineItemSort | ShopifyRefundLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundLineItemFilter | ShopifyRefundLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyRefundLineItemManager#findFirst` method */
export interface FindFirstShopifyRefundLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundLineItemSort | ShopifyRefundLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundLineItemFilter | ShopifyRefundLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyRefundLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRefundLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundLineItemSort | ShopifyRefundLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundLineItemFilter | ShopifyRefundLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyRefundLineItem";
const pluralApiIdentifier = "shopifyRefundLineItems";





/** All the actions available at the collection level and record level for "shopifyRefundLineItem" */
export class ShopifyRefundLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyRefundLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyRefundLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyRefundLineItem";
  modelApiIdentifier: "shopifyRefundLineItem";
  defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
  selectionType: AvailableShopifyRefundLineItemSelection;
  optionsType: FindOneShopifyRefundLineItemOptions;
  schemaType: Query["shopifyRefundLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyRefundLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyRefundLineItemOrDefault<Options>>(
      this,
      "shopifyRefundLineItem",
      id,
      DefaultShopifyRefundLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyRefundLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyRefundLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyRefundLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyRefundLineItem";
  modelApiIdentifier: "shopifyRefundLineItem";
  defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
  selectionType: AvailableShopifyRefundLineItemSelection;
  optionsType: MaybeFindOneShopifyRefundLineItemOptions;
  schemaType: Query["shopifyRefundLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyRefundLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyRefundLineItemOrDefault<Options>>(
      this,
      "shopifyRefundLineItem",
      id,
      DefaultShopifyRefundLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyRefundLineItem",
    modelApiIdentifier: "shopifyRefundLineItem",
    defaultSelection: DefaultShopifyRefundLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyRefundLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyRefundLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyRefundLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyRefundLineItems";
  modelApiIdentifier: "shopifyRefundLineItem";
  defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
  selectionType: AvailableShopifyRefundLineItemSelection;
  optionsType: FindManyShopifyRefundLineItemsOptions;
  schemaType: Query["shopifyRefundLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyRefundLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyRefundLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyRefundLineItemOrDefault<Options>>(
      this,
      "shopifyRefundLineItems",
      DefaultShopifyRefundLineItemSelection,
      "shopifyRefundLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyRefundLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyRefundLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyRefundLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyRefundLineItems";
  modelApiIdentifier: "shopifyRefundLineItem";
  defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
  selectionType: AvailableShopifyRefundLineItemSelection;
  optionsType: FindFirstShopifyRefundLineItemOptions;
  schemaType: Query["shopifyRefundLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyRefundLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyRefundLineItemOrDefault<Options>>(
      this,
      "shopifyRefundLineItems",
      DefaultShopifyRefundLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyRefundLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyRefundLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyRefundLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyRefundLineItems";
  modelApiIdentifier: "shopifyRefundLineItem";
  defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
  selectionType: AvailableShopifyRefundLineItemSelection;
  optionsType: MaybeFindFirstShopifyRefundLineItemOptions;
  schemaType: Query["shopifyRefundLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyRefundLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyRefundLineItemOrDefault<Options>>(
      this,
      "shopifyRefundLineItems",
      DefaultShopifyRefundLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyRefundLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundLineItemSelection,
  } as any
);

  
}
