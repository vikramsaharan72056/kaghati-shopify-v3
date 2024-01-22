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
      ShopifyFulfillment,
      ShopifyFulfillmentSort,
      ShopifyFulfillmentFilter,
      AvailableShopifyFulfillmentSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "notifyCustomer": true,
  "originAddress": true,
  "receipt": true,
  "service": true,
  "shipmentStatus": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "trackingCompany": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true,
  "variantInventoryManagement": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillment". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrDefault<Options extends Selectable<AvailableShopifyFulfillmentSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillment,
    DefaultSelection<
      AvailableShopifyFulfillmentSelection,
      Options,
      typeof DefaultShopifyFulfillmentSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentManager#findOne` method */
export interface FindOneShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#findMany` method */
export interface FindManyShopifyFulfillmentsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentSort | ShopifyFulfillmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentFilter | ShopifyFulfillmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentSort | ShopifyFulfillmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentFilter | ShopifyFulfillmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentSort | ShopifyFulfillmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentFilter | ShopifyFulfillmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyFulfillment";
const pluralApiIdentifier = "shopifyFulfillments";





/** All the actions available at the collection level and record level for "shopifyFulfillment" */
export class ShopifyFulfillmentManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillment";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: FindOneShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillment",
      id,
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillment",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillment";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: MaybeFindOneShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillment",
      id,
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillment",
    modelApiIdentifier: "shopifyFulfillment",
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillments";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: FindManyShopifyFulfillmentsOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillments",
      DefaultShopifyFulfillmentSelection,
      "shopifyFulfillment",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillments";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: FindFirstShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillments",
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillments";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillments",
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
);

  
}
