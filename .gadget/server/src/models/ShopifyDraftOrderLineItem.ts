// All the generated types for the "Shopify Draft Order Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDraftOrderLineItem } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDraftOrderLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly appliedDiscount: true;
      readonly fulfillmentService: true;
      readonly giftCard: true;
      readonly grams: true;
      readonly name: true;
      readonly price: true;
      readonly properties: true;
      readonly quantity: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly taxLines: true;
      readonly taxable: true;
      readonly title: true;
      readonly variantTitle: true;
      readonly vendor: true;
      readonly draftOrderId: true;
    readonly draftOrder: false;
      readonly productId: true;
    readonly product: false;
      readonly variantId: true;
    readonly variant: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyDraftOrderLineItem` model. */
export interface CreateShopifyDraftOrderLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDraftOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDraftOrderLineItem, DefaultShopifyDraftOrderLineItemServerSelection>>;
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
  context: CreateShopifyDraftOrderLineItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyDraftOrderLineItem` model. */
export interface UpdateShopifyDraftOrderLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDraftOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDraftOrderLineItem, DefaultShopifyDraftOrderLineItemServerSelection>>;
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
  context: UpdateShopifyDraftOrderLineItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyDraftOrderLineItem` model. */
export interface DeleteShopifyDraftOrderLineItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDraftOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDraftOrderLineItem, DefaultShopifyDraftOrderLineItemServerSelection>>;
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
  context: DeleteShopifyDraftOrderLineItemActionContext;
};


  