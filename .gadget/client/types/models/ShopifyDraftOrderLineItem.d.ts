import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyDraftOrderLineItem, ShopifyDraftOrderLineItemSort, ShopifyDraftOrderLineItemFilter, AvailableShopifyDraftOrderLineItemSelection } from "../types.js";
export declare const DefaultShopifyDraftOrderLineItemSelection: {
    readonly __typename: true;
    readonly appliedDiscount: true;
    readonly createdAt: true;
    readonly fulfillmentService: true;
    readonly giftCard: true;
    readonly grams: true;
    readonly id: true;
    readonly name: true;
    readonly price: true;
    readonly properties: true;
    readonly quantity: true;
    readonly requiresShipping: true;
    readonly sku: true;
    readonly taxLines: true;
    readonly taxable: true;
    readonly title: true;
    readonly updatedAt: true;
    readonly variantTitle: true;
    readonly vendor: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDraftOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDraftOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyDraftOrderLineItemSelection>> = DeepFilterNever<Select<ShopifyDraftOrderLineItem, DefaultSelection<AvailableShopifyDraftOrderLineItemSelection, Options, typeof DefaultShopifyDraftOrderLineItemSelection>>>;
/** Options that can be passed to the `ShopifyDraftOrderLineItemManager#findOne` method */
export interface FindOneShopifyDraftOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyDraftOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDraftOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyDraftOrderLineItemManager#findMany` method */
export interface FindManyShopifyDraftOrderLineItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDraftOrderLineItemSort | ShopifyDraftOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDraftOrderLineItemFilter | ShopifyDraftOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyDraftOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyDraftOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDraftOrderLineItemSort | ShopifyDraftOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDraftOrderLineItemFilter | ShopifyDraftOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyDraftOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDraftOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDraftOrderLineItemSort | ShopifyDraftOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDraftOrderLineItemFilter | ShopifyDraftOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyDraftOrderLineItem" */
export declare class ShopifyDraftOrderLineItemManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyDraftOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyDraftOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDraftOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyDraftOrderLineItem";
        modelApiIdentifier: "shopifyDraftOrderLineItem";
        defaultSelection: typeof DefaultShopifyDraftOrderLineItemSelection;
        selectionType: AvailableShopifyDraftOrderLineItemSelection;
        optionsType: FindOneShopifyDraftOrderLineItemOptions;
        schemaType: Query["shopifyDraftOrderLineItem"];
    };
    /**
 * Finds one shopifyDraftOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyDraftOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDraftOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyDraftOrderLineItem";
        modelApiIdentifier: "shopifyDraftOrderLineItem";
        defaultSelection: typeof DefaultShopifyDraftOrderLineItemSelection;
        selectionType: AvailableShopifyDraftOrderLineItemSelection;
        optionsType: MaybeFindOneShopifyDraftOrderLineItemOptions;
        schemaType: Query["shopifyDraftOrderLineItem"];
    };
    /**
 * Finds many shopifyDraftOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyDraftOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDraftOrderLineItemsOptions>): Promise<GadgetRecordList<SelectedShopifyDraftOrderLineItemOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyDraftOrderLineItems";
        modelApiIdentifier: "shopifyDraftOrderLineItem";
        defaultSelection: typeof DefaultShopifyDraftOrderLineItemSelection;
        selectionType: AvailableShopifyDraftOrderLineItemSelection;
        optionsType: FindManyShopifyDraftOrderLineItemsOptions;
        schemaType: Query["shopifyDraftOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyDraftOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyDraftOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDraftOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderLineItemOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyDraftOrderLineItems";
        modelApiIdentifier: "shopifyDraftOrderLineItem";
        defaultSelection: typeof DefaultShopifyDraftOrderLineItemSelection;
        selectionType: AvailableShopifyDraftOrderLineItemSelection;
        optionsType: FindFirstShopifyDraftOrderLineItemOptions;
        schemaType: Query["shopifyDraftOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyDraftOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyDraftOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDraftOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyDraftOrderLineItems";
        modelApiIdentifier: "shopifyDraftOrderLineItem";
        defaultSelection: typeof DefaultShopifyDraftOrderLineItemSelection;
        selectionType: AvailableShopifyDraftOrderLineItemSelection;
        optionsType: MaybeFindFirstShopifyDraftOrderLineItemOptions;
        schemaType: Query["shopifyDraftOrderLineItem"];
    };
}
