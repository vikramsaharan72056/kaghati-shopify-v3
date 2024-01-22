// All the generated types for the "Shopify Fulfillment" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillment } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly shopifyCreatedAt: true;
      readonly name: true;
      readonly notifyCustomer: true;
      readonly originAddress: true;
      readonly receipt: true;
      readonly service: true;
      readonly shipmentStatus: true;
      readonly status: true;
      readonly trackingCompany: true;
      readonly trackingNumbers: true;
      readonly trackingUrls: true;
      readonly shopifyUpdatedAt: true;
      readonly variantInventoryManagement: true;
      readonly fulfillmentEvents: false;
      readonly fulfillmentLineItems: false;
      readonly locationId: true;
    readonly location: false;
      readonly orderId: true;
    readonly order: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyFulfillment` model. */
export interface CreateShopifyFulfillmentActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillment, DefaultShopifyFulfillmentServerSelection>>;
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
  context: CreateShopifyFulfillmentActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyFulfillment` model. */
export interface UpdateShopifyFulfillmentActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillment, DefaultShopifyFulfillmentServerSelection>>;
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
  context: UpdateShopifyFulfillmentActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyFulfillment` model. */
export interface DeleteShopifyFulfillmentActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyFulfillment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillment, DefaultShopifyFulfillmentServerSelection>>;
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
  context: DeleteShopifyFulfillmentActionContext;
};


  