import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyBulkOperation, ShopifyBulkOperationSort, ShopifyBulkOperationFilter, AvailableShopifyBulkOperationSelection } from "../types.js";
export declare const DefaultShopifyBulkOperationSelection: {
    readonly __typename: true;
    readonly completedAt: true;
    readonly createdAt: true;
    readonly errorCode: true;
    readonly fileSize: true;
    readonly id: true;
    readonly objectCount: true;
    readonly partialDataUrl: true;
    readonly query: true;
    readonly rootObjectCount: true;
    readonly state: true;
    readonly status: true;
    readonly type: true;
    readonly updatedAt: true;
    readonly url: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyBulkOperation". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyBulkOperationOrDefault<Options extends Selectable<AvailableShopifyBulkOperationSelection>> = DeepFilterNever<Select<ShopifyBulkOperation, DefaultSelection<AvailableShopifyBulkOperationSelection, Options, typeof DefaultShopifyBulkOperationSelection>>>;
/** Options that can be passed to the `ShopifyBulkOperationManager#findOne` method */
export interface FindOneShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#maybeFindOne` method */
export interface MaybeFindOneShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#findMany` method */
export interface FindManyShopifyBulkOperationsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBulkOperationSort | ShopifyBulkOperationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBulkOperationFilter | ShopifyBulkOperationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#findFirst` method */
export interface FindFirstShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBulkOperationSort | ShopifyBulkOperationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBulkOperationFilter | ShopifyBulkOperationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBulkOperationSort | ShopifyBulkOperationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBulkOperationFilter | ShopifyBulkOperationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyBulkOperation" */
export declare class ShopifyBulkOperationManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyBulkOperationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyBulkOperation";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FindOneShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyBulkOperationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyBulkOperation";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: MaybeFindOneShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds many shopifyBulkOperation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyBulkOperationsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBulkOperationsOptions>): Promise<GadgetRecordList<SelectedShopifyBulkOperationOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyBulkOperations";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FindManyShopifyBulkOperationsOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyBulkOperationOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyBulkOperations";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FindFirstShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyBulkOperationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyBulkOperations";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: MaybeFindFirstShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
}
