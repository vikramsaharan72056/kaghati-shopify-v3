import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyRefundDuty } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyRefundDutyServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly amountSet: true;
    readonly originalDutyId: true;
    readonly originalDuty: false;
    readonly refundId: true;
    readonly refund: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyRefundDuty` model. */
export interface CreateShopifyRefundDutyActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyRefundDuty` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundDuty, DefaultShopifyRefundDutyServerSelection>>;
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
    context: CreateShopifyRefundDutyActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyRefundDuty` model. */
export interface UpdateShopifyRefundDutyActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyRefundDuty` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundDuty, DefaultShopifyRefundDutyServerSelection>>;
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
    context: UpdateShopifyRefundDutyActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyRefundDuty` model. */
export interface DeleteShopifyRefundDutyActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyRefundDuty` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundDuty, DefaultShopifyRefundDutyServerSelection>>;
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
    context: DeleteShopifyRefundDutyActionContext;
}
