import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyDraftOrder, ShopifyDraftOrderSort, ShopifyDraftOrderFilter, AvailableShopifyDraftOrderSelection } from "../types.js";
export declare const DefaultShopifyDraftOrderSelection: {
    readonly __typename: true;
    readonly appliedDiscount: true;
    readonly billingAddress: true;
    readonly completedAt: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly email: true;
    readonly id: true;
    readonly invoiceSentAt: true;
    readonly invoiceUrl: true;
    readonly name: true;
    readonly note: true;
    readonly noteAttributes: true;
    readonly order: true;
    readonly poNumber: true;
    readonly shippingAddress: true;
    readonly shippingLine: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly status: true;
    readonly subtotalPrice: true;
    readonly tags: true;
    readonly taxExempt: true;
    readonly taxExemptions: true;
    readonly taxLines: true;
    readonly taxesIncluded: true;
    readonly totalPrice: true;
    readonly totalTax: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDraftOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDraftOrderOrDefault<Options extends Selectable<AvailableShopifyDraftOrderSelection>> = DeepFilterNever<Select<ShopifyDraftOrder, DefaultSelection<AvailableShopifyDraftOrderSelection, Options, typeof DefaultShopifyDraftOrderSelection>>>;
/** Options that can be passed to the `ShopifyDraftOrderManager#findOne` method */
export interface FindOneShopifyDraftOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderSelection;
}
/** Options that can be passed to the `ShopifyDraftOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDraftOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderSelection;
}
/** Options that can be passed to the `ShopifyDraftOrderManager#findMany` method */
export interface FindManyShopifyDraftOrdersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDraftOrderSort | ShopifyDraftOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDraftOrderFilter | ShopifyDraftOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyDraftOrderManager#findFirst` method */
export interface FindFirstShopifyDraftOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDraftOrderSort | ShopifyDraftOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDraftOrderFilter | ShopifyDraftOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyDraftOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDraftOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDraftOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDraftOrderSort | ShopifyDraftOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDraftOrderFilter | ShopifyDraftOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyDraftOrder" */
export declare class ShopifyDraftOrderManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyDraftOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyDraftOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDraftOrderOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyDraftOrder";
        modelApiIdentifier: "shopifyDraftOrder";
        defaultSelection: typeof DefaultShopifyDraftOrderSelection;
        selectionType: AvailableShopifyDraftOrderSelection;
        optionsType: FindOneShopifyDraftOrderOptions;
        schemaType: Query["shopifyDraftOrder"];
    };
    /**
 * Finds one shopifyDraftOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyDraftOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDraftOrderOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyDraftOrder";
        modelApiIdentifier: "shopifyDraftOrder";
        defaultSelection: typeof DefaultShopifyDraftOrderSelection;
        selectionType: AvailableShopifyDraftOrderSelection;
        optionsType: MaybeFindOneShopifyDraftOrderOptions;
        schemaType: Query["shopifyDraftOrder"];
    };
    /**
 * Finds many shopifyDraftOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyDraftOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDraftOrdersOptions>): Promise<GadgetRecordList<SelectedShopifyDraftOrderOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyDraftOrders";
        modelApiIdentifier: "shopifyDraftOrder";
        defaultSelection: typeof DefaultShopifyDraftOrderSelection;
        selectionType: AvailableShopifyDraftOrderSelection;
        optionsType: FindManyShopifyDraftOrdersOptions;
        schemaType: Query["shopifyDraftOrder"];
    };
    /**
 * Finds the first matching shopifyDraftOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyDraftOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDraftOrderOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyDraftOrders";
        modelApiIdentifier: "shopifyDraftOrder";
        defaultSelection: typeof DefaultShopifyDraftOrderSelection;
        selectionType: AvailableShopifyDraftOrderSelection;
        optionsType: FindFirstShopifyDraftOrderOptions;
        schemaType: Query["shopifyDraftOrder"];
    };
    /**
 * Finds the first matching shopifyDraftOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyDraftOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDraftOrderOptions>): Promise<GadgetRecord<SelectedShopifyDraftOrderOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyDraftOrders";
        modelApiIdentifier: "shopifyDraftOrder";
        defaultSelection: typeof DefaultShopifyDraftOrderSelection;
        selectionType: AvailableShopifyDraftOrderSelection;
        optionsType: MaybeFindFirstShopifyDraftOrderOptions;
        schemaType: Query["shopifyDraftOrder"];
    };
}
