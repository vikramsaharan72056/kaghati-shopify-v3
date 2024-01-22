import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifySellingPlanGroup, ShopifySellingPlanGroupSort, ShopifySellingPlanGroupFilter, AvailableShopifySellingPlanGroupSelection } from "../types.js";
export declare const DefaultShopifySellingPlanGroupSelection: {
    readonly __typename: true;
    readonly appId: true;
    readonly createdAt: true;
    readonly description: true;
    readonly id: true;
    readonly merchantCode: true;
    readonly name: true;
    readonly options: true;
    readonly position: true;
    readonly shopifyCreatedAt: true;
    readonly summary: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySellingPlanGroup". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySellingPlanGroupOrDefault<Options extends Selectable<AvailableShopifySellingPlanGroupSelection>> = DeepFilterNever<Select<ShopifySellingPlanGroup, DefaultSelection<AvailableShopifySellingPlanGroupSelection, Options, typeof DefaultShopifySellingPlanGroupSelection>>>;
/** Options that can be passed to the `ShopifySellingPlanGroupManager#findOne` method */
export interface FindOneShopifySellingPlanGroupOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupSelection;
}
/** Options that can be passed to the `ShopifySellingPlanGroupManager#maybeFindOne` method */
export interface MaybeFindOneShopifySellingPlanGroupOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupSelection;
}
/** Options that can be passed to the `ShopifySellingPlanGroupManager#findMany` method */
export interface FindManyShopifySellingPlanGroupsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySellingPlanGroupSort | ShopifySellingPlanGroupSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySellingPlanGroupFilter | ShopifySellingPlanGroupFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifySellingPlanGroupManager#findFirst` method */
export interface FindFirstShopifySellingPlanGroupOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySellingPlanGroupSort | ShopifySellingPlanGroupSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySellingPlanGroupFilter | ShopifySellingPlanGroupFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifySellingPlanGroupManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySellingPlanGroupOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySellingPlanGroupSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySellingPlanGroupSort | ShopifySellingPlanGroupSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySellingPlanGroupFilter | ShopifySellingPlanGroupFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifySellingPlanGroup" */
export declare class ShopifySellingPlanGroupManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifySellingPlanGroup by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifySellingPlanGroupOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySellingPlanGroupOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySellingPlanGroup";
        modelApiIdentifier: "shopifySellingPlanGroup";
        defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
        selectionType: AvailableShopifySellingPlanGroupSelection;
        optionsType: FindOneShopifySellingPlanGroupOptions;
        schemaType: Query["shopifySellingPlanGroup"];
    };
    /**
 * Finds one shopifySellingPlanGroup by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifySellingPlanGroupOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySellingPlanGroupOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifySellingPlanGroup";
        modelApiIdentifier: "shopifySellingPlanGroup";
        defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
        selectionType: AvailableShopifySellingPlanGroupSelection;
        optionsType: MaybeFindOneShopifySellingPlanGroupOptions;
        schemaType: Query["shopifySellingPlanGroup"];
    };
    /**
 * Finds many shopifySellingPlanGroup. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifySellingPlanGroupsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySellingPlanGroupsOptions>): Promise<GadgetRecordList<SelectedShopifySellingPlanGroupOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifySellingPlanGroups";
        modelApiIdentifier: "shopifySellingPlanGroup";
        defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
        selectionType: AvailableShopifySellingPlanGroupSelection;
        optionsType: FindManyShopifySellingPlanGroupsOptions;
        schemaType: Query["shopifySellingPlanGroup"];
    };
    /**
 * Finds the first matching shopifySellingPlanGroup. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifySellingPlanGroupOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySellingPlanGroupOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifySellingPlanGroups";
        modelApiIdentifier: "shopifySellingPlanGroup";
        defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
        selectionType: AvailableShopifySellingPlanGroupSelection;
        optionsType: FindFirstShopifySellingPlanGroupOptions;
        schemaType: Query["shopifySellingPlanGroup"];
    };
    /**
 * Finds the first matching shopifySellingPlanGroup. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifySellingPlanGroupOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySellingPlanGroupOptions>): Promise<GadgetRecord<SelectedShopifySellingPlanGroupOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifySellingPlanGroups";
        modelApiIdentifier: "shopifySellingPlanGroup";
        defaultSelection: typeof DefaultShopifySellingPlanGroupSelection;
        selectionType: AvailableShopifySellingPlanGroupSelection;
        optionsType: MaybeFindFirstShopifySellingPlanGroupOptions;
        schemaType: Query["shopifySellingPlanGroup"];
    };
}
