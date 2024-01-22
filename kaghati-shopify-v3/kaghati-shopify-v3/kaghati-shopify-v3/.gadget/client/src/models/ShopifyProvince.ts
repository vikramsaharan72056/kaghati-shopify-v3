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
      ShopifyProvince,
      ShopifyProvinceSort,
      ShopifyProvinceFilter,
      AvailableShopifyProvinceSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyProvinceSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "tax": true,
  "taxName": true,
  "taxPercentage": true,
  "taxType": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProvince". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProvinceOrDefault<Options extends Selectable<AvailableShopifyProvinceSelection>> = DeepFilterNever<
  Select<
    ShopifyProvince,
    DefaultSelection<
      AvailableShopifyProvinceSelection,
      Options,
      typeof DefaultShopifyProvinceSelection
    >
  >>;

/** Options that can be passed to the `ShopifyProvinceManager#findOne` method */
export interface FindOneShopifyProvinceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProvinceSelection;
};

/** Options that can be passed to the `ShopifyProvinceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProvinceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProvinceSelection;
};

/** Options that can be passed to the `ShopifyProvinceManager#findMany` method */
export interface FindManyShopifyProvincesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProvinceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProvinceSort | ShopifyProvinceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProvinceFilter | ShopifyProvinceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyProvinceManager#findFirst` method */
export interface FindFirstShopifyProvinceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProvinceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProvinceSort | ShopifyProvinceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProvinceFilter | ShopifyProvinceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyProvinceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProvinceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProvinceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProvinceSort | ShopifyProvinceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProvinceFilter | ShopifyProvinceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyProvince";
const pluralApiIdentifier = "shopifyProvinces";





/** All the actions available at the collection level and record level for "shopifyProvince" */
export class ShopifyProvinceManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyProvince by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyProvinceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProvinceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProvinceOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyProvince";
  modelApiIdentifier: "shopifyProvince";
  defaultSelection: typeof DefaultShopifyProvinceSelection;
  selectionType: AvailableShopifyProvinceSelection;
  optionsType: FindOneShopifyProvinceOptions;
  schemaType: Query["shopifyProvince"];
} = Object.assign(
  async <Options extends FindOneShopifyProvinceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProvinceOptions>) => {
    return await findOneRunner<SelectedShopifyProvinceOrDefault<Options>>(
      this,
      "shopifyProvince",
      id,
      DefaultShopifyProvinceSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyProvince",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProvinceSelection,
  } as any
)

  
    /**
 * Finds one shopifyProvince by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyProvinceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProvinceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProvinceOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyProvince";
  modelApiIdentifier: "shopifyProvince";
  defaultSelection: typeof DefaultShopifyProvinceSelection;
  selectionType: AvailableShopifyProvinceSelection;
  optionsType: MaybeFindOneShopifyProvinceOptions;
  schemaType: Query["shopifyProvince"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyProvinceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProvinceOptions>) => {
    const record = await findOneRunner<SelectedShopifyProvinceOrDefault<Options>>(
      this,
      "shopifyProvince",
      id,
      DefaultShopifyProvinceSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyProvince",
    modelApiIdentifier: "shopifyProvince",
    defaultSelection: DefaultShopifyProvinceSelection,
  } as any
)

  
    /**
 * Finds many shopifyProvince. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyProvincesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProvincesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProvinceOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyProvinces";
  modelApiIdentifier: "shopifyProvince";
  defaultSelection: typeof DefaultShopifyProvinceSelection;
  selectionType: AvailableShopifyProvinceSelection;
  optionsType: FindManyShopifyProvincesOptions;
  schemaType: Query["shopifyProvince"];
} = Object.assign(
  async <Options extends FindManyShopifyProvincesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProvincesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProvinceOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyProvinceOrDefault<Options>>(
      this,
      "shopifyProvinces",
      DefaultShopifyProvinceSelection,
      "shopifyProvince",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyProvinces",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProvinceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyProvince. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyProvinceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProvinceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProvinceOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyProvinces";
  modelApiIdentifier: "shopifyProvince";
  defaultSelection: typeof DefaultShopifyProvinceSelection;
  selectionType: AvailableShopifyProvinceSelection;
  optionsType: FindFirstShopifyProvinceOptions;
  schemaType: Query["shopifyProvince"];
} = Object.assign(
  async <Options extends FindFirstShopifyProvinceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProvinceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProvinceOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProvinceOrDefault<Options>>(
      this,
      "shopifyProvinces",
      DefaultShopifyProvinceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyProvinces",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProvinceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyProvince. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyProvinceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProvinceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProvinceOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyProvinces";
  modelApiIdentifier: "shopifyProvince";
  defaultSelection: typeof DefaultShopifyProvinceSelection;
  selectionType: AvailableShopifyProvinceSelection;
  optionsType: MaybeFindFirstShopifyProvinceOptions;
  schemaType: Query["shopifyProvince"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyProvinceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProvinceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProvinceOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProvinceOrDefault<Options>>(
      this,
      "shopifyProvinces",
      DefaultShopifyProvinceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyProvinces",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProvinceSelection,
  } as any
);

  
}
