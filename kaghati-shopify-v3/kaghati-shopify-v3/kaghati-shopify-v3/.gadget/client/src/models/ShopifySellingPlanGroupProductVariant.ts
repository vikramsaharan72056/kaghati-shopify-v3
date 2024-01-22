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
      ShopifySellingPlanGroupProductVariant,
      ShopifySellingPlanGroupProductVariantSort,
      ShopifySellingPlanGroupProductVariantFilter,
      AvailableShopifySellingPlanGroupProductVariantSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifySellingPlanGroupProductVariantSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "state": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySellingPlanGroupProductVariant". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySellingPlanGroupProductVariantOrDefault<Options extends Selectable<AvailableShopifySellingPlanGroupProductVariantSelection>> = DeepFilterNever<
  Select<
    ShopifySellingPlanGroupProductVariant,
    DefaultSelection<
      AvailableShopifySellingPlanGroupProductVariantSelection,
      Options,
      typeof DefaultShopifySellingPlanGroupProductVariantSelection
    >
  >>;

/** Options that can be passed to the `ShopifySellingPlanGroupProductVariantManager#findOne` method */
export interface FindOneShopifySellingPlanGroupProductVariantOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductVariantSelection;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductVariantManager#maybeFindOne` method */
export interface MaybeFindOneShopifySellingPlanGroupProductVariantOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductVariantSelection;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductVariantManager#findMany` method */
export interface FindManyShopifySellingPlanGroupProductVariantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductVariantSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupProductVariantSort | ShopifySellingPlanGroupProductVariantSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupProductVariantFilter | ShopifySellingPlanGroupProductVariantFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductVariantManager#findFirst` method */
export interface FindFirstShopifySellingPlanGroupProductVariantOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductVariantSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupProductVariantSort | ShopifySellingPlanGroupProductVariantSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupProductVariantFilter | ShopifySellingPlanGroupProductVariantFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifySellingPlanGroupProductVariantManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySellingPlanGroupProductVariantOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySellingPlanGroupProductVariantSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifySellingPlanGroupProductVariantSort | ShopifySellingPlanGroupProductVariantSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifySellingPlanGroupProductVariantFilter | ShopifySellingPlanGroupProductVariantFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifySellingPlanGroupProductVariant";
const pluralApiIdentifier = "shopifySellingPlanGroupProductVariants";





/** All the actions available at the collection level and record level for "shopifySellingPlanGroupProductVariant" */
export class ShopifySellingPlanGroupProductVariantManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifySellingPlanGroupProductVariant by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifySellingPlanGroupProductVariantOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupProductVariantOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifySellingPlanGroupProductVariant";
  modelApiIdentifier: "shopifySellingPlanGroupProductVariant";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductVariantSelection;
  selectionType: AvailableShopifySellingPlanGroupProductVariantSelection;
  optionsType: FindOneShopifySellingPlanGroupProductVariantOptions;
  schemaType: Query["shopifySellingPlanGroupProductVariant"];
} = Object.assign(
  async <Options extends FindOneShopifySellingPlanGroupProductVariantOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupProductVariantOptions>) => {
    return await findOneRunner<SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProductVariant",
      id,
      DefaultShopifySellingPlanGroupProductVariantSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlanGroupProductVariant",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection,
  } as any
)

  
    /**
 * Finds one shopifySellingPlanGroupProductVariant by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifySellingPlanGroupProductVariantOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupProductVariantOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifySellingPlanGroupProductVariant";
  modelApiIdentifier: "shopifySellingPlanGroupProductVariant";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductVariantSelection;
  selectionType: AvailableShopifySellingPlanGroupProductVariantSelection;
  optionsType: MaybeFindOneShopifySellingPlanGroupProductVariantOptions;
  schemaType: Query["shopifySellingPlanGroupProductVariant"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifySellingPlanGroupProductVariantOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupProductVariantOptions>) => {
    const record = await findOneRunner<SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProductVariant",
      id,
      DefaultShopifySellingPlanGroupProductVariantSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifySellingPlanGroupProductVariant",
    modelApiIdentifier: "shopifySellingPlanGroupProductVariant",
    defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection,
  } as any
)

  
    /**
 * Finds many shopifySellingPlanGroupProductVariant. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifySellingPlanGroupProductVariantsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupProductVariantsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifySellingPlanGroupProductVariants";
  modelApiIdentifier: "shopifySellingPlanGroupProductVariant";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductVariantSelection;
  selectionType: AvailableShopifySellingPlanGroupProductVariantSelection;
  optionsType: FindManyShopifySellingPlanGroupProductVariantsOptions;
  schemaType: Query["shopifySellingPlanGroupProductVariant"];
} = Object.assign(
  async <Options extends FindManyShopifySellingPlanGroupProductVariantsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupProductVariantsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProductVariants",
      DefaultShopifySellingPlanGroupProductVariantSelection,
      "shopifySellingPlanGroupProductVariant",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifySellingPlanGroupProductVariants",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlanGroupProductVariant. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifySellingPlanGroupProductVariantOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupProductVariantOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifySellingPlanGroupProductVariants";
  modelApiIdentifier: "shopifySellingPlanGroupProductVariant";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductVariantSelection;
  selectionType: AvailableShopifySellingPlanGroupProductVariantSelection;
  optionsType: FindFirstShopifySellingPlanGroupProductVariantOptions;
  schemaType: Query["shopifySellingPlanGroupProductVariant"];
} = Object.assign(
  async <Options extends FindFirstShopifySellingPlanGroupProductVariantOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupProductVariantOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProductVariants",
      DefaultShopifySellingPlanGroupProductVariantSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifySellingPlanGroupProductVariants",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifySellingPlanGroupProductVariant. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifySellingPlanGroupProductVariantOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupProductVariantOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifySellingPlanGroupProductVariants";
  modelApiIdentifier: "shopifySellingPlanGroupProductVariant";
  defaultSelection: typeof DefaultShopifySellingPlanGroupProductVariantSelection;
  selectionType: AvailableShopifySellingPlanGroupProductVariantSelection;
  optionsType: MaybeFindFirstShopifySellingPlanGroupProductVariantOptions;
  schemaType: Query["shopifySellingPlanGroupProductVariant"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifySellingPlanGroupProductVariantOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupProductVariantOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifySellingPlanGroupProductVariantOrDefault<Options>>(
      this,
      "shopifySellingPlanGroupProductVariants",
      DefaultShopifySellingPlanGroupProductVariantSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifySellingPlanGroupProductVariants",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifySellingPlanGroupProductVariantSelection,
  } as any
);

  
}
