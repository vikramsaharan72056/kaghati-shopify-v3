import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, KhagatiStores, KhagatiStoresSort, KhagatiStoresFilter, AvailableKhagatiStoresSelection, CreateKhagatiStoresInput, UpdateKhagatiStoresInput } from "../types.js";
export declare const DefaultKhagatiStoresSelection: {
    readonly __typename: true;
    readonly address: true;
    readonly city: true;
    readonly createdAt: true;
    readonly email: true;
    readonly googleMap: true;
    readonly id: true;
    readonly isBackupWarehouse: true;
    readonly mobNumber: true;
    readonly pincode: true;
    readonly selectBackupWarehouse: true;
    readonly state: true;
    readonly status: true;
    readonly storeCode: true;
    readonly storeName: true;
    readonly storeTier: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "khagatiStores". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedKhagatiStoresOrDefault<Options extends Selectable<AvailableKhagatiStoresSelection>> = DeepFilterNever<Select<KhagatiStores, DefaultSelection<AvailableKhagatiStoresSelection, Options, typeof DefaultKhagatiStoresSelection>>>;
/** Options that can be passed to the `KhagatiStoresManager#findOne` method */
export interface FindOneKhagatiStoresOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
}
/** Options that can be passed to the `KhagatiStoresManager#maybeFindOne` method */
export interface MaybeFindOneKhagatiStoresOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
}
/** Options that can be passed to the `KhagatiStoresManager#findMany` method */
export interface FindManyKhagatiStoressOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
    /** Return records sorted by these sorts */
    sort?: KhagatiStoresSort | KhagatiStoresSort[] | null;
    /** Only return records matching these filters. */
    filter?: KhagatiStoresFilter | KhagatiStoresFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `KhagatiStoresManager#findFirst` method */
export interface FindFirstKhagatiStoresOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
    /** Return records sorted by these sorts */
    sort?: KhagatiStoresSort | KhagatiStoresSort[] | null;
    /** Only return records matching these filters. */
    filter?: KhagatiStoresFilter | KhagatiStoresFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `KhagatiStoresManager#maybeFindFirst` method */
export interface MaybeFindFirstKhagatiStoresOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
    /** Return records sorted by these sorts */
    sort?: KhagatiStoresSort | KhagatiStoresSort[] | null;
    /** Only return records matching these filters. */
    filter?: KhagatiStoresFilter | KhagatiStoresFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateKhagatiStoresOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
}
export interface UpdateKhagatiStoresOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableKhagatiStoresSelection;
}
export interface DeleteKhagatiStoresOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateKhagatiStoresVariables = {
    khagatiStores?: CreateKhagatiStoresInput;
};
/**
 * The inputs for executing create on khagatiStores.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateKhagatiStoresVariables = CreateKhagatiStoresInput;
/**
 * The return value from executing create on khagatiStores.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateKhagatiStoresResult<Options extends CreateKhagatiStoresOptions> = SelectedKhagatiStoresOrDefault<Options> extends void ? void : GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createKhagatiStores<Options extends CreateKhagatiStoresOptions>(variables: CreateKhagatiStoresVariables, options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>): Promise<CreateKhagatiStoresResult<Options>>;
declare function createKhagatiStores<Options extends CreateKhagatiStoresOptions>(variables: FullyQualifiedCreateKhagatiStoresVariables, options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>): Promise<CreateKhagatiStoresResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateKhagatiStoresVariables = {
    khagatiStores?: UpdateKhagatiStoresInput;
};
/**
 * The inputs for executing update on khagatiStores.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateKhagatiStoresVariables = UpdateKhagatiStoresInput;
/**
 * The return value from executing update on khagatiStores.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateKhagatiStoresResult<Options extends UpdateKhagatiStoresOptions> = SelectedKhagatiStoresOrDefault<Options> extends void ? void : GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateKhagatiStores<Options extends UpdateKhagatiStoresOptions>(id: string, variables: UpdateKhagatiStoresVariables, options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>): Promise<UpdateKhagatiStoresResult<Options>>;
declare function updateKhagatiStores<Options extends UpdateKhagatiStoresOptions>(id: string, variables: FullyQualifiedUpdateKhagatiStoresVariables, options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>): Promise<UpdateKhagatiStoresResult<Options>>;
/**
 * The return value from executing delete on khagatiStores.
 * "Is void because this action deletes the record"
 **/
export type DeleteKhagatiStoresResult<Options extends DeleteKhagatiStoresOptions> = void extends void ? void : GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteKhagatiStores<Options extends DeleteKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteKhagatiStoresOptions>): Promise<DeleteKhagatiStoresResult<Options>>;
/** All the actions available at the collection level and record level for "khagatiStores" */
export declare class KhagatiStoresManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one khagatiStores by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneKhagatiStoresOptions>): Promise<GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "khagatiStores";
        modelApiIdentifier: "khagatiStores";
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: FindOneKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
    };
    /**
 * Finds one khagatiStores by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneKhagatiStoresOptions>): Promise<GadgetRecord<SelectedKhagatiStoresOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "khagatiStores";
        modelApiIdentifier: "khagatiStores";
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: MaybeFindOneKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
    };
    /**
 * Finds many khagatiStores. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyKhagatiStoressOptions>(options?: LimitToKnownKeys<Options, FindManyKhagatiStoressOptions>): Promise<GadgetRecordList<SelectedKhagatiStoresOrDefault<Options>>>;
        type: "findMany";
        operationName: "khagatiStoress";
        modelApiIdentifier: "khagatiStores";
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: FindManyKhagatiStoressOptions;
        schemaType: Query["khagatiStores"];
    };
    /**
 * Finds the first matching khagatiStores. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstKhagatiStoresOptions>(options?: LimitToKnownKeys<Options, FindFirstKhagatiStoresOptions>): Promise<GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>>;
        type: "findFirst";
        operationName: "khagatiStoress";
        modelApiIdentifier: "khagatiStores";
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: FindFirstKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
    };
    /**
 * Finds the first matching khagatiStores. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstKhagatiStoresOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstKhagatiStoresOptions>): Promise<GadgetRecord<SelectedKhagatiStoresOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "khagatiStoress";
        modelApiIdentifier: "khagatiStores";
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: MaybeFindFirstKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
    };
    /**
  * Finds one khagatiStores by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneKhagatiStoresOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneKhagatiStoresOptions>): Promise<GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "khagatiStoress";
        modelApiIdentifier: "khagatiStores";
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: FindOneKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
    };
    create: typeof createKhagatiStores & {
        type: "action";
        operationName: "createKhagatiStores";
        namespace: null;
        modelApiIdentifier: "khagatiStores";
        modelSelectionField: "khagatiStores";
        isBulk: false;
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: CreateKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
        variablesType: ((FullyQualifiedCreateKhagatiStoresVariables | CreateKhagatiStoresVariables)) | undefined;
        variables: {
            "khagatiStores": {
                required: false;
                type: "CreateKhagatiStoresInput";
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
        <Options extends CreateKhagatiStoresOptions>(inputs: (FullyQualifiedCreateKhagatiStoresVariables | CreateKhagatiStoresVariables)[], options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>): Promise<CreateKhagatiStoresResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateKhagatiStores";
        namespace: null;
        modelApiIdentifier: "khagatiStores";
        modelSelectionField: "khagatiStores";
        isBulk: true;
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: CreateKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
        variablesType: (FullyQualifiedCreateKhagatiStoresVariables | CreateKhagatiStoresVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateKhagatiStoresInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateKhagatiStores & {
        type: "action";
        operationName: "updateKhagatiStores";
        namespace: null;
        modelApiIdentifier: "khagatiStores";
        modelSelectionField: "khagatiStores";
        isBulk: false;
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: UpdateKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateKhagatiStoresVariables | UpdateKhagatiStoresVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "khagatiStores": {
                required: false;
                type: "UpdateKhagatiStoresInput";
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
        <Options extends UpdateKhagatiStoresOptions>(inputs: (FullyQualifiedUpdateKhagatiStoresVariables | UpdateKhagatiStoresVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>): Promise<UpdateKhagatiStoresResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateKhagatiStores";
        namespace: null;
        modelApiIdentifier: "khagatiStores";
        modelSelectionField: "khagatiStores";
        isBulk: true;
        defaultSelection: typeof DefaultKhagatiStoresSelection;
        selectionType: AvailableKhagatiStoresSelection;
        optionsType: UpdateKhagatiStoresOptions;
        schemaType: Query["khagatiStores"];
        variablesType: (FullyQualifiedUpdateKhagatiStoresVariables | UpdateKhagatiStoresVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateKhagatiStoresInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteKhagatiStores & {
        type: "action";
        operationName: "deleteKhagatiStores";
        namespace: null;
        modelApiIdentifier: "khagatiStores";
        modelSelectionField: "khagatiStores";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteKhagatiStoresOptions;
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
        <Options extends DeleteKhagatiStoresOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteKhagatiStoresOptions>): Promise<DeleteKhagatiStoresResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteKhagatiStores";
        namespace: null;
        modelApiIdentifier: "khagatiStores";
        modelSelectionField: "khagatiStores";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteKhagatiStoresOptions;
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
}
export {};
