import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyRefundDuty, ShopifyRefundDutySort, ShopifyRefundDutyFilter, AvailableShopifyRefundDutySelection } from "../types.js";
export declare const DefaultShopifyRefundDutySelection: {
    readonly __typename: true;
    readonly amountSet: true;
    readonly createdAt: true;
    readonly id: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRefundDuty". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRefundDutyOrDefault<Options extends Selectable<AvailableShopifyRefundDutySelection>> = DeepFilterNever<Select<ShopifyRefundDuty, DefaultSelection<AvailableShopifyRefundDutySelection, Options, typeof DefaultShopifyRefundDutySelection>>>;
/** Options that can be passed to the `ShopifyRefundDutyManager#findOne` method */
export interface FindOneShopifyRefundDutyOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundDutySelection;
}
/** Options that can be passed to the `ShopifyRefundDutyManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRefundDutyOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundDutySelection;
}
/** Options that can be passed to the `ShopifyRefundDutyManager#findMany` method */
export interface FindManyShopifyRefundDutiesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundDutySelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundDutySort | ShopifyRefundDutySort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundDutyFilter | ShopifyRefundDutyFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyRefundDutyManager#findFirst` method */
export interface FindFirstShopifyRefundDutyOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundDutySelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundDutySort | ShopifyRefundDutySort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundDutyFilter | ShopifyRefundDutyFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyRefundDutyManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRefundDutyOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundDutySelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundDutySort | ShopifyRefundDutySort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundDutyFilter | ShopifyRefundDutyFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyRefundDuty" */
export declare class ShopifyRefundDutyManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyRefundDutyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundDutyOptions>): Promise<GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyRefundDuty";
        modelApiIdentifier: "shopifyRefundDuty";
        defaultSelection: typeof DefaultShopifyRefundDutySelection;
        selectionType: AvailableShopifyRefundDutySelection;
        optionsType: FindOneShopifyRefundDutyOptions;
        schemaType: Query["shopifyRefundDuty"];
    };
    /**
 * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyRefundDutyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundDutyOptions>): Promise<GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyRefundDuty";
        modelApiIdentifier: "shopifyRefundDuty";
        defaultSelection: typeof DefaultShopifyRefundDutySelection;
        selectionType: AvailableShopifyRefundDutySelection;
        optionsType: MaybeFindOneShopifyRefundDutyOptions;
        schemaType: Query["shopifyRefundDuty"];
    };
    /**
 * Finds many shopifyRefundDuty. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyRefundDutiesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundDutiesOptions>): Promise<GadgetRecordList<SelectedShopifyRefundDutyOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyRefundDuties";
        modelApiIdentifier: "shopifyRefundDuty";
        defaultSelection: typeof DefaultShopifyRefundDutySelection;
        selectionType: AvailableShopifyRefundDutySelection;
        optionsType: FindManyShopifyRefundDutiesOptions;
        schemaType: Query["shopifyRefundDuty"];
    };
    /**
 * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyRefundDutyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundDutyOptions>): Promise<GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyRefundDuties";
        modelApiIdentifier: "shopifyRefundDuty";
        defaultSelection: typeof DefaultShopifyRefundDutySelection;
        selectionType: AvailableShopifyRefundDutySelection;
        optionsType: FindFirstShopifyRefundDutyOptions;
        schemaType: Query["shopifyRefundDuty"];
    };
    /**
 * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyRefundDutyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundDutyOptions>): Promise<GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyRefundDuties";
        modelApiIdentifier: "shopifyRefundDuty";
        defaultSelection: typeof DefaultShopifyRefundDutySelection;
        selectionType: AvailableShopifyRefundDutySelection;
        optionsType: MaybeFindFirstShopifyRefundDutyOptions;
        schemaType: Query["shopifyRefundDuty"];
    };
    /**
  * Finds one shopifyRefundDuty by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifyRefundDutyOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundDutyOptions>): Promise<GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyRefundDuties";
        modelApiIdentifier: "shopifyRefundDuty";
        defaultSelection: typeof DefaultShopifyRefundDutySelection;
        selectionType: AvailableShopifyRefundDutySelection;
        optionsType: FindOneShopifyRefundDutyOptions;
        schemaType: Query["shopifyRefundDuty"];
    };
}
