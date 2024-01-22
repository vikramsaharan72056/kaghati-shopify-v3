import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDraftOrder } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDraftOrderServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly appliedDiscount: true;
    readonly billingAddress: true;
    readonly completedAt: true;
    readonly shopifyCreatedAt: true;
    readonly currency: true;
    readonly email: true;
    readonly invoiceSentAt: true;
    readonly invoiceUrl: true;
    readonly lineItems: false;
    readonly name: true;
    readonly note: true;
    readonly noteAttributes: true;
    readonly order: true;
    readonly poNumber: true;
    readonly shippingAddress: true;
    readonly shippingLine: true;
    readonly status: true;
    readonly subtotalPrice: true;
    readonly tags: true;
    readonly taxExempt: true;
    readonly taxExemptions: true;
    readonly taxLines: true;
    readonly taxesIncluded: true;
    readonly totalPrice: true;
    readonly totalTax: true;
    readonly shopifyUpdatedAt: true;
    readonly customerId: true;
    readonly customer: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyDraftOrder` model. */
export interface CreateShopifyDraftOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyDraftOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDraftOrder, DefaultShopifyDraftOrderServerSelection>>;
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
    context: CreateShopifyDraftOrderActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyDraftOrder` model. */
export interface UpdateShopifyDraftOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyDraftOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDraftOrder, DefaultShopifyDraftOrderServerSelection>>;
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
    context: UpdateShopifyDraftOrderActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyDraftOrder` model. */
export interface DeleteShopifyDraftOrderActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyDraftOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDraftOrder, DefaultShopifyDraftOrderServerSelection>>;
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
    context: DeleteShopifyDraftOrderActionContext;
}
