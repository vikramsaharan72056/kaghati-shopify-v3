// All the generated types for the "Shopify Fulfillment Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentLineItem } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly originalTotalSet: true;
      readonly quantity: true;
      readonly discountedTotalSet: true;
      readonly fulfillmentId: true;
    readonly fulfillment: false;
      readonly orderLineItemId: true;
    readonly orderLineItem: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyFulfillmentLineItem` model. */
export interface CreateShopifyFulfillmentLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillmentLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentLineItem, DefaultShopifyFulfillmentLineItemServerSelection>>;
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
  context: CreateShopifyFulfillmentLineItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyFulfillmentLineItem` model. */
export interface UpdateShopifyFulfillmentLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillmentLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentLineItem, DefaultShopifyFulfillmentLineItemServerSelection>>;
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
  context: UpdateShopifyFulfillmentLineItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyFulfillmentLineItem` model. */
export interface DeleteShopifyFulfillmentLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillmentLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentLineItem, DefaultShopifyFulfillmentLineItemServerSelection>>;
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
  context: DeleteShopifyFulfillmentLineItemActionContext;
};


  