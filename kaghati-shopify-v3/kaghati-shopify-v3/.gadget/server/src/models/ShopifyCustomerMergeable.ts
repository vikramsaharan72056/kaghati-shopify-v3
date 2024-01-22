// All the generated types for the "Shopify Customer Mergeable" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCustomerMergeable } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCustomerMergeableServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly errorFields: true;
      readonly isMergeable: true;
      readonly mergeInProgress: true;
      readonly reason: true;
      readonly shopifyCustomerId: true;
    readonly shopifyCustomer: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCustomerMergeable` model. */
export interface CreateShopifyCustomerMergeableActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerMergeable` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerMergeable, DefaultShopifyCustomerMergeableServerSelection>>;
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
  context: CreateShopifyCustomerMergeableActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCustomerMergeable` model. */
export interface UpdateShopifyCustomerMergeableActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerMergeable` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerMergeable, DefaultShopifyCustomerMergeableServerSelection>>;
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
  context: UpdateShopifyCustomerMergeableActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCustomerMergeable` model. */
export interface DeleteShopifyCustomerMergeableActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerMergeable` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerMergeable, DefaultShopifyCustomerMergeableServerSelection>>;
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
  context: DeleteShopifyCustomerMergeableActionContext;
};


  