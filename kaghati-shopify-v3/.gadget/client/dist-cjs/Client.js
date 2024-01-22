"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Client_exports = {};
__export(Client_exports, {
  Client: () => Client
});
module.exports = __toCommonJS(Client_exports);
var import_wonka = require("wonka");
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_User = require("./models/User.js");
var import_Session = require("./models/Session.js");
var import_ShopifyAsset = require("./models/ShopifyAsset.js");
var import_ShopifyBulkOperation = require("./models/ShopifyBulkOperation.js");
var import_ShopifyCarrierService = require("./models/ShopifyCarrierService.js");
var import_ShopifyCart = require("./models/ShopifyCart.js");
var import_ShopifyCollect = require("./models/ShopifyCollect.js");
var import_ShopifyCollection = require("./models/ShopifyCollection.js");
var import_ShopifyCountry = require("./models/ShopifyCountry.js");
var import_ShopifyCustomer = require("./models/ShopifyCustomer.js");
var import_ShopifyCustomerAddress = require("./models/ShopifyCustomerAddress.js");
var import_ShopifyCustomerMergeable = require("./models/ShopifyCustomerMergeable.js");
var import_ShopifyCustomerPaymentMethod = require("./models/ShopifyCustomerPaymentMethod.js");
var import_ShopifyDiscount = require("./models/ShopifyDiscount.js");
var import_ShopifyDiscountCode = require("./models/ShopifyDiscountCode.js");
var import_ShopifyDraftOrder = require("./models/ShopifyDraftOrder.js");
var import_ShopifyDraftOrderLineItem = require("./models/ShopifyDraftOrderLineItem.js");
var import_ShopifyDuty = require("./models/ShopifyDuty.js");
var import_ShopifyFile = require("./models/ShopifyFile.js");
var import_ShopifyFulfillment = require("./models/ShopifyFulfillment.js");
var import_ShopifyFulfillmentEvent = require("./models/ShopifyFulfillmentEvent.js");
var import_ShopifyFulfillmentLineItem = require("./models/ShopifyFulfillmentLineItem.js");
var import_ShopifyFulfillmentOrder = require("./models/ShopifyFulfillmentOrder.js");
var import_ShopifyFulfillmentOrderLineItem = require("./models/ShopifyFulfillmentOrderLineItem.js");
var import_ShopifyFulfillmentService = require("./models/ShopifyFulfillmentService.js");
var import_ShopifyGdprRequest = require("./models/ShopifyGdprRequest.js");
var import_ShopifyInventoryItem = require("./models/ShopifyInventoryItem.js");
var import_ShopifyInventoryLevel = require("./models/ShopifyInventoryLevel.js");
var import_ShopifyLocation = require("./models/ShopifyLocation.js");
var import_ShopifyOrder = require("./models/ShopifyOrder.js");
var import_ShopifyOrderAdjustment = require("./models/ShopifyOrderAdjustment.js");
var import_ShopifyOrderLineItem = require("./models/ShopifyOrderLineItem.js");
var import_ShopifyOrderRisk = require("./models/ShopifyOrderRisk.js");
var import_ShopifyOrderTransaction = require("./models/ShopifyOrderTransaction.js");
var import_ShopifyPriceRule = require("./models/ShopifyPriceRule.js");
var import_ShopifyProduct = require("./models/ShopifyProduct.js");
var import_ShopifyProductImage = require("./models/ShopifyProductImage.js");
var import_ShopifyProductOption = require("./models/ShopifyProductOption.js");
var import_ShopifyProductVariant = require("./models/ShopifyProductVariant.js");
var import_ShopifyProvince = require("./models/ShopifyProvince.js");
var import_ShopifyRefund = require("./models/ShopifyRefund.js");
var import_ShopifyRefundDuty = require("./models/ShopifyRefundDuty.js");
var import_ShopifyRefundLineItem = require("./models/ShopifyRefundLineItem.js");
var import_ShopifyScriptTag = require("./models/ShopifyScriptTag.js");
var import_ShopifySellingPlan = require("./models/ShopifySellingPlan.js");
var import_ShopifySellingPlanGroup = require("./models/ShopifySellingPlanGroup.js");
var import_ShopifySellingPlanGroupProduct = require("./models/ShopifySellingPlanGroupProduct.js");
var import_ShopifySellingPlanGroupProductVariant = require("./models/ShopifySellingPlanGroupProductVariant.js");
var import_ShopifyShippingLine = require("./models/ShopifyShippingLine.js");
var import_ShopifyShop = require("./models/ShopifyShop.js");
var import_ShopifySync = require("./models/ShopifySync.js");
var import_ShopifyTenderTransaction = require("./models/ShopifyTenderTransaction.js");
var import_ShopifyTheme = require("./models/ShopifyTheme.js");
var import_TemporyImage = require("./models/TemporyImage.js");
var import_CurrentSession = require("./models/CurrentSession.js");
var import_api_client_core2 = require("@gadgetinc/api-client-core");
var _a;
const productionEnv = "production";
const fallbackEnv = "development";
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
    /**
     * The list of environments with a customized API root endpoint
     */
    this.apiRoots = { "development": "https://kaghati-shopify-v3--development.gadget.app/", "production": "https://kaghati-shopify-v3.gadget.app/" };
    /** @deprecated */
    this.developmentApiRoot = this.apiRoots[fallbackEnv];
    /** @deprecated */
    this.productionApiRoot = this.apiRoots[productionEnv];
    this.applicationId = "82410";
    this[_a] = { "user": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "session": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "user": { "type": "BelongsTo", "model": "user" } }, "shopifyAsset": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "theme": { "type": "BelongsTo", "model": "shopifyTheme" } }, "shopifyBulkOperation": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCarrierService": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCart": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCollect": { "customCollection": { "type": "BelongsTo", "model": "shopifyCollection" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCollection": { "products": { "type": "HasManyThrough", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCountry": { "provinces": { "type": "HasMany", "model": "shopifyProvince" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomer": { "mergeable": { "type": "HasOne", "model": "shopifyCustomerMergeable" }, "addresses": { "type": "HasMany", "model": "shopifyCustomerAddress" }, "defaultAddress": { "type": "BelongsTo", "model": "shopifyCustomerAddress" }, "draftOrders": { "type": "HasMany", "model": "shopifyDraftOrder" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "paymentMethods": { "type": "HasMany", "model": "shopifyCustomerPaymentMethod" }, "lastOrder": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomerAddress": { "shopifyCustomer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomerMergeable": { "shopifyCustomer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCustomerPaymentMethod": { "customer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDiscount": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDiscountCode": { "priceRule": { "type": "BelongsTo", "model": "shopifyPriceRule" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDraftOrder": { "lineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "customer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDraftOrderLineItem": { "draftOrder": { "type": "BelongsTo", "model": "shopifyDraftOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "variant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDuty": { "refundDuty": { "type": "HasOne", "model": "shopifyRefundDuty" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFile": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillment": { "fulfillmentEvents": { "type": "HasMany", "model": "shopifyFulfillmentEvent" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentEvent": { "fulfillment": { "type": "BelongsTo", "model": "shopifyFulfillment" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentLineItem": { "fulfillment": { "type": "BelongsTo", "model": "shopifyFulfillment" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentOrder": { "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentOrderLineItem": { "fulfillmentOrder": { "type": "BelongsTo", "model": "shopifyFulfillmentOrder" }, "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentService": { "shippingLineItems": { "type": "HasMany", "model": "shopifyShippingLine" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyGdprRequest": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryItem": { "fulfillmentOrderLineItem": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "productVariant": { "type": "HasOne", "model": "shopifyProductVariant" }, "locations": { "type": "HasManyThrough", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryLevel": { "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyLocation": { "refundedLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "orderTransactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "fulfillmentServices": { "type": "HasMany", "model": "shopifyFulfillmentService" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "inventoryItems": { "type": "HasManyThrough", "model": "shopifyInventoryItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrder": { "adjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "risks": { "type": "HasMany", "model": "shopifyOrderRisk" }, "refunds": { "type": "HasMany", "model": "shopifyRefund" }, "transactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "tenderTransactions": { "type": "HasMany", "model": "shopifyTenderTransaction" }, "fulfillmentOrders": { "type": "HasMany", "model": "shopifyFulfillmentOrder" }, "lineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "shippingLines": { "type": "HasMany", "model": "shopifyShippingLine" }, "fulfillmentEvents": { "type": "HasMany", "model": "shopifyFulfillmentEvent" }, "customer": { "type": "BelongsTo", "model": "shopifyCustomer" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderAdjustment": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderLineItem": { "refunds": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "duties": { "type": "HasMany", "model": "shopifyDuty" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "originLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "variant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderRisk": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderTransaction": { "children": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "parent": { "type": "BelongsTo", "model": "shopifyOrderTransaction" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyPriceRule": { "discountCodes": { "type": "HasMany", "model": "shopifyDiscountCode" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProduct": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "draftOrderLineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "images": { "type": "HasMany", "model": "shopifyProductImage" }, "options": { "type": "HasMany", "model": "shopifyProductOption" }, "variants": { "type": "HasMany", "model": "shopifyProductVariant" }, "customCollections": { "type": "HasManyThrough", "model": "shopifyCollection" }, "sellingPlanGroups": { "type": "HasManyThrough", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductImage": { "variants": { "type": "HasMany", "model": "shopifyProductVariant" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductOption": { "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductVariant": { "draftOrderLineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "productImage": { "type": "BelongsTo", "model": "shopifyProductImage" }, "sellingPlanGroups": { "type": "HasManyThrough", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProvince": { "country": { "type": "BelongsTo", "model": "shopifyCountry" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefund": { "duties": { "type": "HasMany", "model": "shopifyRefundDuty" }, "orderAdjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "refundLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "transactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefundDuty": { "originalDuty": { "type": "BelongsTo", "model": "shopifyDuty" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefundLineItem": { "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyScriptTag": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlan": { "sellingPlanGroup": { "type": "BelongsTo", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlanGroup": { "sellingPlanGroupProductVariants": { "type": "HasMany", "model": "shopifySellingPlanGroupProductVariant" }, "sellingPlanGroupProducts": { "type": "HasMany", "model": "shopifySellingPlanGroupProduct" }, "sellingPlans": { "type": "HasMany", "model": "shopifySellingPlan" }, "products": { "type": "HasManyThrough", "model": "shopifyProduct" }, "productVariants": { "type": "HasManyThrough", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlanGroupProduct": { "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "sellingPlanGroup": { "type": "BelongsTo", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySellingPlanGroupProductVariant": { "productVariant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "sellingPlanGroup": { "type": "BelongsTo", "model": "shopifySellingPlanGroup" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShippingLine": { "requestedFulfillmentService": { "type": "BelongsTo", "model": "shopifyFulfillmentService" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShop": { "refundLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "orderAdjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "gdprRequests": { "type": "HasMany", "model": "shopifyGdprRequest" }, "sellingPlanGroups": { "type": "HasMany", "model": "shopifySellingPlanGroup" }, "draftOrders": { "type": "HasMany", "model": "shopifyDraftOrder" }, "draftOrderLineItems": { "type": "HasMany", "model": "shopifyDraftOrderLineItem" }, "duties": { "type": "HasMany", "model": "shopifyDuty" }, "orderRisks": { "type": "HasMany", "model": "shopifyOrderRisk" }, "collects": { "type": "HasMany", "model": "shopifyCollect" }, "bulkOperations": { "type": "HasMany", "model": "shopifyBulkOperation" }, "sellingPlans": { "type": "HasMany", "model": "shopifySellingPlan" }, "customerAddresses": { "type": "HasMany", "model": "shopifyCustomerAddress" }, "scriptTags": { "type": "HasMany", "model": "shopifyScriptTag" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "collections": { "type": "HasMany", "model": "shopifyCollection" }, "inventoryItems": { "type": "HasMany", "model": "shopifyInventoryItem" }, "inventoryLevels": { "type": "HasMany", "model": "shopifyInventoryLevel" }, "discountCodes": { "type": "HasMany", "model": "shopifyDiscountCode" }, "shippingLines": { "type": "HasMany", "model": "shopifyShippingLine" }, "sellingPlanGroupsProductVariants": { "type": "HasMany", "model": "shopifySellingPlanGroupProductVariant" }, "provinces": { "type": "HasMany", "model": "shopifyProvince" }, "refundDuties": { "type": "HasMany", "model": "shopifyRefundDuty" }, "syncs": { "type": "HasMany", "model": "shopifySync" }, "fulfillmentOrders": { "type": "HasMany", "model": "shopifyFulfillmentOrder" }, "customerMergeables": { "type": "HasMany", "model": "shopifyCustomerMergeable" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "assets": { "type": "HasMany", "model": "shopifyAsset" }, "customerPaymentMethods": { "type": "HasMany", "model": "shopifyCustomerPaymentMethod" }, "themes": { "type": "HasMany", "model": "shopifyTheme" }, "fulfillmentServices": { "type": "HasMany", "model": "shopifyFulfillmentService" }, "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "discounts": { "type": "HasMany", "model": "shopifyDiscount" }, "customers": { "type": "HasMany", "model": "shopifyCustomer" }, "priceRules": { "type": "HasMany", "model": "shopifyPriceRule" }, "fulfillmentEvents": { "type": "HasMany", "model": "shopifyFulfillmentEvent" }, "productOptions": { "type": "HasMany", "model": "shopifyProductOption" }, "sellingPlanGroupsProducts": { "type": "HasMany", "model": "shopifySellingPlanGroupProduct" }, "carrierServices": { "type": "HasMany", "model": "shopifyCarrierService" }, "carts": { "type": "HasMany", "model": "shopifyCart" }, "orderTransactions": { "type": "HasMany", "model": "shopifyOrderTransaction" }, "refunds": { "type": "HasMany", "model": "shopifyRefund" }, "files": { "type": "HasMany", "model": "shopifyFile" }, "productVariants": { "type": "HasMany", "model": "shopifyProductVariant" }, "products": { "type": "HasMany", "model": "shopifyProduct" }, "countries": { "type": "HasMany", "model": "shopifyCountry" }, "productImages": { "type": "HasMany", "model": "shopifyProductImage" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "locations": { "type": "HasMany", "model": "shopifyLocation" }, "tenderTransactions": { "type": "HasMany", "model": "shopifyTenderTransaction" }, "primaryLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "users": { "type": "HasMany", "model": "user" } }, "shopifySync": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyTenderTransaction": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyTheme": { "assets": { "type": "HasMany", "model": "shopifyAsset" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "temporyImage": {} };
    /** Executes the globalShopifySync global action. */
    this.globalShopifySync = Object.assign(
      async (variables) => {
        return await (0, import_api_client_core2.globalActionRunner)(
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
    /** Executes the createProduct global action. */
    this.createProduct = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "createProduct",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "createProduct",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the createOrder global action. */
    this.createOrder = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "createOrder",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "createOrder",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the createCustomer global action. */
    this.createCustomer = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "createCustomer",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "createCustomer",
        namespace: null,
        variables: {}
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
    var _a2;
    this.environment = ((options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    if (this.environment != fallbackEnv && this.environment != productionEnv) {
      console.warn("Invalid environment", this.environment, `defaulting to ${fallbackEnv}`);
      this.environment = fallbackEnv;
    }
    const apiRoot = this.environment == productionEnv ? this.productionApiRoot : this.developmentApiRoot;
    const exchanges = { ...options == null ? void 0 : options.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return (0, import_wonka.pipe)(
            operationResult$,
            (0, import_wonka.map)((result) => {
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
    this.connection = new import_api_client_core.GadgetConnection({
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (options == null ? void 0 : options.authenticationMode) ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: this.environment
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == import_api_client_core.AuthenticationMode.APIKey && !((_a2 = options == null ? void 0 : options.authenticationMode) == null ? void 0 : _a2.dangerouslyAllowBrowserApiKey)) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.user = new import_User.UserManager(this.connection);
    this.session = new import_Session.SessionManager(this.connection);
    this.shopifyAsset = new import_ShopifyAsset.ShopifyAssetManager(this.connection);
    this.shopifyBulkOperation = new import_ShopifyBulkOperation.ShopifyBulkOperationManager(this.connection);
    this.shopifyCarrierService = new import_ShopifyCarrierService.ShopifyCarrierServiceManager(this.connection);
    this.shopifyCart = new import_ShopifyCart.ShopifyCartManager(this.connection);
    this.shopifyCollect = new import_ShopifyCollect.ShopifyCollectManager(this.connection);
    this.shopifyCollection = new import_ShopifyCollection.ShopifyCollectionManager(this.connection);
    this.shopifyCountry = new import_ShopifyCountry.ShopifyCountryManager(this.connection);
    this.shopifyCustomer = new import_ShopifyCustomer.ShopifyCustomerManager(this.connection);
    this.shopifyCustomerAddress = new import_ShopifyCustomerAddress.ShopifyCustomerAddressManager(this.connection);
    this.shopifyCustomerMergeable = new import_ShopifyCustomerMergeable.ShopifyCustomerMergeableManager(this.connection);
    this.shopifyCustomerPaymentMethod = new import_ShopifyCustomerPaymentMethod.ShopifyCustomerPaymentMethodManager(this.connection);
    this.shopifyDiscount = new import_ShopifyDiscount.ShopifyDiscountManager(this.connection);
    this.shopifyDiscountCode = new import_ShopifyDiscountCode.ShopifyDiscountCodeManager(this.connection);
    this.shopifyDraftOrder = new import_ShopifyDraftOrder.ShopifyDraftOrderManager(this.connection);
    this.shopifyDraftOrderLineItem = new import_ShopifyDraftOrderLineItem.ShopifyDraftOrderLineItemManager(this.connection);
    this.shopifyDuty = new import_ShopifyDuty.ShopifyDutyManager(this.connection);
    this.shopifyFile = new import_ShopifyFile.ShopifyFileManager(this.connection);
    this.shopifyFulfillment = new import_ShopifyFulfillment.ShopifyFulfillmentManager(this.connection);
    this.shopifyFulfillmentEvent = new import_ShopifyFulfillmentEvent.ShopifyFulfillmentEventManager(this.connection);
    this.shopifyFulfillmentLineItem = new import_ShopifyFulfillmentLineItem.ShopifyFulfillmentLineItemManager(this.connection);
    this.shopifyFulfillmentOrder = new import_ShopifyFulfillmentOrder.ShopifyFulfillmentOrderManager(this.connection);
    this.shopifyFulfillmentOrderLineItem = new import_ShopifyFulfillmentOrderLineItem.ShopifyFulfillmentOrderLineItemManager(this.connection);
    this.shopifyFulfillmentService = new import_ShopifyFulfillmentService.ShopifyFulfillmentServiceManager(this.connection);
    this.shopifyGdprRequest = new import_ShopifyGdprRequest.ShopifyGdprRequestManager(this.connection);
    this.shopifyInventoryItem = new import_ShopifyInventoryItem.ShopifyInventoryItemManager(this.connection);
    this.shopifyInventoryLevel = new import_ShopifyInventoryLevel.ShopifyInventoryLevelManager(this.connection);
    this.shopifyLocation = new import_ShopifyLocation.ShopifyLocationManager(this.connection);
    this.shopifyOrder = new import_ShopifyOrder.ShopifyOrderManager(this.connection);
    this.shopifyOrderAdjustment = new import_ShopifyOrderAdjustment.ShopifyOrderAdjustmentManager(this.connection);
    this.shopifyOrderLineItem = new import_ShopifyOrderLineItem.ShopifyOrderLineItemManager(this.connection);
    this.shopifyOrderRisk = new import_ShopifyOrderRisk.ShopifyOrderRiskManager(this.connection);
    this.shopifyOrderTransaction = new import_ShopifyOrderTransaction.ShopifyOrderTransactionManager(this.connection);
    this.shopifyPriceRule = new import_ShopifyPriceRule.ShopifyPriceRuleManager(this.connection);
    this.shopifyProduct = new import_ShopifyProduct.ShopifyProductManager(this.connection);
    this.shopifyProductImage = new import_ShopifyProductImage.ShopifyProductImageManager(this.connection);
    this.shopifyProductOption = new import_ShopifyProductOption.ShopifyProductOptionManager(this.connection);
    this.shopifyProductVariant = new import_ShopifyProductVariant.ShopifyProductVariantManager(this.connection);
    this.shopifyProvince = new import_ShopifyProvince.ShopifyProvinceManager(this.connection);
    this.shopifyRefund = new import_ShopifyRefund.ShopifyRefundManager(this.connection);
    this.shopifyRefundDuty = new import_ShopifyRefundDuty.ShopifyRefundDutyManager(this.connection);
    this.shopifyRefundLineItem = new import_ShopifyRefundLineItem.ShopifyRefundLineItemManager(this.connection);
    this.shopifyScriptTag = new import_ShopifyScriptTag.ShopifyScriptTagManager(this.connection);
    this.shopifySellingPlan = new import_ShopifySellingPlan.ShopifySellingPlanManager(this.connection);
    this.shopifySellingPlanGroup = new import_ShopifySellingPlanGroup.ShopifySellingPlanGroupManager(this.connection);
    this.shopifySellingPlanGroupProduct = new import_ShopifySellingPlanGroupProduct.ShopifySellingPlanGroupProductManager(this.connection);
    this.shopifySellingPlanGroupProductVariant = new import_ShopifySellingPlanGroupProductVariant.ShopifySellingPlanGroupProductVariantManager(this.connection);
    this.shopifyShippingLine = new import_ShopifyShippingLine.ShopifyShippingLineManager(this.connection);
    this.shopifyShop = new import_ShopifyShop.ShopifyShopManager(this.connection);
    this.shopifySync = new import_ShopifySync.ShopifySyncManager(this.connection);
    this.shopifyTenderTransaction = new import_ShopifyTenderTransaction.ShopifyTenderTransactionManager(this.connection);
    this.shopifyTheme = new import_ShopifyTheme.ShopifyThemeManager(this.connection);
    this.temporyImage = new import_TemporyImage.TemporyImageManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.internal = {
      user: new import_api_client_core.InternalModelManager("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new import_api_client_core.InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyAsset: new import_api_client_core.InternalModelManager("shopifyAsset", this.connection, {
        pluralApiIdentifier: "shopifyAssets",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBulkOperation: new import_api_client_core.InternalModelManager("shopifyBulkOperation", this.connection, {
        pluralApiIdentifier: "shopifyBulkOperations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCarrierService: new import_api_client_core.InternalModelManager("shopifyCarrierService", this.connection, {
        pluralApiIdentifier: "shopifyCarrierServices",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCart: new import_api_client_core.InternalModelManager("shopifyCart", this.connection, {
        pluralApiIdentifier: "shopifyCarts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollect: new import_api_client_core.InternalModelManager("shopifyCollect", this.connection, {
        pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollection: new import_api_client_core.InternalModelManager("shopifyCollection", this.connection, {
        pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCountry: new import_api_client_core.InternalModelManager("shopifyCountry", this.connection, {
        pluralApiIdentifier: "shopifyCountries",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomer: new import_api_client_core.InternalModelManager("shopifyCustomer", this.connection, {
        pluralApiIdentifier: "shopifyCustomers",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomerAddress: new import_api_client_core.InternalModelManager("shopifyCustomerAddress", this.connection, {
        pluralApiIdentifier: "shopifyCustomerAddresses",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomerMergeable: new import_api_client_core.InternalModelManager("shopifyCustomerMergeable", this.connection, {
        pluralApiIdentifier: "shopifyCustomerMergeables",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCustomerPaymentMethod: new import_api_client_core.InternalModelManager("shopifyCustomerPaymentMethod", this.connection, {
        pluralApiIdentifier: "shopifyCustomerPaymentMethods",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscount: new import_api_client_core.InternalModelManager("shopifyDiscount", this.connection, {
        pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscountCode: new import_api_client_core.InternalModelManager("shopifyDiscountCode", this.connection, {
        pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDraftOrder: new import_api_client_core.InternalModelManager("shopifyDraftOrder", this.connection, {
        pluralApiIdentifier: "shopifyDraftOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDraftOrderLineItem: new import_api_client_core.InternalModelManager("shopifyDraftOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyDraftOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDuty: new import_api_client_core.InternalModelManager("shopifyDuty", this.connection, {
        pluralApiIdentifier: "shopifyDuties",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFile: new import_api_client_core.InternalModelManager("shopifyFile", this.connection, {
        pluralApiIdentifier: "shopifyFiles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillment: new import_api_client_core.InternalModelManager("shopifyFulfillment", this.connection, {
        pluralApiIdentifier: "shopifyFulfillments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentEvent: new import_api_client_core.InternalModelManager("shopifyFulfillmentEvent", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentEvents",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentLineItem: new import_api_client_core.InternalModelManager("shopifyFulfillmentLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrder: new import_api_client_core.InternalModelManager("shopifyFulfillmentOrder", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrderLineItem: new import_api_client_core.InternalModelManager("shopifyFulfillmentOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentService: new import_api_client_core.InternalModelManager("shopifyFulfillmentService", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentServices",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new import_api_client_core.InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryItem: new import_api_client_core.InternalModelManager("shopifyInventoryItem", this.connection, {
        pluralApiIdentifier: "shopifyInventoryItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryLevel: new import_api_client_core.InternalModelManager("shopifyInventoryLevel", this.connection, {
        pluralApiIdentifier: "shopifyInventoryLevels",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyLocation: new import_api_client_core.InternalModelManager("shopifyLocation", this.connection, {
        pluralApiIdentifier: "shopifyLocations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrder: new import_api_client_core.InternalModelManager("shopifyOrder", this.connection, {
        pluralApiIdentifier: "shopifyOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderAdjustment: new import_api_client_core.InternalModelManager("shopifyOrderAdjustment", this.connection, {
        pluralApiIdentifier: "shopifyOrderAdjustments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderLineItem: new import_api_client_core.InternalModelManager("shopifyOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderRisk: new import_api_client_core.InternalModelManager("shopifyOrderRisk", this.connection, {
        pluralApiIdentifier: "shopifyOrderRisks",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderTransaction: new import_api_client_core.InternalModelManager("shopifyOrderTransaction", this.connection, {
        pluralApiIdentifier: "shopifyOrderTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPriceRule: new import_api_client_core.InternalModelManager("shopifyPriceRule", this.connection, {
        pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new import_api_client_core.InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductImage: new import_api_client_core.InternalModelManager("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductOption: new import_api_client_core.InternalModelManager("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductVariant: new import_api_client_core.InternalModelManager("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProvince: new import_api_client_core.InternalModelManager("shopifyProvince", this.connection, {
        pluralApiIdentifier: "shopifyProvinces",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefund: new import_api_client_core.InternalModelManager("shopifyRefund", this.connection, {
        pluralApiIdentifier: "shopifyRefunds",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundDuty: new import_api_client_core.InternalModelManager("shopifyRefundDuty", this.connection, {
        pluralApiIdentifier: "shopifyRefundDuties",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundLineItem: new import_api_client_core.InternalModelManager("shopifyRefundLineItem", this.connection, {
        pluralApiIdentifier: "shopifyRefundLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyScriptTag: new import_api_client_core.InternalModelManager("shopifyScriptTag", this.connection, {
        pluralApiIdentifier: "shopifyScriptTags",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlan: new import_api_client_core.InternalModelManager("shopifySellingPlan", this.connection, {
        pluralApiIdentifier: "shopifySellingPlans",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlanGroup: new import_api_client_core.InternalModelManager("shopifySellingPlanGroup", this.connection, {
        pluralApiIdentifier: "shopifySellingPlanGroups",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlanGroupProduct: new import_api_client_core.InternalModelManager("shopifySellingPlanGroupProduct", this.connection, {
        pluralApiIdentifier: "shopifySellingPlanGroupProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySellingPlanGroupProductVariant: new import_api_client_core.InternalModelManager("shopifySellingPlanGroupProductVariant", this.connection, {
        pluralApiIdentifier: "shopifySellingPlanGroupProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShippingLine: new import_api_client_core.InternalModelManager("shopifyShippingLine", this.connection, {
        pluralApiIdentifier: "shopifyShippingLines",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new import_api_client_core.InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new import_api_client_core.InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyTenderTransaction: new import_api_client_core.InternalModelManager("shopifyTenderTransaction", this.connection, {
        pluralApiIdentifier: "shopifyTenderTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyTheme: new import_api_client_core.InternalModelManager("shopifyTheme", this.connection, {
        pluralApiIdentifier: "shopifyThemes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      temporyImage: new import_api_client_core.InternalModelManager("temporyImage", this.connection, {
        pluralApiIdentifier: "temporyImages",
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
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
_a = $modelRelationships;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=Client.js.map
