var _a;
import { pipe, map } from "wonka";
import { GadgetConnection, AuthenticationMode, InternalModelManager } from "@gadgetinc/api-client-core";
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
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { globalActionRunner } from "@gadgetinc/api-client-core";
const productionEnv = "production";
const developmentEnv = "development";
const $modelRelationships = Symbol.for("gadget/modelRelationships");
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV;
  } catch (error) {
    return void 0;
  }
};
class Client {
  constructor(options) {
    this.developmentApiRoot = "https://kaghati-shopify-v3--development.gadget.app/";
    this.productionApiRoot = "https://kaghati-shopify-v3.gadget.app/";
    this.applicationId = "82410";
    this[_a] = { "user": {}, "session": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "user": { "type": "BelongsTo", "model": "user" } }, "shopifyAsset": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "theme": { "type": "BelongsTo", "model": "shopifyTheme" } }, "shopifyBulkOperation": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCarrierService": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCart": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCollect": { "customCollection": { "type": "BelongsTo", "model": "shopifyCollection" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCollection": { "products": { "type": "HasManyThrough", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCountry": { "provinces": { "type": "HasMany", "model": "shopifyProvince" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomer": { "mergeable": { "type": "HasOne", "model": "shopifyCustomerMergeable" }, "addresses": { "type": "HasMany", "model": "shopifyCustomerAddress" }, "defaultAddress": { "type": "BelongsTo", "model": "shopifyCustomerAddress" }, "draftOrders": { "type": "HasMany", "model": "shopifyDraftOrder" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "paymentMethods": { "type": "HasMany", "model": "shopifyCustomerPaymentMethod" }, "lastOrder": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomerAddress": { "shopifyCustomer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomerMergeable": { "shopifyCustomer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomerPaymentMethod": { "customer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDiscount": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDiscountCode": { "priceRule": { "type": "BelongsTo", "model": "shopifyPriceRule" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDraftOrder": { "lineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "customer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDraftOrderLineItem": { "draftOrder": { "type": "BelongsTo", "model": "shopifyDraftOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "variant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDuty": { "refundDuty": { "type": "HasOne", "model": "shopifyRefundDuty" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFile": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillment": { "fulfillmentEvents": { "type": "HasMany", "model": "shopifyFulfillmentEvent" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentEvent": { "fulfillment": { "type": "BelongsTo", "model": "shopifyFulfillment" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentLineItem": { "fulfillment": { "type": "BelongsTo", "model": "shopifyFulfillment" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentOrder": { "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentOrderLineItem": { "fulfillmentOrder": { "type": "BelongsTo", "model": "shopifyFulfillmentOrder" }, "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentService": { "shippingLineItems": { "type": "HasMany", "model": "shopifyShippingLine" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyGdprRequest": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryItem": { "fulfillmentOrderLineItem": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "productVariant": { "type": "HasOne", "model": "shopifyProductVariant" }, "locations": { "type": "HasManyThrough", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryLevel": { "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyLocation": { "refundedLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "orderTransactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "fulfillmentServices": { "type": "HasMany", "model": "shopifyFulfillmentService" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "inventoryItems": { "type": "HasManyThrough", "model": "shopifyInventoryItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrder": { "adjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "risks": { "type": "HasMany", "model": "shopifyOrderRisk" }, "refunds": { "type": "HasMany", "model": "shopifyRefund" }, "transactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "tenderTransactions": { "type": "HasMany", "model": "shopifyTenderTransaction" }, "fulfillmentOrders": { "type": "HasMany", "model": "shopifyFulfillmentOrder" }, "lineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "shippingLines": { "type": "HasMany", "model": "shopifyShippingLine" }, "fulfillmentEvents": { "type": "HasMany", "model": "shopifyFulfillmentEvent" }, "customer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderAdjustment": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderLineItem": { "refunds": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "duties": { "type": "HasMany", "model": "shopifyDuty" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "originLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "variant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderRisk": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderTransaction": { "children": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "parent": { "type": "BelongsTo", "model": "shopifyOrderTransaction" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyPriceRule": { "discountCodes": { "type": "HasMany", "model": "shopifyDiscountCode" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProduct": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "draftOrderLineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "images": { "type": "HasMany", "model": "shopifyProductImage" }, "options": { "type": "HasMany", "model": "shopifyProductOption" }, "variants": { "type": "HasMany", "model": "shopifyProductVariant" }, "customCollections": { "type": "HasManyThrough", "model": "shopifyCollection" }, "sellingPlanGroups": { "type": "HasManyThrough", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductImage": { "variants": { "type": "HasMany", "model": "shopifyProductVariant" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductOption": { "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductVariant": { "draftOrderLineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "productImage": { "type": "BelongsTo", "model": "shopifyProductImage" }, "sellingPlanGroups": { "type": "HasManyThrough", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProvince": { "country": { "type": "BelongsTo", "model": "shopifyCountry" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefund": { "duties": { "type": "HasMany", "model": "shopifyRefundDuty" }, "orderAdjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "refundLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "transactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefundDuty": { "originalDuty": { "type": "BelongsTo", "model": "shopifyDuty" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefundLineItem": { "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyScriptTag": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlan": { "sellingPlanGroup": { "type": "BelongsTo", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlanGroup": { "sellingPlanGroupProductVariants": { "type": "HasMany", "model": "shopifySellingPlanGroupProductVariant" }, "sellingPlanGroupProducts": { "type": "HasMany", "model": "shopifySellingPlanGroupProduct" }, "sellingPlans": { "type": "HasMany", "model": "shopifySellingPlan" }, "products": { "type": "HasManyThrough", "model": "shopifyProduct" }, "productVariants": { "type": "HasManyThrough", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlanGroupProduct": { "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "sellingPlanGroup": { "type": "BelongsTo", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlanGroupProductVariant": { "productVariant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "sellingPlanGroup": { "type": "BelongsTo", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShippingLine": { "requestedFulfillmentService": { "type": "BelongsTo", "model": "shopifyFulfillmentService" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShop": { "refundLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "orderAdjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "gdprRequests": { "type": "HasMany", "model": "shopifyGdprRequest" }, "sellingPlanGroups": { "type": "HasMany", "model": "shopifySellingPlanGroup" }, "draftOrders": { "type": "HasMany", "model": "shopifyDraftOrder" }, "draftOrderLineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "duties": { "type": "HasMany", "model": "shopifyDuty" }, "orderRisks": { "type": "HasMany", "model": "shopifyOrderRisk" }, "collects": { "type": "HasMany", "model": "shopifyCollect" }, "bulkOperations": { "type": "HasMany", "model": "shopifyBulkOperation" }, "sellingPlans": { "type": "HasMany", "model": "shopifySellingPlan" }, "customerAddresses": { "type": "HasMany", "model": "shopifyCustomerAddress" }, "scriptTags": { "type": "HasMany", "model": "shopifyScriptTag" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "collections": { "type": "HasMany", "model": "shopifyCollection" }, "inventoryItems": { "type": "HasMany", "model": "shopifyInventoryItem" }, "inventoryLevels": { "type": "HasMany", "model": "shopifyInventoryLevel" }, "discountCodes": { "type": "HasMany", "model": "shopifyDiscountCode" }, "shippingLines": { "type": "HasMany", "model": "shopifyShippingLine" }, "sellingPlanGroupsProductVariants": { "type": "HasMany", "model": "shopifySellingPlanGroupProductVariant" }, "provinces": { "type": "HasMany", "model": "shopifyProvince" }, "refundDuties": { "type": "HasMany", "model": "shopifyRefundDuty" }, "syncs": { "type": "HasMany", "model": "shopifySync" }, "fulfillmentOrders": { "type": "HasMany", "model": "shopifyFulfillmentOrder" }, "customerMergeables": { "type": "HasMany", "model": "shopifyCustomerMergeable" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "assets": { "type": "HasMany", "model": "shopifyAsset" }, "customerPaymentMethods": { "type": "HasMany", "model": "shopifyCustomerPaymentMethod" }, "themes": { "type": "HasMany", "model": "shopifyTheme" }, "fulfillmentServices": { "type": "HasMany", "model": "shopifyFulfillmentService" }, "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "discounts": { "type": "HasMany", "model": "shopifyDiscount" }, "customers": { "type": "HasMany", "model": "shopifyCustomer" }, "priceRules": { "type": "HasMany", "model": "shopifyPriceRule" }, "fulfillmentEvents": { "type": "HasMany", "model": "shopifyFulfillmentEvent" }, "productOptions": { "type": "HasMany", "model": "shopifyProductOption" }, "sellingPlanGroupsProducts": { "type": "HasMany", "model": "shopifySellingPlanGroupProduct" }, "carrierServices": { "type": "HasMany", "model": "shopifyCarrierService" }, "carts": { "type": "HasMany", "model": "shopifyCart" }, "orderTransactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "refunds": { "type": "HasMany", "model": "shopifyRefund" }, "files": { "type": "HasMany", "model": "shopifyFile" }, "productVariants": { "type": "HasMany", "model": "shopifyProductVariant" }, "products": { "type": "HasMany", "model": "shopifyProduct" }, "countries": { "type": "HasMany", "model": "shopifyCountry" }, "productImages": { "type": "HasMany", "model": "shopifyProductImage" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "locations": { "type": "HasMany", "model": "shopifyLocation" }, "tenderTransactions": { "type": "HasMany", "model": "shopifyTenderTransaction" }, "primaryLocation": { "type": "BelongsTo", "model": "shopifyLocation" } }, "shopifySync": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyTenderTransaction": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyTheme": { "assets": { "type": "HasMany", "model": "shopifyAsset" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } } };
    /** Executes the globalShopifySync global action. */
    this.globalShopifySync = Object.assign(
      async (variables) => {
        return await globalActionRunner(
          this.connection,
          "globalShopifySync",
          {
            "apiKeys": {
              value: variables.apiKeys,
              required: false,
              type: "[String!]"
            },
            "syncSince": {
              value: variables.syncSince,
              required: false,
              type: "DateTime"
            },
            "models": {
              value: variables.models,
              required: false,
              type: "[String!]"
            },
            "force": {
              value: variables.force,
              required: false,
              type: "Boolean"
            },
            "startReason": {
              value: variables.startReason,
              required: false,
              type: "String"
            }
          },
          null
        );
      },
      {
        type: "globalAction",
        operationName: "globalShopifySync",
        namespace: null,
        variables: {
          "apiKeys": {
            required: false,
            type: "[String!]"
          },
          "syncSince": {
            required: false,
            type: "DateTime"
          },
          "models": {
            required: false,
            type: "[String!]"
          },
          "force": {
            required: false,
            type: "Boolean"
          },
          "startReason": {
            required: false,
            type: "String"
          }
        }
      }
    );
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    this.getDirectUploadToken = async () => {
      const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    const environment = options?.environment ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();
    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }
    const exchanges = { ...options?.exchanges };
    if (normalizedEnvironment === developmentEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return pipe(
            operationResult$,
            map((result) => {
              if (typeof window !== "undefined" && typeof CustomEvent === "function") {
                const event = new CustomEvent("gadget:devharness:graphqlresult", { detail: result });
                window.dispatchEvent(event);
              }
              return result;
            })
          );
        };
      };
      exchanges.beforeAll = [
        devHarnessExchange,
        ...exchanges.beforeAll ?? []
      ];
    }
    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == AuthenticationMode.APIKey && !options?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.user = new UserManager(this.connection);
    this.session = new SessionManager(this.connection);
    this.shopifyAsset = new ShopifyAssetManager(this.connection);
    this.shopifyBulkOperation = new ShopifyBulkOperationManager(this.connection);
    this.shopifyCarrierService = new ShopifyCarrierServiceManager(this.connection);
    this.shopifyCart = new ShopifyCartManager(this.connection);
    this.shopifyCollect = new ShopifyCollectManager(this.connection);
    this.shopifyCollection = new ShopifyCollectionManager(this.connection);
    this.shopifyCountry = new ShopifyCountryManager(this.connection);
    this.shopifyCustomer = new ShopifyCustomerManager(this.connection);
    this.shopifyCustomerAddress = new ShopifyCustomerAddressManager(this.connection);
    this.shopifyCustomerMergeable = new ShopifyCustomerMergeableManager(this.connection);
    this.shopifyCustomerPaymentMethod = new ShopifyCustomerPaymentMethodManager(this.connection);
    this.shopifyDiscount = new ShopifyDiscountManager(this.connection);
    this.shopifyDiscountCode = new ShopifyDiscountCodeManager(this.connection);
    this.shopifyDraftOrder = new ShopifyDraftOrderManager(this.connection);
    this.shopifyDraftOrderLineItem = new ShopifyDraftOrderLineItemManager(this.connection);
    this.shopifyDuty = new ShopifyDutyManager(this.connection);
    this.shopifyFile = new ShopifyFileManager(this.connection);
    this.shopifyFulfillment = new ShopifyFulfillmentManager(this.connection);
    this.shopifyFulfillmentEvent = new ShopifyFulfillmentEventManager(this.connection);
    this.shopifyFulfillmentLineItem = new ShopifyFulfillmentLineItemManager(this.connection);
    this.shopifyFulfillmentOrder = new ShopifyFulfillmentOrderManager(this.connection);
    this.shopifyFulfillmentOrderLineItem = new ShopifyFulfillmentOrderLineItemManager(this.connection);
    this.shopifyFulfillmentService = new ShopifyFulfillmentServiceManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyInventoryItem = new ShopifyInventoryItemManager(this.connection);
    this.shopifyInventoryLevel = new ShopifyInventoryLevelManager(this.connection);
    this.shopifyLocation = new ShopifyLocationManager(this.connection);
    this.shopifyOrder = new ShopifyOrderManager(this.connection);
    this.shopifyOrderAdjustment = new ShopifyOrderAdjustmentManager(this.connection);
    this.shopifyOrderLineItem = new ShopifyOrderLineItemManager(this.connection);
    this.shopifyOrderRisk = new ShopifyOrderRiskManager(this.connection);
    this.shopifyOrderTransaction = new ShopifyOrderTransactionManager(this.connection);
    this.shopifyPriceRule = new ShopifyPriceRuleManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifyProductImage = new ShopifyProductImageManager(this.connection);
    this.shopifyProductOption = new ShopifyProductOptionManager(this.connection);
    this.shopifyProductVariant = new ShopifyProductVariantManager(this.connection);
    this.shopifyProvince = new ShopifyProvinceManager(this.connection);
    this.shopifyRefund = new ShopifyRefundManager(this.connection);
    this.shopifyRefundDuty = new ShopifyRefundDutyManager(this.connection);
    this.shopifyRefundLineItem = new ShopifyRefundLineItemManager(this.connection);
    this.shopifyScriptTag = new ShopifyScriptTagManager(this.connection);
    this.shopifySellingPlan = new ShopifySellingPlanManager(this.connection);
    this.shopifySellingPlanGroup = new ShopifySellingPlanGroupManager(this.connection);
    this.shopifySellingPlanGroupProduct = new ShopifySellingPlanGroupProductManager(this.connection);
    this.shopifySellingPlanGroupProductVariant = new ShopifySellingPlanGroupProductVariantManager(this.connection);
    this.shopifyShippingLine = new ShopifyShippingLineManager(this.connection);
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.shopifyTenderTransaction = new ShopifyTenderTransactionManager(this.connection);
    this.shopifyTheme = new ShopifyThemeManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);
    this.internal = {
      user: new InternalModelManager("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyAsset: new InternalModelManager("shopifyAsset", this.connection, {
        pluralApiIdentifier: "shopifyAssets",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBulkOperation: new InternalModelManager("shopifyBulkOperation", this.connection, {
        pluralApiIdentifier: "shopifyBulkOperations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCarrierService: new InternalModelManager("shopifyCarrierService", this.connection, {
        pluralApiIdentifier: "shopifyCarrierServices",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCart: new InternalModelManager("shopifyCart", this.connection, {
        pluralApiIdentifier: "shopifyCarts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollect: new InternalModelManager("shopifyCollect", this.connection, {
        pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollection: new InternalModelManager("shopifyCollection", this.connection, {
        pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCountry: new InternalModelManager("shopifyCountry", this.connection, {
        pluralApiIdentifier: "shopifyCountries",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomer: new InternalModelManager("shopifyCustomer", this.connection, {
        pluralApiIdentifier: "shopifyCustomers",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomerAddress: new InternalModelManager("shopifyCustomerAddress", this.connection, {
        pluralApiIdentifier: "shopifyCustomerAddresses",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomerMergeable: new InternalModelManager("shopifyCustomerMergeable", this.connection, {
        pluralApiIdentifier: "shopifyCustomerMergeables",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomerPaymentMethod: new InternalModelManager("shopifyCustomerPaymentMethod", this.connection, {
        pluralApiIdentifier: "shopifyCustomerPaymentMethods",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscount: new InternalModelManager("shopifyDiscount", this.connection, {
        pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscountCode: new InternalModelManager("shopifyDiscountCode", this.connection, {
        pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDraftOrder: new InternalModelManager("shopifyDraftOrder", this.connection, {
        pluralApiIdentifier: "shopifyDraftOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDraftOrderLineItem: new InternalModelManager("shopifyDraftOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyDraftOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDuty: new InternalModelManager("shopifyDuty", this.connection, {
        pluralApiIdentifier: "shopifyDuties",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFile: new InternalModelManager("shopifyFile", this.connection, {
        pluralApiIdentifier: "shopifyFiles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillment: new InternalModelManager("shopifyFulfillment", this.connection, {
        pluralApiIdentifier: "shopifyFulfillments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentEvent: new InternalModelManager("shopifyFulfillmentEvent", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentEvents",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentLineItem: new InternalModelManager("shopifyFulfillmentLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrder: new InternalModelManager("shopifyFulfillmentOrder", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrderLineItem: new InternalModelManager("shopifyFulfillmentOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentService: new InternalModelManager("shopifyFulfillmentService", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentServices",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryItem: new InternalModelManager("shopifyInventoryItem", this.connection, {
        pluralApiIdentifier: "shopifyInventoryItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryLevel: new InternalModelManager("shopifyInventoryLevel", this.connection, {
        pluralApiIdentifier: "shopifyInventoryLevels",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyLocation: new InternalModelManager("shopifyLocation", this.connection, {
        pluralApiIdentifier: "shopifyLocations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrder: new InternalModelManager("shopifyOrder", this.connection, {
        pluralApiIdentifier: "shopifyOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderAdjustment: new InternalModelManager("shopifyOrderAdjustment", this.connection, {
        pluralApiIdentifier: "shopifyOrderAdjustments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderLineItem: new InternalModelManager("shopifyOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderRisk: new InternalModelManager("shopifyOrderRisk", this.connection, {
        pluralApiIdentifier: "shopifyOrderRisks",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderTransaction: new InternalModelManager("shopifyOrderTransaction", this.connection, {
        pluralApiIdentifier: "shopifyOrderTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPriceRule: new InternalModelManager("shopifyPriceRule", this.connection, {
        pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductImage: new InternalModelManager("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductOption: new InternalModelManager("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductVariant: new InternalModelManager("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProvince: new InternalModelManager("shopifyProvince", this.connection, {
        pluralApiIdentifier: "shopifyProvinces",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefund: new InternalModelManager("shopifyRefund", this.connection, {
        pluralApiIdentifier: "shopifyRefunds",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundDuty: new InternalModelManager("shopifyRefundDuty", this.connection, {
        pluralApiIdentifier: "shopifyRefundDuties",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundLineItem: new InternalModelManager("shopifyRefundLineItem", this.connection, {
        pluralApiIdentifier: "shopifyRefundLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyScriptTag: new InternalModelManager("shopifyScriptTag", this.connection, {
        pluralApiIdentifier: "shopifyScriptTags",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlan: new InternalModelManager("shopifySellingPlan", this.connection, {
        pluralApiIdentifier: "shopifySellingPlans",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlanGroup: new InternalModelManager("shopifySellingPlanGroup", this.connection, {
        pluralApiIdentifier: "shopifySellingPlanGroups",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlanGroupProduct: new InternalModelManager("shopifySellingPlanGroupProduct", this.connection, {
        pluralApiIdentifier: "shopifySellingPlanGroupProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlanGroupProductVariant: new InternalModelManager("shopifySellingPlanGroupProductVariant", this.connection, {
        pluralApiIdentifier: "shopifySellingPlanGroupProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShippingLine: new InternalModelManager("shopifyShippingLine", this.connection, {
        pluralApiIdentifier: "shopifyShippingLines",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyTenderTransaction: new InternalModelManager("shopifyTenderTransaction", this.connection, {
        pluralApiIdentifier: "shopifyTenderTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyTheme: new InternalModelManager("shopifyTheme", this.connection, {
        pluralApiIdentifier: "shopifyThemes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
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
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
_a = $modelRelationships;
export {
  Client
};
//# sourceMappingURL=Client.js.map
