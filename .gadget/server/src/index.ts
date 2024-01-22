/**
* This is the Gadget server side types library for:
*
*   _               _           _   _           _                 _  __                  _____ 
*  | | ____ _  __ _| |__   __ _| |_(_)      ___| |__   ___  _ __ (_)/ _|_   _     __   _|___ / 
*  | |/ / _` |/ _` | '_ \ / _` | __| |_____/ __| '_ \ / _ \| '_ \| | |_| | | |____\ \ / / |_ \ 
*  |   < (_| | (_| | | | | (_| | |_| |_____\__ \ | | | (_) | |_) | |  _| |_| |_____\ V / ___) |
*  |_|\_\__,_|\__, |_| |_|\__,_|\__|_|     |___/_| |_|\___/| .__/|_|_|  \__, |      \_/ |____/ 
*             |___/                                        |_|          |___/                  
*
* Built for environment `Development` at version 1953
* Framework version: ^0.3.0
* Edit this app here: https://kaghati-shopify-v3.gadget.dev/edit
*/
import type { Client } from "@gadget-client/kaghati-shopify-v3";
import { Logger } from "./AmbientContext";

export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./auth";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./ActionOptions";
/**
 * @internal
 */
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/User";
export * from "./models/Session";
export * from "./models/ShopifyAsset";
export * from "./models/ShopifyBulkOperation";
export * from "./models/ShopifyCarrierService";
export * from "./models/ShopifyCart";
export * from "./models/ShopifyCollect";
export * from "./models/ShopifyCollection";
export * from "./models/ShopifyCountry";
export * from "./models/ShopifyCustomer";
export * from "./models/ShopifyCustomerAddress";
export * from "./models/ShopifyCustomerMergeable";
export * from "./models/ShopifyCustomerPaymentMethod";
export * from "./models/ShopifyDiscount";
export * from "./models/ShopifyDiscountCode";
export * from "./models/ShopifyDraftOrder";
export * from "./models/ShopifyDraftOrderLineItem";
export * from "./models/ShopifyDuty";
export * from "./models/ShopifyFile";
export * from "./models/ShopifyFulfillment";
export * from "./models/ShopifyFulfillmentEvent";
export * from "./models/ShopifyFulfillmentLineItem";
export * from "./models/ShopifyFulfillmentOrder";
export * from "./models/ShopifyFulfillmentOrderLineItem";
export * from "./models/ShopifyFulfillmentService";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyInventoryItem";
export * from "./models/ShopifyInventoryLevel";
export * from "./models/ShopifyLocation";
export * from "./models/ShopifyOrder";
export * from "./models/ShopifyOrderAdjustment";
export * from "./models/ShopifyOrderLineItem";
export * from "./models/ShopifyOrderRisk";
export * from "./models/ShopifyOrderTransaction";
export * from "./models/ShopifyPriceRule";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyProductImage";
export * from "./models/ShopifyProductOption";
export * from "./models/ShopifyProductVariant";
export * from "./models/ShopifyProvince";
export * from "./models/ShopifyRefund";
export * from "./models/ShopifyRefundDuty";
export * from "./models/ShopifyRefundLineItem";
export * from "./models/ShopifyScriptTag";
export * from "./models/ShopifySellingPlan";
export * from "./models/ShopifySellingPlanGroup";
export * from "./models/ShopifySellingPlanGroupProduct";
export * from "./models/ShopifySellingPlanGroupProductVariant";
export * from "./models/ShopifyShippingLine";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/ShopifyTenderTransaction";
export * from "./models/ShopifyTheme";
export * from "./models/TemporyImage";
export * from "./models/ShopifyPickupOrder";
export * from "./models/KhagatiStores";
export * from "./models/IntegrationAPI";
export * from "./models/PinCode";

/**
 * An instance of the Gadget logger
 */
let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api: Client;

/**
 * This is used internally to set the rootLogger.
 * @internal
 */
export const setLogger = (rootLogger: Logger) => {
  Globals.logger = rootLogger;
  logger = rootLogger;
};

/**
 * This is used internally to set the client Instance
 * @internal
 */
export const setApiClient = (client: Client) => {
  api = client;
}

export {
  api, logger
};

/**
 * @internal
 */
  export {
    Globals,
    actionContextLocalStorage
  };
