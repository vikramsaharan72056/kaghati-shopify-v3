import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyTheme, ShopifyThemeSort, ShopifyThemeFilter, AvailableShopifyThemeSelection } from "../types.js";
export declare const DefaultShopifyThemeSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly name: true;
    readonly previewable: true;
    readonly processing: true;
    readonly role: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly themeStoreId: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyTheme". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyThemeOrDefault<Options extends Selectable<AvailableShopifyThemeSelection>> = DeepFilterNever<Select<ShopifyTheme, DefaultSelection<AvailableShopifyThemeSelection, Options, typeof DefaultShopifyThemeSelection>>>;
/** Options that can be passed to the `ShopifyThemeManager#findOne` method */
export interface FindOneShopifyThemeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyThemeSelection;
}
/** Options that can be passed to the `ShopifyThemeManager#maybeFindOne` method */
export interface MaybeFindOneShopifyThemeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyThemeSelection;
}
/** Options that can be passed to the `ShopifyThemeManager#findMany` method */
export interface FindManyShopifyThemesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyThemeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyThemeSort | ShopifyThemeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyThemeFilter | ShopifyThemeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyThemeManager#findFirst` method */
export interface FindFirstShopifyThemeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyThemeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyThemeSort | ShopifyThemeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyThemeFilter | ShopifyThemeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyThemeManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyThemeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyThemeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyThemeSort | ShopifyThemeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyThemeFilter | ShopifyThemeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyTheme" */
export declare class ShopifyThemeManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyTheme by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyThemeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyThemeOptions>): Promise<GadgetRecord<SelectedShopifyThemeOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyTheme";
        modelApiIdentifier: "shopifyTheme";
        defaultSelection: typeof DefaultShopifyThemeSelection;
        selectionType: AvailableShopifyThemeSelection;
        optionsType: FindOneShopifyThemeOptions;
        schemaType: Query["shopifyTheme"];
    };
    /**
 * Finds one shopifyTheme by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyThemeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyThemeOptions>): Promise<GadgetRecord<SelectedShopifyThemeOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyTheme";
        modelApiIdentifier: "shopifyTheme";
        defaultSelection: typeof DefaultShopifyThemeSelection;
        selectionType: AvailableShopifyThemeSelection;
        optionsType: MaybeFindOneShopifyThemeOptions;
        schemaType: Query["shopifyTheme"];
    };
    /**
 * Finds many shopifyTheme. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyThemesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyThemesOptions>): Promise<GadgetRecordList<SelectedShopifyThemeOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyThemes";
        modelApiIdentifier: "shopifyTheme";
        defaultSelection: typeof DefaultShopifyThemeSelection;
        selectionType: AvailableShopifyThemeSelection;
        optionsType: FindManyShopifyThemesOptions;
        schemaType: Query["shopifyTheme"];
    };
    /**
 * Finds the first matching shopifyTheme. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyThemeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyThemeOptions>): Promise<GadgetRecord<SelectedShopifyThemeOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyThemes";
        modelApiIdentifier: "shopifyTheme";
        defaultSelection: typeof DefaultShopifyThemeSelection;
        selectionType: AvailableShopifyThemeSelection;
        optionsType: FindFirstShopifyThemeOptions;
        schemaType: Query["shopifyTheme"];
    };
    /**
 * Finds the first matching shopifyTheme. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyThemeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyThemeOptions>): Promise<GadgetRecord<SelectedShopifyThemeOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyThemes";
        modelApiIdentifier: "shopifyTheme";
        defaultSelection: typeof DefaultShopifyThemeSelection;
        selectionType: AvailableShopifyThemeSelection;
        optionsType: MaybeFindFirstShopifyThemeOptions;
        schemaType: Query["shopifyTheme"];
    };
}
