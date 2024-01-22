import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyOrderTransaction, ShopifyOrderTransactionSort, ShopifyOrderTransactionFilter, AvailableShopifyOrderTransactionSelection } from "../types.js";
export declare const DefaultShopifyOrderTransactionSelection: {
    readonly __typename: true;
    readonly amount: true;
    readonly authorization: true;
    readonly authorizationExpiresAt: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly errorCode: true;
    readonly extendedAuthorizationAttributes: true;
    readonly gateway: true;
    readonly id: true;
    readonly kind: true;
    readonly message: true;
    readonly paymentDetails: true;
    readonly paymentId: true;
    readonly paymentsRefundAttributes: true;
    readonly processedAt: true;
    readonly receipt: true;
    readonly shopifyCreatedAt: true;
    readonly sourceName: true;
    readonly status: true;
    readonly test: true;
    readonly totalUnsettledSet: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrderTransaction". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderTransactionOrDefault<Options extends Selectable<AvailableShopifyOrderTransactionSelection>> = DeepFilterNever<Select<ShopifyOrderTransaction, DefaultSelection<AvailableShopifyOrderTransactionSelection, Options, typeof DefaultShopifyOrderTransactionSelection>>>;
/** Options that can be passed to the `ShopifyOrderTransactionManager#findOne` method */
export interface FindOneShopifyOrderTransactionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderTransactionSelection;
}
/** Options that can be passed to the `ShopifyOrderTransactionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderTransactionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderTransactionSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyOrderTransaction" */
export declare class ShopifyOrderTransactionManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyOrderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyOrderTransactionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyOrderTransaction";
        modelApiIdentifier: "shopifyOrderTransaction";
        defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
        selectionType: AvailableShopifyOrderTransactionSelection;
        optionsType: FindOneShopifyOrderTransactionOptions;
        schemaType: Query["shopifyOrderTransaction"];
    };
    /**
 * Finds one shopifyOrderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyOrderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyOrderTransactionOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyOrderTransaction";
        modelApiIdentifier: "shopifyOrderTransaction";
        defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
        selectionType: AvailableShopifyOrderTransactionSelection;
        optionsType: MaybeFindOneShopifyOrderTransactionOptions;
        schemaType: Query["shopifyOrderTransaction"];
    };
    /**
 * Finds many shopifyOrderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyOrderTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderTransactionsOptions>): Promise<GadgetRecordList<SelectedShopifyOrderTransactionOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyOrderTransactions";
        modelApiIdentifier: "shopifyOrderTransaction";
        defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
        selectionType: AvailableShopifyOrderTransactionSelection;
        optionsType: FindManyShopifyOrderTransactionsOptions;
        schemaType: Query["shopifyOrderTransaction"];
    };
    /**
 * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyOrderTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyOrderTransactionOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyOrderTransactions";
        modelApiIdentifier: "shopifyOrderTransaction";
        defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
        selectionType: AvailableShopifyOrderTransactionSelection;
        optionsType: FindFirstShopifyOrderTransactionOptions;
        schemaType: Query["shopifyOrderTransaction"];
    };
    /**
 * Finds the first matching shopifyOrderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyOrderTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyOrderTransactionOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyOrderTransactions";
        modelApiIdentifier: "shopifyOrderTransaction";
        defaultSelection: typeof DefaultShopifyOrderTransactionSelection;
        selectionType: AvailableShopifyOrderTransactionSelection;
        optionsType: MaybeFindFirstShopifyOrderTransactionOptions;
        schemaType: Query["shopifyOrderTransaction"];
    };
}
