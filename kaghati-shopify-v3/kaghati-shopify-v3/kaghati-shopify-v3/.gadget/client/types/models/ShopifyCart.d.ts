import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyCart, ShopifyCartSort, ShopifyCartFilter, AvailableShopifyCartSelection } from "../types.js";
export declare const DefaultShopifyCartSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly note: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly token: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCart". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCartOrDefault<Options extends Selectable<AvailableShopifyCartSelection>> = DeepFilterNever<Select<ShopifyCart, DefaultSelection<AvailableShopifyCartSelection, Options, typeof DefaultShopifyCartSelection>>>;
/** Options that can be passed to the `ShopifyCartManager#findOne` method */
export interface FindOneShopifyCartOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCartSelection;
}
/** Options that can be passed to the `ShopifyCartManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCartOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCartSelection;
}
/** Options that can be passed to the `ShopifyCartManager#findMany` method */
export interface FindManyShopifyCartsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCartSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCartSort | ShopifyCartSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCartFilter | ShopifyCartFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCartManager#findFirst` method */
export interface FindFirstShopifyCartOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCartSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCartSort | ShopifyCartSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCartFilter | ShopifyCartFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCartManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCartOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCartSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCartSort | ShopifyCartSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCartFilter | ShopifyCartFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyCart" */
export declare class ShopifyCartManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCart by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCartOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCartOptions>): Promise<GadgetRecord<SelectedShopifyCartOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCart";
        modelApiIdentifier: "shopifyCart";
        defaultSelection: typeof DefaultShopifyCartSelection;
        selectionType: AvailableShopifyCartSelection;
        optionsType: FindOneShopifyCartOptions;
        schemaType: Query["shopifyCart"];
    };
    /**
 * Finds one shopifyCart by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCartOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCartOptions>): Promise<GadgetRecord<SelectedShopifyCartOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCart";
        modelApiIdentifier: "shopifyCart";
        defaultSelection: typeof DefaultShopifyCartSelection;
        selectionType: AvailableShopifyCartSelection;
        optionsType: MaybeFindOneShopifyCartOptions;
        schemaType: Query["shopifyCart"];
    };
    /**
 * Finds many shopifyCart. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCartsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCartsOptions>): Promise<GadgetRecordList<SelectedShopifyCartOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCarts";
        modelApiIdentifier: "shopifyCart";
        defaultSelection: typeof DefaultShopifyCartSelection;
        selectionType: AvailableShopifyCartSelection;
        optionsType: FindManyShopifyCartsOptions;
        schemaType: Query["shopifyCart"];
    };
    /**
 * Finds the first matching shopifyCart. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCartOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCartOptions>): Promise<GadgetRecord<SelectedShopifyCartOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCarts";
        modelApiIdentifier: "shopifyCart";
        defaultSelection: typeof DefaultShopifyCartSelection;
        selectionType: AvailableShopifyCartSelection;
        optionsType: FindFirstShopifyCartOptions;
        schemaType: Query["shopifyCart"];
    };
    /**
 * Finds the first matching shopifyCart. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCartOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCartOptions>): Promise<GadgetRecord<SelectedShopifyCartOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCarts";
        modelApiIdentifier: "shopifyCart";
        defaultSelection: typeof DefaultShopifyCartSelection;
        selectionType: AvailableShopifyCartSelection;
        optionsType: MaybeFindFirstShopifyCartOptions;
        schemaType: Query["shopifyCart"];
    };
    /**
  * Finds one shopifyCart by its token. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findByToken: {
        <Options extends FindOneShopifyCartOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCartOptions>): Promise<GadgetRecord<SelectedShopifyCartOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "token";
        operationName: "shopifyCarts";
        modelApiIdentifier: "shopifyCart";
        defaultSelection: typeof DefaultShopifyCartSelection;
        selectionType: AvailableShopifyCartSelection;
        optionsType: FindOneShopifyCartOptions;
        schemaType: Query["shopifyCart"];
    };
}
