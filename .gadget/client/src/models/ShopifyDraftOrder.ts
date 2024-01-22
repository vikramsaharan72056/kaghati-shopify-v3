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
      ShopifyDraftOrder,
      ShopifyDraftOrderSort,
      ShopifyDraftOrderFilter,
      AvailableShopifyDraftOrderSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDraftOrderSelection = {
  "__typename": true,
  "appliedDiscount": true,
  "billingAddress": true,
  "completedAt": true,
  "createdAt": true,
  "currency": true,
  "email": true,
  "id": true,
  "invoiceSentAt": true,
  "invoiceUrl": true,
  "name": true,
  "note": true,
  "noteAttributes": true,
  "order": true,
  "poNumber": true,
  "shippingAddress": true,
  "shippingLine": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "subtotalPrice": true,
  "tags": true,
  "taxExempt": true,
  "taxExemptions": true,
  "taxLines": true,
  "taxesIncluded": true,
  "totalPrice": true,
  "totalTax": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDraftOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDraftOrderOrDefault<Options extends Selectable<AvailableShopifyDraftOrderSelection>> = DeepFilterNever<
  Select<
    ShopifyDraftOrder,
    DefaultSelection<
      AvailableShopifyDraftOrderSelection,
      Options,
      typeof DefaultShopifyDraftOrderSelection
    >
  >>;

/** Options that can be passed to the `ShopifyDraftOrderManager#findOne` method */
export interface FindOneShopifyDraftOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDraftOrderSelection;
};

/** Options that can be passed to the `ShopifyDraftOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDraftOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDraftOrderSelection;
};

/** Options that can be passed to the `ShopifyDraftOrderManager#findMany` method */
export interface FindManyShopifyDraftOrdersOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDraftOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDraftOrderSort | ShopifyDraftOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDraftOrderFilter | ShopifyDraftOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDraftOrderManager#findFirst` method */
export interface FindFirstShopifyDraftOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDraftOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDraftOrderSort | ShopifyDraftOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDraftOrderFilter | ShopifyDraftOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDraftOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDraftOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDraftOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDraftOrderSort | ShopifyDraftOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDraftOrderFilter | ShopifyDraftOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyDraftOrder";
const pluralApiIdentifier = "shopifyDraftOrders";





/** All the actions available at the collection level and record level for "shopifyDraftOrder" */
export class ShopifyDraftOrderManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDraftOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDraftOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDraftOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDraftOrderOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDraftOrder";
  modelApiIdentifier: "shopifyDraftOrder";
  defaultSelection: typeof DefaultShopifyDraftOrderSelection;
  selectionType: AvailableShopifyDraftOrderSelection;
  optionsType: FindOneShopifyDraftOrderOptions;
  schemaType: Query["shopifyDraftOrder"];
} = Object.assign(
  async <Options extends FindOneShopifyDraftOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDraftOrderOptions>) => {
    return await findOneRunner<SelectedShopifyDraftOrderOrDefault<Options>>(
      this,
      "shopifyDraftOrder",
      id,
      DefaultShopifyDraftOrderSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDraftOrder",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDraftOrderSelection,
  } as any
)

  
    /**
 * Finds one shopifyDraftOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDraftOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDraftOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDraftOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDraftOrder";
  modelApiIdentifier: "shopifyDraftOrder";
  defaultSelection: typeof DefaultShopifyDraftOrderSelection;
  selectionType: AvailableShopifyDraftOrderSelection;
  optionsType: MaybeFindOneShopifyDraftOrderOptions;
  schemaType: Query["shopifyDraftOrder"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDraftOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDraftOrderOptions>) => {
    const record = await findOneRunner<SelectedShopifyDraftOrderOrDefault<Options>>(
      this,
      "shopifyDraftOrder",
      id,
      DefaultShopifyDraftOrderSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDraftOrder",
    modelApiIdentifier: "shopifyDraftOrder",
    defaultSelection: DefaultShopifyDraftOrderSelection,
  } as any
)

  
    /**
 * Finds many shopifyDraftOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDraftOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDraftOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDraftOrderOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDraftOrders";
  modelApiIdentifier: "shopifyDraftOrder";
  defaultSelection: typeof DefaultShopifyDraftOrderSelection;
  selectionType: AvailableShopifyDraftOrderSelection;
  optionsType: FindManyShopifyDraftOrdersOptions;
  schemaType: Query["shopifyDraftOrder"];
} = Object.assign(
  async <Options extends FindManyShopifyDraftOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDraftOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDraftOrderOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDraftOrderOrDefault<Options>>(
      this,
      "shopifyDraftOrders",
      DefaultShopifyDraftOrderSelection,
      "shopifyDraftOrder",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDraftOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDraftOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDraftOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDraftOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDraftOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDraftOrderOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDraftOrders";
  modelApiIdentifier: "shopifyDraftOrder";
  defaultSelection: typeof DefaultShopifyDraftOrderSelection;
  selectionType: AvailableShopifyDraftOrderSelection;
  optionsType: FindFirstShopifyDraftOrderOptions;
  schemaType: Query["shopifyDraftOrder"];
} = Object.assign(
  async <Options extends FindFirstShopifyDraftOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDraftOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDraftOrderOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDraftOrderOrDefault<Options>>(
      this,
      "shopifyDraftOrders",
      DefaultShopifyDraftOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDraftOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDraftOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDraftOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDraftOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDraftOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDraftOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDraftOrders";
  modelApiIdentifier: "shopifyDraftOrder";
  defaultSelection: typeof DefaultShopifyDraftOrderSelection;
  selectionType: AvailableShopifyDraftOrderSelection;
  optionsType: MaybeFindFirstShopifyDraftOrderOptions;
  schemaType: Query["shopifyDraftOrder"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDraftOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDraftOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDraftOrderOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDraftOrderOrDefault<Options>>(
      this,
      "shopifyDraftOrders",
      DefaultShopifyDraftOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDraftOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDraftOrderSelection,
  } as any
);

  
}
