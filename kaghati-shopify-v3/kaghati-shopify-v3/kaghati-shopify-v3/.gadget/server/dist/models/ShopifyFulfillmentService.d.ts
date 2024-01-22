import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentService } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentServiceServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly callbackUrl: true;
    readonly format: true;
    readonly fulfillmentOrdersOptIn: true;
    readonly handle: true;
    readonly shippingLineItems: false;
    readonly inventoryManagement: true;
    readonly name: true;
    readonly permitsSkuSharing: true;
    readonly requiresShippingMethod: true;
    readonly trackingSupport: true;
    readonly locationId: true;
    readonly location: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyFulfillmentService` model. */
export interface CreateShopifyFulfillmentServiceActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentService` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentService, DefaultShopifyFulfillmentServiceServerSelection>>;
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
    context: CreateShopifyFulfillmentServiceActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyFulfillmentService` model. */
export interface UpdateShopifyFulfillmentServiceActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentService` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentService, DefaultShopifyFulfillmentServiceServerSelection>>;
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
    context: UpdateShopifyFulfillmentServiceActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyFulfillmentService` model. */
export interface DeleteShopifyFulfillmentServiceActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyFulfillmentService` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentService, DefaultShopifyFulfillmentServiceServerSelection>>;
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
    context: DeleteShopifyFulfillmentServiceActionContext;
}
