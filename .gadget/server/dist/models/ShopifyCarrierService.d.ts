import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCarrierService } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCarrierServiceServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly active: true;
    readonly callbackUrl: true;
    readonly carrierServiceType: true;
    readonly format: true;
    readonly name: true;
    readonly serviceDiscovery: true;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCarrierService` model. */
export interface CreateShopifyCarrierServiceActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyCarrierService` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyCarrierService, DefaultShopifyCarrierServiceServerSelection>>;
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
    context: CreateShopifyCarrierServiceActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCarrierService` model. */
export interface UpdateShopifyCarrierServiceActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyCarrierService` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyCarrierService, DefaultShopifyCarrierServiceServerSelection>>;
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
    context: UpdateShopifyCarrierServiceActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCarrierService` model. */
export interface DeleteShopifyCarrierServiceActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyCarrierService` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyCarrierService, DefaultShopifyCarrierServiceServerSelection>>;
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
    context: DeleteShopifyCarrierServiceActionContext;
}
