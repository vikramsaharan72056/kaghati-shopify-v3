// All the generated types for the "Shopify Tender Transaction" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyTenderTransaction } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyTenderTransactionServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly amount: true;
      readonly currency: true;
      readonly paymentDetails: true;
      readonly paymentMethod: true;
      readonly processedAt: true;
      readonly remoteReference: true;
      readonly test: true;
      readonly orderId: true;
    readonly order: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyTenderTransaction` model. */
export interface CreateShopifyTenderTransactionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyTenderTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyTenderTransaction, DefaultShopifyTenderTransactionServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: CreateShopifyTenderTransactionActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyTenderTransaction` model. */
export interface UpdateShopifyTenderTransactionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyTenderTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyTenderTransaction, DefaultShopifyTenderTransactionServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UpdateShopifyTenderTransactionActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyTenderTransaction` model. */
export interface DeleteShopifyTenderTransactionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyTenderTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyTenderTransaction, DefaultShopifyTenderTransactionServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: DeleteShopifyTenderTransactionActionContext;
};


  