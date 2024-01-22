import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyFulfillmentEvent, ShopifyFulfillmentEventSort, ShopifyFulfillmentEventFilter, AvailableShopifyFulfillmentEventSelection } from "../types.js";
export declare const DefaultShopifyFulfillmentEventSelection: {
    readonly __typename: true;
    readonly address1: true;
    readonly city: true;
    readonly country: true;
    readonly createdAt: true;
    readonly estimatedDeliveryAt: true;
    readonly happenedAt: true;
    readonly id: true;
    readonly latitude: true;
    readonly longitude: true;
    readonly message: true;
    readonly province: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly status: true;
    readonly updatedAt: true;
    readonly zipCode: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentEvent". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentEventOrDefault<Options extends Selectable<AvailableShopifyFulfillmentEventSelection>> = DeepFilterNever<Select<ShopifyFulfillmentEvent, DefaultSelection<AvailableShopifyFulfillmentEventSelection, Options, typeof DefaultShopifyFulfillmentEventSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentEventManager#findOne` method */
export interface FindOneShopifyFulfillmentEventOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentEventSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentEventManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentEventOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentEventSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyFulfillmentEvent" */
export declare class ShopifyFulfillmentEventManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentEventOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentEventOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentEventOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentEvent";
        modelApiIdentifier: "shopifyFulfillmentEvent";
        defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
        selectionType: AvailableShopifyFulfillmentEventSelection;
        optionsType: FindOneShopifyFulfillmentEventOptions;
        schemaType: Query["shopifyFulfillmentEvent"];
    };
    /**
 * Finds one shopifyFulfillmentEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentEventOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentEventOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentEventOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentEvent";
        modelApiIdentifier: "shopifyFulfillmentEvent";
        defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
        selectionType: AvailableShopifyFulfillmentEventSelection;
        optionsType: MaybeFindOneShopifyFulfillmentEventOptions;
        schemaType: Query["shopifyFulfillmentEvent"];
    };
    /**
 * Finds many shopifyFulfillmentEvent. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentEventsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentEventsOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentEventOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentEvents";
        modelApiIdentifier: "shopifyFulfillmentEvent";
        defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
        selectionType: AvailableShopifyFulfillmentEventSelection;
        optionsType: FindManyShopifyFulfillmentEventsOptions;
        schemaType: Query["shopifyFulfillmentEvent"];
    };
    /**
 * Finds the first matching shopifyFulfillmentEvent. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentEventOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentEventOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentEventOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentEvents";
        modelApiIdentifier: "shopifyFulfillmentEvent";
        defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
        selectionType: AvailableShopifyFulfillmentEventSelection;
        optionsType: FindFirstShopifyFulfillmentEventOptions;
        schemaType: Query["shopifyFulfillmentEvent"];
    };
    /**
 * Finds the first matching shopifyFulfillmentEvent. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentEventOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentEventOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentEventOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentEvents";
        modelApiIdentifier: "shopifyFulfillmentEvent";
        defaultSelection: typeof DefaultShopifyFulfillmentEventSelection;
        selectionType: AvailableShopifyFulfillmentEventSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentEventOptions;
        schemaType: Query["shopifyFulfillmentEvent"];
    };
}
