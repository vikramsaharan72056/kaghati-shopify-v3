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
      ShopifySellingPlanGroupProduct,
      ShopifySellingPlanGroupProductSort,
      ShopifySellingPlanGroupProductFilter,
      AvailableShopifySellingPlanGroupProductSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifySellingPlanGroupProductSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "state": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySellingPlanGroupProduct". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySellingPlanGroupProductOrDefault<Options extends Selectable<AvailableShopifySellingPlanGroupProductSelection>> = DeepFilterNever<
  Select<
    ShopifySellingPlanGroupProduct,
    DefaultSelection<
      AvailableShopifySellingPlanGroupProductSelection,
      Options,
      typeof DefaultShopifySellingPlanGroupProductSelection
    >
  >>;

/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#findOne` method */
export interface FindOneShopifySellingPlanGroupProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductSelection;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#maybeFindOne` method */
export interface MaybeFindOneShopifySellingPlanGroupProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductSelection;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#findMany` method */
export interface FindManyShopifySellingPlanGroupProductsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupProductSort | ShopifySellingPlanGroupProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupProductFilter | ShopifySellingPlanGroupProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#findFirst` method */
export interface FindFirstShopifySellingPlanGroupProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupProductSort | ShopifySellingPlanGroupProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupProductFilter | ShopifySellingPlanGroupProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySellingPlanGroupProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupProductSort | ShopifySellingPlanGroupProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupProductFilter | ShopifySellingPlanGroupProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifySellingPlanGroupProduct";
const pluralApiIdentifier = "shopifySellingPlanGroupProducts";





/** All the actions available at the collection level and record level for "shopifySellingPlanGroupProduct" */
export class ShopifySellingPlanGroupProductManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifySellingPlanGroupProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifySellingPlanGroupProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifySellingPlanGroupProduct";
  modelApiIdentifier: "shopifySellingPlanGroupProduct";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
  selectionType: AvailableShopifySellingPlanGroupProductSelection;
  optionsType: FindOneShopifySellingPlanGroupProductOptions;
  schemaType: Query["shopifySellingPlanGroupProduct"];
} = Object.assign(
  async <Options extends FindOneShopifySellingPlanGroupProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupProductOptions>) => {
    return await findOneRunner<SelectedShopifySellingPlanGroupProductOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProduct",
      id,
      DefaultShopifySellingPlanGroupProductSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlanGroupProduct",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductSelection,
  } as any
)

  
    /**
 * Finds one shopifySellingPlanGroupProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifySellingPlanGroupProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifySellingPlanGroupProduct";
  modelApiIdentifier: "shopifySellingPlanGroupProduct";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
  selectionType: AvailableShopifySellingPlanGroupProductSelection;
  optionsType: MaybeFindOneShopifySellingPlanGroupProductOptions;
  schemaType: Query["shopifySellingPlanGroupProduct"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifySellingPlanGroupProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupProductOptions>) => {
    const record = await findOneRunner<SelectedShopifySellingPlanGroupProductOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProduct",
      id,
      DefaultShopifySellingPlanGroupProductSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlanGroupProduct",
    modelApiIdentifier: "shopifySellingPlanGroupProduct",
    defaultSelection: DefaultShopifySellingPlanGroupProductSelection,
  } as any
)

  
    /**
 * Finds many shopifySellingPlanGroupProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifySellingPlanGroupProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifySellingPlanGroupProducts";
  modelApiIdentifier: "shopifySellingPlanGroupProduct";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
  selectionType: AvailableShopifySellingPlanGroupProductSelection;
  optionsType: FindManyShopifySellingPlanGroupProductsOptions;
  schemaType: Query["shopifySellingPlanGroupProduct"];
} = Object.assign(
  async <Options extends FindManyShopifySellingPlanGroupProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifySellingPlanGroupProductOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProducts",
      DefaultShopifySellingPlanGroupProductSelection,
      "shopifySellingPlanGroupProduct",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifySellingPlanGroupProducts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlanGroupProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifySellingPlanGroupProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifySellingPlanGroupProducts";
  modelApiIdentifier: "shopifySellingPlanGroupProduct";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
  selectionType: AvailableShopifySellingPlanGroupProductSelection;
  optionsType: FindFirstShopifySellingPlanGroupProductOptions;
  schemaType: Query["shopifySellingPlanGroupProduct"];
} = Object.assign(
  async <Options extends FindFirstShopifySellingPlanGroupProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanGroupProductOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProducts",
      DefaultShopifySellingPlanGroupProductSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifySellingPlanGroupProducts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlanGroupProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifySellingPlanGroupProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifySellingPlanGroupProducts";
  modelApiIdentifier: "shopifySellingPlanGroupProduct";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
  selectionType: AvailableShopifySellingPlanGroupProductSelection;
  optionsType: MaybeFindFirstShopifySellingPlanGroupProductOptions;
  schemaType: Query["shopifySellingPlanGroupProduct"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifySellingPlanGroupProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanGroupProductOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProducts",
      DefaultShopifySellingPlanGroupProductSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifySellingPlanGroupProducts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductSelection,
  } as any
);

  
}
