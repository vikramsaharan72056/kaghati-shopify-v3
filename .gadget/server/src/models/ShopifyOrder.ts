// All the generated types for the "Shopify Order" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrder } from "@gadget-client/kaghati-shopify-v3";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly adjustments: false;
      readonly risks: false;
      readonly refunds: false;
      readonly additionalFees: true;
      readonly cancellation: true;
      readonly shopifyProtect: true;
      readonly transactions: false;
      readonly billingAddress: true;
      readonly browserIp: true;
      readonly buyerAcceptsMarketing: true;
      readonly cancelReason: true;
      readonly cancelledAt: true;
      readonly cartToken: true;
      readonly checkoutToken: true;
      readonly clientDetails: true;
      readonly closedAt: true;
      readonly shopifyCreatedAt: true;
      readonly currency: true;
      readonly currentSubtotalPrice: true;
      readonly currentSubtotalPriceSet: true;
      readonly currentTotalAdditionalFeesSet: true;
      readonly currentTotalDiscounts: true;
      readonly currentTotalDiscountsSet: true;
      readonly currentTotalDutiesSet: true;
      readonly currentTotalPrice: true;
      readonly currentTotalPriceSet: true;
      readonly currentTotalTax: true;
      readonly currentTotalTaxSet: true;
      readonly customerLocale: true;
      readonly discountApplications: true;
      readonly discountCodes: true;
      readonly email: true;
      readonly estimatedTaxes: true;
      readonly financialStatus: true;
      readonly fulfillmentStatus: true;
      readonly fulfillments: false;
      readonly tenderTransactions: false;
      readonly landingSite: true;
      readonly fulfillmentOrders: false;
      readonly lineItems: false;
      readonly merchantOfRecordAppId: true;
      readonly name: true;
      readonly note: true;
      readonly noteAttributes: true;
      readonly number: true;
      readonly orderNumber: true;
      readonly orderStatusUrl: true;
      readonly originalTotalAdditionalFeesSet: true;
      readonly originalTotalDutiesSet: true;
      readonly paymentGatewayNames: true;
      readonly phone: true;
      readonly poNumber: true;
      readonly presentmentCurrency: true;
      readonly processedAt: true;
      readonly referringSite: true;
      readonly shippingAddress: true;
      readonly shippingLines: false;
      readonly sourceIdentifier: true;
      readonly sourceName: true;
      readonly sourceUrl: true;
      readonly subtotalPrice: true;
      readonly subtotalPriceSet: true;
      readonly tags: true;
      readonly taxExempt: true;
      readonly taxLines: true;
      readonly taxesIncluded: true;
      readonly test: true;
      readonly token: true;
      readonly totalDiscounts: true;
      readonly totalDiscountsSet: true;
      readonly totalLineItemsPrice: true;
      readonly totalLineItemsPriceSet: true;
      readonly totalOutstanding: true;
      readonly totalPrice: true;
      readonly totalPriceSet: true;
      readonly totalShippingPriceSet: true;
      readonly totalTax: true;
      readonly totalTaxSet: true;
      readonly totalTipReceived: true;
      readonly totalWeight: true;
      readonly shopifyUpdatedAt: true;
      readonly fulfillmentEvents: false;
      readonly customerId: true;
    readonly customer: false;
      readonly locationId: true;
    readonly location: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyOrder` model. */
export interface CreateShopifyOrderActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
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
  context: CreateShopifyOrderActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyOrder` model. */
export interface UpdateShopifyOrderActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
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
  context: UpdateShopifyOrderActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyOrder` model. */
export interface DeleteShopifyOrderActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
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
  context: DeleteShopifyOrderActionContext;
};


  