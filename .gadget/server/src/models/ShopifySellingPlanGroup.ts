// All the generated types for the "Shopify Selling Plan Group" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifySellingPlanGroup } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySellingPlanGroupServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly sellingPlanGroupProductVariants: false;
      readonly appId: true;
      readonly shopifyCreatedAt: true;
      readonly description: true;
      readonly sellingPlanGroupProducts: false;
      readonly merchantCode: true;
      readonly name: true;
      readonly options: true;
      readonly position: true;
      readonly sellingPlans: false;
      readonly summary: true;
      readonly products: false;
      readonly productVariants: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifySellingPlanGroup` model. */
export interface CreateShopifySellingPlanGroupActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySellingPlanGroup` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySellingPlanGroup, DefaultShopifySellingPlanGroupServerSelection>>;
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
  context: CreateShopifySellingPlanGroupActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifySellingPlanGroup` model. */
export interface UpdateShopifySellingPlanGroupActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySellingPlanGroup` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySellingPlanGroup, DefaultShopifySellingPlanGroupServerSelection>>;
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
  context: UpdateShopifySellingPlanGroupActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifySellingPlanGroup` model. */
export interface DeleteShopifySellingPlanGroupActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySellingPlanGroup` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySellingPlanGroup, DefaultShopifySellingPlanGroupServerSelection>>;
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
  context: DeleteShopifySellingPlanGroupActionContext;
};


  