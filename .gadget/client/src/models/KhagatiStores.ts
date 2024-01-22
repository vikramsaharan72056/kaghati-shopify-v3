import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      KhagatiStores,
      KhagatiStoresSort,
      KhagatiStoresFilter,
      AvailableKhagatiStoresSelection,
      CreateKhagatiStoresInput,
      UpdateKhagatiStoresInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultKhagatiStoresSelection = {
  "__typename": true,
  "address": true,
  "city": true,
  "createdAt": true,
  "email": true,
  "googleMap": true,
  "id": true,
  "isBackupWarehouse": true,
  "mobNumber": true,
  "pincode": true,
  "selectBackupWarehouse": true,
  "state": true,
  "status": true,
  "storeCode": true,
  "storeName": true,
  "storeTier": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "khagatiStores". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedKhagatiStoresOrDefault<Options extends Selectable<AvailableKhagatiStoresSelection>> = DeepFilterNever<
  Select<
    KhagatiStores,
    DefaultSelection<
      AvailableKhagatiStoresSelection,
      Options,
      typeof DefaultKhagatiStoresSelection
    >
  >>;

/** Options that can be passed to the `KhagatiStoresManager#findOne` method */
export interface FindOneKhagatiStoresOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableKhagatiStoresSelection;
};

/** Options that can be passed to the `KhagatiStoresManager#maybeFindOne` method */
export interface MaybeFindOneKhagatiStoresOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableKhagatiStoresSelection;
};

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
};

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
};

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
};


export interface CreateKhagatiStoresOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableKhagatiStoresSelection;
};


export interface UpdateKhagatiStoresOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableKhagatiStoresSelection;
};


export interface DeleteKhagatiStoresOptions {
};


const apiIdentifier = "khagatiStores";
const pluralApiIdentifier = "khagatiStoress";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateKhagatiStoresVariables = {
          khagatiStores?: CreateKhagatiStoresInput,
      }

  /**
   * The inputs for executing create on khagatiStores.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateKhagatiStoresVariables = CreateKhagatiStoresInput;



/**
 * The return value from executing create on khagatiStores.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateKhagatiStoresResult<Options extends CreateKhagatiStoresOptions> =
  SelectedKhagatiStoresOrDefault<Options> extends void ? void : GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createKhagatiStores<Options extends CreateKhagatiStoresOptions>(
  
    variables: CreateKhagatiStoresVariables,

  options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>
): Promise<CreateKhagatiStoresResult<Options>>;

// Fully qualified, nested api identifier overload
async function createKhagatiStores<Options extends CreateKhagatiStoresOptions>(
  
      variables: FullyQualifiedCreateKhagatiStoresVariables,
  
  options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>
): Promise<CreateKhagatiStoresResult<Options>>;

// Function implementation
async function createKhagatiStores<Options extends CreateKhagatiStoresOptions>(
  this: KhagatiStoresManager,
  
      variables: CreateKhagatiStoresVariables | FullyQualifiedCreateKhagatiStoresVariables,
  
  options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>
): Promise<CreateKhagatiStoresResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedKhagatiStoresOrDefault<Options>>(
    this,
    "createKhagatiStores",
    DefaultKhagatiStoresSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "khagatiStores": {
          value: newVariables.khagatiStores,
          required: false,
          type: "CreateKhagatiStoresInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedUpdateKhagatiStoresVariables = {
          khagatiStores?: UpdateKhagatiStoresInput,
      }

  /**
   * The inputs for executing update on khagatiStores.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateKhagatiStoresVariables = UpdateKhagatiStoresInput;



/**
 * The return value from executing update on khagatiStores.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateKhagatiStoresResult<Options extends UpdateKhagatiStoresOptions> =
  SelectedKhagatiStoresOrDefault<Options> extends void ? void : GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateKhagatiStores<Options extends UpdateKhagatiStoresOptions>(
  id: string,
    variables: UpdateKhagatiStoresVariables,

  options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>
): Promise<UpdateKhagatiStoresResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateKhagatiStores<Options extends UpdateKhagatiStoresOptions>(
  id: string,
      variables: FullyQualifiedUpdateKhagatiStoresVariables,
  
  options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>
): Promise<UpdateKhagatiStoresResult<Options>>;

// Function implementation
async function updateKhagatiStores<Options extends UpdateKhagatiStoresOptions>(
  this: KhagatiStoresManager,
  id: string,
      variables: UpdateKhagatiStoresVariables | FullyQualifiedUpdateKhagatiStoresVariables,
  
  options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>
): Promise<UpdateKhagatiStoresResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedKhagatiStoresOrDefault<Options>>(
    this,
    "updateKhagatiStores",
    DefaultKhagatiStoresSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "khagatiStores": {
          value: newVariables.khagatiStores,
          required: false,
          type: "UpdateKhagatiStoresInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on khagatiStores.
 * "Is void because this action deletes the record"
 **/
export type DeleteKhagatiStoresResult<Options extends DeleteKhagatiStoresOptions> =
  void extends void ? void : GadgetRecord<SelectedKhagatiStoresOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteKhagatiStores<Options extends DeleteKhagatiStoresOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteKhagatiStoresOptions>
): Promise<DeleteKhagatiStoresResult<Options>>;

// Function implementation
async function deleteKhagatiStores<Options extends DeleteKhagatiStoresOptions>(
  this: KhagatiStoresManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteKhagatiStoresOptions>
): Promise<DeleteKhagatiStoresResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteKhagatiStores",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "khagatiStores" */
export class KhagatiStoresManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one khagatiStores by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "khagatiStores";
  modelApiIdentifier: "khagatiStores";
  defaultSelection: typeof DefaultKhagatiStoresSelection;
  selectionType: AvailableKhagatiStoresSelection;
  optionsType: FindOneKhagatiStoresOptions;
  schemaType: Query["khagatiStores"];
} = Object.assign(
  async <Options extends FindOneKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneKhagatiStoresOptions>) => {
    return await findOneRunner<SelectedKhagatiStoresOrDefault<Options>>(
      this,
      "khagatiStores",
      id,
      DefaultKhagatiStoresSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "khagatiStores",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultKhagatiStoresSelection,
  } as any
)

  
    /**
 * Finds one khagatiStores by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "khagatiStores";
  modelApiIdentifier: "khagatiStores";
  defaultSelection: typeof DefaultKhagatiStoresSelection;
  selectionType: AvailableKhagatiStoresSelection;
  optionsType: MaybeFindOneKhagatiStoresOptions;
  schemaType: Query["khagatiStores"];
} = Object.assign(
  async <Options extends MaybeFindOneKhagatiStoresOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneKhagatiStoresOptions>) => {
    const record = await findOneRunner<SelectedKhagatiStoresOrDefault<Options>>(
      this,
      "khagatiStores",
      id,
      DefaultKhagatiStoresSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "khagatiStores",
    modelApiIdentifier: "khagatiStores",
    defaultSelection: DefaultKhagatiStoresSelection,
  } as any
)

  
    /**
 * Finds many khagatiStores. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyKhagatiStoressOptions>(options?: LimitToKnownKeys<Options, FindManyKhagatiStoressOptions>):
    Promise<
      GadgetRecordList<
        SelectedKhagatiStoresOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "khagatiStoress";
  modelApiIdentifier: "khagatiStores";
  defaultSelection: typeof DefaultKhagatiStoresSelection;
  selectionType: AvailableKhagatiStoresSelection;
  optionsType: FindManyKhagatiStoressOptions;
  schemaType: Query["khagatiStores"];
} = Object.assign(
  async <Options extends FindManyKhagatiStoressOptions>(options?: LimitToKnownKeys<Options, FindManyKhagatiStoressOptions>):
    Promise<
      GadgetRecordList<
        SelectedKhagatiStoresOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedKhagatiStoresOrDefault<Options>>(
      this,
      "khagatiStoress",
      DefaultKhagatiStoresSelection,
      "khagatiStores",
      options
    );
  },
  {
    type: "findMany",
    operationName: "khagatiStoress",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultKhagatiStoresSelection,
  } as any
);

  
    /**
 * Finds the first matching khagatiStores. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstKhagatiStoresOptions>(options?: LimitToKnownKeys<Options, FindFirstKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "khagatiStoress";
  modelApiIdentifier: "khagatiStores";
  defaultSelection: typeof DefaultKhagatiStoresSelection;
  selectionType: AvailableKhagatiStoresSelection;
  optionsType: FindFirstKhagatiStoresOptions;
  schemaType: Query["khagatiStores"];
} = Object.assign(
  async <Options extends FindFirstKhagatiStoresOptions>(options?: LimitToKnownKeys<Options, FindFirstKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedKhagatiStoresOrDefault<Options>>(
      this,
      "khagatiStoress",
      DefaultKhagatiStoresSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "khagatiStoress",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultKhagatiStoresSelection,
  } as any
);

  
    /**
 * Finds the first matching khagatiStores. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstKhagatiStoresOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "khagatiStoress";
  modelApiIdentifier: "khagatiStores";
  defaultSelection: typeof DefaultKhagatiStoresSelection;
  selectionType: AvailableKhagatiStoresSelection;
  optionsType: MaybeFindFirstKhagatiStoresOptions;
  schemaType: Query["khagatiStores"];
} = Object.assign(
  async <Options extends MaybeFindFirstKhagatiStoresOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedKhagatiStoresOrDefault<Options>>(
      this,
      "khagatiStoress",
      DefaultKhagatiStoresSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "khagatiStoress",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultKhagatiStoresSelection,
  } as any
);

  
    /**
  * Finds one khagatiStores by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneKhagatiStoresOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneKhagatiStoresOptions>):
    Promise<
      GadgetRecord<
        SelectedKhagatiStoresOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "khagatiStoress";
  modelApiIdentifier: "khagatiStores";
  defaultSelection: typeof DefaultKhagatiStoresSelection;
  selectionType: AvailableKhagatiStoresSelection;
  optionsType: FindOneKhagatiStoresOptions;
  schemaType: Query["khagatiStores"];
} = Object.assign(
  async <Options extends FindOneKhagatiStoresOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneKhagatiStoresOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedKhagatiStoresOrDefault<Options>
      > & SelectedKhagatiStoresOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedKhagatiStoresOrDefault<Options>>(
      this,
      "khagatiStoress",
      "id",
      value,
      DefaultKhagatiStoresSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "khagatiStoress",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultKhagatiStoresSelection,
  } as any
)

  
    create = Object.assign(createKhagatiStores,
  {
    type: "action",
    operationName: "createKhagatiStores",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultKhagatiStoresSelection,
    variables: {
      "khagatiStores": {
        required: false,
        type: "CreateKhagatiStoresInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "createKhagatiStores";
    namespace: null;
    modelApiIdentifier: "khagatiStores";
    modelSelectionField: "khagatiStores";
    isBulk: false;
    defaultSelection: typeof DefaultKhagatiStoresSelection;
    selectionType: AvailableKhagatiStoresSelection;
    optionsType: CreateKhagatiStoresOptions;
    schemaType:  Query["khagatiStores"];

    variablesType: (

      (
        FullyQualifiedCreateKhagatiStoresVariables          | CreateKhagatiStoresVariables      )
    ) | undefined;
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
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateKhagatiStoresOptions>(
        inputs: (FullyQualifiedCreateKhagatiStoresVariables | CreateKhagatiStoresVariables)[],
      options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>
    ): Promise<CreateKhagatiStoresResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends CreateKhagatiStoresOptions>(
        inputs: (FullyQualifiedCreateKhagatiStoresVariables | CreateKhagatiStoresVariables)[],
      options?: LimitToKnownKeys<Options, CreateKhagatiStoresOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["create"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
        this,
        "bulkCreateKhagatiStores",
        DefaultKhagatiStoresSelection,
        "khagatiStores",
        "khagatiStores",
        true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkCreateKhagatiStores",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "khagatiStores",
      isBulk: true,
      defaultSelection: DefaultKhagatiStoresSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateKhagatiStoresInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateKhagatiStores,
  {
    type: "action",
    operationName: "updateKhagatiStores",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultKhagatiStoresSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "khagatiStores": {
        required: false,
        type: "UpdateKhagatiStoresInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "updateKhagatiStores";
    namespace: null;
    modelApiIdentifier: "khagatiStores";
    modelSelectionField: "khagatiStores";
    isBulk: false;
    defaultSelection: typeof DefaultKhagatiStoresSelection;
    selectionType: AvailableKhagatiStoresSelection;
    optionsType: UpdateKhagatiStoresOptions;
    schemaType:  Query["khagatiStores"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateKhagatiStoresVariables          | UpdateKhagatiStoresVariables      )
    ) | undefined;
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
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateKhagatiStoresOptions>(
        inputs: (FullyQualifiedUpdateKhagatiStoresVariables | UpdateKhagatiStoresVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>
    ): Promise<UpdateKhagatiStoresResult<Options>[]>;
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
    variablesType: (FullyQualifiedUpdateKhagatiStoresVariables | UpdateKhagatiStoresVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateKhagatiStoresInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateKhagatiStoresOptions>(
        inputs: (FullyQualifiedUpdateKhagatiStoresVariables | UpdateKhagatiStoresVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateKhagatiStoresOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["update"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
        this,
        "bulkUpdateKhagatiStores",
        DefaultKhagatiStoresSelection,
        "khagatiStores",
        "khagatiStores",
        true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkUpdateKhagatiStores",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "khagatiStores",
      isBulk: true,
      defaultSelection: DefaultKhagatiStoresSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateKhagatiStoresInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteKhagatiStores,
  {
    type: "action",
    operationName: "deleteKhagatiStores",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: null,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "deleteKhagatiStores";
    namespace: null;
    modelApiIdentifier: "khagatiStores";
    modelSelectionField: "khagatiStores";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteKhagatiStoresOptions;
    schemaType:  null ;

    variablesType: (
        { id: string } &

        {}
    ) | undefined;
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
  }
)

  
      /**
  * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
  */
  bulkDelete: {
    <Options extends DeleteKhagatiStoresOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteKhagatiStoresOptions>
    ): Promise<DeleteKhagatiStoresResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends DeleteKhagatiStoresOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteKhagatiStoresOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteKhagatiStores",
        null,
        "khagatiStores",
        "khagatiStores",
        true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkDeleteKhagatiStores",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "khagatiStores",
      isBulk: true,
      defaultSelection: null,
      variables: {
        ids: {
          required: true,
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
