import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifySellingPlanGroupProduct, ShopifySellingPlanGroupProductSort, ShopifySellingPlanGroupProductFilter, AvailableShopifySellingPlanGroupProductSelection } from "../types.js";
export declare const DefaultShopifySellingPlanGroupProductSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly state: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySellingPlanGroupProduct". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySellingPlanGroupProductOrDefault<Options extends Selectable<AvailableShopifySellingPlanGroupProductSelection>> = DeepFilterNever<Select<ShopifySellingPlanGroupProduct, DefaultSelection<AvailableShopifySellingPlanGroupProductSelection, Options, typeof DefaultShopifySellingPlanGroupProductSelection>>>;
/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#findOne` method */
export interface FindOneShopifySellingPlanGroupProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupProductSelection;
}
/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#maybeFindOne` method */
export interface MaybeFindOneShopifySellingPlanGroupProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupProductSelection;
}
/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#findMany` method */
export interface FindManyShopifySellingPlanGroupProductsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupProductSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySellingPlanGroupProductSort | ShopifySellingPlanGroupProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySellingPlanGroupProductFilter | ShopifySellingPlanGroupProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#findFirst` method */
export interface FindFirstShopifySellingPlanGroupProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupProductSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySellingPlanGroupProductSort | ShopifySellingPlanGroupProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySellingPlanGroupProductFilter | ShopifySellingPlanGroupProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifySellingPlanGroupProductManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySellingPlanGroupProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupProductSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySellingPlanGroupProductSort | ShopifySellingPlanGroupProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySellingPlanGroupProductFilter | ShopifySellingPlanGroupProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifySellingPlanGroupProduct" */
export declare class ShopifySellingPlanGroupProductManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifySellingPlanGroupProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifySellingPlanGroupProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupProductOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupProductOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySellingPlanGroupProduct";
        modelApiIdentifier: "shopifySellingPlanGroupProduct";
        defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
        selectionType: AvailableShopifySellingPlanGroupProductSelection;
        optionsType: FindOneShopifySellingPlanGroupProductOptions;
        schemaType: Query["shopifySellingPlanGroupProduct"];
    };
    /**
 * Finds one shopifySellingPlanGroupProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifySellingPlanGroupProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupProductOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupProductOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifySellingPlanGroupProduct";
        modelApiIdentifier: "shopifySellingPlanGroupProduct";
        defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
        selectionType: AvailableShopifySellingPlanGroupProductSelection;
        optionsType: MaybeFindOneShopifySellingPlanGroupProductOptions;
        schemaType: Query["shopifySellingPlanGroupProduct"];
    };
    /**
 * Finds many shopifySellingPlanGroupProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifySellingPlanGroupProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupProductsOptions>): Promise<GadgetRecordList<SelectedShopifySellingPlanGroupProductOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifySellingPlanGroupProducts";
        modelApiIdentifier: "shopifySellingPlanGroupProduct";
        defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
        selectionType: AvailableShopifySellingPlanGroupProductSelection;
        optionsType: FindManyShopifySellingPlanGroupProductsOptions;
        schemaType: Query["shopifySellingPlanGroupProduct"];
    };
    /**
 * Finds the first matching shopifySellingPlanGroupProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifySellingPlanGroupProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupProductOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupProductOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifySellingPlanGroupProducts";
        modelApiIdentifier: "shopifySellingPlanGroupProduct";
        defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
        selectionType: AvailableShopifySellingPlanGroupProductSelection;
        optionsType: FindFirstShopifySellingPlanGroupProductOptions;
        schemaType: Query["shopifySellingPlanGroupProduct"];
    };
    /**
 * Finds the first matching shopifySellingPlanGroupProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifySellingPlanGroupProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupProductOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupProductOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifySellingPlanGroupProducts";
        modelApiIdentifier: "shopifySellingPlanGroupProduct";
        defaultSelection: typeof DefaultShopifySellingPlanGroupProductSelection;
        selectionType: AvailableShopifySellingPlanGroupProductSelection;
        optionsType: MaybeFindFirstShopifySellingPlanGroupProductOptions;
        schemaType: Query["shopifySellingPlanGroupProduct"];
    };
}
