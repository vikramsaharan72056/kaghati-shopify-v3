import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyOrderRisk, ShopifyOrderRiskSort, ShopifyOrderRiskFilter, AvailableShopifyOrderRiskSelection } from "../types.js";
export declare const DefaultShopifyOrderRiskSelection: {
    readonly __typename: true;
    readonly causeCancel: true;
    readonly createdAt: true;
    readonly display: true;
    readonly id: true;
    readonly merchantMessage: true;
    readonly message: true;
    readonly recommendation: true;
    readonly score: true;
    readonly source: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrderRisk". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderRiskOrDefault<Options extends Selectable<AvailableShopifyOrderRiskSelection>> = DeepFilterNever<Select<ShopifyOrderRisk, DefaultSelection<AvailableShopifyOrderRiskSelection, Options, typeof DefaultShopifyOrderRiskSelection>>>;
/** Options that can be passed to the `ShopifyOrderRiskManager#findOne` method */
export interface FindOneShopifyOrderRiskOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderRiskSelection;
}
/** Options that can be passed to the `ShopifyOrderRiskManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderRiskOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderRiskSelection;
}
/** Options that can be passed to the `ShopifyOrderRiskManager#findMany` method */
export interface FindManyShopifyOrderRisksOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderRiskSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderRiskSort | ShopifyOrderRiskSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderRiskFilter | ShopifyOrderRiskFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyOrderRiskManager#findFirst` method */
export interface FindFirstShopifyOrderRiskOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderRiskSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderRiskSort | ShopifyOrderRiskSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderRiskFilter | ShopifyOrderRiskFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyOrderRiskManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderRiskOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderRiskSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderRiskSort | ShopifyOrderRiskSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderRiskFilter | ShopifyOrderRiskFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyOrderRisk" */
export declare class ShopifyOrderRiskManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyOrderRisk by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyOrderRiskOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderRiskOptions>): Promise<GadgetRecord<SelectedShopifyOrderRiskOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyOrderRisk";
        modelApiIdentifier: "shopifyOrderRisk";
        defaultSelection: typeof DefaultShopifyOrderRiskSelection;
        selectionType: AvailableShopifyOrderRiskSelection;
        optionsType: FindOneShopifyOrderRiskOptions;
        schemaType: Query["shopifyOrderRisk"];
    };
    /**
 * Finds one shopifyOrderRisk by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyOrderRiskOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderRiskOptions>): Promise<GadgetRecord<SelectedShopifyOrderRiskOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyOrderRisk";
        modelApiIdentifier: "shopifyOrderRisk";
        defaultSelection: typeof DefaultShopifyOrderRiskSelection;
        selectionType: AvailableShopifyOrderRiskSelection;
        optionsType: MaybeFindOneShopifyOrderRiskOptions;
        schemaType: Query["shopifyOrderRisk"];
    };
    /**
 * Finds many shopifyOrderRisk. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyOrderRisksOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderRisksOptions>): Promise<GadgetRecordList<SelectedShopifyOrderRiskOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyOrderRisks";
        modelApiIdentifier: "shopifyOrderRisk";
        defaultSelection: typeof DefaultShopifyOrderRiskSelection;
        selectionType: AvailableShopifyOrderRiskSelection;
        optionsType: FindManyShopifyOrderRisksOptions;
        schemaType: Query["shopifyOrderRisk"];
    };
    /**
 * Finds the first matching shopifyOrderRisk. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyOrderRiskOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderRiskOptions>): Promise<GadgetRecord<SelectedShopifyOrderRiskOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyOrderRisks";
        modelApiIdentifier: "shopifyOrderRisk";
        defaultSelection: typeof DefaultShopifyOrderRiskSelection;
        selectionType: AvailableShopifyOrderRiskSelection;
        optionsType: FindFirstShopifyOrderRiskOptions;
        schemaType: Query["shopifyOrderRisk"];
    };
    /**
 * Finds the first matching shopifyOrderRisk. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyOrderRiskOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderRiskOptions>): Promise<GadgetRecord<SelectedShopifyOrderRiskOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyOrderRisks";
        modelApiIdentifier: "shopifyOrderRisk";
        defaultSelection: typeof DefaultShopifyOrderRiskSelection;
        selectionType: AvailableShopifyOrderRiskSelection;
        optionsType: MaybeFindFirstShopifyOrderRiskOptions;
        schemaType: Query["shopifyOrderRisk"];
    };
}
