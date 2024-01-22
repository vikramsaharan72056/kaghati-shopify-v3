import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrderAdjustment } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderAdjustmentServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly amount: true;
    readonly amountSet: true;
    readonly kind: true;
    readonly reason: true;
    readonly taxAmount: true;
    readonly taxAmountSet: true;
    readonly orderId: true;
    readonly order: false;
    readonly refundId: true;
    readonly refund: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyOrderAdjustment` model. */
export interface CreateShopifyOrderAdjustmentActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyOrderAdjustment` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyOrderAdjustment, DefaultShopifyOrderAdjustmentServerSelection>>;
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
    context: CreateShopifyOrderAdjustmentActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyOrderAdjustment` model. */
export interface UpdateShopifyOrderAdjustmentActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyOrderAdjustment` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyOrderAdjustment, DefaultShopifyOrderAdjustmentServerSelection>>;
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
    context: UpdateShopifyOrderAdjustmentActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyOrderAdjustment` model. */
export interface DeleteShopifyOrderAdjustmentActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyOrderAdjustment` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyOrderAdjustment, DefaultShopifyOrderAdjustmentServerSelection>>;
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
    context: DeleteShopifyOrderAdjustmentActionContext;
}
