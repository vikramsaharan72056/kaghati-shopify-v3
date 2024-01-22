// All the generated types for the "Shopify Customer" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCustomer } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCustomerServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly mergeable: false;
      readonly statistics: true;
      readonly acceptsMarketing: true;
      readonly acceptsMarketingUpdatedAt: true;
      readonly addresses: false;
      readonly shopifyCreatedAt: true;
      readonly currency: true;
      readonly defaultAddressId: true;
    readonly defaultAddress: false;
      readonly email: true;
      readonly emailMarketingConsent: true;
      readonly firstName: true;
      readonly lastName: true;
      readonly lastOrderName: true;
      readonly marketingOptInLevel: true;
      readonly metafield: true;
      readonly multipassIdentifier: true;
      readonly note: true;
      readonly draftOrders: false;
      readonly orders: false;
      readonly ordersCount: true;
      readonly paymentMethods: false;
      readonly phone: true;
      readonly smsMarketingConsent: true;
      readonly shopifyState: true;
      readonly tags: true;
      readonly taxExempt: true;
      readonly taxExemptions: true;
      readonly totalSpent: true;
      readonly shopifyUpdatedAt: true;
      readonly verifiedEmail: true;
      readonly lastOrderId: true;
    readonly lastOrder: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCustomer` model. */
export interface CreateShopifyCustomerActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomer` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomer, DefaultShopifyCustomerServerSelection>>;
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
  context: CreateShopifyCustomerActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCustomer` model. */
export interface UpdateShopifyCustomerActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomer` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomer, DefaultShopifyCustomerServerSelection>>;
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
  context: UpdateShopifyCustomerActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCustomer` model. */
export interface DeleteShopifyCustomerActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCustomer` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCustomer, DefaultShopifyCustomerServerSelection>>;
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
  context: DeleteShopifyCustomerActionContext;
};


  