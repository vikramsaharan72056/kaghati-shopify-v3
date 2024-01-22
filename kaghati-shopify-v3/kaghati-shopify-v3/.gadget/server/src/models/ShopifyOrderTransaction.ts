// All the generated types for the "Shopify Order Transaction" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrderTransaction } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderTransactionServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly amount: true;
      readonly authorization: true;
      readonly authorizationExpiresAt: true;
      readonly shopifyCreatedAt: true;
      readonly currency: true;
      readonly errorCode: true;
      readonly extendedAuthorizationAttributes: true;
      readonly gateway: true;
      readonly kind: true;
      readonly message: true;
      readonly children: false;
      readonly paymentDetails: true;
      readonly paymentId: true;
      readonly paymentsRefundAttributes: true;
      readonly processedAt: true;
      readonly receipt: true;
      readonly sourceName: true;
      readonly status: true;
      readonly test: true;
      readonly totalUnsettledSet: true;
      readonly locationId: true;
    readonly location: false;
      readonly orderId: true;
    readonly order: false;
      readonly parentId: true;
    readonly parent: false;
      readonly refundId: true;
    readonly refund: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyOrderTransaction` model. */
export interface CreateShopifyOrderTransactionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrderTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderTransaction, DefaultShopifyOrderTransactionServerSelection>>;
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
  context: CreateShopifyOrderTransactionActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyOrderTransaction` model. */
export interface UpdateShopifyOrderTransactionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrderTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderTransaction, DefaultShopifyOrderTransactionServerSelection>>;
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
  context: UpdateShopifyOrderTransactionActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyOrderTransaction` model. */
export interface DeleteShopifyOrderTransactionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrderTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderTransaction, DefaultShopifyOrderTransactionServerSelection>>;
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
  context: DeleteShopifyOrderTransactionActionContext;
};


  