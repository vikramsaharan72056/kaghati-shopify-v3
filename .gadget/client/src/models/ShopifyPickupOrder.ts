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
      ShopifyPickupOrder,
      ShopifyPickupOrderSort,
      ShopifyPickupOrderFilter,
      AvailableShopifyPickupOrderSelection,
      CreateShopifyPickupOrderInput,
      UpdateShopifyPickupOrderInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyPickupOrderSelection = {
  "__typename": true,
  "address": true,
  "createdAt": true,
  "id": true,
  "inventoryManagementVarient": true,
  "name": true,
  "service": true,
  "shipmentStatus": true,
  "shippingCompany": true,
  "status": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPickupOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPickupOrderOrDefault<Options extends Selectable<AvailableShopifyPickupOrderSelection>> = DeepFilterNever<
  Select<
    ShopifyPickupOrder,
    DefaultSelection<
      AvailableShopifyPickupOrderSelection,
      Options,
      typeof DefaultShopifyPickupOrderSelection
    >
  >>;

/** Options that can be passed to the `ShopifyPickupOrderManager#findOne` method */
export interface FindOneShopifyPickupOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPickupOrderSelection;
};

/** Options that can be passed to the `ShopifyPickupOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPickupOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPickupOrderSelection;
};

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
};

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
};

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
};


export interface CreateShopifyPickupOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPickupOrderSelection;
};


export interface UpdateShopifyPickupOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPickupOrderSelection;
};


export interface DeleteShopifyPickupOrderOptions {
};


export interface TrackShopifyPickupOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPickupOrderSelection;
};


export interface CancelShopifyPickupOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPickupOrderSelection;
};


const apiIdentifier = "shopifyPickupOrder";
const pluralApiIdentifier = "shopifyPickupOrders";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyPickupOrderVariables = {
          shopifyPickupOrder?: CreateShopifyPickupOrderInput,
      }

  /**
   * The inputs for executing create on shopifyPickupOrder.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyPickupOrderVariables = CreateShopifyPickupOrderInput;



/**
 * The return value from executing create on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyPickupOrderResult<Options extends CreateShopifyPickupOrderOptions> =
  SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyPickupOrder<Options extends CreateShopifyPickupOrderOptions>(
  
    variables: CreateShopifyPickupOrderVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>
): Promise<CreateShopifyPickupOrderResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyPickupOrder<Options extends CreateShopifyPickupOrderOptions>(
  
      variables: FullyQualifiedCreateShopifyPickupOrderVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>
): Promise<CreateShopifyPickupOrderResult<Options>>;

// Function implementation
async function createShopifyPickupOrder<Options extends CreateShopifyPickupOrderOptions>(
  this: ShopifyPickupOrderManager,
  
      variables: CreateShopifyPickupOrderVariables | FullyQualifiedCreateShopifyPickupOrderVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>
): Promise<CreateShopifyPickupOrderResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
    this,
    "createShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyPickupOrder": {
          value: newVariables.shopifyPickupOrder,
          required: false,
          type: "CreateShopifyPickupOrderInput",
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
  export type FullyQualifiedUpdateShopifyPickupOrderVariables = {
          shopifyPickupOrder?: UpdateShopifyPickupOrderInput,
      }

  /**
   * The inputs for executing update on shopifyPickupOrder.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyPickupOrderVariables = UpdateShopifyPickupOrderInput;



/**
 * The return value from executing update on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyPickupOrderResult<Options extends UpdateShopifyPickupOrderOptions> =
  SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyPickupOrder<Options extends UpdateShopifyPickupOrderOptions>(
  id: string,
    variables: UpdateShopifyPickupOrderVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>
): Promise<UpdateShopifyPickupOrderResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyPickupOrder<Options extends UpdateShopifyPickupOrderOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyPickupOrderVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>
): Promise<UpdateShopifyPickupOrderResult<Options>>;

// Function implementation
async function updateShopifyPickupOrder<Options extends UpdateShopifyPickupOrderOptions>(
  this: ShopifyPickupOrderManager,
  id: string,
      variables: UpdateShopifyPickupOrderVariables | FullyQualifiedUpdateShopifyPickupOrderVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>
): Promise<UpdateShopifyPickupOrderResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
    this,
    "updateShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyPickupOrder": {
          value: newVariables.shopifyPickupOrder,
          required: false,
          type: "UpdateShopifyPickupOrderInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyPickupOrder.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyPickupOrderResult<Options extends DeleteShopifyPickupOrderOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyPickupOrder<Options extends DeleteShopifyPickupOrderOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyPickupOrderOptions>
): Promise<DeleteShopifyPickupOrderResult<Options>>;

// Function implementation
async function deleteShopifyPickupOrder<Options extends DeleteShopifyPickupOrderOptions>(
  this: ShopifyPickupOrderManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyPickupOrderOptions>
): Promise<DeleteShopifyPickupOrderResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyPickupOrder",
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

  
    

/**
 * The return value from executing track on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type TrackShopifyPickupOrderResult<Options extends TrackShopifyPickupOrderOptions> =
  SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>
;


/**
  * Executes the track action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Fully qualified, nested api identifier overload
async function trackShopifyPickupOrder<Options extends TrackShopifyPickupOrderOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, TrackShopifyPickupOrderOptions>
): Promise<TrackShopifyPickupOrderResult<Options>>;

// Function implementation
async function trackShopifyPickupOrder<Options extends TrackShopifyPickupOrderOptions>(
  this: ShopifyPickupOrderManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, TrackShopifyPickupOrderOptions>
): Promise<TrackShopifyPickupOrderResult<Options>> {

  return (await actionRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
    this,
    "trackShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
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
 * The return value from executing cancel on shopifyPickupOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type CancelShopifyPickupOrderResult<Options extends CancelShopifyPickupOrderOptions> =
  SelectedShopifyPickupOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyPickupOrderOrDefault<Options>>
;


/**
  * Executes the cancel action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Fully qualified, nested api identifier overload
async function cancelShopifyPickupOrder<Options extends CancelShopifyPickupOrderOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, CancelShopifyPickupOrderOptions>
): Promise<CancelShopifyPickupOrderResult<Options>>;

// Function implementation
async function cancelShopifyPickupOrder<Options extends CancelShopifyPickupOrderOptions>(
  this: ShopifyPickupOrderManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, CancelShopifyPickupOrderOptions>
): Promise<CancelShopifyPickupOrderResult<Options>> {

  return (await actionRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
    this,
    "cancelShopifyPickupOrder",
    DefaultShopifyPickupOrderSelection,
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

  



/** All the actions available at the collection level and record level for "shopifyPickupOrder" */
export class ShopifyPickupOrderManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyPickupOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyPickupOrder";
  modelApiIdentifier: "shopifyPickupOrder";
  defaultSelection: typeof DefaultShopifyPickupOrderSelection;
  selectionType: AvailableShopifyPickupOrderSelection;
  optionsType: FindOneShopifyPickupOrderOptions;
  schemaType: Query["shopifyPickupOrder"];
} = Object.assign(
  async <Options extends FindOneShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPickupOrderOptions>) => {
    return await findOneRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
      this,
      "shopifyPickupOrder",
      id,
      DefaultShopifyPickupOrderSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyPickupOrder",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPickupOrderSelection,
  } as any
)

  
    /**
 * Finds one shopifyPickupOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyPickupOrder";
  modelApiIdentifier: "shopifyPickupOrder";
  defaultSelection: typeof DefaultShopifyPickupOrderSelection;
  selectionType: AvailableShopifyPickupOrderSelection;
  optionsType: MaybeFindOneShopifyPickupOrderOptions;
  schemaType: Query["shopifyPickupOrder"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyPickupOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPickupOrderOptions>) => {
    const record = await findOneRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
      this,
      "shopifyPickupOrder",
      id,
      DefaultShopifyPickupOrderSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyPickupOrder",
    modelApiIdentifier: "shopifyPickupOrder",
    defaultSelection: DefaultShopifyPickupOrderSelection,
  } as any
)

  
    /**
 * Finds many shopifyPickupOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyPickupOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPickupOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPickupOrderOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyPickupOrders";
  modelApiIdentifier: "shopifyPickupOrder";
  defaultSelection: typeof DefaultShopifyPickupOrderSelection;
  selectionType: AvailableShopifyPickupOrderSelection;
  optionsType: FindManyShopifyPickupOrdersOptions;
  schemaType: Query["shopifyPickupOrder"];
} = Object.assign(
  async <Options extends FindManyShopifyPickupOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPickupOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPickupOrderOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
      this,
      "shopifyPickupOrders",
      DefaultShopifyPickupOrderSelection,
      "shopifyPickupOrder",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyPickupOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPickupOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPickupOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyPickupOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyPickupOrders";
  modelApiIdentifier: "shopifyPickupOrder";
  defaultSelection: typeof DefaultShopifyPickupOrderSelection;
  selectionType: AvailableShopifyPickupOrderSelection;
  optionsType: FindFirstShopifyPickupOrderOptions;
  schemaType: Query["shopifyPickupOrder"];
} = Object.assign(
  async <Options extends FindFirstShopifyPickupOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
      this,
      "shopifyPickupOrders",
      DefaultShopifyPickupOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyPickupOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPickupOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPickupOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyPickupOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyPickupOrders";
  modelApiIdentifier: "shopifyPickupOrder";
  defaultSelection: typeof DefaultShopifyPickupOrderSelection;
  selectionType: AvailableShopifyPickupOrderSelection;
  optionsType: MaybeFindFirstShopifyPickupOrderOptions;
  schemaType: Query["shopifyPickupOrder"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyPickupOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
      this,
      "shopifyPickupOrders",
      DefaultShopifyPickupOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyPickupOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPickupOrderSelection,
  } as any
);

  
    /**
  * Finds one shopifyPickupOrder by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyPickupOrderOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyPickupOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPickupOrderOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyPickupOrders";
  modelApiIdentifier: "shopifyPickupOrder";
  defaultSelection: typeof DefaultShopifyPickupOrderSelection;
  selectionType: AvailableShopifyPickupOrderSelection;
  optionsType: FindOneShopifyPickupOrderOptions;
  schemaType: Query["shopifyPickupOrder"];
} = Object.assign(
  async <Options extends FindOneShopifyPickupOrderOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyPickupOrderOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyPickupOrderOrDefault<Options>
      > & SelectedShopifyPickupOrderOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyPickupOrderOrDefault<Options>>(
      this,
      "shopifyPickupOrders",
      "id",
      value,
      DefaultShopifyPickupOrderSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyPickupOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPickupOrderSelection,
  } as any
)

  
    create = Object.assign(createShopifyPickupOrder,
  {
    type: "action",
    operationName: "createShopifyPickupOrder",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyPickupOrderSelection,
    variables: {
      "shopifyPickupOrder": {
        required: false,
        type: "CreateShopifyPickupOrderInput",
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
    operationName: "createShopifyPickupOrder";
    namespace: null;
    modelApiIdentifier: "shopifyPickupOrder";
    modelSelectionField: "shopifyPickupOrder";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyPickupOrderSelection;
    selectionType: AvailableShopifyPickupOrderSelection;
    optionsType: CreateShopifyPickupOrderOptions;
    schemaType:  Query["shopifyPickupOrder"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyPickupOrderVariables          | CreateShopifyPickupOrderVariables      )
    ) | undefined;
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
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateShopifyPickupOrderOptions>(
        inputs: (FullyQualifiedCreateShopifyPickupOrderVariables | CreateShopifyPickupOrderVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>
    ): Promise<CreateShopifyPickupOrderResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends CreateShopifyPickupOrderOptions>(
        inputs: (FullyQualifiedCreateShopifyPickupOrderVariables | CreateShopifyPickupOrderVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyPickupOrderOptions>
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
        "bulkCreateShopifyPickupOrders",
        DefaultShopifyPickupOrderSelection,
        "shopifyPickupOrder",
        "shopifyPickupOrders",
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
      operationName: "bulkCreateShopifyPickupOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyPickupOrders",
      isBulk: true,
      defaultSelection: DefaultShopifyPickupOrderSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyPickupOrdersInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyPickupOrder,
  {
    type: "action",
    operationName: "updateShopifyPickupOrder",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyPickupOrderSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyPickupOrder": {
        required: false,
        type: "UpdateShopifyPickupOrderInput",
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
    operationName: "updateShopifyPickupOrder";
    namespace: null;
    modelApiIdentifier: "shopifyPickupOrder";
    modelSelectionField: "shopifyPickupOrder";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyPickupOrderSelection;
    selectionType: AvailableShopifyPickupOrderSelection;
    optionsType: UpdateShopifyPickupOrderOptions;
    schemaType:  Query["shopifyPickupOrder"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyPickupOrderVariables          | UpdateShopifyPickupOrderVariables      )
    ) | undefined;
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
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateShopifyPickupOrderOptions>(
        inputs: (FullyQualifiedUpdateShopifyPickupOrderVariables | UpdateShopifyPickupOrderVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>
    ): Promise<UpdateShopifyPickupOrderResult<Options>[]>;
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
    variablesType: (FullyQualifiedUpdateShopifyPickupOrderVariables | UpdateShopifyPickupOrderVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyPickupOrdersInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyPickupOrderOptions>(
        inputs: (FullyQualifiedUpdateShopifyPickupOrderVariables | UpdateShopifyPickupOrderVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyPickupOrderOptions>
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
        "bulkUpdateShopifyPickupOrders",
        DefaultShopifyPickupOrderSelection,
        "shopifyPickupOrder",
        "shopifyPickupOrders",
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
      operationName: "bulkUpdateShopifyPickupOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyPickupOrders",
      isBulk: true,
      defaultSelection: DefaultShopifyPickupOrderSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyPickupOrdersInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyPickupOrder,
  {
    type: "action",
    operationName: "deleteShopifyPickupOrder",
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
    operationName: "deleteShopifyPickupOrder";
    namespace: null;
    modelApiIdentifier: "shopifyPickupOrder";
    modelSelectionField: "shopifyPickupOrder";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyPickupOrderOptions;
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
    <Options extends DeleteShopifyPickupOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyPickupOrderOptions>
    ): Promise<DeleteShopifyPickupOrderResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends DeleteShopifyPickupOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyPickupOrderOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyPickupOrders",
        null,
        "shopifyPickupOrder",
        "shopifyPickupOrders",
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
      operationName: "bulkDeleteShopifyPickupOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyPickupOrders",
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

  
    track = Object.assign(trackShopifyPickupOrder,
  {
    type: "action",
    operationName: "trackShopifyPickupOrder",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyPickupOrderSelection,
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
    operationName: "trackShopifyPickupOrder";
    namespace: null;
    modelApiIdentifier: "shopifyPickupOrder";
    modelSelectionField: "shopifyPickupOrder";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyPickupOrderSelection;
    selectionType: AvailableShopifyPickupOrderSelection;
    optionsType: TrackShopifyPickupOrderOptions;
    schemaType:  Query["shopifyPickupOrder"];

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
  * Executes the bulkTrack action with the given inputs.
  */
  bulkTrack: {
    <Options extends TrackShopifyPickupOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, TrackShopifyPickupOrderOptions>
    ): Promise<TrackShopifyPickupOrderResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends TrackShopifyPickupOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, TrackShopifyPickupOrderOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkTrackShopifyPickupOrders",
        DefaultShopifyPickupOrderSelection,
        "shopifyPickupOrder",
        "shopifyPickupOrders",
        true,
          {
            ids: {
              value: ids,
              ...this["bulkTrack"].variables["ids"]
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
      operationName: "bulkTrackShopifyPickupOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyPickupOrders",
      isBulk: true,
      defaultSelection: DefaultShopifyPickupOrderSelection,
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

  
    cancel = Object.assign(cancelShopifyPickupOrder,
  {
    type: "action",
    operationName: "cancelShopifyPickupOrder",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyPickupOrderSelection,
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
    operationName: "cancelShopifyPickupOrder";
    namespace: null;
    modelApiIdentifier: "shopifyPickupOrder";
    modelSelectionField: "shopifyPickupOrder";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyPickupOrderSelection;
    selectionType: AvailableShopifyPickupOrderSelection;
    optionsType: CancelShopifyPickupOrderOptions;
    schemaType:  Query["shopifyPickupOrder"];

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
  * Executes the bulkCancel action with the given inputs.
  */
  bulkCancel: {
    <Options extends CancelShopifyPickupOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, CancelShopifyPickupOrderOptions>
    ): Promise<CancelShopifyPickupOrderResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends CancelShopifyPickupOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, CancelShopifyPickupOrderOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkCancelShopifyPickupOrders",
        DefaultShopifyPickupOrderSelection,
        "shopifyPickupOrder",
        "shopifyPickupOrders",
        true,
          {
            ids: {
              value: ids,
              ...this["bulkCancel"].variables["ids"]
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
      operationName: "bulkCancelShopifyPickupOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyPickupOrders",
      isBulk: true,
      defaultSelection: DefaultShopifyPickupOrderSelection,
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
