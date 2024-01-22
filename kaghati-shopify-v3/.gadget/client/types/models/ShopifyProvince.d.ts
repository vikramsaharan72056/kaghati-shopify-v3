import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyProvince, ShopifyProvinceSort, ShopifyProvinceFilter, AvailableShopifyProvinceSelection } from "../types.js";
export declare const DefaultShopifyProvinceSelection: {
    readonly __typename: true;
    readonly code: true;
    readonly createdAt: true;
    readonly id: true;
    readonly name: true;
    readonly tax: true;
    readonly taxName: true;
    readonly taxPercentage: true;
    readonly taxType: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProvince". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProvinceOrDefault<Options extends Selectable<AvailableShopifyProvinceSelection>> = DeepFilterNever<Select<ShopifyProvince, DefaultSelection<AvailableShopifyProvinceSelection, Options, typeof DefaultShopifyProvinceSelection>>>;
/** Options that can be passed to the `ShopifyProvinceManager#findOne` method */
export interface FindOneShopifyProvinceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProvinceSelection;
}
/** Options that can be passed to the `ShopifyProvinceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProvinceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProvinceSelection;
}
/** Options that can be passed to the `ShopifyProvinceManager#findMany` method */
export interface FindManyShopifyProvincesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProvinceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProvinceSort | ShopifyProvinceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProvinceFilter | ShopifyProvinceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyProvinceManager#findFirst` method */
export interface FindFirstShopifyProvinceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProvinceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProvinceSort | ShopifyProvinceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProvinceFilter | ShopifyProvinceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyProvinceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProvinceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProvinceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProvinceSort | ShopifyProvinceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProvinceFilter | ShopifyProvinceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyProvince" */
export declare class ShopifyProvinceManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyProvince by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyProvinceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProvinceOptions>): Promise<GadgetRecord<SelectedShopifyProvinceOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyProvince";
        modelApiIdentifier: "shopifyProvince";
        defaultSelection: typeof DefaultShopifyProvinceSelection;
        selectionType: AvailableShopifyProvinceSelection;
        optionsType: FindOneShopifyProvinceOptions;
        schemaType: Query["shopifyProvince"];
    };
    /**
 * Finds one shopifyProvince by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyProvinceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProvinceOptions>): Promise<GadgetRecord<SelectedShopifyProvinceOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyProvince";
        modelApiIdentifier: "shopifyProvince";
        defaultSelection: typeof DefaultShopifyProvinceSelection;
        selectionType: AvailableShopifyProvinceSelection;
        optionsType: MaybeFindOneShopifyProvinceOptions;
        schemaType: Query["shopifyProvince"];
    };
    /**
 * Finds many shopifyProvince. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyProvincesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProvincesOptions>): Promise<GadgetRecordList<SelectedShopifyProvinceOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyProvinces";
        modelApiIdentifier: "shopifyProvince";
        defaultSelection: typeof DefaultShopifyProvinceSelection;
        selectionType: AvailableShopifyProvinceSelection;
        optionsType: FindManyShopifyProvincesOptions;
        schemaType: Query["shopifyProvince"];
    };
    /**
 * Finds the first matching shopifyProvince. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyProvinceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProvinceOptions>): Promise<GadgetRecord<SelectedShopifyProvinceOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyProvinces";
        modelApiIdentifier: "shopifyProvince";
        defaultSelection: typeof DefaultShopifyProvinceSelection;
        selectionType: AvailableShopifyProvinceSelection;
        optionsType: FindFirstShopifyProvinceOptions;
        schemaType: Query["shopifyProvince"];
    };
    /**
 * Finds the first matching shopifyProvince. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyProvinceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProvinceOptions>): Promise<GadgetRecord<SelectedShopifyProvinceOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyProvinces";
        modelApiIdentifier: "shopifyProvince";
        defaultSelection: typeof DefaultShopifyProvinceSelection;
        selectionType: AvailableShopifyProvinceSelection;
        optionsType: MaybeFindFirstShopifyProvinceOptions;
        schemaType: Query["shopifyProvince"];
    };
}
