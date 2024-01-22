import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, PinCode, PinCodeSort, PinCodeFilter, AvailablePinCodeSelection, CreatePinCodeInput, UpdatePinCodeInput } from "../types.js";
export declare const DefaultPinCodeSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly pincode: true;
    readonly storeId: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "pinCode". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedPinCodeOrDefault<Options extends Selectable<AvailablePinCodeSelection>> = DeepFilterNever<Select<PinCode, DefaultSelection<AvailablePinCodeSelection, Options, typeof DefaultPinCodeSelection>>>;
/** Options that can be passed to the `PinCodeManager#findOne` method */
export interface FindOnePinCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
}
/** Options that can be passed to the `PinCodeManager#maybeFindOne` method */
export interface MaybeFindOnePinCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
}
/** Options that can be passed to the `PinCodeManager#findMany` method */
export interface FindManyPinCodesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
    /** Return records sorted by these sorts */
    sort?: PinCodeSort | PinCodeSort[] | null;
    /** Only return records matching these filters. */
    filter?: PinCodeFilter | PinCodeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `PinCodeManager#findFirst` method */
export interface FindFirstPinCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
    /** Return records sorted by these sorts */
    sort?: PinCodeSort | PinCodeSort[] | null;
    /** Only return records matching these filters. */
    filter?: PinCodeFilter | PinCodeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `PinCodeManager#maybeFindFirst` method */
export interface MaybeFindFirstPinCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
    /** Return records sorted by these sorts */
    sort?: PinCodeSort | PinCodeSort[] | null;
    /** Only return records matching these filters. */
    filter?: PinCodeFilter | PinCodeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreatePinCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
}
export interface UpdatePinCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePinCodeSelection;
}
export interface DeletePinCodeOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreatePinCodeVariables = {
    pinCode?: CreatePinCodeInput;
};
/**
 * The inputs for executing create on pinCode.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreatePinCodeVariables = CreatePinCodeInput;
/**
 * The return value from executing create on pinCode.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreatePinCodeResult<Options extends CreatePinCodeOptions> = SelectedPinCodeOrDefault<Options> extends void ? void : GadgetRecord<SelectedPinCodeOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createPinCode<Options extends CreatePinCodeOptions>(variables: CreatePinCodeVariables, options?: LimitToKnownKeys<Options, CreatePinCodeOptions>): Promise<CreatePinCodeResult<Options>>;
declare function createPinCode<Options extends CreatePinCodeOptions>(variables: FullyQualifiedCreatePinCodeVariables, options?: LimitToKnownKeys<Options, CreatePinCodeOptions>): Promise<CreatePinCodeResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdatePinCodeVariables = {
    pinCode?: UpdatePinCodeInput;
};
/**
 * The inputs for executing update on pinCode.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdatePinCodeVariables = UpdatePinCodeInput;
/**
 * The return value from executing update on pinCode.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdatePinCodeResult<Options extends UpdatePinCodeOptions> = SelectedPinCodeOrDefault<Options> extends void ? void : GadgetRecord<SelectedPinCodeOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updatePinCode<Options extends UpdatePinCodeOptions>(id: string, variables: UpdatePinCodeVariables, options?: LimitToKnownKeys<Options, UpdatePinCodeOptions>): Promise<UpdatePinCodeResult<Options>>;
declare function updatePinCode<Options extends UpdatePinCodeOptions>(id: string, variables: FullyQualifiedUpdatePinCodeVariables, options?: LimitToKnownKeys<Options, UpdatePinCodeOptions>): Promise<UpdatePinCodeResult<Options>>;
/**
 * The return value from executing delete on pinCode.
 * "Is void because this action deletes the record"
 **/
export type DeletePinCodeResult<Options extends DeletePinCodeOptions> = void extends void ? void : GadgetRecord<SelectedPinCodeOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deletePinCode<Options extends DeletePinCodeOptions>(id: string, options?: LimitToKnownKeys<Options, DeletePinCodeOptions>): Promise<DeletePinCodeResult<Options>>;
/** All the actions available at the collection level and record level for "pinCode" */
export declare class PinCodeManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one pinCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOnePinCodeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOnePinCodeOptions>): Promise<GadgetRecord<SelectedPinCodeOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "pinCode";
        modelApiIdentifier: "pinCode";
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: FindOnePinCodeOptions;
        schemaType: Query["pinCode"];
    };
    /**
 * Finds one pinCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOnePinCodeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOnePinCodeOptions>): Promise<GadgetRecord<SelectedPinCodeOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "pinCode";
        modelApiIdentifier: "pinCode";
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: MaybeFindOnePinCodeOptions;
        schemaType: Query["pinCode"];
    };
    /**
 * Finds many pinCode. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyPinCodesOptions>(options?: LimitToKnownKeys<Options, FindManyPinCodesOptions>): Promise<GadgetRecordList<SelectedPinCodeOrDefault<Options>>>;
        type: "findMany";
        operationName: "pinCodes";
        modelApiIdentifier: "pinCode";
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: FindManyPinCodesOptions;
        schemaType: Query["pinCode"];
    };
    /**
 * Finds the first matching pinCode. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstPinCodeOptions>(options?: LimitToKnownKeys<Options, FindFirstPinCodeOptions>): Promise<GadgetRecord<SelectedPinCodeOrDefault<Options>>>;
        type: "findFirst";
        operationName: "pinCodes";
        modelApiIdentifier: "pinCode";
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: FindFirstPinCodeOptions;
        schemaType: Query["pinCode"];
    };
    /**
 * Finds the first matching pinCode. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstPinCodeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstPinCodeOptions>): Promise<GadgetRecord<SelectedPinCodeOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "pinCodes";
        modelApiIdentifier: "pinCode";
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: MaybeFindFirstPinCodeOptions;
        schemaType: Query["pinCode"];
    };
    /**
  * Finds one pinCode by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOnePinCodeOptions>(value: string, options?: LimitToKnownKeys<Options, FindOnePinCodeOptions>): Promise<GadgetRecord<SelectedPinCodeOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "pinCodes";
        modelApiIdentifier: "pinCode";
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: FindOnePinCodeOptions;
        schemaType: Query["pinCode"];
    };
    create: typeof createPinCode & {
        type: "action";
        operationName: "createPinCode";
        namespace: null;
        modelApiIdentifier: "pinCode";
        modelSelectionField: "pinCode";
        isBulk: false;
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: CreatePinCodeOptions;
        schemaType: Query["pinCode"];
        variablesType: ((FullyQualifiedCreatePinCodeVariables | CreatePinCodeVariables)) | undefined;
        variables: {
            "pinCode": {
                required: false;
                type: "CreatePinCodeInput";
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
        <Options extends CreatePinCodeOptions>(inputs: (FullyQualifiedCreatePinCodeVariables | CreatePinCodeVariables)[], options?: LimitToKnownKeys<Options, CreatePinCodeOptions>): Promise<CreatePinCodeResult<Options>[]>;
        type: "action";
        operationName: "bulkCreatePinCodes";
        namespace: null;
        modelApiIdentifier: "pinCode";
        modelSelectionField: "pinCodes";
        isBulk: true;
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: CreatePinCodeOptions;
        schemaType: Query["pinCode"];
        variablesType: (FullyQualifiedCreatePinCodeVariables | CreatePinCodeVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreatePinCodesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updatePinCode & {
        type: "action";
        operationName: "updatePinCode";
        namespace: null;
        modelApiIdentifier: "pinCode";
        modelSelectionField: "pinCode";
        isBulk: false;
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: UpdatePinCodeOptions;
        schemaType: Query["pinCode"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdatePinCodeVariables | UpdatePinCodeVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "pinCode": {
                required: false;
                type: "UpdatePinCodeInput";
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
        <Options extends UpdatePinCodeOptions>(inputs: (FullyQualifiedUpdatePinCodeVariables | UpdatePinCodeVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdatePinCodeOptions>): Promise<UpdatePinCodeResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdatePinCodes";
        namespace: null;
        modelApiIdentifier: "pinCode";
        modelSelectionField: "pinCodes";
        isBulk: true;
        defaultSelection: typeof DefaultPinCodeSelection;
        selectionType: AvailablePinCodeSelection;
        optionsType: UpdatePinCodeOptions;
        schemaType: Query["pinCode"];
        variablesType: (FullyQualifiedUpdatePinCodeVariables | UpdatePinCodeVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdatePinCodesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deletePinCode & {
        type: "action";
        operationName: "deletePinCode";
        namespace: null;
        modelApiIdentifier: "pinCode";
        modelSelectionField: "pinCode";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeletePinCodeOptions;
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
        <Options extends DeletePinCodeOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeletePinCodeOptions>): Promise<DeletePinCodeResult<Options>[]>;
        type: "action";
        operationName: "bulkDeletePinCodes";
        namespace: null;
        modelApiIdentifier: "pinCode";
        modelSelectionField: "pinCodes";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeletePinCodeOptions;
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
