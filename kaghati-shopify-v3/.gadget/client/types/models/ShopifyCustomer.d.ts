import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyCustomer, ShopifyCustomerSort, ShopifyCustomerFilter, AvailableShopifyCustomerSelection } from "../types.js";
export declare const DefaultShopifyCustomerSelection: {
    readonly __typename: true;
    readonly acceptsMarketing: true;
    readonly acceptsMarketingUpdatedAt: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly email: true;
    readonly emailMarketingConsent: true;
    readonly firstName: true;
    readonly id: true;
    readonly lastName: true;
    readonly lastOrderName: true;
    readonly marketingOptInLevel: true;
    readonly metafield: true;
    readonly multipassIdentifier: true;
    readonly note: true;
    readonly ordersCount: true;
    readonly phone: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyState: true;
    readonly shopifyUpdatedAt: true;
    readonly smsMarketingConsent: true;
    readonly statistics: true;
    readonly tags: true;
    readonly taxExempt: true;
    readonly taxExemptions: true;
    readonly totalSpent: true;
    readonly updatedAt: true;
    readonly verifiedEmail: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomer". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerOrDefault<Options extends Selectable<AvailableShopifyCustomerSelection>> = DeepFilterNever<Select<ShopifyCustomer, DefaultSelection<AvailableShopifyCustomerSelection, Options, typeof DefaultShopifyCustomerSelection>>>;
/** Options that can be passed to the `ShopifyCustomerManager#findOne` method */
export interface FindOneShopifyCustomerOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerSelection;
}
/** Options that can be passed to the `ShopifyCustomerManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerSelection;
}
/** Options that can be passed to the `ShopifyCustomerManager#findMany` method */
export interface FindManyShopifyCustomersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerSort | ShopifyCustomerSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerFilter | ShopifyCustomerFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCustomerManager#findFirst` method */
export interface FindFirstShopifyCustomerOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerSort | ShopifyCustomerSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerFilter | ShopifyCustomerFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCustomerManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerSort | ShopifyCustomerSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerFilter | ShopifyCustomerFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyCustomer" */
export declare class ShopifyCustomerManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCustomer by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCustomerOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerOptions>): Promise<GadgetRecord<SelectedShopifyCustomerOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCustomer";
        modelApiIdentifier: "shopifyCustomer";
        defaultSelection: typeof DefaultShopifyCustomerSelection;
        selectionType: AvailableShopifyCustomerSelection;
        optionsType: FindOneShopifyCustomerOptions;
        schemaType: Query["shopifyCustomer"];
    };
    /**
 * Finds one shopifyCustomer by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCustomerOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerOptions>): Promise<GadgetRecord<SelectedShopifyCustomerOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCustomer";
        modelApiIdentifier: "shopifyCustomer";
        defaultSelection: typeof DefaultShopifyCustomerSelection;
        selectionType: AvailableShopifyCustomerSelection;
        optionsType: MaybeFindOneShopifyCustomerOptions;
        schemaType: Query["shopifyCustomer"];
    };
    /**
 * Finds many shopifyCustomer. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCustomersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomersOptions>): Promise<GadgetRecordList<SelectedShopifyCustomerOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCustomers";
        modelApiIdentifier: "shopifyCustomer";
        defaultSelection: typeof DefaultShopifyCustomerSelection;
        selectionType: AvailableShopifyCustomerSelection;
        optionsType: FindManyShopifyCustomersOptions;
        schemaType: Query["shopifyCustomer"];
    };
    /**
 * Finds the first matching shopifyCustomer. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCustomerOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerOptions>): Promise<GadgetRecord<SelectedShopifyCustomerOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCustomers";
        modelApiIdentifier: "shopifyCustomer";
        defaultSelection: typeof DefaultShopifyCustomerSelection;
        selectionType: AvailableShopifyCustomerSelection;
        optionsType: FindFirstShopifyCustomerOptions;
        schemaType: Query["shopifyCustomer"];
    };
    /**
 * Finds the first matching shopifyCustomer. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCustomerOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerOptions>): Promise<GadgetRecord<SelectedShopifyCustomerOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCustomers";
        modelApiIdentifier: "shopifyCustomer";
        defaultSelection: typeof DefaultShopifyCustomerSelection;
        selectionType: AvailableShopifyCustomerSelection;
        optionsType: MaybeFindFirstShopifyCustomerOptions;
        schemaType: Query["shopifyCustomer"];
    };
}
