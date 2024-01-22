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
      IntegrationAPI,
      IntegrationAPISort,
      IntegrationAPIFilter,
      AvailableIntegrationAPISelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultIntegrationAPISelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "integrationAPI". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedIntegrationAPIOrDefault<Options extends Selectable<AvailableIntegrationAPISelection>> = DeepFilterNever<
  Select<
    IntegrationAPI,
    DefaultSelection<
      AvailableIntegrationAPISelection,
      Options,
      typeof DefaultIntegrationAPISelection
    >
  >>;

/** Options that can be passed to the `IntegrationAPIManager#findOne` method */
export interface FindOneIntegrationAPIOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
};

/** Options that can be passed to the `IntegrationAPIManager#maybeFindOne` method */
export interface MaybeFindOneIntegrationAPIOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
};

/** Options that can be passed to the `IntegrationAPIManager#findMany` method */
export interface FindManyIntegrationAPIsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
  /** Return records sorted by these sorts */
  sort?: IntegrationAPISort | IntegrationAPISort[] | null;
  /** Only return records matching these filters. */
  filter?: IntegrationAPIFilter | IntegrationAPIFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `IntegrationAPIManager#findFirst` method */
export interface FindFirstIntegrationAPIOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
  /** Return records sorted by these sorts */
  sort?: IntegrationAPISort | IntegrationAPISort[] | null;
  /** Only return records matching these filters. */
  filter?: IntegrationAPIFilter | IntegrationAPIFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `IntegrationAPIManager#maybeFindFirst` method */
export interface MaybeFindFirstIntegrationAPIOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
  /** Return records sorted by these sorts */
  sort?: IntegrationAPISort | IntegrationAPISort[] | null;
  /** Only return records matching these filters. */
  filter?: IntegrationAPIFilter | IntegrationAPIFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateIntegrationAPIOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
};


export interface UpdateIntegrationAPIOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableIntegrationAPISelection;
};


export interface DeleteIntegrationAPIOptions {
};


const apiIdentifier = "integrationAPI";
const pluralApiIdentifier = "integrationAPIs";


    

/**
 * The return value from executing create on integrationAPI.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateIntegrationAPIResult<Options extends CreateIntegrationAPIOptions> =
  SelectedIntegrationAPIOrDefault<Options> extends void ? void : GadgetRecord<SelectedIntegrationAPIOrDefault<Options>>
;


/**
  * Executes the create action. Runs the action and returns a Promise for the updated record.
  */

// Fully qualified, nested api identifier overload
async function createIntegrationAPI<Options extends CreateIntegrationAPIOptions>(
  
  
  options?: LimitToKnownKeys<Options, CreateIntegrationAPIOptions>
): Promise<CreateIntegrationAPIResult<Options>>;

// Function implementation
async function createIntegrationAPI<Options extends CreateIntegrationAPIOptions>(
  this: IntegrationAPIManager,
  
  
  options?: LimitToKnownKeys<Options, CreateIntegrationAPIOptions>
): Promise<CreateIntegrationAPIResult<Options>> {

  return (await actionRunner<SelectedIntegrationAPIOrDefault<Options>>(
    this,
    "createIntegrationAPI",
    DefaultIntegrationAPISelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing update on integrationAPI.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateIntegrationAPIResult<Options extends UpdateIntegrationAPIOptions> =
  SelectedIntegrationAPIOrDefault<Options> extends void ? void : GadgetRecord<SelectedIntegrationAPIOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Fully qualified, nested api identifier overload
async function updateIntegrationAPI<Options extends UpdateIntegrationAPIOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, UpdateIntegrationAPIOptions>
): Promise<UpdateIntegrationAPIResult<Options>>;

// Function implementation
async function updateIntegrationAPI<Options extends UpdateIntegrationAPIOptions>(
  this: IntegrationAPIManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, UpdateIntegrationAPIOptions>
): Promise<UpdateIntegrationAPIResult<Options>> {

  return (await actionRunner<SelectedIntegrationAPIOrDefault<Options>>(
    this,
    "updateIntegrationAPI",
    DefaultIntegrationAPISelection,
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

  
    

/**
 * The return value from executing delete on integrationAPI.
 * "Is void because this action deletes the record"
 **/
export type DeleteIntegrationAPIResult<Options extends DeleteIntegrationAPIOptions> =
  void extends void ? void : GadgetRecord<SelectedIntegrationAPIOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteIntegrationAPI<Options extends DeleteIntegrationAPIOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteIntegrationAPIOptions>
): Promise<DeleteIntegrationAPIResult<Options>>;

// Function implementation
async function deleteIntegrationAPI<Options extends DeleteIntegrationAPIOptions>(
  this: IntegrationAPIManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteIntegrationAPIOptions>
): Promise<DeleteIntegrationAPIResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteIntegrationAPI",
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

  



/** All the actions available at the collection level and record level for "integrationAPI" */
export class IntegrationAPIManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one integrationAPI by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneIntegrationAPIOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "integrationAPI";
  modelApiIdentifier: "integrationAPI";
  defaultSelection: typeof DefaultIntegrationAPISelection;
  selectionType: AvailableIntegrationAPISelection;
  optionsType: FindOneIntegrationAPIOptions;
  schemaType: Query["integrationAPI"];
} = Object.assign(
  async <Options extends FindOneIntegrationAPIOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneIntegrationAPIOptions>) => {
    return await findOneRunner<SelectedIntegrationAPIOrDefault<Options>>(
      this,
      "integrationAPI",
      id,
      DefaultIntegrationAPISelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "integrationAPI",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultIntegrationAPISelection,
  } as any
)

  
    /**
 * Finds one integrationAPI by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneIntegrationAPIOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "integrationAPI";
  modelApiIdentifier: "integrationAPI";
  defaultSelection: typeof DefaultIntegrationAPISelection;
  selectionType: AvailableIntegrationAPISelection;
  optionsType: MaybeFindOneIntegrationAPIOptions;
  schemaType: Query["integrationAPI"];
} = Object.assign(
  async <Options extends MaybeFindOneIntegrationAPIOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneIntegrationAPIOptions>) => {
    const record = await findOneRunner<SelectedIntegrationAPIOrDefault<Options>>(
      this,
      "integrationAPI",
      id,
      DefaultIntegrationAPISelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "integrationAPI",
    modelApiIdentifier: "integrationAPI",
    defaultSelection: DefaultIntegrationAPISelection,
  } as any
)

  
    /**
 * Finds many integrationAPI. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyIntegrationAPIsOptions>(options?: LimitToKnownKeys<Options, FindManyIntegrationAPIsOptions>):
    Promise<
      GadgetRecordList<
        SelectedIntegrationAPIOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "integrationAPIs";
  modelApiIdentifier: "integrationAPI";
  defaultSelection: typeof DefaultIntegrationAPISelection;
  selectionType: AvailableIntegrationAPISelection;
  optionsType: FindManyIntegrationAPIsOptions;
  schemaType: Query["integrationAPI"];
} = Object.assign(
  async <Options extends FindManyIntegrationAPIsOptions>(options?: LimitToKnownKeys<Options, FindManyIntegrationAPIsOptions>):
    Promise<
      GadgetRecordList<
        SelectedIntegrationAPIOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedIntegrationAPIOrDefault<Options>>(
      this,
      "integrationAPIs",
      DefaultIntegrationAPISelection,
      "integrationAPI",
      options
    );
  },
  {
    type: "findMany",
    operationName: "integrationAPIs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultIntegrationAPISelection,
  } as any
);

  
    /**
 * Finds the first matching integrationAPI. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstIntegrationAPIOptions>(options?: LimitToKnownKeys<Options, FindFirstIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "integrationAPIs";
  modelApiIdentifier: "integrationAPI";
  defaultSelection: typeof DefaultIntegrationAPISelection;
  selectionType: AvailableIntegrationAPISelection;
  optionsType: FindFirstIntegrationAPIOptions;
  schemaType: Query["integrationAPI"];
} = Object.assign(
  async <Options extends FindFirstIntegrationAPIOptions>(options?: LimitToKnownKeys<Options, FindFirstIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedIntegrationAPIOrDefault<Options>>(
      this,
      "integrationAPIs",
      DefaultIntegrationAPISelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "integrationAPIs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultIntegrationAPISelection,
  } as any
);

  
    /**
 * Finds the first matching integrationAPI. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstIntegrationAPIOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "integrationAPIs";
  modelApiIdentifier: "integrationAPI";
  defaultSelection: typeof DefaultIntegrationAPISelection;
  selectionType: AvailableIntegrationAPISelection;
  optionsType: MaybeFindFirstIntegrationAPIOptions;
  schemaType: Query["integrationAPI"];
} = Object.assign(
  async <Options extends MaybeFindFirstIntegrationAPIOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedIntegrationAPIOrDefault<Options>>(
      this,
      "integrationAPIs",
      DefaultIntegrationAPISelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "integrationAPIs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultIntegrationAPISelection,
  } as any
);

  
    /**
  * Finds one integrationAPI by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneIntegrationAPIOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneIntegrationAPIOptions>):
    Promise<
      GadgetRecord<
        SelectedIntegrationAPIOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "integrationAPIs";
  modelApiIdentifier: "integrationAPI";
  defaultSelection: typeof DefaultIntegrationAPISelection;
  selectionType: AvailableIntegrationAPISelection;
  optionsType: FindOneIntegrationAPIOptions;
  schemaType: Query["integrationAPI"];
} = Object.assign(
  async <Options extends FindOneIntegrationAPIOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneIntegrationAPIOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedIntegrationAPIOrDefault<Options>
      > & SelectedIntegrationAPIOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedIntegrationAPIOrDefault<Options>>(
      this,
      "integrationAPIs",
      "id",
      value,
      DefaultIntegrationAPISelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "integrationAPIs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultIntegrationAPISelection,
  } as any
)

  
    create = Object.assign(createIntegrationAPI,
  {
    type: "action",
    operationName: "createIntegrationAPI",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultIntegrationAPISelection,
    variables: {
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "createIntegrationAPI";
    namespace: null;
    modelApiIdentifier: "integrationAPI";
    modelSelectionField: "integrationAPI";
    isBulk: false;
    defaultSelection: typeof DefaultIntegrationAPISelection;
    selectionType: AvailableIntegrationAPISelection;
    optionsType: CreateIntegrationAPIOptions;
    schemaType:  Query["integrationAPI"];

    variablesType: Record<string, never>;
    variables: {
                };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: false;
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateIntegrationAPIOptions>(
        inputs: (Record<string, never>)[],
      options?: LimitToKnownKeys<Options, CreateIntegrationAPIOptions>
    ): Promise<CreateIntegrationAPIResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateIntegrationAPIs";
    namespace: null;
    modelApiIdentifier: "integrationAPI";
    modelSelectionField: "integrationAPIs";
    isBulk: true;
    defaultSelection: typeof DefaultIntegrationAPISelection;
    selectionType: AvailableIntegrationAPISelection;
    optionsType: CreateIntegrationAPIOptions;
    schemaType: Query["integrationAPI"];
    variablesType: (Record<string, never>)[];
    variables: {
        inputs: {
          required: true;
          type: "[JSON!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateIntegrationAPIOptions>(
        inputs: (Record<string, never>)[],
      options?: LimitToKnownKeys<Options, CreateIntegrationAPIOptions>
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
        "bulkCreateIntegrationAPIs",
        DefaultIntegrationAPISelection,
        "integrationAPI",
        "integrationAPIs",
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
      operationName: "bulkCreateIntegrationAPIs",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "integrationAPIs",
      isBulk: true,
      defaultSelection: DefaultIntegrationAPISelection,
      variables: {
        inputs: {
          required: true,
          type: "[JSON!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
    update = Object.assign(updateIntegrationAPI,
  {
    type: "action",
    operationName: "updateIntegrationAPI",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultIntegrationAPISelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "updateIntegrationAPI";
    namespace: null;
    modelApiIdentifier: "integrationAPI";
    modelSelectionField: "integrationAPI";
    isBulk: false;
    defaultSelection: typeof DefaultIntegrationAPISelection;
    selectionType: AvailableIntegrationAPISelection;
    optionsType: UpdateIntegrationAPIOptions;
    schemaType:  Query["integrationAPI"];

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
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: false;
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateIntegrationAPIOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, UpdateIntegrationAPIOptions>
    ): Promise<UpdateIntegrationAPIResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateIntegrationAPIs";
    namespace: null;
    modelApiIdentifier: "integrationAPI";
    modelSelectionField: "integrationAPIs";
    isBulk: true;
    defaultSelection: typeof DefaultIntegrationAPISelection;
    selectionType: AvailableIntegrationAPISelection;
    optionsType: UpdateIntegrationAPIOptions;
    schemaType: Query["integrationAPI"];
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
    async <Options extends UpdateIntegrationAPIOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, UpdateIntegrationAPIOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkUpdateIntegrationAPIs",
        DefaultIntegrationAPISelection,
        "integrationAPI",
        "integrationAPIs",
        true,
          {
            ids: {
              value: ids,
              ...this["bulkUpdate"].variables["ids"]
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
      operationName: "bulkUpdateIntegrationAPIs",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "integrationAPIs",
      isBulk: true,
      defaultSelection: DefaultIntegrationAPISelection,
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

  
    delete = Object.assign(deleteIntegrationAPI,
  {
    type: "action",
    operationName: "deleteIntegrationAPI",
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
    operationName: "deleteIntegrationAPI";
    namespace: null;
    modelApiIdentifier: "integrationAPI";
    modelSelectionField: "integrationAPI";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteIntegrationAPIOptions;
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
    <Options extends DeleteIntegrationAPIOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteIntegrationAPIOptions>
    ): Promise<DeleteIntegrationAPIResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteIntegrationAPIs";
    namespace: null;
    modelApiIdentifier: "integrationAPI";
    modelSelectionField: "integrationAPIs";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteIntegrationAPIOptions;
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
    async <Options extends DeleteIntegrationAPIOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteIntegrationAPIOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteIntegrationAPIs",
        null,
        "integrationAPI",
        "integrationAPIs",
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
      operationName: "bulkDeleteIntegrationAPIs",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "integrationAPIs",
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
