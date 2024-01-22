import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyTheme } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyThemeServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly shopifyCreatedAt: true;
    readonly name: true;
    readonly previewable: true;
    readonly processing: true;
    readonly assets: false;
    readonly role: true;
    readonly themeStoreId: true;
    readonly shopifyUpdatedAt: true;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `shopifyTheme` model. */
export interface CreateShopifyThemeActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyTheme` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyTheme, DefaultShopifyThemeServerSelection>>;
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
    context: CreateShopifyThemeActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyTheme` model. */
export interface UpdateShopifyThemeActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyTheme` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyTheme, DefaultShopifyThemeServerSelection>>;
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
    context: UpdateShopifyThemeActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyTheme` model. */
export interface DeleteShopifyThemeActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyTheme` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyTheme, DefaultShopifyThemeServerSelection>>;
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
    context: DeleteShopifyThemeActionContext;
}
