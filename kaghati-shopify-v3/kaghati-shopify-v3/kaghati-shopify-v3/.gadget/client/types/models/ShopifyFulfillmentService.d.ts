import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyFulfillmentService, ShopifyFulfillmentServiceSort, ShopifyFulfillmentServiceFilter, AvailableShopifyFulfillmentServiceSelection } from "../types.js";
export declare const DefaultShopifyFulfillmentServiceSelection: {
    readonly __typename: true;
    readonly callbackUrl: true;
    readonly createdAt: true;
    readonly format: true;
    readonly fulfillmentOrdersOptIn: true;
    readonly handle: true;
    readonly id: true;
    readonly inventoryManagement: true;
    readonly name: true;
    readonly permitsSkuSharing: true;
    readonly requiresShippingMethod: true;
    readonly trackingSupport: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentService". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentServiceOrDefault<Options extends Selectable<AvailableShopifyFulfillmentServiceSelection>> = DeepFilterNever<Select<ShopifyFulfillmentService, DefaultSelection<AvailableShopifyFulfillmentServiceSelection, Options, typeof DefaultShopifyFulfillmentServiceSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findOne` method */
export interface FindOneShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findMany` method */
export interface FindManyShopifyFulfillmentServicesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findFirst` method */
export interface FindFirstShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyFulfillmentService" */
export declare class ShopifyFulfillmentServiceManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentService";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: FindOneShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentService";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: MaybeFindOneShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds many shopifyFulfillmentService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentServicesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentServicesOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentServiceOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentServices";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: FindManyShopifyFulfillmentServicesOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentServices";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: FindFirstShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentServices";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
}
