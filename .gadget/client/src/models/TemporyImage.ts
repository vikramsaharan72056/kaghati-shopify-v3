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
      TemporyImage,
      TemporyImageSort,
      TemporyImageFilter,
      AvailableTemporyImageSelection,
      CreateTemporyImageInput,
      UpdateTemporyImageInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultTemporyImageSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "src": {
    "mimeType": true,
    "url": true
  },
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "temporyImage". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedTemporyImageOrDefault<Options extends Selectable<AvailableTemporyImageSelection>> = DeepFilterNever<
  Select<
    TemporyImage,
    DefaultSelection<
      AvailableTemporyImageSelection,
      Options,
      typeof DefaultTemporyImageSelection
    >
  >>;

/** Options that can be passed to the `TemporyImageManager#findOne` method */
export interface FindOneTemporyImageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
};

/** Options that can be passed to the `TemporyImageManager#maybeFindOne` method */
export interface MaybeFindOneTemporyImageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
};

/** Options that can be passed to the `TemporyImageManager#findMany` method */
export interface FindManyTemporyImagesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
  /** Return records sorted by these sorts */
  sort?: TemporyImageSort | TemporyImageSort[] | null;
  /** Only return records matching these filters. */
  filter?: TemporyImageFilter | TemporyImageFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `TemporyImageManager#findFirst` method */
export interface FindFirstTemporyImageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
  /** Return records sorted by these sorts */
  sort?: TemporyImageSort | TemporyImageSort[] | null;
  /** Only return records matching these filters. */
  filter?: TemporyImageFilter | TemporyImageFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `TemporyImageManager#maybeFindFirst` method */
export interface MaybeFindFirstTemporyImageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
  /** Return records sorted by these sorts */
  sort?: TemporyImageSort | TemporyImageSort[] | null;
  /** Only return records matching these filters. */
  filter?: TemporyImageFilter | TemporyImageFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateTemporyImageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
};


export interface UpdateTemporyImageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTemporyImageSelection;
};


export interface DeleteTemporyImageOptions {
};


const apiIdentifier = "temporyImage";
const pluralApiIdentifier = "temporyImages";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateTemporyImageVariables = {
          temporyImage?: CreateTemporyImageInput,
      }

  /**
   * The inputs for executing create on temporyImage.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateTemporyImageVariables = CreateTemporyImageInput;



/**
 * The return value from executing create on temporyImage.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateTemporyImageResult<Options extends CreateTemporyImageOptions> =
  SelectedTemporyImageOrDefault<Options> extends void ? void : GadgetRecord<SelectedTemporyImageOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createTemporyImage<Options extends CreateTemporyImageOptions>(
  
    variables: CreateTemporyImageVariables,

  options?: LimitToKnownKeys<Options, CreateTemporyImageOptions>
): Promise<CreateTemporyImageResult<Options>>;

// Fully qualified, nested api identifier overload
async function createTemporyImage<Options extends CreateTemporyImageOptions>(
  
      variables: FullyQualifiedCreateTemporyImageVariables,
  
  options?: LimitToKnownKeys<Options, CreateTemporyImageOptions>
): Promise<CreateTemporyImageResult<Options>>;

// Function implementation
async function createTemporyImage<Options extends CreateTemporyImageOptions>(
  this: TemporyImageManager,
  
      variables: CreateTemporyImageVariables | FullyQualifiedCreateTemporyImageVariables,
  
  options?: LimitToKnownKeys<Options, CreateTemporyImageOptions>
): Promise<CreateTemporyImageResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedTemporyImageOrDefault<Options>>(
    this,
    "createTemporyImage",
    DefaultTemporyImageSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "temporyImage": {
          value: newVariables.temporyImage,
          required: false,
          type: "CreateTemporyImageInput",
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
  export type FullyQualifiedUpdateTemporyImageVariables = {
          temporyImage?: UpdateTemporyImageInput,
      }

  /**
   * The inputs for executing update on temporyImage.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateTemporyImageVariables = UpdateTemporyImageInput;



/**
 * The return value from executing update on temporyImage.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateTemporyImageResult<Options extends UpdateTemporyImageOptions> =
  SelectedTemporyImageOrDefault<Options> extends void ? void : GadgetRecord<SelectedTemporyImageOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateTemporyImage<Options extends UpdateTemporyImageOptions>(
  id: string,
    variables: UpdateTemporyImageVariables,

  options?: LimitToKnownKeys<Options, UpdateTemporyImageOptions>
): Promise<UpdateTemporyImageResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateTemporyImage<Options extends UpdateTemporyImageOptions>(
  id: string,
      variables: FullyQualifiedUpdateTemporyImageVariables,
  
  options?: LimitToKnownKeys<Options, UpdateTemporyImageOptions>
): Promise<UpdateTemporyImageResult<Options>>;

// Function implementation
async function updateTemporyImage<Options extends UpdateTemporyImageOptions>(
  this: TemporyImageManager,
  id: string,
      variables: UpdateTemporyImageVariables | FullyQualifiedUpdateTemporyImageVariables,
  
  options?: LimitToKnownKeys<Options, UpdateTemporyImageOptions>
): Promise<UpdateTemporyImageResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedTemporyImageOrDefault<Options>>(
    this,
    "updateTemporyImage",
    DefaultTemporyImageSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "temporyImage": {
          value: newVariables.temporyImage,
          required: false,
          type: "UpdateTemporyImageInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on temporyImage.
 * "Is void because this action deletes the record"
 **/
export type DeleteTemporyImageResult<Options extends DeleteTemporyImageOptions> =
  void extends void ? void : GadgetRecord<SelectedTemporyImageOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteTemporyImage<Options extends DeleteTemporyImageOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteTemporyImageOptions>
): Promise<DeleteTemporyImageResult<Options>>;

// Function implementation
async function deleteTemporyImage<Options extends DeleteTemporyImageOptions>(
  this: TemporyImageManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteTemporyImageOptions>
): Promise<DeleteTemporyImageResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteTemporyImage",
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

  



/** All the actions available at the collection level and record level for "temporyImage" */
export class TemporyImageManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one temporyImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneTemporyImageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "temporyImage";
  modelApiIdentifier: "temporyImage";
  defaultSelection: typeof DefaultTemporyImageSelection;
  selectionType: AvailableTemporyImageSelection;
  optionsType: FindOneTemporyImageOptions;
  schemaType: Query["temporyImage"];
} = Object.assign(
  async <Options extends FindOneTemporyImageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTemporyImageOptions>) => {
    return await findOneRunner<SelectedTemporyImageOrDefault<Options>>(
      this,
      "temporyImage",
      id,
      DefaultTemporyImageSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "temporyImage",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultTemporyImageSelection,
  } as any
)

  
    /**
 * Finds one temporyImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneTemporyImageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "temporyImage";
  modelApiIdentifier: "temporyImage";
  defaultSelection: typeof DefaultTemporyImageSelection;
  selectionType: AvailableTemporyImageSelection;
  optionsType: MaybeFindOneTemporyImageOptions;
  schemaType: Query["temporyImage"];
} = Object.assign(
  async <Options extends MaybeFindOneTemporyImageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTemporyImageOptions>) => {
    const record = await findOneRunner<SelectedTemporyImageOrDefault<Options>>(
      this,
      "temporyImage",
      id,
      DefaultTemporyImageSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "temporyImage",
    modelApiIdentifier: "temporyImage",
    defaultSelection: DefaultTemporyImageSelection,
  } as any
)

  
    /**
 * Finds many temporyImage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyTemporyImagesOptions>(options?: LimitToKnownKeys<Options, FindManyTemporyImagesOptions>):
    Promise<
      GadgetRecordList<
        SelectedTemporyImageOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "temporyImages";
  modelApiIdentifier: "temporyImage";
  defaultSelection: typeof DefaultTemporyImageSelection;
  selectionType: AvailableTemporyImageSelection;
  optionsType: FindManyTemporyImagesOptions;
  schemaType: Query["temporyImage"];
} = Object.assign(
  async <Options extends FindManyTemporyImagesOptions>(options?: LimitToKnownKeys<Options, FindManyTemporyImagesOptions>):
    Promise<
      GadgetRecordList<
        SelectedTemporyImageOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedTemporyImageOrDefault<Options>>(
      this,
      "temporyImages",
      DefaultTemporyImageSelection,
      "temporyImage",
      options
    );
  },
  {
    type: "findMany",
    operationName: "temporyImages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultTemporyImageSelection,
  } as any
);

  
    /**
 * Finds the first matching temporyImage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstTemporyImageOptions>(options?: LimitToKnownKeys<Options, FindFirstTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "temporyImages";
  modelApiIdentifier: "temporyImage";
  defaultSelection: typeof DefaultTemporyImageSelection;
  selectionType: AvailableTemporyImageSelection;
  optionsType: FindFirstTemporyImageOptions;
  schemaType: Query["temporyImage"];
} = Object.assign(
  async <Options extends FindFirstTemporyImageOptions>(options?: LimitToKnownKeys<Options, FindFirstTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedTemporyImageOrDefault<Options>>(
      this,
      "temporyImages",
      DefaultTemporyImageSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "temporyImages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultTemporyImageSelection,
  } as any
);

  
    /**
 * Finds the first matching temporyImage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstTemporyImageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "temporyImages";
  modelApiIdentifier: "temporyImage";
  defaultSelection: typeof DefaultTemporyImageSelection;
  selectionType: AvailableTemporyImageSelection;
  optionsType: MaybeFindFirstTemporyImageOptions;
  schemaType: Query["temporyImage"];
} = Object.assign(
  async <Options extends MaybeFindFirstTemporyImageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedTemporyImageOrDefault<Options>>(
      this,
      "temporyImages",
      DefaultTemporyImageSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "temporyImages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultTemporyImageSelection,
  } as any
);

  
    /**
  * Finds one temporyImage by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneTemporyImageOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTemporyImageOptions>):
    Promise<
      GadgetRecord<
        SelectedTemporyImageOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "temporyImages";
  modelApiIdentifier: "temporyImage";
  defaultSelection: typeof DefaultTemporyImageSelection;
  selectionType: AvailableTemporyImageSelection;
  optionsType: FindOneTemporyImageOptions;
  schemaType: Query["temporyImage"];
} = Object.assign(
  async <Options extends FindOneTemporyImageOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTemporyImageOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedTemporyImageOrDefault<Options>
      > & SelectedTemporyImageOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedTemporyImageOrDefault<Options>>(
      this,
      "temporyImages",
      "id",
      value,
      DefaultTemporyImageSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "temporyImages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultTemporyImageSelection,
  } as any
)

  
    create = Object.assign(createTemporyImage,
  {
    type: "action",
    operationName: "createTemporyImage",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultTemporyImageSelection,
    variables: {
      "temporyImage": {
        required: false,
        type: "CreateTemporyImageInput",
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
    operationName: "createTemporyImage";
    namespace: null;
    modelApiIdentifier: "temporyImage";
    modelSelectionField: "temporyImage";
    isBulk: false;
    defaultSelection: typeof DefaultTemporyImageSelection;
    selectionType: AvailableTemporyImageSelection;
    optionsType: CreateTemporyImageOptions;
    schemaType:  Query["temporyImage"];

    variablesType: (

      (
        FullyQualifiedCreateTemporyImageVariables          | CreateTemporyImageVariables      )
    ) | undefined;
    variables: {
                    "temporyImage": {
          required: false;
          type: "CreateTemporyImageInput";
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
    <Options extends CreateTemporyImageOptions>(
        inputs: (FullyQualifiedCreateTemporyImageVariables | CreateTemporyImageVariables)[],
      options?: LimitToKnownKeys<Options, CreateTemporyImageOptions>
    ): Promise<CreateTemporyImageResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateTemporyImages";
    namespace: null;
    modelApiIdentifier: "temporyImage";
    modelSelectionField: "temporyImages";
    isBulk: true;
    defaultSelection: typeof DefaultTemporyImageSelection;
    selectionType: AvailableTemporyImageSelection;
    optionsType: CreateTemporyImageOptions;
    schemaType: Query["temporyImage"];
    variablesType: (FullyQualifiedCreateTemporyImageVariables | CreateTemporyImageVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateTemporyImagesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateTemporyImageOptions>(
        inputs: (FullyQualifiedCreateTemporyImageVariables | CreateTemporyImageVariables)[],
      options?: LimitToKnownKeys<Options, CreateTemporyImageOptions>
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
        "bulkCreateTemporyImages",
        DefaultTemporyImageSelection,
        "temporyImage",
        "temporyImages",
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
      operationName: "bulkCreateTemporyImages",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "temporyImages",
      isBulk: true,
      defaultSelection: DefaultTemporyImageSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateTemporyImagesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateTemporyImage,
  {
    type: "action",
    operationName: "updateTemporyImage",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultTemporyImageSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "temporyImage": {
        required: false,
        type: "UpdateTemporyImageInput",
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
    operationName: "updateTemporyImage";
    namespace: null;
    modelApiIdentifier: "temporyImage";
    modelSelectionField: "temporyImage";
    isBulk: false;
    defaultSelection: typeof DefaultTemporyImageSelection;
    selectionType: AvailableTemporyImageSelection;
    optionsType: UpdateTemporyImageOptions;
    schemaType:  Query["temporyImage"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateTemporyImageVariables          | UpdateTemporyImageVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "temporyImage": {
          required: false;
          type: "UpdateTemporyImageInput";
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
    <Options extends UpdateTemporyImageOptions>(
        inputs: (FullyQualifiedUpdateTemporyImageVariables | UpdateTemporyImageVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateTemporyImageOptions>
    ): Promise<UpdateTemporyImageResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateTemporyImages";
    namespace: null;
    modelApiIdentifier: "temporyImage";
    modelSelectionField: "temporyImages";
    isBulk: true;
    defaultSelection: typeof DefaultTemporyImageSelection;
    selectionType: AvailableTemporyImageSelection;
    optionsType: UpdateTemporyImageOptions;
    schemaType: Query["temporyImage"];
    variablesType: (FullyQualifiedUpdateTemporyImageVariables | UpdateTemporyImageVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateTemporyImagesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateTemporyImageOptions>(
        inputs: (FullyQualifiedUpdateTemporyImageVariables | UpdateTemporyImageVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateTemporyImageOptions>
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
        "bulkUpdateTemporyImages",
        DefaultTemporyImageSelection,
        "temporyImage",
        "temporyImages",
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
      operationName: "bulkUpdateTemporyImages",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "temporyImages",
      isBulk: true,
      defaultSelection: DefaultTemporyImageSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateTemporyImagesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteTemporyImage,
  {
    type: "action",
    operationName: "deleteTemporyImage",
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
    operationName: "deleteTemporyImage";
    namespace: null;
    modelApiIdentifier: "temporyImage";
    modelSelectionField: "temporyImage";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteTemporyImageOptions;
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
    <Options extends DeleteTemporyImageOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteTemporyImageOptions>
    ): Promise<DeleteTemporyImageResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteTemporyImages";
    namespace: null;
    modelApiIdentifier: "temporyImage";
    modelSelectionField: "temporyImages";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteTemporyImageOptions;
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
    async <Options extends DeleteTemporyImageOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteTemporyImageOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteTemporyImages",
        null,
        "temporyImage",
        "temporyImages",
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
      operationName: "bulkDeleteTemporyImages",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "temporyImages",
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
