// All the generated types for the "Shopify Asset" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyAsset } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyAssetServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly attachment: true;
      readonly checksum: true;
      readonly contentType: true;
      readonly shopifyCreatedAt: true;
      readonly key: true;
      readonly publicUrl: true;
      readonly size: true;
      readonly shopifyUpdatedAt: true;
      readonly shopId: true;
    readonly shop: false;
      readonly themeId: true;
    readonly theme: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyAsset` model. */
export interface CreateShopifyAssetActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyAsset` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyAsset, DefaultShopifyAssetServerSelection>>;
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
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: CreateShopifyAssetActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyAsset` model. */
export interface UpdateShopifyAssetActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyAsset` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyAsset, DefaultShopifyAssetServerSelection>>;
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
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UpdateShopifyAssetActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyAsset` model. */
export interface DeleteShopifyAssetActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyAsset` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyAsset, DefaultShopifyAssetServerSelection>>;
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
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: DeleteShopifyAssetActionContext;
};


  