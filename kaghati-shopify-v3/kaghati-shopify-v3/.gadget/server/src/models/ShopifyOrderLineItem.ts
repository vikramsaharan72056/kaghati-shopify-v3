// All the generated types for the "Shopify Order Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrderLineItem } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly refunds: false;
      readonly attributedStaffs: true;
      readonly shopifyCreatedAt: true;
      readonly discountAllocations: true;
      readonly duties: false;
      readonly giftCard: true;
      readonly name: true;
      readonly fulfillmentLineItems: false;
      readonly price: true;
      readonly priceSet: true;
      readonly properties: true;
      readonly quantity: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly taxLines: true;
      readonly taxable: true;
      readonly title: true;
      readonly totalDiscount: true;
      readonly totalDiscountSet: true;
      readonly shopifyUpdatedAt: true;
      readonly variantTitle: true;
      readonly vendor: true;
      readonly fulfillmentOrderLineItems: false;
      readonly originLocationId: true;
    readonly originLocation: false;
      readonly orderId: true;
    readonly order: false;
      readonly productId: true;
    readonly product: false;
      readonly variantId: true;
    readonly variant: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyOrderLineItem` model. */
export interface CreateShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: CreateShopifyOrderLineItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyOrderLineItem` model. */
export interface UpdateShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: UpdateShopifyOrderLineItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyOrderLineItem` model. */
export interface DeleteShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: DeleteShopifyOrderLineItemActionContext;
};


  