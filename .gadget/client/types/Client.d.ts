import type { OperationContext } from "@urql/core";
import { GadgetConnection, GadgetTransaction, InternalModelManager } from "@gadgetinc/api-client-core";
import type { ClientOptions as ApiClientOptions, AnyClient } from '@gadgetinc/api-client-core';
import type { DocumentNode } from 'graphql';
import type { Scalars } from "./types";
import { UserManager } from "./models/User.js";
import { SessionManager } from "./models/Session.js";
import { ShopifyAssetManager } from "./models/ShopifyAsset.js";
import { ShopifyBulkOperationManager } from "./models/ShopifyBulkOperation.js";
import { ShopifyCarrierServiceManager } from "./models/ShopifyCarrierService.js";
import { ShopifyCartManager } from "./models/ShopifyCart.js";
import { ShopifyCollectManager } from "./models/ShopifyCollect.js";
import { ShopifyCollectionManager } from "./models/ShopifyCollection.js";
import { ShopifyCountryManager } from "./models/ShopifyCountry.js";
import { ShopifyCustomerManager } from "./models/ShopifyCustomer.js";
import { ShopifyCustomerAddressManager } from "./models/ShopifyCustomerAddress.js";
import { ShopifyCustomerMergeableManager } from "./models/ShopifyCustomerMergeable.js";
import { ShopifyCustomerPaymentMethodManager } from "./models/ShopifyCustomerPaymentMethod.js";
import { ShopifyDiscountManager } from "./models/ShopifyDiscount.js";
import { ShopifyDiscountCodeManager } from "./models/ShopifyDiscountCode.js";
import { ShopifyDraftOrderManager } from "./models/ShopifyDraftOrder.js";
import { ShopifyDraftOrderLineItemManager } from "./models/ShopifyDraftOrderLineItem.js";
import { ShopifyDutyManager } from "./models/ShopifyDuty.js";
import { ShopifyFileManager } from "./models/ShopifyFile.js";
import { ShopifyFulfillmentManager } from "./models/ShopifyFulfillment.js";
import { ShopifyFulfillmentEventManager } from "./models/ShopifyFulfillmentEvent.js";
import { ShopifyFulfillmentLineItemManager } from "./models/ShopifyFulfillmentLineItem.js";
import { ShopifyFulfillmentOrderManager } from "./models/ShopifyFulfillmentOrder.js";
import { ShopifyFulfillmentOrderLineItemManager } from "./models/ShopifyFulfillmentOrderLineItem.js";
import { ShopifyFulfillmentServiceManager } from "./models/ShopifyFulfillmentService.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyInventoryItemManager } from "./models/ShopifyInventoryItem.js";
import { ShopifyInventoryLevelManager } from "./models/ShopifyInventoryLevel.js";
import { ShopifyLocationManager } from "./models/ShopifyLocation.js";
import { ShopifyOrderManager } from "./models/ShopifyOrder.js";
import { ShopifyOrderAdjustmentManager } from "./models/ShopifyOrderAdjustment.js";
import { ShopifyOrderLineItemManager } from "./models/ShopifyOrderLineItem.js";
import { ShopifyOrderRiskManager } from "./models/ShopifyOrderRisk.js";
import { ShopifyOrderTransactionManager } from "./models/ShopifyOrderTransaction.js";
import { ShopifyPriceRuleManager } from "./models/ShopifyPriceRule.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyProductImageManager } from "./models/ShopifyProductImage.js";
import { ShopifyProductOptionManager } from "./models/ShopifyProductOption.js";
import { ShopifyProductVariantManager } from "./models/ShopifyProductVariant.js";
import { ShopifyProvinceManager } from "./models/ShopifyProvince.js";
import { ShopifyRefundManager } from "./models/ShopifyRefund.js";
import { ShopifyRefundDutyManager } from "./models/ShopifyRefundDuty.js";
import { ShopifyRefundLineItemManager } from "./models/ShopifyRefundLineItem.js";
import { ShopifyScriptTagManager } from "./models/ShopifyScriptTag.js";
import { ShopifySellingPlanManager } from "./models/ShopifySellingPlan.js";
import { ShopifySellingPlanGroupManager } from "./models/ShopifySellingPlanGroup.js";
import { ShopifySellingPlanGroupProductManager } from "./models/ShopifySellingPlanGroupProduct.js";
import { ShopifySellingPlanGroupProductVariantManager } from "./models/ShopifySellingPlanGroupProductVariant.js";
import { ShopifyShippingLineManager } from "./models/ShopifyShippingLine.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { ShopifyTenderTransactionManager } from "./models/ShopifyTenderTransaction.js";
import { ShopifyThemeManager } from "./models/ShopifyTheme.js";
import { TemporyImageManager } from "./models/TemporyImage.js";
import { ShopifyPickupOrderManager } from "./models/ShopifyPickupOrder.js";
import { KhagatiStoresManager } from "./models/KhagatiStores.js";
import { IntegrationAPIManager } from "./models/IntegrationAPI.js";
import { PinCodeManager } from "./models/PinCode.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
type InternalModelManagers = {
    user: InternalModelManager;
    session: InternalModelManager;
    shopifyAsset: InternalModelManager;
    shopifyBulkOperation: InternalModelManager;
    shopifyCarrierService: InternalModelManager;
    shopifyCart: InternalModelManager;
    shopifyCollect: InternalModelManager;
    shopifyCollection: InternalModelManager;
    shopifyCountry: InternalModelManager;
    shopifyCustomer: InternalModelManager;
    shopifyCustomerAddress: InternalModelManager;
    shopifyCustomerMergeable: InternalModelManager;
    shopifyCustomerPaymentMethod: InternalModelManager;
    shopifyDiscount: InternalModelManager;
    shopifyDiscountCode: InternalModelManager;
    shopifyDraftOrder: InternalModelManager;
    shopifyDraftOrderLineItem: InternalModelManager;
    shopifyDuty: InternalModelManager;
    shopifyFile: InternalModelManager;
    shopifyFulfillment: InternalModelManager;
    shopifyFulfillmentEvent: InternalModelManager;
    shopifyFulfillmentLineItem: InternalModelManager;
    shopifyFulfillmentOrder: InternalModelManager;
    shopifyFulfillmentOrderLineItem: InternalModelManager;
    shopifyFulfillmentService: InternalModelManager;
    shopifyGdprRequest: InternalModelManager;
    shopifyInventoryItem: InternalModelManager;
    shopifyInventoryLevel: InternalModelManager;
    shopifyLocation: InternalModelManager;
    shopifyOrder: InternalModelManager;
    shopifyOrderAdjustment: InternalModelManager;
    shopifyOrderLineItem: InternalModelManager;
    shopifyOrderRisk: InternalModelManager;
    shopifyOrderTransaction: InternalModelManager;
    shopifyPriceRule: InternalModelManager;
    shopifyProduct: InternalModelManager;
    shopifyProductImage: InternalModelManager;
    shopifyProductOption: InternalModelManager;
    shopifyProductVariant: InternalModelManager;
    shopifyProvince: InternalModelManager;
    shopifyRefund: InternalModelManager;
    shopifyRefundDuty: InternalModelManager;
    shopifyRefundLineItem: InternalModelManager;
    shopifyScriptTag: InternalModelManager;
    shopifySellingPlan: InternalModelManager;
    shopifySellingPlanGroup: InternalModelManager;
    shopifySellingPlanGroupProduct: InternalModelManager;
    shopifySellingPlanGroupProductVariant: InternalModelManager;
    shopifyShippingLine: InternalModelManager;
    shopifyShop: InternalModelManager;
    shopifySync: InternalModelManager;
    shopifyTenderTransaction: InternalModelManager;
    shopifyTheme: InternalModelManager;
    temporyImage: InternalModelManager;
    shopifyPickupOrder: InternalModelManager;
    khagatiStores: InternalModelManager;
    integrationAPI: InternalModelManager;
    pinCode: InternalModelManager;
};
type ClientOptions = Omit<ApiClientOptions, "environment"> & {
    environment?: string;
};
declare const $modelRelationships: unique symbol;
/**
 * Root object used for interacting with the "kaghati-shopify-v3" API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. Client also wraps a `connection`, which implements the transport layer if you need access to that.
 * */
export declare class Client implements AnyClient {
    connection: GadgetConnection;
    user: UserManager;
    session: SessionManager;
    shopifyAsset: ShopifyAssetManager;
    shopifyBulkOperation: ShopifyBulkOperationManager;
    shopifyCarrierService: ShopifyCarrierServiceManager;
    shopifyCart: ShopifyCartManager;
    shopifyCollect: ShopifyCollectManager;
    shopifyCollection: ShopifyCollectionManager;
    shopifyCountry: ShopifyCountryManager;
    shopifyCustomer: ShopifyCustomerManager;
    shopifyCustomerAddress: ShopifyCustomerAddressManager;
    shopifyCustomerMergeable: ShopifyCustomerMergeableManager;
    shopifyCustomerPaymentMethod: ShopifyCustomerPaymentMethodManager;
    shopifyDiscount: ShopifyDiscountManager;
    shopifyDiscountCode: ShopifyDiscountCodeManager;
    shopifyDraftOrder: ShopifyDraftOrderManager;
    shopifyDraftOrderLineItem: ShopifyDraftOrderLineItemManager;
    shopifyDuty: ShopifyDutyManager;
    shopifyFile: ShopifyFileManager;
    shopifyFulfillment: ShopifyFulfillmentManager;
    shopifyFulfillmentEvent: ShopifyFulfillmentEventManager;
    shopifyFulfillmentLineItem: ShopifyFulfillmentLineItemManager;
    shopifyFulfillmentOrder: ShopifyFulfillmentOrderManager;
    shopifyFulfillmentOrderLineItem: ShopifyFulfillmentOrderLineItemManager;
    shopifyFulfillmentService: ShopifyFulfillmentServiceManager;
    shopifyGdprRequest: ShopifyGdprRequestManager;
    shopifyInventoryItem: ShopifyInventoryItemManager;
    shopifyInventoryLevel: ShopifyInventoryLevelManager;
    shopifyLocation: ShopifyLocationManager;
    shopifyOrder: ShopifyOrderManager;
    shopifyOrderAdjustment: ShopifyOrderAdjustmentManager;
    shopifyOrderLineItem: ShopifyOrderLineItemManager;
    shopifyOrderRisk: ShopifyOrderRiskManager;
    shopifyOrderTransaction: ShopifyOrderTransactionManager;
    shopifyPriceRule: ShopifyPriceRuleManager;
    shopifyProduct: ShopifyProductManager;
    shopifyProductImage: ShopifyProductImageManager;
    shopifyProductOption: ShopifyProductOptionManager;
    shopifyProductVariant: ShopifyProductVariantManager;
    shopifyProvince: ShopifyProvinceManager;
    shopifyRefund: ShopifyRefundManager;
    shopifyRefundDuty: ShopifyRefundDutyManager;
    shopifyRefundLineItem: ShopifyRefundLineItemManager;
    shopifyScriptTag: ShopifyScriptTagManager;
    shopifySellingPlan: ShopifySellingPlanManager;
    shopifySellingPlanGroup: ShopifySellingPlanGroupManager;
    shopifySellingPlanGroupProduct: ShopifySellingPlanGroupProductManager;
    shopifySellingPlanGroupProductVariant: ShopifySellingPlanGroupProductVariantManager;
    shopifyShippingLine: ShopifyShippingLineManager;
    shopifyShop: ShopifyShopManager;
    shopifySync: ShopifySyncManager;
    shopifyTenderTransaction: ShopifyTenderTransactionManager;
    shopifyTheme: ShopifyThemeManager;
    temporyImage: TemporyImageManager;
    shopifyPickupOrder: ShopifyPickupOrderManager;
    khagatiStores: KhagatiStoresManager;
    integrationAPI: IntegrationAPIManager;
    pinCode: PinCodeManager;
    currentSession: CurrentSessionManager;
    /**
    * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
    *
    * Returns an object of model API identifiers to `InternalModelManager` objects.
    *
    * Example:
    * `api.internal.user.findOne(...)`
    */
    internal: InternalModelManagers;
    /**
     * The list of environments with a customized API root endpoint
     */
    apiRoots: Record<string, string>;
    /** @deprecated */
    developmentApiRoot: string;
    /** @deprecated */
    productionApiRoot: string;
    applicationId: string;
    [$modelRelationships]: {
        user: {
            shop: {
                type: string;
                model: string;
            };
        };
        session: {
            shop: {
                type: string;
                model: string;
            };
            user: {
                type: string;
                model: string;
            };
        };
        shopifyAsset: {
            shop: {
                type: string;
                model: string;
            };
            theme: {
                type: string;
                model: string;
            };
        };
        shopifyBulkOperation: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCarrierService: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCart: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCollect: {
            customCollection: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCollection: {
            products: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCountry: {
            provinces: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCustomer: {
            mergeable: {
                type: string;
                model: string;
            };
            addresses: {
                type: string;
                model: string;
            };
            defaultAddress: {
                type: string;
                model: string;
            };
            draftOrders: {
                type: string;
                model: string;
            };
            orders: {
                type: string;
                model: string;
            };
            paymentMethods: {
                type: string;
                model: string;
            };
            lastOrder: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCustomerAddress: {
            shopifyCustomer: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCustomerMergeable: {
            shopifyCustomer: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCustomerPaymentMethod: {
            customer: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDiscount: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDiscountCode: {
            priceRule: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDraftOrder: {
            lineItems: {
                type: string;
                model: string;
            };
            customer: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDraftOrderLineItem: {
            draftOrder: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            variant: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDuty: {
            refundDuty: {
                type: string;
                model: string;
            };
            orderLineItem: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFile: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillment: {
            fulfillmentEvents: {
                type: string;
                model: string;
            };
            fulfillmentLineItems: {
                type: string;
                model: string;
            };
            location: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentEvent: {
            fulfillment: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentLineItem: {
            fulfillment: {
                type: string;
                model: string;
            };
            orderLineItem: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentOrder: {
            fulfillmentOrderLineItems: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentOrderLineItem: {
            fulfillmentOrder: {
                type: string;
                model: string;
            };
            inventoryItem: {
                type: string;
                model: string;
            };
            orderLineItem: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentService: {
            shippingLineItems: {
                type: string;
                model: string;
            };
            location: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyGdprRequest: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyInventoryItem: {
            fulfillmentOrderLineItem: {
                type: string;
                model: string;
            };
            productVariant: {
                type: string;
                model: string;
            };
            locations: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyInventoryLevel: {
            inventoryItem: {
                type: string;
                model: string;
            };
            location: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyLocation: {
            refundedLineItems: {
                type: string;
                model: string;
            };
            orderLineItems: {
                type: string;
                model: string;
            };
            fulfillments: {
                type: string;
                model: string;
            };
            orderTransactions: {
                type: string;
                model: string;
            };
            fulfillmentServices: {
                type: string;
                model: string;
            };
            orders: {
                type: string;
                model: string;
            };
            inventoryItems: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrder: {
            adjustments: {
                type: string;
                model: string;
            };
            risks: {
                type: string;
                model: string;
            };
            refunds: {
                type: string;
                model: string;
            };
            transactions: {
                type: string;
                model: string;
            };
            fulfillments: {
                type: string;
                model: string;
            };
            tenderTransactions: {
                type: string;
                model: string;
            };
            fulfillmentOrders: {
                type: string;
                model: string;
            };
            lineItems: {
                type: string;
                model: string;
            };
            shippingLines: {
                type: string;
                model: string;
            };
            fulfillmentEvents: {
                type: string;
                model: string;
            };
            customer: {
                type: string;
                model: string;
            };
            location: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrderAdjustment: {
            order: {
                type: string;
                model: string;
            };
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrderLineItem: {
            refunds: {
                type: string;
                model: string;
            };
            duties: {
                type: string;
                model: string;
            };
            fulfillmentLineItems: {
                type: string;
                model: string;
            };
            fulfillmentOrderLineItems: {
                type: string;
                model: string;
            };
            originLocation: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            variant: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrderRisk: {
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrderTransaction: {
            children: {
                type: string;
                model: string;
            };
            location: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            parent: {
                type: string;
                model: string;
            };
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyPriceRule: {
            discountCodes: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyProduct: {
            orderLineItems: {
                type: string;
                model: string;
            };
            draftOrderLineItems: {
                type: string;
                model: string;
            };
            images: {
                type: string;
                model: string;
            };
            options: {
                type: string;
                model: string;
            };
            variants: {
                type: string;
                model: string;
            };
            customCollections: {
                type: string;
                model: string;
            };
            sellingPlanGroups: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyProductImage: {
            variants: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyProductOption: {
            product: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyProductVariant: {
            draftOrderLineItems: {
                type: string;
                model: string;
            };
            orderLineItems: {
                type: string;
                model: string;
            };
            inventoryItem: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            productImage: {
                type: string;
                model: string;
            };
            sellingPlanGroups: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyProvince: {
            country: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyRefund: {
            duties: {
                type: string;
                model: string;
            };
            orderAdjustments: {
                type: string;
                model: string;
            };
            refundLineItems: {
                type: string;
                model: string;
            };
            transactions: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyRefundDuty: {
            originalDuty: {
                type: string;
                model: string;
            };
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyRefundLineItem: {
            location: {
                type: string;
                model: string;
            };
            orderLineItem: {
                type: string;
                model: string;
            };
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyScriptTag: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifySellingPlan: {
            sellingPlanGroup: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifySellingPlanGroup: {
            sellingPlanGroupProductVariants: {
                type: string;
                model: string;
            };
            sellingPlanGroupProducts: {
                type: string;
                model: string;
            };
            sellingPlans: {
                type: string;
                model: string;
            };
            products: {
                type: string;
                model: string;
            };
            productVariants: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifySellingPlanGroupProduct: {
            product: {
                type: string;
                model: string;
            };
            sellingPlanGroup: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifySellingPlanGroupProductVariant: {
            productVariant: {
                type: string;
                model: string;
            };
            sellingPlanGroup: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyShippingLine: {
            requestedFulfillmentService: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyShop: {
            refundLineItems: {
                type: string;
                model: string;
            };
            orderAdjustments: {
                type: string;
                model: string;
            };
            orderLineItems: {
                type: string;
                model: string;
            };
            gdprRequests: {
                type: string;
                model: string;
            };
            sellingPlanGroups: {
                type: string;
                model: string;
            };
            draftOrders: {
                type: string;
                model: string;
            };
            draftOrderLineItems: {
                type: string;
                model: string;
            };
            duties: {
                type: string;
                model: string;
            };
            orderRisks: {
                type: string;
                model: string;
            };
            collects: {
                type: string;
                model: string;
            };
            bulkOperations: {
                type: string;
                model: string;
            };
            sellingPlans: {
                type: string;
                model: string;
            };
            customerAddresses: {
                type: string;
                model: string;
            };
            scriptTags: {
                type: string;
                model: string;
            };
            orders: {
                type: string;
                model: string;
            };
            collections: {
                type: string;
                model: string;
            };
            inventoryItems: {
                type: string;
                model: string;
            };
            inventoryLevels: {
                type: string;
                model: string;
            };
            discountCodes: {
                type: string;
                model: string;
            };
            shippingLines: {
                type: string;
                model: string;
            };
            sellingPlanGroupsProductVariants: {
                type: string;
                model: string;
            };
            provinces: {
                type: string;
                model: string;
            };
            refundDuties: {
                type: string;
                model: string;
            };
            syncs: {
                type: string;
                model: string;
            };
            fulfillmentOrders: {
                type: string;
                model: string;
            };
            customerMergeables: {
                type: string;
                model: string;
            };
            fulfillmentLineItems: {
                type: string;
                model: string;
            };
            assets: {
                type: string;
                model: string;
            };
            customerPaymentMethods: {
                type: string;
                model: string;
            };
            themes: {
                type: string;
                model: string;
            };
            fulfillmentServices: {
                type: string;
                model: string;
            };
            fulfillmentOrderLineItems: {
                type: string;
                model: string;
            };
            discounts: {
                type: string;
                model: string;
            };
            customers: {
                type: string;
                model: string;
            };
            priceRules: {
                type: string;
                model: string;
            };
            fulfillmentEvents: {
                type: string;
                model: string;
            };
            productOptions: {
                type: string;
                model: string;
            };
            sellingPlanGroupsProducts: {
                type: string;
                model: string;
            };
            carrierServices: {
                type: string;
                model: string;
            };
            carts: {
                type: string;
                model: string;
            };
            orderTransactions: {
                type: string;
                model: string;
            };
            refunds: {
                type: string;
                model: string;
            };
            files: {
                type: string;
                model: string;
            };
            productVariants: {
                type: string;
                model: string;
            };
            products: {
                type: string;
                model: string;
            };
            countries: {
                type: string;
                model: string;
            };
            productImages: {
                type: string;
                model: string;
            };
            fulfillments: {
                type: string;
                model: string;
            };
            locations: {
                type: string;
                model: string;
            };
            tenderTransactions: {
                type: string;
                model: string;
            };
            primaryLocation: {
                type: string;
                model: string;
            };
            users: {
                type: string;
                model: string;
            };
        };
        shopifySync: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyTenderTransaction: {
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyTheme: {
            assets: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        temporyImage: {};
        shopifyPickupOrder: {
            location: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
        };
        khagatiStores: {};
        integrationAPI: {};
        pinCode: {};
    };
    environment: string;
    constructor(options?: ClientOptions);
    /** Executes the globalShopifySync global action. */
    globalShopifySync: {
        (variables: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
        }): Promise<any>;
        type: "globalAction";
        operationName: "globalShopifySync";
        namespace: null;
        variablesType: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
        } | undefined;
        variables: {
            "apiKeys": {
                required: false;
                type: "[String!]";
            };
            "syncSince": {
                required: false;
                type: "DateTime";
            };
            "models": {
                required: false;
                type: "[String!]";
            };
            "force": {
                required: false;
                type: "Boolean";
            };
            "startReason": {
                required: false;
                type: "String";
            };
        };
    };
    /** Executes the createProduct global action. */
    createProduct: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "createProduct";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the createOrder global action. */
    createOrder: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "createOrder";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the createCustomer global action. */
    createCustomer: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "createCustomer";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Run an arbitrary GraphQL query. */
    query(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<any>;
    /** Run an arbitrary GraphQL mutation. */
    mutate(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<any>;
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    transaction: <T>(callback: (transaction: GadgetTransaction) => Promise<T>) => Promise<T>;
    /**
     * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
     *
     * @example
     * await api.fetch("https://myapp--development.gadget.app/foo/bar");
     *
     * @example
     * // fetch a relative URL from the endpoint this API client is configured to fetch from
     * await api.fetch("/foo/bar");
     **/
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    getDirectUploadToken: () => Promise<{
        url: string;
        token: string;
    }>;
    toString(): string;
    toJSON(): string;
}
export {};
