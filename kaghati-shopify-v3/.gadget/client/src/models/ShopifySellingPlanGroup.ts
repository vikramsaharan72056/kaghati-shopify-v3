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
      ShopifySellingPlanGroup,
      ShopifySellingPlanGroupSort,
      ShopifySellingPlanGroupFilter,
      AvailableShopifySellingPlanGroupSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifySellingPlanGroupSelection = {
  "__typename": true,
  "appId": true,
  "createdAt": true,
  "description": true,
  "id": true,
  "merchantCode": true,
  "name": true,
  "options": true,
  "position": true,
  "shopifyCreatedAt": true,
  "summary": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySellingPlanGroup". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySellingPlanGroupOrDefault<Options extends Selectable<AvailableShopifySellingPlanGroupSelection>> = DeepFilterNever<
  Select<
    ShopifySellingPlanGroup,
    DefaultSelection<
      AvailableShopifySellingPlanGroupSelection,
      Options,
      typeof DefaultShopifySellingPlanGroupSelection
    >
  >>;

/** Options that can be passed to the `ShopifySellingPlanGroupManager#findOne` method */
export interface FindOneShopifySellingPlanGroupOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupSelection;
};

/** Options that can be passed to the `ShopifySellingPlanGroupManager#maybeFindOne` method */
export interface MaybeFindOneShopifySellingPlanGroupOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupSelection;
};

/** Options that can be passed to the `ShopifySellingPlanGroupManager#findMany` method */
export interface FindManyShopifySellingPlanGroupsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupSort | ShopifySellingPlanGroupSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupFilter | ShopifySellingPlanGroupFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanGroupManager#findFirst` method */
export interface FindFirstShopifySellingPlanGroupOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupSort | ShopifySellingPlanGroupSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupFilter | ShopifySellingPlanGroupFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanGroupManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySellingPlanGroupOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupSort | ShopifySellingPlanGroupSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupFilter | ShopifySellingPlanGroupFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifySellingPlanGroup";
const pluralApiIdentifier = "shopifySellingPlanGroups";





/** All the actions available at the collection level and record level for "shopifySellingPlanGroup" */
export class ShopifySellingPlanGroupManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifySellingPlanGroup by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifySellingPlanGroupOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifySellingPlanGroup";
  modelApiIdentifier: "shopifySellingPlanGroup";
  defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
  selectionType: AvailableShopifySellingPlanGroupSelection;
  optionsType: FindOneShopifySellingPlanGroupOptions;
  schemaType: Query["shopifySellingPlanGroup"];
} = Object.assign(
  async <Options extends FindOneShopifySellingPlanGroupOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupOptions>) => {
    return await findOneRunner<SelectedShopifySellingPlanGroupOrDefault<Options>>(
      this,
      "shopifySellingPlanGroup",
      id,
      DefaultShopifySellingPlanGroupSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlanGroup",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupSelection,
  } as any
)

  
    /**
 * Finds one shopifySellingPlanGroup by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifySellingPlanGroupOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifySellingPlanGroup";
  modelApiIdentifier: "shopifySellingPlanGroup";
  defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
  selectionType: AvailableShopifySellingPlanGroupSelection;
  optionsType: MaybeFindOneShopifySellingPlanGroupOptions;
  schemaType: Query["shopifySellingPlanGroup"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifySellingPlanGroupOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupOptions>) => {
    const record = await findOneRunner<SelectedShopifySellingPlanGroupOrDefault<Options>>(
      this,
      "shopifySellingPlanGroup",
      id,
      DefaultShopifySellingPlanGroupSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlanGroup",
    modelApiIdentifier: "shopifySellingPlanGroup",
    defaultSelection: DefaultShopifySellingPlanGroupSelection,
  } as any
)

  
    /**
 * Finds many shopifySellingPlanGroup. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifySellingPlanGroupsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifySellingPlanGroups";
  modelApiIdentifier: "shopifySellingPlanGroup";
  defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
  selectionType: AvailableShopifySellingPlanGroupSelection;
  optionsType: FindManyShopifySellingPlanGroupsOptions;
  schemaType: Query["shopifySellingPlanGroup"];
} = Object.assign(
  async <Options extends FindManyShopifySellingPlanGroupsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifySellingPlanGroupOrDefault<Options>>(
      this,
      "shopifySellingPlanGroups",
      DefaultShopifySellingPlanGroupSelection,
      "shopifySellingPlanGroup",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifySellingPlanGroups",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlanGroup. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifySellingPlanGroupOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifySellingPlanGroups";
  modelApiIdentifier: "shopifySellingPlanGroup";
  defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
  selectionType: AvailableShopifySellingPlanGroupSelection;
  optionsType: FindFirstShopifySellingPlanGroupOptions;
  schemaType: Query["shopifySellingPlanGroup"];
} = Object.assign(
  async <Options extends FindFirstShopifySellingPlanGroupOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanGroupOrDefault<Options>>(
      this,
      "shopifySellingPlanGroups",
      DefaultShopifySellingPlanGroupSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifySellingPlanGroups",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlanGroup. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifySellingPlanGroupOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifySellingPlanGroups";
  modelApiIdentifier: "shopifySellingPlanGroup";
  defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
  selectionType: AvailableShopifySellingPlanGroupSelection;
  optionsType: MaybeFindFirstShopifySellingPlanGroupOptions;
  schemaType: Query["shopifySellingPlanGroup"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifySellingPlanGroupOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanGroupOrDefault<Options>>(
      this,
      "shopifySellingPlanGroups",
      DefaultShopifySellingPlanGroupSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifySellingPlanGroups",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupSelection,
  } as any
);

  
}
