import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentOrderLineItem } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentOrderLineItemServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly remainingQuantity: true;
    readonly quantity: true;
    readonly fulfillmentOrderId: true;
    readonly fulfillmentOrder: false;
    readonly inventoryItemId: true;
    readonly inventoryItem: false;
    readonly orderLineItemId: true;
    readonly orderLineItem: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyFulfillmentOrderLineItem` model. */
export interface CreateShopifyFulfillmentOrderLineItemActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentOrderLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrderLineItem, DefaultShopifyFulfillmentOrderLineItemServerSelection>>;
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
    context: CreateShopifyFulfillmentOrderLineItemActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyFulfillmentOrderLineItem` model. */
export interface UpdateShopifyFulfillmentOrderLineItemActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentOrderLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrderLineItem, DefaultShopifyFulfillmentOrderLineItemServerSelection>>;
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
    context: UpdateShopifyFulfillmentOrderLineItemActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyFulfillmentOrderLineItem` model. */
export interface DeleteShopifyFulfillmentOrderLineItemActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentOrderLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrderLineItem, DefaultShopifyFulfillmentOrderLineItemServerSelection>>;
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
    context: DeleteShopifyFulfillmentOrderLineItemActionContext;
}
