import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyPickupOrder, ShopifyPickupOrderSort, ShopifyPickupOrderFilter, AvailableShopifyPickupOrderSelection, CreateShopifyPickupOrderInput, UpdateShopifyPickupOrderInput } from "../types.js";
export declare const DefaultShopifyPickupOrderSelection: {
    readonly __typename: true;
    readonly address: true;
    readonly createdAt: true;
    readonly id: true;
    readonly inventoryManagementVarient: true;
    readonly name: true;
    readonly service: true;
    readonly shipmentStatus: true;
    readonly shippingCompany: true;
    readonly status: true;
    readonly trackingNumbers: true;
    readonly trackingUrls: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPickupOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPickupOrderOrDefault<Options extends Selectable<AvailableShopifyPickupOrderSelection>> = DeepFilterNever<Select<ShopifyPickupOrder, DefaultSelection<AvailableShopifyPickupOrderSelection, Options, typeof DefaultShopifyPickupOrderSelection>>>;
/** Options that can be passed to the `ShopifyPickupOrderManager#findOne` method */
export interface FindOneShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
}
/** Options that can be passed to the `ShopifyPickupOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
}
/** Options that can be passed to the `ShopifyPickupOrderManager#findMany` method */
export interface FindManyShopifyPickupOrdersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyPickupOrderSort | ShopifyPickupOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyPickupOrderFilter | ShopifyPickupOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyPickupOrderManager#findFirst` method */
export interface FindFirstShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyPickupOrderSort | ShopifyPickupOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyPickupOrderFilter | ShopifyPickupOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyPickupOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyPickupOrderSort | ShopifyPickupOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyPickupOrderFilter | ShopifyPickupOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
}
export interface UpdateShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
}
export interface DeleteShopifyPickupOrderOptions {
}
export interface TrackShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
}
export interface CancelShopifyPickupOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPickupOrderSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyPickupOrderVariables = {
    shopifyPickupOrder?: CreateShopifyPickupOrderInput;
};
/**
 * The inputs for executing create on shopifyPickupOrder.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyPickupOrderVariables = CreateShopifyPickupOrderInput;
/**
 * The return value from executing create on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyPickupOrderResult<Options extends CreateShopifyPickupOrderOptions> = SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyPickupOrder<Options extends CreateShopifyPickupOrderOptions>(variables: CreateShopifyPickupOrderVariables, options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>): Promise<CreateShopifyPickupOrderResult<Options>>;
declare function createShopifyPickupOrder<Options extends CreateShopifyPickupOrderOptions>(variables: FullyQualifiedCreateShopifyPickupOrderVariables, options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>): Promise<CreateShopifyPickupOrderResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyPickupOrderVariables = {
    shopifyPickupOrder?: UpdateShopifyPickupOrderInput;
};
/**
 * The inputs for executing update on shopifyPickupOrder.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyPickupOrderVariables = UpdateShopifyPickupOrderInput;
/**
 * The return value from executing update on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyPickupOrderResult<Options extends UpdateShopifyPickupOrderOptions> = SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyPickupOrder<Options extends UpdateShopifyPickupOrderOptions>(id: string, variables: UpdateShopifyPickupOrderVariables, options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>): Promise<UpdateShopifyPickupOrderResult<Options>>;
declare function updateShopifyPickupOrder<Options extends UpdateShopifyPickupOrderOptions>(id: string, variables: FullyQualifiedUpdateShopifyPickupOrderVariables, options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>): Promise<UpdateShopifyPickupOrderResult<Options>>;
/**
 * The return value from executing delete on shopifyPickupOrder.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyPickupOrderResult<Options extends DeleteShopifyPickupOrderOptions> = void extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyPickupOrder<Options extends DeleteShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyPickupOrderOptions>): Promise<DeleteShopifyPickupOrderResult<Options>>;
/**
 * The return value from executing track on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type TrackShopifyPickupOrderResult<Options extends TrackShopifyPickupOrderOptions> = SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>;
/**
  * Executes the track action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function trackShopifyPickupOrder<Options extends TrackShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, TrackShopifyPickupOrderOptions>): Promise<TrackShopifyPickupOrderResult<Options>>;
/**
 * The return value from executing cancel on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type CancelShopifyPickupOrderResult<Options extends CancelShopifyPickupOrderOptions> = SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>;
/**
  * Executes the cancel action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function cancelShopifyPickupOrder<Options extends CancelShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, CancelShopifyPickupOrderOptions>): Promise<CancelShopifyPickupOrderResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyPickupOrder" */
export declare class ShopifyPickupOrderManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyPickupOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPickupOrderOptions>): Promise<GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyPickupOrder";
        modelApiIdentifier: "shopifyPickupOrder";
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: FindOneShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
    };
    /**
 * Finds one shopifyPickupOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPickupOrderOptions>): Promise<GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyPickupOrder";
        modelApiIdentifier: "shopifyPickupOrder";
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: MaybeFindOneShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
    };
    /**
 * Finds many shopifyPickupOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyPickupOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPickupOrdersOptions>): Promise<GadgetRecordList<SelectedShopifyPickupOrderOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyPickupOrders";
        modelApiIdentifier: "shopifyPickupOrder";
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: FindManyShopifyPickupOrdersOptions;
        schemaType: Query["shopifyPickupOrder"];
    };
    /**
 * Finds the first matching shopifyPickupOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyPickupOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPickupOrderOptions>): Promise<GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyPickupOrders";
        modelApiIdentifier: "shopifyPickupOrder";
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: FindFirstShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
    };
    /**
 * Finds the first matching shopifyPickupOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyPickupOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPickupOrderOptions>): Promise<GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyPickupOrders";
        modelApiIdentifier: "shopifyPickupOrder";
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: MaybeFindFirstShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
    };
    /**
  * Finds one shopifyPickupOrder by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifyPickupOrderOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyPickupOrderOptions>): Promise<GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyPickupOrders";
        modelApiIdentifier: "shopifyPickupOrder";
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: FindOneShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
    };
    create: typeof createShopifyPickupOrder & {
        type: "action";
        operationName: "createShopifyPickupOrder";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrder";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: CreateShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: ((FullyQualifiedCreateShopifyPickupOrderVariables | CreateShopifyPickupOrderVariables)) | undefined;
        variables: {
            "shopifyPickupOrder": {
                required: false;
                type: "CreateShopifyPickupOrderInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkCreate action with the given inputs.
*/
    bulkCreate: {
        <Options extends CreateShopifyPickupOrderOptions>(inputs: (FullyQualifiedCreateShopifyPickupOrderVariables | CreateShopifyPickupOrderVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>): Promise<CreateShopifyPickupOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyPickupOrders";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrders";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: CreateShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: (FullyQualifiedCreateShopifyPickupOrderVariables | CreateShopifyPickupOrderVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyPickupOrdersInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyPickupOrder & {
        type: "action";
        operationName: "updateShopifyPickupOrder";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrder";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: UpdateShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyPickupOrderVariables | UpdateShopifyPickupOrderVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyPickupOrder": {
                required: false;
                type: "UpdateShopifyPickupOrderInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkUpdate action with the given inputs.
*/
    bulkUpdate: {
        <Options extends UpdateShopifyPickupOrderOptions>(inputs: (FullyQualifiedUpdateShopifyPickupOrderVariables | UpdateShopifyPickupOrderVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>): Promise<UpdateShopifyPickupOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyPickupOrders";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrders";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: UpdateShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: (FullyQualifiedUpdateShopifyPickupOrderVariables | UpdateShopifyPickupOrderVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyPickupOrdersInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyPickupOrder & {
        type: "action";
        operationName: "deleteShopifyPickupOrder";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrder";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyPickupOrderOptions;
        schemaType: null;
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkDelete action with the given inputs. Deletes the records on the server.
*/
    bulkDelete: {
        <Options extends DeleteShopifyPickupOrderOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyPickupOrderOptions>): Promise<DeleteShopifyPickupOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyPickupOrders";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrders";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyPickupOrderOptions;
        schemaType: null;
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    track: typeof trackShopifyPickupOrder & {
        type: "action";
        operationName: "trackShopifyPickupOrder";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrder";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: TrackShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkTrack action with the given inputs.
*/
    bulkTrack: {
        <Options extends TrackShopifyPickupOrderOptions>(ids: string[], options?: LimitToKnownKeys<Options, TrackShopifyPickupOrderOptions>): Promise<TrackShopifyPickupOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkTrackShopifyPickupOrders";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrders";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: TrackShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    cancel: typeof cancelShopifyPickupOrder & {
        type: "action";
        operationName: "cancelShopifyPickupOrder";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrder";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: CancelShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkCancel action with the given inputs.
*/
    bulkCancel: {
        <Options extends CancelShopifyPickupOrderOptions>(ids: string[], options?: LimitToKnownKeys<Options, CancelShopifyPickupOrderOptions>): Promise<CancelShopifyPickupOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkCancelShopifyPickupOrders";
        namespace: null;
        modelApiIdentifier: "shopifyPickupOrder";
        modelSelectionField: "shopifyPickupOrders";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyPickupOrderSelection;
        selectionType: AvailableShopifyPickupOrderSelection;
        optionsType: CancelShopifyPickupOrderOptions;
        schemaType: Query["shopifyPickupOrder"];
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
