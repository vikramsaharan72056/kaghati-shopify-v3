// All the generated types for the "Shopify Fulfillment Order" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentOrder } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentOrderServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly assignedLocation: true;
      readonly deliveryMethod: true;
      readonly destination: true;
      readonly fulfillAt: true;
      readonly fulfillBy: true;
      readonly fulfillmentHolds: true;
      readonly internationalDuties: true;
      readonly merchantRequests: true;
      readonly requestStatus: true;
      readonly status: true;
      readonly supportedActions: true;
      readonly fulfillmentOrderLineItems: false;
      readonly orderId: true;
    readonly order: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyFulfillmentOrder` model. */
export interface CreateShopifyFulfillmentOrderActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillmentOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentOrder, DefaultShopifyFulfillmentOrderServerSelection>>;
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
  context: CreateShopifyFulfillmentOrderActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyFulfillmentOrder` model. */
export interface UpdateShopifyFulfillmentOrderActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillmentOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentOrder, DefaultShopifyFulfillmentOrderServerSelection>>;
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
  context: UpdateShopifyFulfillmentOrderActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyFulfillmentOrder` model. */
export interface DeleteShopifyFulfillmentOrderActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillmentOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentOrder, DefaultShopifyFulfillmentOrderServerSelection>>;
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
  context: DeleteShopifyFulfillmentOrderActionContext;
};


  