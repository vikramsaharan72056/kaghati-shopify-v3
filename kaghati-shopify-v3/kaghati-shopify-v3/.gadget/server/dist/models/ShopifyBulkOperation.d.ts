import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyBulkOperation } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyBulkOperationServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly completedAt: true;
    readonly errorCode: true;
    readonly fileSize: true;
    readonly objectCount: true;
    readonly partialDataUrl: true;
    readonly query: true;
    readonly rootObjectCount: true;
    readonly status: true;
    readonly type: true;
    readonly url: true;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyBulkOperation` model. */
export interface CreateShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: CreateShopifyBulkOperationActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyBulkOperation` model. */
export interface UpdateShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: UpdateShopifyBulkOperationActionContext;
}
/** All the data passed to an effect or precondition within the `complete` action on the `shopifyBulkOperation` model. */
export interface CompleteShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: CompleteShopifyBulkOperationActionContext;
}
/** All the data passed to an effect or precondition within the `cancel` action on the `shopifyBulkOperation` model. */
export interface CancelShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: CancelShopifyBulkOperationActionContext;
}
/** All the data passed to an effect or precondition within the `fail` action on the `shopifyBulkOperation` model. */
export interface FailShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: FailShopifyBulkOperationActionContext;
}
/** All the data passed to an effect or precondition within the `expire` action on the `shopifyBulkOperation` model. */
export interface ExpireShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: ExpireShopifyBulkOperationActionContext;
}
