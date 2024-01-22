import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyFulfillmentOrderLineItem, ShopifyFulfillmentOrderLineItemSort, ShopifyFulfillmentOrderLineItemFilter, AvailableShopifyFulfillmentOrderLineItemSelection } from "../types.js";
export declare const DefaultShopifyFulfillmentOrderLineItemSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly quantity: true;
    readonly remainingQuantity: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderLineItemSelection>> = DeepFilterNever<Select<ShopifyFulfillmentOrderLineItem, DefaultSelection<AvailableShopifyFulfillmentOrderLineItemSelection, Options, typeof DefaultShopifyFulfillmentOrderLineItemSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentOrderLineItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyFulfillmentOrderLineItem" */
export declare class ShopifyFulfillmentOrderLineItemManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrderLineItem";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: FindOneShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrderLineItem";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: MaybeFindOneShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds many shopifyFulfillmentOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrderLineItemsOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentOrderLineItems";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: FindManyShopifyFulfillmentOrderLineItemsOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentOrderLineItems";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: FindFirstShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentOrderLineItems";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
}
