import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyCustomerMergeable, ShopifyCustomerMergeableSort, ShopifyCustomerMergeableFilter, AvailableShopifyCustomerMergeableSelection } from "../types.js";
export declare const DefaultShopifyCustomerMergeableSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly errorFields: true;
    readonly id: true;
    readonly isMergeable: true;
    readonly mergeInProgress: true;
    readonly reason: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomerMergeable". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerMergeableOrDefault<Options extends Selectable<AvailableShopifyCustomerMergeableSelection>> = DeepFilterNever<Select<ShopifyCustomerMergeable, DefaultSelection<AvailableShopifyCustomerMergeableSelection, Options, typeof DefaultShopifyCustomerMergeableSelection>>>;
/** Options that can be passed to the `ShopifyCustomerMergeableManager#findOne` method */
export interface FindOneShopifyCustomerMergeableOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerMergeableSelection;
}
/** Options that can be passed to the `ShopifyCustomerMergeableManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerMergeableOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerMergeableSelection;
}
/** Options that can be passed to the `ShopifyCustomerMergeableManager#findMany` method */
export interface FindManyShopifyCustomerMergeablesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerMergeableSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerMergeableSort | ShopifyCustomerMergeableSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerMergeableFilter | ShopifyCustomerMergeableFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCustomerMergeableManager#findFirst` method */
export interface FindFirstShopifyCustomerMergeableOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerMergeableSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerMergeableSort | ShopifyCustomerMergeableSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerMergeableFilter | ShopifyCustomerMergeableFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCustomerMergeableManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerMergeableOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerMergeableSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerMergeableSort | ShopifyCustomerMergeableSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerMergeableFilter | ShopifyCustomerMergeableFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyCustomerMergeable" */
export declare class ShopifyCustomerMergeableManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCustomerMergeable by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCustomerMergeableOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerMergeableOptions>): Promise<GadgetRecord<SelectedShopifyCustomerMergeableOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCustomerMergeable";
        modelApiIdentifier: "shopifyCustomerMergeable";
        defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
        selectionType: AvailableShopifyCustomerMergeableSelection;
        optionsType: FindOneShopifyCustomerMergeableOptions;
        schemaType: Query["shopifyCustomerMergeable"];
    };
    /**
 * Finds one shopifyCustomerMergeable by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCustomerMergeableOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerMergeableOptions>): Promise<GadgetRecord<SelectedShopifyCustomerMergeableOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCustomerMergeable";
        modelApiIdentifier: "shopifyCustomerMergeable";
        defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
        selectionType: AvailableShopifyCustomerMergeableSelection;
        optionsType: MaybeFindOneShopifyCustomerMergeableOptions;
        schemaType: Query["shopifyCustomerMergeable"];
    };
    /**
 * Finds many shopifyCustomerMergeable. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCustomerMergeablesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerMergeablesOptions>): Promise<GadgetRecordList<SelectedShopifyCustomerMergeableOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCustomerMergeables";
        modelApiIdentifier: "shopifyCustomerMergeable";
        defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
        selectionType: AvailableShopifyCustomerMergeableSelection;
        optionsType: FindManyShopifyCustomerMergeablesOptions;
        schemaType: Query["shopifyCustomerMergeable"];
    };
    /**
 * Finds the first matching shopifyCustomerMergeable. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCustomerMergeableOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerMergeableOptions>): Promise<GadgetRecord<SelectedShopifyCustomerMergeableOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCustomerMergeables";
        modelApiIdentifier: "shopifyCustomerMergeable";
        defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
        selectionType: AvailableShopifyCustomerMergeableSelection;
        optionsType: FindFirstShopifyCustomerMergeableOptions;
        schemaType: Query["shopifyCustomerMergeable"];
    };
    /**
 * Finds the first matching shopifyCustomerMergeable. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCustomerMergeableOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerMergeableOptions>): Promise<GadgetRecord<SelectedShopifyCustomerMergeableOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCustomerMergeables";
        modelApiIdentifier: "shopifyCustomerMergeable";
        defaultSelection: typeof DefaultShopifyCustomerMergeableSelection;
        selectionType: AvailableShopifyCustomerMergeableSelection;
        optionsType: MaybeFindFirstShopifyCustomerMergeableOptions;
        schemaType: Query["shopifyCustomerMergeable"];
    };
}
