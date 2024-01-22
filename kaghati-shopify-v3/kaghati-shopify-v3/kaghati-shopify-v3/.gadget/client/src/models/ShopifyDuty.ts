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
      ShopifyDuty,
      ShopifyDutySort,
      ShopifyDutyFilter,
      AvailableShopifyDutySelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDutySelection = {
  "__typename": true,
  "countryCodeOfOrigin": true,
  "createdAt": true,
  "harmonizedSystemCode": true,
  "id": true,
  "presentmentMoney": true,
  "shopMoney": true,
  "taxLines": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDuty". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDutyOrDefault<Options extends Selectable<AvailableShopifyDutySelection>> = DeepFilterNever<
  Select<
    ShopifyDuty,
    DefaultSelection<
      AvailableShopifyDutySelection,
      Options,
      typeof DefaultShopifyDutySelection
    >
  >>;

/** Options that can be passed to the `ShopifyDutyManager#findOne` method */
export interface FindOneShopifyDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDutySelection;
};

/** Options that can be passed to the `ShopifyDutyManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDutySelection;
};

/** Options that can be passed to the `ShopifyDutyManager#findMany` method */
export interface FindManyShopifyDutiesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDutySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDutySort | ShopifyDutySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDutyFilter | ShopifyDutyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDutyManager#findFirst` method */
export interface FindFirstShopifyDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDutySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDutySort | ShopifyDutySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDutyFilter | ShopifyDutyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDutyManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDutySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDutySort | ShopifyDutySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDutyFilter | ShopifyDutyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyDuty";
const pluralApiIdentifier = "shopifyDuties";





/** All the actions available at the collection level and record level for "shopifyDuty" */
export class ShopifyDutyManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDutyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDutyOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDuty";
  modelApiIdentifier: "shopifyDuty";
  defaultSelection: typeof DefaultShopifyDutySelection;
  selectionType: AvailableShopifyDutySelection;
  optionsType: FindOneShopifyDutyOptions;
  schemaType: Query["shopifyDuty"];
} = Object.assign(
  async <Options extends FindOneShopifyDutyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDutyOptions>) => {
    return await findOneRunner<SelectedShopifyDutyOrDefault<Options>>(
      this,
      "shopifyDuty",
      id,
      DefaultShopifyDutySelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDuty",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDutySelection,
  } as any
)

  
    /**
 * Finds one shopifyDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDutyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDutyOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDuty";
  modelApiIdentifier: "shopifyDuty";
  defaultSelection: typeof DefaultShopifyDutySelection;
  selectionType: AvailableShopifyDutySelection;
  optionsType: MaybeFindOneShopifyDutyOptions;
  schemaType: Query["shopifyDuty"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDutyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDutyOptions>) => {
    const record = await findOneRunner<SelectedShopifyDutyOrDefault<Options>>(
      this,
      "shopifyDuty",
      id,
      DefaultShopifyDutySelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDuty",
    modelApiIdentifier: "shopifyDuty",
    defaultSelection: DefaultShopifyDutySelection,
  } as any
)

  
    /**
 * Finds many shopifyDuty. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDutiesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDutiesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDutyOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDuties";
  modelApiIdentifier: "shopifyDuty";
  defaultSelection: typeof DefaultShopifyDutySelection;
  selectionType: AvailableShopifyDutySelection;
  optionsType: FindManyShopifyDutiesOptions;
  schemaType: Query["shopifyDuty"];
} = Object.assign(
  async <Options extends FindManyShopifyDutiesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDutiesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDutyOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDutyOrDefault<Options>>(
      this,
      "shopifyDuties",
      DefaultShopifyDutySelection,
      "shopifyDuty",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDutySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDuty. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDutyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDutyOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDuties";
  modelApiIdentifier: "shopifyDuty";
  defaultSelection: typeof DefaultShopifyDutySelection;
  selectionType: AvailableShopifyDutySelection;
  optionsType: FindFirstShopifyDutyOptions;
  schemaType: Query["shopifyDuty"];
} = Object.assign(
  async <Options extends FindFirstShopifyDutyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDutyOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDutyOrDefault<Options>>(
      this,
      "shopifyDuties",
      DefaultShopifyDutySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDutySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDuty. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDutyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDutyOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDuties";
  modelApiIdentifier: "shopifyDuty";
  defaultSelection: typeof DefaultShopifyDutySelection;
  selectionType: AvailableShopifyDutySelection;
  optionsType: MaybeFindFirstShopifyDutyOptions;
  schemaType: Query["shopifyDuty"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDutyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDutyOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDutyOrDefault<Options>>(
      this,
      "shopifyDuties",
      DefaultShopifyDutySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDutySelection,
  } as any
);

  
}
