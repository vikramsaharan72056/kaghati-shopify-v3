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
      ShopifyOrderTransaction,
      ShopifyOrderTransactionSort,
      ShopifyOrderTransactionFilter,
      AvailableShopifyOrderTransactionSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyOrderTransactionSelection = {
  "__typename": true,
  "amount": true,
  "authorization": true,
  "authorizationExpiresAt": true,
  "createdAt": true,
  "currency": true,
  "errorCode": true,
  "extendedAuthorizationAttributes": true,
  "gateway": true,
  "id": true,
  "kind": true,
  "message": true,
  "paymentDetails": true,
  "paymentId": true,
  "paymentsRefundAttributes": true,
  "processedAt": true,
  "receipt": true,
  "shopifyCreatedAt": true,
  "sourceName": true,
  "status": true,
  "test": true,
  "totalUnsettledSet": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrderTransaction". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderTransactionOrDefault<Options extends Selectable<AvailableShopifyOrderTransactionSelection>> = DeepFilterNever<
  Select<
    ShopifyOrderTransaction,
    DefaultSelection<
      AvailableShopifyOrderTransactionSelection,
      Options,
      typeof DefaultShopifyOrderTransactionSelection
    >
  >>;

/** Options that can be passed to the `ShopifyOrderTransactionManager#findOne` method */
export interface FindOneShopifyOrderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderTransactionSelection;
};

/** Options that can be passed to the `ShopifyOrderTransactionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderTransactionSelection;
};

/** Options that can be passed to the `ShopifyOrderTransactionManager#findMany` method */
export interface FindManyShopifyOrderTransactionsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderTransactionSort | ShopifyOrderTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderTransactionFilter | ShopifyOrderTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyOrderTransactionManager#findFirst` method */
export interface FindFirstShopifyOrderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderTransactionSort | ShopifyOrderTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderTransactionFilter | ShopifyOrderTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyOrderTransactionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderTransactionSort | ShopifyOrderTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderTransactionFilter | ShopifyOrderTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyOrderTransaction";
const pluralApiIdentifier = "shopifyOrderTransactions";





/** All the actions available at the collection level and record level for "shopifyOrderTransaction" */
export class ShopifyOrderTransactionManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyOrderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderTransactionOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyOrderTransaction";
  modelApiIdentifier: "shopifyOrderTransaction";
  defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
  selectionType: AvailableShopifyOrderTransactionSelection;
  optionsType: FindOneShopifyOrderTransactionOptions;
  schemaType: Query["shopifyOrderTransaction"];
} = Object.assign(
  async <Options extends FindOneShopifyOrderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderTransactionOptions>) => {
    return await findOneRunner<SelectedShopifyOrderTransactionOrDefault<Options>>(
      this,
      "shopifyOrderTransaction",
      id,
      DefaultShopifyOrderTransactionSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyOrderTransaction",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderTransactionSelection,
  } as any
)

  
    /**
 * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyOrderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderTransactionOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyOrderTransaction";
  modelApiIdentifier: "shopifyOrderTransaction";
  defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
  selectionType: AvailableShopifyOrderTransactionSelection;
  optionsType: MaybeFindOneShopifyOrderTransactionOptions;
  schemaType: Query["shopifyOrderTransaction"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyOrderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderTransactionOptions>) => {
    const record = await findOneRunner<SelectedShopifyOrderTransactionOrDefault<Options>>(
      this,
      "shopifyOrderTransaction",
      id,
      DefaultShopifyOrderTransactionSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyOrderTransaction",
    modelApiIdentifier: "shopifyOrderTransaction",
    defaultSelection: DefaultShopifyOrderTransactionSelection,
  } as any
)

  
    /**
 * Finds many shopifyOrderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyOrderTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderTransactionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderTransactionOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyOrderTransactions";
  modelApiIdentifier: "shopifyOrderTransaction";
  defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
  selectionType: AvailableShopifyOrderTransactionSelection;
  optionsType: FindManyShopifyOrderTransactionsOptions;
  schemaType: Query["shopifyOrderTransaction"];
} = Object.assign(
  async <Options extends FindManyShopifyOrderTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderTransactionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderTransactionOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyOrderTransactionOrDefault<Options>>(
      this,
      "shopifyOrderTransactions",
      DefaultShopifyOrderTransactionSelection,
      "shopifyOrderTransaction",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyOrderTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderTransactionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyOrderTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderTransactionOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyOrderTransactions";
  modelApiIdentifier: "shopifyOrderTransaction";
  defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
  selectionType: AvailableShopifyOrderTransactionSelection;
  optionsType: FindFirstShopifyOrderTransactionOptions;
  schemaType: Query["shopifyOrderTransaction"];
} = Object.assign(
  async <Options extends FindFirstShopifyOrderTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderTransactionOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderTransactionOrDefault<Options>>(
      this,
      "shopifyOrderTransactions",
      DefaultShopifyOrderTransactionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyOrderTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderTransactionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyOrderTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderTransactionOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyOrderTransactions";
  modelApiIdentifier: "shopifyOrderTransaction";
  defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
  selectionType: AvailableShopifyOrderTransactionSelection;
  optionsType: MaybeFindFirstShopifyOrderTransactionOptions;
  schemaType: Query["shopifyOrderTransaction"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyOrderTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderTransactionOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderTransactionOrDefault<Options>>(
      this,
      "shopifyOrderTransactions",
      DefaultShopifyOrderTransactionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyOrderTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderTransactionSelection,
  } as any
);

  
}
