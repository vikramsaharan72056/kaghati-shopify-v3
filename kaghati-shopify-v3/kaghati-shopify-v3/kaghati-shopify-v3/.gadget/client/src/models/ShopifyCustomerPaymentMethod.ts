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
      ShopifyCustomerPaymentMethod,
      ShopifyCustomerPaymentMethodSort,
      ShopifyCustomerPaymentMethodFilter,
      AvailableShopifyCustomerPaymentMethodSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCustomerPaymentMethodSelection = {
  "__typename": true,
  "adminGraphqlApiId": true,
  "createdAt": true,
  "id": true,
  "instrument": true,
  "revokedAt": true,
  "revokedReason": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomerPaymentMethod". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerPaymentMethodOrDefault<Options extends Selectable<AvailableShopifyCustomerPaymentMethodSelection>> = DeepFilterNever<
  Select<
    ShopifyCustomerPaymentMethod,
    DefaultSelection<
      AvailableShopifyCustomerPaymentMethodSelection,
      Options,
      typeof DefaultShopifyCustomerPaymentMethodSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCustomerPaymentMethodManager#findOne` method */
export interface FindOneShopifyCustomerPaymentMethodOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerPaymentMethodSelection;
};

/** Options that can be passed to the `ShopifyCustomerPaymentMethodManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerPaymentMethodOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerPaymentMethodSelection;
};

/** Options that can be passed to the `ShopifyCustomerPaymentMethodManager#findMany` method */
export interface FindManyShopifyCustomerPaymentMethodsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerPaymentMethodSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerPaymentMethodSort | ShopifyCustomerPaymentMethodSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerPaymentMethodFilter | ShopifyCustomerPaymentMethodFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerPaymentMethodManager#findFirst` method */
export interface FindFirstShopifyCustomerPaymentMethodOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerPaymentMethodSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerPaymentMethodSort | ShopifyCustomerPaymentMethodSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerPaymentMethodFilter | ShopifyCustomerPaymentMethodFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCustomerPaymentMethodManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerPaymentMethodOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCustomerPaymentMethodSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCustomerPaymentMethodSort | ShopifyCustomerPaymentMethodSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCustomerPaymentMethodFilter | ShopifyCustomerPaymentMethodFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyCustomerPaymentMethod";
const pluralApiIdentifier = "shopifyCustomerPaymentMethods";





/** All the actions available at the collection level and record level for "shopifyCustomerPaymentMethod" */
export class ShopifyCustomerPaymentMethodManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCustomerPaymentMethod by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCustomerPaymentMethodOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCustomerPaymentMethod";
  modelApiIdentifier: "shopifyCustomerPaymentMethod";
  defaultSelection: typeof DefaultShopifyCustomerPaymentMethodSelection;
  selectionType: AvailableShopifyCustomerPaymentMethodSelection;
  optionsType: FindOneShopifyCustomerPaymentMethodOptions;
  schemaType: Query["shopifyCustomerPaymentMethod"];
} = Object.assign(
  async <Options extends FindOneShopifyCustomerPaymentMethodOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerPaymentMethodOptions>) => {
    return await findOneRunner<SelectedShopifyCustomerPaymentMethodOrDefault<Options>>(
      this,
      "shopifyCustomerPaymentMethod",
      id,
      DefaultShopifyCustomerPaymentMethodSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCustomerPaymentMethod",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerPaymentMethodSelection,
  } as any
)

  
    /**
 * Finds one shopifyCustomerPaymentMethod by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCustomerPaymentMethodOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCustomerPaymentMethod";
  modelApiIdentifier: "shopifyCustomerPaymentMethod";
  defaultSelection: typeof DefaultShopifyCustomerPaymentMethodSelection;
  selectionType: AvailableShopifyCustomerPaymentMethodSelection;
  optionsType: MaybeFindOneShopifyCustomerPaymentMethodOptions;
  schemaType: Query["shopifyCustomerPaymentMethod"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCustomerPaymentMethodOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerPaymentMethodOptions>) => {
    const record = await findOneRunner<SelectedShopifyCustomerPaymentMethodOrDefault<Options>>(
      this,
      "shopifyCustomerPaymentMethod",
      id,
      DefaultShopifyCustomerPaymentMethodSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCustomerPaymentMethod",
    modelApiIdentifier: "shopifyCustomerPaymentMethod",
    defaultSelection: DefaultShopifyCustomerPaymentMethodSelection,
  } as any
)

  
    /**
 * Finds many shopifyCustomerPaymentMethod. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCustomerPaymentMethodsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerPaymentMethodsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCustomerPaymentMethods";
  modelApiIdentifier: "shopifyCustomerPaymentMethod";
  defaultSelection: typeof DefaultShopifyCustomerPaymentMethodSelection;
  selectionType: AvailableShopifyCustomerPaymentMethodSelection;
  optionsType: FindManyShopifyCustomerPaymentMethodsOptions;
  schemaType: Query["shopifyCustomerPaymentMethod"];
} = Object.assign(
  async <Options extends FindManyShopifyCustomerPaymentMethodsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerPaymentMethodsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCustomerPaymentMethodOrDefault<Options>>(
      this,
      "shopifyCustomerPaymentMethods",
      DefaultShopifyCustomerPaymentMethodSelection,
      "shopifyCustomerPaymentMethod",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCustomerPaymentMethods",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerPaymentMethodSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomerPaymentMethod. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCustomerPaymentMethodOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCustomerPaymentMethods";
  modelApiIdentifier: "shopifyCustomerPaymentMethod";
  defaultSelection: typeof DefaultShopifyCustomerPaymentMethodSelection;
  selectionType: AvailableShopifyCustomerPaymentMethodSelection;
  optionsType: FindFirstShopifyCustomerPaymentMethodOptions;
  schemaType: Query["shopifyCustomerPaymentMethod"];
} = Object.assign(
  async <Options extends FindFirstShopifyCustomerPaymentMethodOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerPaymentMethodOrDefault<Options>>(
      this,
      "shopifyCustomerPaymentMethods",
      DefaultShopifyCustomerPaymentMethodSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCustomerPaymentMethods",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerPaymentMethodSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCustomerPaymentMethod. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCustomerPaymentMethodOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCustomerPaymentMethods";
  modelApiIdentifier: "shopifyCustomerPaymentMethod";
  defaultSelection: typeof DefaultShopifyCustomerPaymentMethodSelection;
  selectionType: AvailableShopifyCustomerPaymentMethodSelection;
  optionsType: MaybeFindFirstShopifyCustomerPaymentMethodOptions;
  schemaType: Query["shopifyCustomerPaymentMethod"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCustomerPaymentMethodOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCustomerPaymentMethodOrDefault<Options>>(
      this,
      "shopifyCustomerPaymentMethods",
      DefaultShopifyCustomerPaymentMethodSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCustomerPaymentMethods",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerPaymentMethodSelection,
  } as any
);

  
    /**
  * Finds one shopifyCustomerPaymentMethod by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyCustomerPaymentMethodOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyCustomerPaymentMethods";
  modelApiIdentifier: "shopifyCustomerPaymentMethod";
  defaultSelection: typeof DefaultShopifyCustomerPaymentMethodSelection;
  selectionType: AvailableShopifyCustomerPaymentMethodSelection;
  optionsType: FindOneShopifyCustomerPaymentMethodOptions;
  schemaType: Query["shopifyCustomerPaymentMethod"];
} = Object.assign(
  async <Options extends FindOneShopifyCustomerPaymentMethodOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerPaymentMethodOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyCustomerPaymentMethodOrDefault<Options>
      > & SelectedShopifyCustomerPaymentMethodOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyCustomerPaymentMethodOrDefault<Options>>(
      this,
      "shopifyCustomerPaymentMethods",
      "id",
      value,
      DefaultShopifyCustomerPaymentMethodSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCustomerPaymentMethods",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCustomerPaymentMethodSelection,
  } as any
)

  
}
