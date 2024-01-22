import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCustomerAddress } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCustomerAddressServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly address1: true;
    readonly address2: true;
    readonly city: true;
    readonly company: true;
    readonly country: true;
    readonly countryCode: true;
    readonly countryName: true;
    readonly firstName: true;
    readonly lastName: true;
    readonly name: true;
    readonly phone: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly zipCode: true;
    readonly shopifyCustomerId: true;
    readonly shopifyCustomer: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCustomerAddress` model. */
export interface CreateShopifyCustomerAddressActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyCustomerAddress` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyCustomerAddress, DefaultShopifyCustomerAddressServerSelection>>;
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
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: CreateShopifyCustomerAddressActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCustomerAddress` model. */
export interface UpdateShopifyCustomerAddressActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyCustomerAddress` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyCustomerAddress, DefaultShopifyCustomerAddressServerSelection>>;
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
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: UpdateShopifyCustomerAddressActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCustomerAddress` model. */
export interface DeleteShopifyCustomerAddressActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyCustomerAddress` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyCustomerAddress, DefaultShopifyCustomerAddressServerSelection>>;
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
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: DeleteShopifyCustomerAddressActionContext;
}
