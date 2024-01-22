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
      ShopifySellingPlan,
      ShopifySellingPlanSort,
      ShopifySellingPlanFilter,
      AvailableShopifySellingPlanSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifySellingPlanSelection = {
  "__typename": true,
  "billingPolicy": true,
  "category": true,
  "createdAt": true,
  "deliveryPolicy": true,
  "description": true,
  "id": true,
  "inventoryPolicy": true,
  "name": true,
  "options": true,
  "position": true,
  "pricingPolicies": true,
  "shopifyCreatedAt": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySellingPlan". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySellingPlanOrDefault<Options extends Selectable<AvailableShopifySellingPlanSelection>> = DeepFilterNever<
  Select<
    ShopifySellingPlan,
    DefaultSelection<
      AvailableShopifySellingPlanSelection,
      Options,
      typeof DefaultShopifySellingPlanSelection
    >
  >>;

/** Options that can be passed to the `ShopifySellingPlanManager#findOne` method */
export interface FindOneShopifySellingPlanOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanSelection;
};

/** Options that can be passed to the `ShopifySellingPlanManager#maybeFindOne` method */
export interface MaybeFindOneShopifySellingPlanOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanSelection;
};

/** Options that can be passed to the `ShopifySellingPlanManager#findMany` method */
export interface FindManyShopifySellingPlansOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanSort | ShopifySellingPlanSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanFilter | ShopifySellingPlanFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanManager#findFirst` method */
export interface FindFirstShopifySellingPlanOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanSort | ShopifySellingPlanSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanFilter | ShopifySellingPlanFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySellingPlanOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanSort | ShopifySellingPlanSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanFilter | ShopifySellingPlanFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifySellingPlan";
const pluralApiIdentifier = "shopifySellingPlans";





/** All the actions available at the collection level and record level for "shopifySellingPlan" */
export class ShopifySellingPlanManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifySellingPlan by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifySellingPlanOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifySellingPlan";
  modelApiIdentifier: "shopifySellingPlan";
  defaultSelection: typeof DefaultShopifySellingPlanSelection;
  selectionType: AvailableShopifySellingPlanSelection;
  optionsType: FindOneShopifySellingPlanOptions;
  schemaType: Query["shopifySellingPlan"];
} = Object.assign(
  async <Options extends FindOneShopifySellingPlanOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanOptions>) => {
    return await findOneRunner<SelectedShopifySellingPlanOrDefault<Options>>(
      this,
      "shopifySellingPlan",
      id,
      DefaultShopifySellingPlanSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlan",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanSelection,
  } as any
)

  
    /**
 * Finds one shopifySellingPlan by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifySellingPlanOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifySellingPlan";
  modelApiIdentifier: "shopifySellingPlan";
  defaultSelection: typeof DefaultShopifySellingPlanSelection;
  selectionType: AvailableShopifySellingPlanSelection;
  optionsType: MaybeFindOneShopifySellingPlanOptions;
  schemaType: Query["shopifySellingPlan"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifySellingPlanOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanOptions>) => {
    const record = await findOneRunner<SelectedShopifySellingPlanOrDefault<Options>>(
      this,
      "shopifySellingPlan",
      id,
      DefaultShopifySellingPlanSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlan",
    modelApiIdentifier: "shopifySellingPlan",
    defaultSelection: DefaultShopifySellingPlanSelection,
  } as any
)

  
    /**
 * Finds many shopifySellingPlan. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifySellingPlansOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlansOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifySellingPlans";
  modelApiIdentifier: "shopifySellingPlan";
  defaultSelection: typeof DefaultShopifySellingPlanSelection;
  selectionType: AvailableShopifySellingPlanSelection;
  optionsType: FindManyShopifySellingPlansOptions;
  schemaType: Query["shopifySellingPlan"];
} = Object.assign(
  async <Options extends FindManyShopifySellingPlansOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlansOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifySellingPlanOrDefault<Options>>(
      this,
      "shopifySellingPlans",
      DefaultShopifySellingPlanSelection,
      "shopifySellingPlan",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifySellingPlans",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlan. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifySellingPlanOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifySellingPlans";
  modelApiIdentifier: "shopifySellingPlan";
  defaultSelection: typeof DefaultShopifySellingPlanSelection;
  selectionType: AvailableShopifySellingPlanSelection;
  optionsType: FindFirstShopifySellingPlanOptions;
  schemaType: Query["shopifySellingPlan"];
} = Object.assign(
  async <Options extends FindFirstShopifySellingPlanOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanOrDefault<Options>>(
      this,
      "shopifySellingPlans",
      DefaultShopifySellingPlanSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifySellingPlans",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlan. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifySellingPlanOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifySellingPlans";
  modelApiIdentifier: "shopifySellingPlan";
  defaultSelection: typeof DefaultShopifySellingPlanSelection;
  selectionType: AvailableShopifySellingPlanSelection;
  optionsType: MaybeFindFirstShopifySellingPlanOptions;
  schemaType: Query["shopifySellingPlan"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifySellingPlanOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanOrDefault<Options>>(
      this,
      "shopifySellingPlans",
      DefaultShopifySellingPlanSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifySellingPlans",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanSelection,
  } as any
);

  
}
