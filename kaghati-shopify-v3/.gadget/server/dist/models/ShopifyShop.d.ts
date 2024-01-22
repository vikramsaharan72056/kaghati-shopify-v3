import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShop } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyShopServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly refundLineItems: false;
    readonly orderAdjustments: false;
    readonly orderLineItems: false;
    readonly gdprRequests: false;
    readonly sellingPlanGroups: false;
    readonly draftOrders: false;
    readonly draftOrderLineItems: false;
    readonly duties: false;
    readonly orderRisks: false;
    readonly collects: false;
    readonly bulkOperations: false;
    readonly sellingPlans: false;
    readonly customerAddresses: false;
    readonly scriptTags: false;
    readonly orders: false;
    readonly collections: false;
    readonly inventoryItems: false;
    readonly inventoryLevels: false;
    readonly discountCodes: false;
    readonly shippingLines: false;
    readonly sellingPlanGroupsProductVariants: false;
    readonly provinces: false;
    readonly refundDuties: false;
    readonly syncs: false;
    readonly fulfillmentOrders: false;
    readonly customerMergeables: false;
    readonly fulfillmentLineItems: false;
    readonly assets: false;
    readonly customerPaymentMethods: false;
    readonly customerAccountsV2: true;
    readonly accessToken: true;
    readonly address1: true;
    readonly address2: true;
    readonly themes: false;
    readonly checkoutApiSupported: true;
    readonly city: true;
    readonly cookieConsentLevel: true;
    readonly country: true;
    readonly countryCode: true;
    readonly countryName: true;
    readonly countyTaxes: true;
    readonly shopifyCreatedAt: true;
    readonly currency: true;
    readonly customerEmail: true;
    readonly fulfillmentServices: false;
    readonly domain: true;
    readonly eligibleForCardReaderGiveaway: true;
    readonly eligibleForPayments: true;
    readonly email: true;
    readonly enabledPresentmentCurrencies: true;
    readonly finances: true;
    readonly forceSsl: true;
    readonly googleAppsDomain: true;
    readonly googleAppsLoginEnabled: true;
    readonly grantedScopes: true;
    readonly hasDiscounts: true;
    readonly hasGiftCards: true;
    readonly hasStorefront: true;
    readonly fulfillmentOrderLineItems: false;
    readonly ianaTimezone: true;
    readonly installedViaApiKey: true;
    readonly discounts: false;
    readonly customers: false;
    readonly priceRules: false;
    readonly fulfillmentEvents: false;
    readonly latitude: true;
    readonly longitude: true;
    readonly marketingSmsContentEnabledAtCheckout: true;
    readonly moneyFormat: true;
    readonly moneyInEmailsFormat: true;
    readonly moneyWithCurrencyFormat: true;
    readonly moneyWithCurrencyInEmailsFormat: true;
    readonly multiLocationEnabled: true;
    readonly myshopifyDomain: true;
    readonly name: true;
    readonly productOptions: false;
    readonly passwordEnabled: true;
    readonly phone: true;
    readonly planDisplayName: true;
    readonly planName: true;
    readonly preLaunchEnabled: true;
    readonly primaryLocale: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly registeredWebhooks: true;
    readonly requiresExtraPaymentsAgreement: true;
    readonly setupRequired: true;
    readonly shopOwner: true;
    readonly source: true;
    readonly sellingPlanGroupsProducts: false;
    readonly carrierServices: false;
    readonly carts: false;
    readonly orderTransactions: false;
    readonly taxShipping: true;
    readonly taxesIncluded: true;
    readonly timezone: true;
    readonly transactionalSmsDisabled: true;
    readonly refunds: false;
    readonly shopifyUpdatedAt: true;
    readonly files: false;
    readonly weightUnit: true;
    readonly productVariants: false;
    readonly products: false;
    readonly countries: false;
    readonly productImages: false;
    readonly fulfillments: false;
    readonly locations: false;
    readonly zipCode: true;
    readonly tenderTransactions: false;
    readonly primaryLocationId: true;
    readonly primaryLocation: false;
    readonly users: false;
};
/** All the data passed to an effect or precondition within the `update` action on the `shopifyShop` model. */
export interface UpdateShopifyShopActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: UpdateShopifyShopActionContext;
}
/** All the data passed to an effect or precondition within the `install` action on the `shopifyShop` model. */
export interface InstallShopifyShopActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: InstallShopifyShopActionContext;
}
/** All the data passed to an effect or precondition within the `uninstall` action on the `shopifyShop` model. */
export interface UninstallShopifyShopActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: UninstallShopifyShopActionContext;
}
/** All the data passed to an effect or precondition within the `reinstall` action on the `shopifyShop` model. */
export interface ReinstallShopifyShopActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: ReinstallShopifyShopActionContext;
}
