import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyAsset, ShopifyAssetSort, ShopifyAssetFilter, AvailableShopifyAssetSelection } from "../types.js";
export declare const DefaultShopifyAssetSelection: {
    readonly __typename: true;
    readonly attachment: true;
    readonly checksum: true;
    readonly contentType: true;
    readonly createdAt: true;
    readonly id: true;
    readonly key: true;
    readonly publicUrl: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly size: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyAsset". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyAssetOrDefault<Options extends Selectable<AvailableShopifyAssetSelection>> = DeepFilterNever<Select<ShopifyAsset, DefaultSelection<AvailableShopifyAssetSelection, Options, typeof DefaultShopifyAssetSelection>>>;
/** Options that can be passed to the `ShopifyAssetManager#findOne` method */
export interface FindOneShopifyAssetOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAssetSelection;
}
/** Options that can be passed to the `ShopifyAssetManager#maybeFindOne` method */
export interface MaybeFindOneShopifyAssetOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAssetSelection;
}
/** Options that can be passed to the `ShopifyAssetManager#findMany` method */
export interface FindManyShopifyAssetsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAssetSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAssetSort | ShopifyAssetSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAssetFilter | ShopifyAssetFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyAssetManager#findFirst` method */
export interface FindFirstShopifyAssetOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAssetSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAssetSort | ShopifyAssetSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAssetFilter | ShopifyAssetFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyAssetManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyAssetOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAssetSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAssetSort | ShopifyAssetSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAssetFilter | ShopifyAssetFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyAsset" */
export declare class ShopifyAssetManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyAsset by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyAssetOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyAssetOptions>): Promise<GadgetRecord<SelectedShopifyAssetOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyAsset";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: FindOneShopifyAssetOptions;
        schemaType: Query["shopifyAsset"];
    };
    /**
 * Finds one shopifyAsset by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyAssetOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyAssetOptions>): Promise<GadgetRecord<SelectedShopifyAssetOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyAsset";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: MaybeFindOneShopifyAssetOptions;
        schemaType: Query["shopifyAsset"];
    };
    /**
 * Finds many shopifyAsset. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyAssetsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyAssetsOptions>): Promise<GadgetRecordList<SelectedShopifyAssetOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyAssets";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: FindManyShopifyAssetsOptions;
        schemaType: Query["shopifyAsset"];
    };
    /**
 * Finds the first matching shopifyAsset. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyAssetOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyAssetOptions>): Promise<GadgetRecord<SelectedShopifyAssetOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyAssets";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: FindFirstShopifyAssetOptions;
        schemaType: Query["shopifyAsset"];
    };
    /**
 * Finds the first matching shopifyAsset. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyAssetOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyAssetOptions>): Promise<GadgetRecord<SelectedShopifyAssetOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyAssets";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: MaybeFindFirstShopifyAssetOptions;
        schemaType: Query["shopifyAsset"];
    };
    /**
  * Finds one shopifyAsset by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifyAssetOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyAssetOptions>): Promise<GadgetRecord<SelectedShopifyAssetOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyAssets";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: FindOneShopifyAssetOptions;
        schemaType: Query["shopifyAsset"];
    };
    /**
  * Finds one shopifyAsset by its key. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findByKey: {
        <Options extends FindOneShopifyAssetOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyAssetOptions>): Promise<GadgetRecord<SelectedShopifyAssetOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "key";
        operationName: "shopifyAssets";
        modelApiIdentifier: "shopifyAsset";
        defaultSelection: typeof DefaultShopifyAssetSelection;
        selectionType: AvailableShopifyAssetSelection;
        optionsType: FindOneShopifyAssetOptions;
        schemaType: Query["shopifyAsset"];
    };
}
