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
      ShopifyFulfillmentEvent,
      ShopifyFulfillmentEventSort,
      ShopifyFulfillmentEventFilter,
      AvailableShopifyFulfillmentEventSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentEventSelection = {
  "__typename": true,
  "address1": true,
  "city": true,
  "country": true,
  "createdAt": true,
  "estimatedDeliveryAt": true,
  "happenedAt": true,
  "id": true,
  "latitude": true,
  "longitude": true,
  "message": true,
  "province": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "updatedAt": true,
  "zipCode": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentEvent". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentEventOrDefault<Options extends Selectable<AvailableShopifyFulfillmentEventSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentEvent,
    DefaultSelection<
      AvailableShopifyFulfillmentEventSelection,
      Options,
      typeof DefaultShopifyFulfillmentEventSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentEventManager#findOne` method */
export interface FindOneShopifyFulfillmentEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentEventSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentEventManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentEventSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentEventManager#findMany` method */
export interface FindManyShopifyFulfillmentEventsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentEventSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentEventSort | ShopifyFulfillmentEventSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentEventFilter | ShopifyFulfillmentEventFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentEventManager#findFirst` method */
export interface FindFirstShopifyFulfillmentEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentEventSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentEventSort | ShopifyFulfillmentEventSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentEventFilter | ShopifyFulfillmentEventFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentEventManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentEventSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentEventSort | ShopifyFulfillmentEventSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentEventFilter | ShopifyFulfillmentEventFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyFulfillmentEvent";
const pluralApiIdentifier = "shopifyFulfillmentEvents";





/** All the actions available at the collection level and record level for "shopifyFulfillmentEvent" */
export class ShopifyFulfillmentEventManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentEventOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentEvent";
  modelApiIdentifier: "shopifyFulfillmentEvent";
  defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
  selectionType: AvailableShopifyFulfillmentEventSelection;
  optionsType: FindOneShopifyFulfillmentEventOptions;
  schemaType: Query["shopifyFulfillmentEvent"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentEventOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentEventOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentEventOrDefault<Options>>(
      this,
      "shopifyFulfillmentEvent",
      id,
      DefaultShopifyFulfillmentEventSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentEvent",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentEventSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentEventOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentEvent";
  modelApiIdentifier: "shopifyFulfillmentEvent";
  defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
  selectionType: AvailableShopifyFulfillmentEventSelection;
  optionsType: MaybeFindOneShopifyFulfillmentEventOptions;
  schemaType: Query["shopifyFulfillmentEvent"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentEventOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentEventOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentEventOrDefault<Options>>(
      this,
      "shopifyFulfillmentEvent",
      id,
      DefaultShopifyFulfillmentEventSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentEvent",
    modelApiIdentifier: "shopifyFulfillmentEvent",
    defaultSelection: DefaultShopifyFulfillmentEventSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentEvent. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentEventsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentEventsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentEvents";
  modelApiIdentifier: "shopifyFulfillmentEvent";
  defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
  selectionType: AvailableShopifyFulfillmentEventSelection;
  optionsType: FindManyShopifyFulfillmentEventsOptions;
  schemaType: Query["shopifyFulfillmentEvent"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentEventsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentEventsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentEventOrDefault<Options>>(
      this,
      "shopifyFulfillmentEvents",
      DefaultShopifyFulfillmentEventSelection,
      "shopifyFulfillmentEvent",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentEvents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentEventSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentEvent. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentEventOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentEvents";
  modelApiIdentifier: "shopifyFulfillmentEvent";
  defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
  selectionType: AvailableShopifyFulfillmentEventSelection;
  optionsType: FindFirstShopifyFulfillmentEventOptions;
  schemaType: Query["shopifyFulfillmentEvent"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentEventOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentEventOrDefault<Options>>(
      this,
      "shopifyFulfillmentEvents",
      DefaultShopifyFulfillmentEventSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentEvents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentEventSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentEvent. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentEventOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentEvents";
  modelApiIdentifier: "shopifyFulfillmentEvent";
  defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
  selectionType: AvailableShopifyFulfillmentEventSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentEventOptions;
  schemaType: Query["shopifyFulfillmentEvent"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentEventOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentEventOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentEventOrDefault<Options>>(
      this,
      "shopifyFulfillmentEvents",
      DefaultShopifyFulfillmentEventSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentEvents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentEventSelection,
  } as any
);

  
}
