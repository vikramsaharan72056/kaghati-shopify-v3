// All the generated types for the "Shopify Selling Plan" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifySellingPlan } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySellingPlanServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly billingPolicy: true;
      readonly category: true;
      readonly shopifyCreatedAt: true;
      readonly deliveryPolicy: true;
      readonly description: true;
      readonly inventoryPolicy: true;
      readonly name: true;
      readonly options: true;
      readonly position: true;
      readonly pricingPolicies: true;
      readonly sellingPlanGroupId: true;
    readonly sellingPlanGroup: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifySellingPlan` model. */
export interface CreateShopifySellingPlanActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySellingPlan` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySellingPlan, DefaultShopifySellingPlanServerSelection>>;
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
  context: CreateShopifySellingPlanActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifySellingPlan` model. */
export interface UpdateShopifySellingPlanActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySellingPlan` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySellingPlan, DefaultShopifySellingPlanServerSelection>>;
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
  context: UpdateShopifySellingPlanActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifySellingPlan` model. */
export interface DeleteShopifySellingPlanActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySellingPlan` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySellingPlan, DefaultShopifySellingPlanServerSelection>>;
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
  context: DeleteShopifySellingPlanActionContext;
};


  