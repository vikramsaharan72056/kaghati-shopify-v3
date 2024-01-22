import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentEvent } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentEventServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly address1: true;
    readonly city: true;
    readonly country: true;
    readonly shopifyCreatedAt: true;
    readonly estimatedDeliveryAt: true;
    readonly happenedAt: true;
    readonly latitude: true;
    readonly longitude: true;
    readonly message: true;
    readonly province: true;
    readonly status: true;
    readonly shopifyUpdatedAt: true;
    readonly zipCode: true;
    readonly fulfillmentId: true;
    readonly fulfillment: false;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyFulfillmentEvent` model. */
export interface CreateShopifyFulfillmentEventActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentEvent` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentEvent, DefaultShopifyFulfillmentEventServerSelection>>;
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
    context: CreateShopifyFulfillmentEventActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyFulfillmentEvent` model. */
export interface UpdateShopifyFulfillmentEventActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentEvent` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentEvent, DefaultShopifyFulfillmentEventServerSelection>>;
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
    context: UpdateShopifyFulfillmentEventActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyFulfillmentEvent` model. */
export interface DeleteShopifyFulfillmentEventActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentEvent` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentEvent, DefaultShopifyFulfillmentEventServerSelection>>;
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
    context: DeleteShopifyFulfillmentEventActionContext;
}
