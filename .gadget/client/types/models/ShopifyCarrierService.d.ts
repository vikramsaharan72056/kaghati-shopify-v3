import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyCarrierService, ShopifyCarrierServiceSort, ShopifyCarrierServiceFilter, AvailableShopifyCarrierServiceSelection } from "../types.js";
export declare const DefaultShopifyCarrierServiceSelection: {
    readonly __typename: true;
    readonly active: true;
    readonly callbackUrl: true;
    readonly carrierServiceType: true;
    readonly createdAt: true;
    readonly format: true;
    readonly id: true;
    readonly name: true;
    readonly serviceDiscovery: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCarrierService". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCarrierServiceOrDefault<Options extends Selectable<AvailableShopifyCarrierServiceSelection>> = DeepFilterNever<Select<ShopifyCarrierService, DefaultSelection<AvailableShopifyCarrierServiceSelection, Options, typeof DefaultShopifyCarrierServiceSelection>>>;
/** Options that can be passed to the `ShopifyCarrierServiceManager#findOne` method */
export interface FindOneShopifyCarrierServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCarrierServiceSelection;
}
/** Options that can be passed to the `ShopifyCarrierServiceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCarrierServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCarrierServiceSelection;
}
/** Options that can be passed to the `ShopifyCarrierServiceManager#findMany` method */
export interface FindManyShopifyCarrierServicesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCarrierServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCarrierServiceSort | ShopifyCarrierServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCarrierServiceFilter | ShopifyCarrierServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCarrierServiceManager#findFirst` method */
export interface FindFirstShopifyCarrierServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCarrierServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCarrierServiceSort | ShopifyCarrierServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCarrierServiceFilter | ShopifyCarrierServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCarrierServiceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCarrierServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCarrierServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCarrierServiceSort | ShopifyCarrierServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCarrierServiceFilter | ShopifyCarrierServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyCarrierService" */
export declare class ShopifyCarrierServiceManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCarrierService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCarrierServiceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCarrierServiceOptions>): Promise<GadgetRecord<SelectedShopifyCarrierServiceOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCarrierService";
        modelApiIdentifier: "shopifyCarrierService";
        defaultSelection: typeof DefaultShopifyCarrierServiceSelection;
        selectionType: AvailableShopifyCarrierServiceSelection;
        optionsType: FindOneShopifyCarrierServiceOptions;
        schemaType: Query["shopifyCarrierService"];
    };
    /**
 * Finds one shopifyCarrierService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCarrierServiceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCarrierServiceOptions>): Promise<GadgetRecord<SelectedShopifyCarrierServiceOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCarrierService";
        modelApiIdentifier: "shopifyCarrierService";
        defaultSelection: typeof DefaultShopifyCarrierServiceSelection;
        selectionType: AvailableShopifyCarrierServiceSelection;
        optionsType: MaybeFindOneShopifyCarrierServiceOptions;
        schemaType: Query["shopifyCarrierService"];
    };
    /**
 * Finds many shopifyCarrierService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCarrierServicesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCarrierServicesOptions>): Promise<GadgetRecordList<SelectedShopifyCarrierServiceOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCarrierServices";
        modelApiIdentifier: "shopifyCarrierService";
        defaultSelection: typeof DefaultShopifyCarrierServiceSelection;
        selectionType: AvailableShopifyCarrierServiceSelection;
        optionsType: FindManyShopifyCarrierServicesOptions;
        schemaType: Query["shopifyCarrierService"];
    };
    /**
 * Finds the first matching shopifyCarrierService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCarrierServiceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCarrierServiceOptions>): Promise<GadgetRecord<SelectedShopifyCarrierServiceOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCarrierServices";
        modelApiIdentifier: "shopifyCarrierService";
        defaultSelection: typeof DefaultShopifyCarrierServiceSelection;
        selectionType: AvailableShopifyCarrierServiceSelection;
        optionsType: FindFirstShopifyCarrierServiceOptions;
        schemaType: Query["shopifyCarrierService"];
    };
    /**
 * Finds the first matching shopifyCarrierService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCarrierServiceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCarrierServiceOptions>): Promise<GadgetRecord<SelectedShopifyCarrierServiceOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCarrierServices";
        modelApiIdentifier: "shopifyCarrierService";
        defaultSelection: typeof DefaultShopifyCarrierServiceSelection;
        selectionType: AvailableShopifyCarrierServiceSelection;
        optionsType: MaybeFindFirstShopifyCarrierServiceOptions;
        schemaType: Query["shopifyCarrierService"];
    };
}
