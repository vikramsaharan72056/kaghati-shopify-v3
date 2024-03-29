// All the generated types for the "Shopify Customer Payment Method" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCustomerPaymentMethod } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCustomerPaymentMethodServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly adminGraphqlApiId: true;
      readonly instrument: true;
      readonly revokedAt: true;
      readonly revokedReason: true;
      readonly customerId: true;
    readonly customer: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCustomerPaymentMethod` model. */
export interface CreateShopifyCustomerPaymentMethodActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerPaymentMethod` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerPaymentMethod, DefaultShopifyCustomerPaymentMethodServerSelection>>;
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
  context: CreateShopifyCustomerPaymentMethodActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCustomerPaymentMethod` model. */
export interface UpdateShopifyCustomerPaymentMethodActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerPaymentMethod` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerPaymentMethod, DefaultShopifyCustomerPaymentMethodServerSelection>>;
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
  context: UpdateShopifyCustomerPaymentMethodActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCustomerPaymentMethod` model. */
export interface DeleteShopifyCustomerPaymentMethodActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerPaymentMethod` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerPaymentMethod, DefaultShopifyCustomerPaymentMethodServerSelection>>;
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
  context: DeleteShopifyCustomerPaymentMethodActionContext;
};


    
/** All the data passed to an effect or precondition within the `revoke` action on the `shopifyCustomerPaymentMethod` model. */
export interface RevokeShopifyCustomerPaymentMethodActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomerPaymentMethod` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomerPaymentMethod, DefaultShopifyCustomerPaymentMethodServerSelection>>;
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
  context: RevokeShopifyCustomerPaymentMethodActionContext;
};


  