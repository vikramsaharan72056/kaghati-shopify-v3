import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyPickupOrder } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyPickupOrderServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly name: true;
    readonly service: true;
    readonly shipmentStatus: true;
    readonly status: true;
    readonly shippingCompany: true;
    readonly inventoryManagementVarient: true;
    readonly locationId: true;
    readonly location: false;
    readonly orderId: true;
    readonly order: false;
    readonly address: true;
    readonly trackingNumbers: true;
    readonly trackingUrls: true;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyPickupOrder` model. */
export interface CreateShopifyPickupOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyPickupOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPickupOrder, DefaultShopifyPickupOrderServerSelection>>;
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
    context: CreateShopifyPickupOrderActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyPickupOrder` model. */
export interface UpdateShopifyPickupOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyPickupOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPickupOrder, DefaultShopifyPickupOrderServerSelection>>;
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
    context: UpdateShopifyPickupOrderActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyPickupOrder` model. */
export interface DeleteShopifyPickupOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyPickupOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPickupOrder, DefaultShopifyPickupOrderServerSelection>>;
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
    context: DeleteShopifyPickupOrderActionContext;
}
/** All the data passed to an effect or precondition within the `track` action on the `shopifyPickupOrder` model. */
export interface TrackShopifyPickupOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyPickupOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPickupOrder, DefaultShopifyPickupOrderServerSelection>>;
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
    context: TrackShopifyPickupOrderActionContext;
}
/** All the data passed to an effect or precondition within the `cancel` action on the `shopifyPickupOrder` model. */
export interface CancelShopifyPickupOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyPickupOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPickupOrder, DefaultShopifyPickupOrderServerSelection>>;
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
    context: CancelShopifyPickupOrderActionContext;
}
