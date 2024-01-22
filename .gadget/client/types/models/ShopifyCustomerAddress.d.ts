import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyCustomerAddress, ShopifyCustomerAddressSort, ShopifyCustomerAddressFilter, AvailableShopifyCustomerAddressSelection } from "../types.js";
export declare const DefaultShopifyCustomerAddressSelection: {
    readonly __typename: true;
    readonly address1: true;
    readonly address2: true;
    readonly city: true;
    readonly company: true;
    readonly country: true;
    readonly countryCode: true;
    readonly countryName: true;
    readonly createdAt: true;
    readonly firstName: true;
    readonly id: true;
    readonly lastName: true;
    readonly name: true;
    readonly phone: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly updatedAt: true;
    readonly zipCode: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCustomerAddress". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCustomerAddressOrDefault<Options extends Selectable<AvailableShopifyCustomerAddressSelection>> = DeepFilterNever<Select<ShopifyCustomerAddress, DefaultSelection<AvailableShopifyCustomerAddressSelection, Options, typeof DefaultShopifyCustomerAddressSelection>>>;
/** Options that can be passed to the `ShopifyCustomerAddressManager#findOne` method */
export interface FindOneShopifyCustomerAddressOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerAddressSelection;
}
/** Options that can be passed to the `ShopifyCustomerAddressManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCustomerAddressOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerAddressSelection;
}
/** Options that can be passed to the `ShopifyCustomerAddressManager#findMany` method */
export interface FindManyShopifyCustomerAddressesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerAddressSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerAddressSort | ShopifyCustomerAddressSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerAddressFilter | ShopifyCustomerAddressFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCustomerAddressManager#findFirst` method */
export interface FindFirstShopifyCustomerAddressOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerAddressSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerAddressSort | ShopifyCustomerAddressSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerAddressFilter | ShopifyCustomerAddressFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCustomerAddressManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCustomerAddressOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCustomerAddressSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCustomerAddressSort | ShopifyCustomerAddressSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCustomerAddressFilter | ShopifyCustomerAddressFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyCustomerAddress" */
export declare class ShopifyCustomerAddressManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCustomerAddress by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCustomerAddressOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCustomerAddressOptions>): Promise<GadgetRecord<SelectedShopifyCustomerAddressOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCustomerAddress";
        modelApiIdentifier: "shopifyCustomerAddress";
        defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
        selectionType: AvailableShopifyCustomerAddressSelection;
        optionsType: FindOneShopifyCustomerAddressOptions;
        schemaType: Query["shopifyCustomerAddress"];
    };
    /**
 * Finds one shopifyCustomerAddress by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCustomerAddressOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCustomerAddressOptions>): Promise<GadgetRecord<SelectedShopifyCustomerAddressOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCustomerAddress";
        modelApiIdentifier: "shopifyCustomerAddress";
        defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
        selectionType: AvailableShopifyCustomerAddressSelection;
        optionsType: MaybeFindOneShopifyCustomerAddressOptions;
        schemaType: Query["shopifyCustomerAddress"];
    };
    /**
 * Finds many shopifyCustomerAddress. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCustomerAddressesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCustomerAddressesOptions>): Promise<GadgetRecordList<SelectedShopifyCustomerAddressOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCustomerAddresses";
        modelApiIdentifier: "shopifyCustomerAddress";
        defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
        selectionType: AvailableShopifyCustomerAddressSelection;
        optionsType: FindManyShopifyCustomerAddressesOptions;
        schemaType: Query["shopifyCustomerAddress"];
    };
    /**
 * Finds the first matching shopifyCustomerAddress. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCustomerAddressOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCustomerAddressOptions>): Promise<GadgetRecord<SelectedShopifyCustomerAddressOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCustomerAddresses";
        modelApiIdentifier: "shopifyCustomerAddress";
        defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
        selectionType: AvailableShopifyCustomerAddressSelection;
        optionsType: FindFirstShopifyCustomerAddressOptions;
        schemaType: Query["shopifyCustomerAddress"];
    };
    /**
 * Finds the first matching shopifyCustomerAddress. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCustomerAddressOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCustomerAddressOptions>): Promise<GadgetRecord<SelectedShopifyCustomerAddressOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCustomerAddresses";
        modelApiIdentifier: "shopifyCustomerAddress";
        defaultSelection: typeof DefaultShopifyCustomerAddressSelection;
        selectionType: AvailableShopifyCustomerAddressSelection;
        optionsType: MaybeFindFirstShopifyCustomerAddressOptions;
        schemaType: Query["shopifyCustomerAddress"];
    };
}
