import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyFulfillmentOrder, ShopifyFulfillmentOrderSort, ShopifyFulfillmentOrderFilter, AvailableShopifyFulfillmentOrderSelection } from "../types.js";
export declare const DefaultShopifyFulfillmentOrderSelection: {
    readonly __typename: true;
    readonly assignedLocation: true;
    readonly createdAt: true;
    readonly deliveryMethod: true;
    readonly destination: true;
    readonly fulfillAt: true;
    readonly fulfillBy: true;
    readonly fulfillmentHolds: true;
    readonly id: true;
    readonly internationalDuties: true;
    readonly merchantRequests: true;
    readonly requestStatus: true;
    readonly status: true;
    readonly supportedActions: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderSelection>> = DeepFilterNever<Select<ShopifyFulfillmentOrder, DefaultSelection<AvailableShopifyFulfillmentOrderSelection, Options, typeof DefaultShopifyFulfillmentOrderSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findMany` method */
export interface FindManyShopifyFulfillmentOrdersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyFulfillmentOrder" */
export declare class ShopifyFulfillmentOrderManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrder";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: FindOneShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrder";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: MaybeFindOneShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds many shopifyFulfillmentOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrdersOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentOrderOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentOrders";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: FindManyShopifyFulfillmentOrdersOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentOrders";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: FindFirstShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentOrders";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
}
