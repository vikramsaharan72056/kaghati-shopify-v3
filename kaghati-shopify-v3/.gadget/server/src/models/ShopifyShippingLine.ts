// All the generated types for the "Shopify Shipping Line" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShippingLine } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyShippingLineServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly carrierIdentifier: true;
      readonly code: true;
      readonly discountAllocations: true;
      readonly discountedPrice: true;
      readonly discountedPriceSet: true;
      readonly phone: true;
      readonly price: true;
      readonly priceSet: true;
      readonly source: true;
      readonly taxLines: true;
      readonly title: true;
      readonly requestedFulfillmentServiceId: true;
    readonly requestedFulfillmentService: false;
      readonly orderId: true;
    readonly order: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyShippingLine` model. */
export interface CreateShopifyShippingLineActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShippingLine` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShippingLine, DefaultShopifyShippingLineServerSelection>>;
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
  context: CreateShopifyShippingLineActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyShippingLine` model. */
export interface UpdateShopifyShippingLineActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShippingLine` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShippingLine, DefaultShopifyShippingLineServerSelection>>;
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
  context: UpdateShopifyShippingLineActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyShippingLine` model. */
export interface DeleteShopifyShippingLineActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShippingLine` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShippingLine, DefaultShopifyShippingLineServerSelection>>;
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
  context: DeleteShopifyShippingLineActionContext;
};


  