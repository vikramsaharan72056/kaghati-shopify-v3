import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, KhagatiStores } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultKhagatiStoresServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly storeName: true;
    readonly storeCode: true;
    readonly storeTier: true;
    readonly address: true;
    readonly pincode: true;
    readonly city: true;
    readonly mobNumber: true;
    readonly email: true;
    readonly googleMap: true;
    readonly isBackupWarehouse: true;
    readonly selectBackupWarehouse: true;
    readonly status: true;
};
/** All the data passed to an effect or precondition within the `create` action on the `khagatiStores` model. */
export interface CreateKhagatiStoresActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `khagatiStores` record this action is operating on.
    */
    record: GadgetRecord<Select<KhagatiStores, DefaultKhagatiStoresServerSelection>>;
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
    context: CreateKhagatiStoresActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `khagatiStores` model. */
export interface UpdateKhagatiStoresActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `khagatiStores` record this action is operating on.
    */
    record: GadgetRecord<Select<KhagatiStores, DefaultKhagatiStoresServerSelection>>;
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
    context: UpdateKhagatiStoresActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `khagatiStores` model. */
export interface DeleteKhagatiStoresActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `khagatiStores` record this action is operating on.
    */
    record: GadgetRecord<Select<KhagatiStores, DefaultKhagatiStoresServerSelection>>;
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
    context: DeleteKhagatiStoresActionContext;
}
