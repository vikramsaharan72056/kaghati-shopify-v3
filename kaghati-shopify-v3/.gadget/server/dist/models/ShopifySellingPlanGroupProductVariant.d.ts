import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifySellingPlanGroupProductVariant } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySellingPlanGroupProductVariantServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly productVariantId: true;
    readonly productVariant: false;
    readonly sellingPlanGroupId: true;
    readonly sellingPlanGroup: false;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifySellingPlanGroupProductVariant` model. */
export interface CreateShopifySellingPlanGroupProductVariantActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifySellingPlanGroupProductVariant` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifySellingPlanGroupProductVariant, DefaultShopifySellingPlanGroupProductVariantServerSelection>>;
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
    context: CreateShopifySellingPlanGroupProductVariantActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifySellingPlanGroupProductVariant` model. */
export interface UpdateShopifySellingPlanGroupProductVariantActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifySellingPlanGroupProductVariant` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifySellingPlanGroupProductVariant, DefaultShopifySellingPlanGroupProductVariantServerSelection>>;
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
    context: UpdateShopifySellingPlanGroupProductVariantActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifySellingPlanGroupProductVariant` model. */
export interface DeleteShopifySellingPlanGroupProductVariantActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifySellingPlanGroupProductVariant` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifySellingPlanGroupProductVariant, DefaultShopifySellingPlanGroupProductVariantServerSelection>>;
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
    context: DeleteShopifySellingPlanGroupProductVariantActionContext;
}
