import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyRefundLineItem } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyRefundLineItemServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly quantity: true;
    readonly restockType: true;
    readonly subtotal: true;
    readonly subtotalSet: true;
    readonly totalTax: true;
    readonly totalTaxSet: true;
    readonly locationId: true;
    readonly location: false;
    readonly orderLineItemId: true;
    readonly orderLineItem: false;
    readonly refundId: true;
    readonly refund: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyRefundLineItem` model. */
export interface CreateShopifyRefundLineItemActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyRefundLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundLineItem, DefaultShopifyRefundLineItemServerSelection>>;
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
    context: CreateShopifyRefundLineItemActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyRefundLineItem` model. */
export interface UpdateShopifyRefundLineItemActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyRefundLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundLineItem, DefaultShopifyRefundLineItemServerSelection>>;
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
    context: UpdateShopifyRefundLineItemActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyRefundLineItem` model. */
export interface DeleteShopifyRefundLineItemActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyRefundLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundLineItem, DefaultShopifyRefundLineItemServerSelection>>;
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
    context: DeleteShopifyRefundLineItemActionContext;
}
