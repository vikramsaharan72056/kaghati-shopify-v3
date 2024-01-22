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
      ShopifyFulfillmentService,
      ShopifyFulfillmentServiceSort,
      ShopifyFulfillmentServiceFilter,
      AvailableShopifyFulfillmentServiceSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentServiceSelection = {
  "__typename": true,
  "callbackUrl": true,
  "createdAt": true,
  "format": true,
  "fulfillmentOrdersOptIn": true,
  "handle": true,
  "id": true,
  "inventoryManagement": true,
  "name": true,
  "permitsSkuSharing": true,
  "requiresShippingMethod": true,
  "trackingSupport": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentService". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentServiceOrDefault<Options extends Selectable<AvailableShopifyFulfillmentServiceSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentService,
    DefaultSelection<
      AvailableShopifyFulfillmentServiceSelection,
      Options,
      typeof DefaultShopifyFulfillmentServiceSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findOne` method */
export interface FindOneShopifyFulfillmentServiceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentServiceSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentServiceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentServiceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentServiceSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findMany` method */
export interface FindManyShopifyFulfillmentServicesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentServiceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findFirst` method */
export interface FindFirstShopifyFulfillmentServiceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentServiceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentServiceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentServiceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentServiceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyFulfillmentService";
const pluralApiIdentifier = "shopifyFulfillmentServices";





/** All the actions available at the collection level and record level for "shopifyFulfillmentService" */
export class ShopifyFulfillmentServiceManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentServiceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentService";
  modelApiIdentifier: "shopifyFulfillmentService";
  defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
  selectionType: AvailableShopifyFulfillmentServiceSelection;
  optionsType: FindOneShopifyFulfillmentServiceOptions;
  schemaType: Query["shopifyFulfillmentService"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentServiceOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentServiceOrDefault<Options>>(
      this,
      "shopifyFulfillmentService",
      id,
      DefaultShopifyFulfillmentServiceSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentService",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentServiceSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentServiceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentService";
  modelApiIdentifier: "shopifyFulfillmentService";
  defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
  selectionType: AvailableShopifyFulfillmentServiceSelection;
  optionsType: MaybeFindOneShopifyFulfillmentServiceOptions;
  schemaType: Query["shopifyFulfillmentService"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentServiceOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentServiceOrDefault<Options>>(
      this,
      "shopifyFulfillmentService",
      id,
      DefaultShopifyFulfillmentServiceSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentService",
    modelApiIdentifier: "shopifyFulfillmentService",
    defaultSelection: DefaultShopifyFulfillmentServiceSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentServicesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentServicesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentServices";
  modelApiIdentifier: "shopifyFulfillmentService";
  defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
  selectionType: AvailableShopifyFulfillmentServiceSelection;
  optionsType: FindManyShopifyFulfillmentServicesOptions;
  schemaType: Query["shopifyFulfillmentService"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentServicesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentServicesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentServiceOrDefault<Options>>(
      this,
      "shopifyFulfillmentServices",
      DefaultShopifyFulfillmentServiceSelection,
      "shopifyFulfillmentService",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentServices",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentServiceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentServiceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentServices";
  modelApiIdentifier: "shopifyFulfillmentService";
  defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
  selectionType: AvailableShopifyFulfillmentServiceSelection;
  optionsType: FindFirstShopifyFulfillmentServiceOptions;
  schemaType: Query["shopifyFulfillmentService"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentServiceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentServiceOrDefault<Options>>(
      this,
      "shopifyFulfillmentServices",
      DefaultShopifyFulfillmentServiceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentServices",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentServiceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentServiceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentServices";
  modelApiIdentifier: "shopifyFulfillmentService";
  defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
  selectionType: AvailableShopifyFulfillmentServiceSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentServiceOptions;
  schemaType: Query["shopifyFulfillmentService"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentServiceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentServiceOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentServiceOrDefault<Options>>(
      this,
      "shopifyFulfillmentServices",
      DefaultShopifyFulfillmentServiceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentServices",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentServiceSelection,
  } as any
);

  
}
