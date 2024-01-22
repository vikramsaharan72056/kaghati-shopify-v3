import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


export enum GadgetFieldType {
  Any,
  Array,
  BelongsTo,
  Boolean,
  Code,
  Color,
  Computed,
  DateTime,
  Email,
  EncryptedString,
  Enum,
  File,
  HasMany,
  HasManyThrough,
  HasOne,
  ID,
  JSON,
  Money,
  Null,
  Number,
  Object,
  Password,
  RecordState,
  RichText,
  RoleAssignments,
  String,
  URL,
  Vector,
}


/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** Represents the possible values of the Revoked Reason enum. */
export type ShopifyCustomerPaymentMethodRevokedReasonEnum = "AUTHORIZE_NET_GATEWAY_NOT_ENABLED" | "AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD" | "FAILED_TO_UPDATE_CREDIT_CARD" | "MANUALLY_REVOKED" | "STRIPE_API_AUTHENTICATION_ERROR" | "STRIPE_API_INVALID_REQUEST_ERROR" | "STRIPE_GATEWAY_NOT_ENABLED" | "STRIPE_PAYMENT_METHOD_NOT_CARD" | "STRIPE_RETURNED_NO_PAYMENT_METHOD";

/** Represents the possible values of the Shopify State enum. */
export type ShopifyCustomerShopifyStateEnum = "DISABLED" | "INVITED" | "ENABLED" | "DECLINED" | string;

/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "active" | "archived" | "draft";

/** Represents the possible values of the Collection Type enum. */
export type ShopifyCollectionCollectionTypeEnum = "custom" | "smart";

/** Represents the possible values of the Category enum. */
export type ShopifySellingPlanCategoryEnum = "OTHER" | "PRE_ORDER" | "SUBSCRIPTION" | "TRY_BEFORE_YOU_BUY" | string;

/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";

/** Represents the possible values of the Error Code enum. */
export type ShopifyBulkOperationErrorCodeEnum = "access_denied" | "internal_server_error" | "timeout";

/** Represents the possible values of the Status enum. */
export type ShopifyBulkOperationStatusEnum = "canceled" | "canceling" | "completed" | "created" | "expired" | "failed" | "running";

/** Represents the possible values of the Type enum. */
export type ShopifyBulkOperationTypeEnum = "query" | "mutation";

/** Represents the possible values of the Tax Type enum. */
export type ShopifyProvinceTaxTypeEnum = "normal" | "harmonized" | "compounded";

/** Represents the possible values of the Discount Class enum. */
export type ShopifyDiscountDiscountClassEnum = "ORDER" | "PRODUCT" | "SHIPPING" | string;

/** Represents the possible values of the Status enum. */
export type ShopifyDiscountStatusEnum = "ACTIVE" | "EXPIRED" | "SCHEDULED" | string;

/** Represents the possible values of the Carrier Service Type enum. */
export type ShopifyCarrierServiceCarrierServiceTypeEnum = "legacy" | "api";

/** Represents the possible values of the Format enum. */
export type ShopifyCarrierServiceFormatEnum = "json" | "xml";

/** Represents the possible values of the Type enum. */
export type ShopifyFileTypeEnum = "GenericFile" | "MediaImage" | "Video" | string;

/** Represents the possible values of the File Status enum. */
export type ShopifyFileFileStatusEnum = "FAILED" | "PROCESSING" | "READY" | "UPLOADED" | string;

/** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalUserRecord = Scalars["JSONObject"];

/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one shopifyAsset result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyAssetRecord = Scalars["JSONObject"];

/** Represents one shopifyBulkOperation result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyBulkOperationRecord = Scalars["JSONObject"];

/** Represents one shopifyCarrierService result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCarrierServiceRecord = Scalars["JSONObject"];

/** Represents one shopifyCart result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCartRecord = Scalars["JSONObject"];

/** Represents one shopifyCollect result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCollectRecord = Scalars["JSONObject"];

/** Represents one shopifyCollection result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCollectionRecord = Scalars["JSONObject"];

/** Represents one shopifyCountry result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCountryRecord = Scalars["JSONObject"];

/** Represents one shopifyCustomer result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCustomerRecord = Scalars["JSONObject"];

/** Represents one shopifyCustomerAddress result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCustomerAddressRecord = Scalars["JSONObject"];

/** Represents one shopifyCustomerMergeable result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCustomerMergeableRecord = Scalars["JSONObject"];

/** Represents one shopifyCustomerPaymentMethod result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCustomerPaymentMethodRecord = Scalars["JSONObject"];

/** Represents one shopifyDiscount result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDiscountRecord = Scalars["JSONObject"];

/** Represents one shopifyDiscountCode result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDiscountCodeRecord = Scalars["JSONObject"];

/** Represents one shopifyDraftOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDraftOrderRecord = Scalars["JSONObject"];

/** Represents one shopifyDraftOrderLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDraftOrderLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyDuty result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDutyRecord = Scalars["JSONObject"];

/** Represents one shopifyFile result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFileRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillment result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentEvent result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentEventRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentOrderRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentOrderLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentOrderLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentService result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentServiceRecord = Scalars["JSONObject"];

/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];

/** Represents one shopifyInventoryItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyInventoryItemRecord = Scalars["JSONObject"];

/** Represents one shopifyInventoryLevel result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyInventoryLevelRecord = Scalars["JSONObject"];

/** Represents one shopifyLocation result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyLocationRecord = Scalars["JSONObject"];

/** Represents one shopifyOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderAdjustment result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderAdjustmentRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderRisk result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderRiskRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderTransaction result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderTransactionRecord = Scalars["JSONObject"];

/** Represents one shopifyPriceRule result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyPriceRuleRecord = Scalars["JSONObject"];

/** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];

/** Represents one shopifyProductImage result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductImageRecord = Scalars["JSONObject"];

/** Represents one shopifyProductOption result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductOptionRecord = Scalars["JSONObject"];

/** Represents one shopifyProductVariant result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductVariantRecord = Scalars["JSONObject"];

/** Represents one shopifyProvince result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProvinceRecord = Scalars["JSONObject"];

/** Represents one shopifyRefund result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRefundRecord = Scalars["JSONObject"];

/** Represents one shopifyRefundDuty result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRefundDutyRecord = Scalars["JSONObject"];

/** Represents one shopifyRefundLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRefundLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyScriptTag result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyScriptTagRecord = Scalars["JSONObject"];

/** Represents one shopifySellingPlan result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySellingPlanRecord = Scalars["JSONObject"];

/** Represents one shopifySellingPlanGroup result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySellingPlanGroupRecord = Scalars["JSONObject"];

/** Represents one shopifySellingPlanGroupProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySellingPlanGroupProductRecord = Scalars["JSONObject"];

/** Represents one shopifySellingPlanGroupProductVariant result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySellingPlanGroupProductVariantRecord = Scalars["JSONObject"];

/** Represents one shopifyShippingLine result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShippingLineRecord = Scalars["JSONObject"];

/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];

/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];

/** Represents one shopifyTenderTransaction result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyTenderTransactionRecord = Scalars["JSONObject"];

/** Represents one shopifyTheme result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyThemeRecord = Scalars["JSONObject"];



export type UserSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the googleProfileId field. Defaults to ascending (smallest value first). */
  googleProfileId?: SortOrder | null;

  /** Sort the results by the googleImageUrl field. Defaults to ascending (smallest value first). */
  googleImageUrl?: SortOrder | null;

  /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
  firstName?: SortOrder | null;

  /** Sort the results by the lastSignedIn field. Defaults to ascending (smallest value first). */
  lastSignedIn?: SortOrder | null;

  /** Sort the results by the emailVerified field. Defaults to ascending (smallest value first). */
  emailVerified?: SortOrder | null;

  /** Sort the results by the resetPasswordTokenExpiration field. Defaults to ascending (smallest value first). */
  resetPasswordTokenExpiration?: SortOrder | null;

  /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
  lastName?: SortOrder | null;

  /** Sort the results by the emailVerificationToken field. Defaults to ascending (smallest value first). */
  emailVerificationToken?: SortOrder | null;

  /** Sort the results by the resetPasswordToken field. Defaults to ascending (smallest value first). */
  resetPasswordToken?: SortOrder | null;

  /** Sort the results by the emailVerificationTokenExpiration field. Defaults to ascending (smallest value first). */
  emailVerificationTokenExpiration?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;
};



export type UserFilter = {

  AND?: (UserFilter | null)[];

  OR?: (UserFilter | null)[];

  NOT?: (UserFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  googleProfileId?: StringFilter | null;

  googleImageUrl?: StringFilter | null;

  firstName?: StringFilter | null;

  lastSignedIn?: DateTimeFilter | null;

  emailVerified?: BooleanFilter | null;

  resetPasswordTokenExpiration?: DateTimeFilter | null;

  lastName?: StringFilter | null;

  emailVerificationToken?: StringFilter | null;

  resetPasswordToken?: StringFilter | null;

  emailVerificationTokenExpiration?: DateTimeFilter | null;

  email?: StringFilter | null;
};



export type IDFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;

  notEquals?: (Scalars['GadgetID'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['GadgetID'] | null) | null)[];

  notIn?: ((Scalars['GadgetID'] | null) | null)[];

  lessThan?: (Scalars['GadgetID'] | null) | null;

  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;

  greaterThan?: (Scalars['GadgetID'] | null) | null;

  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export type DateTimeFilter = {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;
};



export type StringFilter = {

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];

  notIn?: ((Scalars['String'] | null) | null)[];

  lessThan?: (Scalars['String'] | null) | null;

  lessThanOrEqual?: (Scalars['String'] | null) | null;

  greaterThan?: (Scalars['String'] | null) | null;

  greaterThanOrEqual?: (Scalars['String'] | null) | null;

  startsWith?: (Scalars['String'] | null) | null;
};



export type BooleanFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['Boolean'] | null) | null;

  notEquals?: (Scalars['Boolean'] | null) | null;
};



export type ShopifyRefundLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the restockType field. Defaults to ascending (smallest value first). */
  restockType?: SortOrder | null;

  /** Sort the results by the subtotal field. Defaults to ascending (smallest value first). */
  subtotal?: SortOrder | null;

  /** Sort the results by the subtotalSet field. Defaults to ascending (smallest value first). */
  subtotalSet?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the totalTaxSet field. Defaults to ascending (smallest value first). */
  totalTaxSet?: SortOrder | null;
};



export type ShopifyRefundLineItemFilter = {

  AND?: (ShopifyRefundLineItemFilter | null)[];

  OR?: (ShopifyRefundLineItemFilter | null)[];

  NOT?: (ShopifyRefundLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  quantity?: FloatFilter | null;

  restockType?: StringFilter | null;

  subtotal?: FloatFilter | null;

  subtotalSet?: JSONFilter | null;

  totalTax?: FloatFilter | null;

  totalTaxSet?: JSONFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type FloatFilter = {

  equals?: (Scalars['Float'] | null) | null;

  notEquals?: (Scalars['Float'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Float'] | null) | null)[];

  notIn?: ((Scalars['Float'] | null) | null)[];

  lessThan?: (Scalars['Float'] | null) | null;

  lessThanOrEqual?: (Scalars['Float'] | null) | null;

  greaterThan?: (Scalars['Float'] | null) | null;

  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export type JSONFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['JSON'] | null) | null;

  in?: ((Scalars['JSON'] | null) | null)[];

  notIn?: ((Scalars['JSON'] | null) | null)[];

  notEquals?: (Scalars['JSON'] | null) | null;

  matches?: (Scalars['JSON'] | null) | null;
};



export type ShopifyRefundDutySort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amountSet field. Defaults to ascending (smallest value first). */
  amountSet?: SortOrder | null;
};



export type ShopifyRefundDutyFilter = {

  AND?: (ShopifyRefundDutyFilter | null)[];

  OR?: (ShopifyRefundDutyFilter | null)[];

  NOT?: (ShopifyRefundDutyFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amountSet?: JSONFilter | null;

  originalDuty?: IDFilter | null;

  originalDutyId?: IDFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderAdjustmentSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the amountSet field. Defaults to ascending (smallest value first). */
  amountSet?: SortOrder | null;

  /** Sort the results by the kind field. Defaults to ascending (smallest value first). */
  kind?: SortOrder | null;

  /** Sort the results by the reason field. Defaults to ascending (smallest value first). */
  reason?: SortOrder | null;

  /** Sort the results by the taxAmount field. Defaults to ascending (smallest value first). */
  taxAmount?: SortOrder | null;

  /** Sort the results by the taxAmountSet field. Defaults to ascending (smallest value first). */
  taxAmountSet?: SortOrder | null;
};



export type ShopifyOrderAdjustmentFilter = {

  AND?: (ShopifyOrderAdjustmentFilter | null)[];

  OR?: (ShopifyOrderAdjustmentFilter | null)[];

  NOT?: (ShopifyOrderAdjustmentFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  amountSet?: JSONFilter | null;

  kind?: StringFilter | null;

  reason?: StringFilter | null;

  taxAmount?: StringFilter | null;

  taxAmountSet?: JSONFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderRiskSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the causeCancel field. Defaults to ascending (smallest value first). */
  causeCancel?: SortOrder | null;

  /** Sort the results by the display field. Defaults to ascending (smallest value first). */
  display?: SortOrder | null;

  /** Sort the results by the merchantMessage field. Defaults to ascending (smallest value first). */
  merchantMessage?: SortOrder | null;

  /** Sort the results by the message field. Defaults to ascending (smallest value first). */
  message?: SortOrder | null;

  /** Sort the results by the recommendation field. Defaults to ascending (smallest value first). */
  recommendation?: SortOrder | null;

  /** Sort the results by the score field. Defaults to ascending (smallest value first). */
  score?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;
};



export type ShopifyOrderRiskFilter = {

  AND?: (ShopifyOrderRiskFilter | null)[];

  OR?: (ShopifyOrderRiskFilter | null)[];

  NOT?: (ShopifyOrderRiskFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  causeCancel?: BooleanFilter | null;

  display?: BooleanFilter | null;

  merchantMessage?: StringFilter | null;

  message?: StringFilter | null;

  recommendation?: StringFilter | null;

  score?: StringFilter | null;

  source?: StringFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyRefundSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the restock field. Defaults to ascending (smallest value first). */
  restock?: SortOrder | null;
};



export type ShopifyRefundFilter = {

  AND?: (ShopifyRefundFilter | null)[];

  OR?: (ShopifyRefundFilter | null)[];

  NOT?: (ShopifyRefundFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  note?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  restock?: BooleanFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderTransactionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the authorization field. Defaults to ascending (smallest value first). */
  authorization?: SortOrder | null;

  /** Sort the results by the authorizationExpiresAt field. Defaults to ascending (smallest value first). */
  authorizationExpiresAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the errorCode field. Defaults to ascending (smallest value first). */
  errorCode?: SortOrder | null;

  /** Sort the results by the extendedAuthorizationAttributes field. Defaults to ascending (smallest value first). */
  extendedAuthorizationAttributes?: SortOrder | null;

  /** Sort the results by the gateway field. Defaults to ascending (smallest value first). */
  gateway?: SortOrder | null;

  /** Sort the results by the kind field. Defaults to ascending (smallest value first). */
  kind?: SortOrder | null;

  /** Sort the results by the message field. Defaults to ascending (smallest value first). */
  message?: SortOrder | null;

  /** Sort the results by the paymentDetails field. Defaults to ascending (smallest value first). */
  paymentDetails?: SortOrder | null;

  /** Sort the results by the paymentId field. Defaults to ascending (smallest value first). */
  paymentId?: SortOrder | null;

  /** Sort the results by the paymentsRefundAttributes field. Defaults to ascending (smallest value first). */
  paymentsRefundAttributes?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the receipt field. Defaults to ascending (smallest value first). */
  receipt?: SortOrder | null;

  /** Sort the results by the sourceName field. Defaults to ascending (smallest value first). */
  sourceName?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;

  /** Sort the results by the totalUnsettledSet field. Defaults to ascending (smallest value first). */
  totalUnsettledSet?: SortOrder | null;
};



export type ShopifyOrderTransactionFilter = {

  AND?: (ShopifyOrderTransactionFilter | null)[];

  OR?: (ShopifyOrderTransactionFilter | null)[];

  NOT?: (ShopifyOrderTransactionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  authorization?: StringFilter | null;

  authorizationExpiresAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  errorCode?: StringFilter | null;

  extendedAuthorizationAttributes?: JSONFilter | null;

  gateway?: StringFilter | null;

  kind?: StringFilter | null;

  message?: StringFilter | null;

  paymentDetails?: JSONFilter | null;

  paymentId?: StringFilter | null;

  paymentsRefundAttributes?: JSONFilter | null;

  processedAt?: DateTimeFilter | null;

  receipt?: JSONFilter | null;

  sourceName?: StringFilter | null;

  status?: StringFilter | null;

  test?: BooleanFilter | null;

  totalUnsettledSet?: JSONFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  parent?: IDFilter | null;

  parentId?: IDFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentEventSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the estimatedDeliveryAt field. Defaults to ascending (smallest value first). */
  estimatedDeliveryAt?: SortOrder | null;

  /** Sort the results by the happenedAt field. Defaults to ascending (smallest value first). */
  happenedAt?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the message field. Defaults to ascending (smallest value first). */
  message?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyFulfillmentEventFilter = {

  AND?: (ShopifyFulfillmentEventFilter | null)[];

  OR?: (ShopifyFulfillmentEventFilter | null)[];

  NOT?: (ShopifyFulfillmentEventFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  address1?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  estimatedDeliveryAt?: DateTimeFilter | null;

  happenedAt?: DateTimeFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  message?: StringFilter | null;

  province?: StringFilter | null;

  status?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  zipCode?: StringFilter | null;

  fulfillment?: IDFilter | null;

  fulfillmentId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the originalTotalSet field. Defaults to ascending (smallest value first). */
  originalTotalSet?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the discountedTotalSet field. Defaults to ascending (smallest value first). */
  discountedTotalSet?: SortOrder | null;
};



export type ShopifyFulfillmentLineItemFilter = {

  AND?: (ShopifyFulfillmentLineItemFilter | null)[];

  OR?: (ShopifyFulfillmentLineItemFilter | null)[];

  NOT?: (ShopifyFulfillmentLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  originalTotalSet?: JSONFilter | null;

  quantity?: FloatFilter | null;

  discountedTotalSet?: JSONFilter | null;

  fulfillment?: IDFilter | null;

  fulfillmentId?: IDFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the notifyCustomer field. Defaults to ascending (smallest value first). */
  notifyCustomer?: SortOrder | null;

  /** Sort the results by the originAddress field. Defaults to ascending (smallest value first). */
  originAddress?: SortOrder | null;

  /** Sort the results by the receipt field. Defaults to ascending (smallest value first). */
  receipt?: SortOrder | null;

  /** Sort the results by the service field. Defaults to ascending (smallest value first). */
  service?: SortOrder | null;

  /** Sort the results by the shipmentStatus field. Defaults to ascending (smallest value first). */
  shipmentStatus?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the trackingCompany field. Defaults to ascending (smallest value first). */
  trackingCompany?: SortOrder | null;

  /** Sort the results by the trackingNumbers field. Defaults to ascending (smallest value first). */
  trackingNumbers?: SortOrder | null;

  /** Sort the results by the trackingUrls field. Defaults to ascending (smallest value first). */
  trackingUrls?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the variantInventoryManagement field. Defaults to ascending (smallest value first). */
  variantInventoryManagement?: SortOrder | null;
};



export type ShopifyFulfillmentFilter = {

  AND?: (ShopifyFulfillmentFilter | null)[];

  OR?: (ShopifyFulfillmentFilter | null)[];

  NOT?: (ShopifyFulfillmentFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  name?: StringFilter | null;

  notifyCustomer?: BooleanFilter | null;

  originAddress?: JSONFilter | null;

  receipt?: JSONFilter | null;

  service?: StringFilter | null;

  shipmentStatus?: StringFilter | null;

  status?: StringFilter | null;

  trackingCompany?: StringFilter | null;

  trackingNumbers?: JSONFilter | null;

  trackingUrls?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  variantInventoryManagement?: StringFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyTenderTransactionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the paymentDetails field. Defaults to ascending (smallest value first). */
  paymentDetails?: SortOrder | null;

  /** Sort the results by the paymentMethod field. Defaults to ascending (smallest value first). */
  paymentMethod?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the remoteReference field. Defaults to ascending (smallest value first). */
  remoteReference?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;
};



export type ShopifyTenderTransactionFilter = {

  AND?: (ShopifyTenderTransactionFilter | null)[];

  OR?: (ShopifyTenderTransactionFilter | null)[];

  NOT?: (ShopifyTenderTransactionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  currency?: StringFilter | null;

  paymentDetails?: JSONFilter | null;

  paymentMethod?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  remoteReference?: StringFilter | null;

  test?: BooleanFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentOrderLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the remainingQuantity field. Defaults to ascending (smallest value first). */
  remainingQuantity?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;
};



export type ShopifyFulfillmentOrderLineItemFilter = {

  AND?: (ShopifyFulfillmentOrderLineItemFilter | null)[];

  OR?: (ShopifyFulfillmentOrderLineItemFilter | null)[];

  NOT?: (ShopifyFulfillmentOrderLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  remainingQuantity?: FloatFilter | null;

  quantity?: FloatFilter | null;

  fulfillmentOrder?: IDFilter | null;

  fulfillmentOrderId?: IDFilter | null;

  inventoryItem?: IDFilter | null;

  inventoryItemId?: IDFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDraftOrderLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appliedDiscount field. Defaults to ascending (smallest value first). */
  appliedDiscount?: SortOrder | null;

  /** Sort the results by the fulfillmentService field. Defaults to ascending (smallest value first). */
  fulfillmentService?: SortOrder | null;

  /** Sort the results by the giftCard field. Defaults to ascending (smallest value first). */
  giftCard?: SortOrder | null;

  /** Sort the results by the grams field. Defaults to ascending (smallest value first). */
  grams?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the properties field. Defaults to ascending (smallest value first). */
  properties?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the variantTitle field. Defaults to ascending (smallest value first). */
  variantTitle?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyDraftOrderLineItemFilter = {

  AND?: (ShopifyDraftOrderLineItemFilter | null)[];

  OR?: (ShopifyDraftOrderLineItemFilter | null)[];

  NOT?: (ShopifyDraftOrderLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appliedDiscount?: JSONFilter | null;

  fulfillmentService?: StringFilter | null;

  giftCard?: BooleanFilter | null;

  grams?: FloatFilter | null;

  name?: StringFilter | null;

  price?: StringFilter | null;

  properties?: JSONFilter | null;

  quantity?: FloatFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  taxLines?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  variantTitle?: StringFilter | null;

  vendor?: StringFilter | null;

  draftOrder?: IDFilter | null;

  draftOrderId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  variant?: IDFilter | null;

  variantId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCustomerAddressSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the company field. Defaults to ascending (smallest value first). */
  company?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
  firstName?: SortOrder | null;

  /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
  lastName?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyCustomerAddressFilter = {

  AND?: (ShopifyCustomerAddressFilter | null)[];

  OR?: (ShopifyCustomerAddressFilter | null)[];

  NOT?: (ShopifyCustomerAddressFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  company?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  firstName?: StringFilter | null;

  lastName?: StringFilter | null;

  name?: StringFilter | null;

  phone?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  zipCode?: StringFilter | null;

  shopifyCustomer?: IDFilter | null;

  shopifyCustomerId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDraftOrderSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appliedDiscount field. Defaults to ascending (smallest value first). */
  appliedDiscount?: SortOrder | null;

  /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
  billingAddress?: SortOrder | null;

  /** Sort the results by the completedAt field. Defaults to ascending (smallest value first). */
  completedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the invoiceSentAt field. Defaults to ascending (smallest value first). */
  invoiceSentAt?: SortOrder | null;

  /** Sort the results by the invoiceUrl field. Defaults to ascending (smallest value first). */
  invoiceUrl?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the noteAttributes field. Defaults to ascending (smallest value first). */
  noteAttributes?: SortOrder | null;

  /** Sort the results by the order field. Defaults to ascending (smallest value first). */
  order?: SortOrder | null;

  /** Sort the results by the poNumber field. Defaults to ascending (smallest value first). */
  poNumber?: SortOrder | null;

  /** Sort the results by the shippingAddress field. Defaults to ascending (smallest value first). */
  shippingAddress?: SortOrder | null;

  /** Sort the results by the shippingLine field. Defaults to ascending (smallest value first). */
  shippingLine?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the subtotalPrice field. Defaults to ascending (smallest value first). */
  subtotalPrice?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
  taxExempt?: SortOrder | null;

  /** Sort the results by the taxExemptions field. Defaults to ascending (smallest value first). */
  taxExemptions?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
  totalPrice?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyDraftOrderFilter = {

  AND?: (ShopifyDraftOrderFilter | null)[];

  OR?: (ShopifyDraftOrderFilter | null)[];

  NOT?: (ShopifyDraftOrderFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appliedDiscount?: JSONFilter | null;

  billingAddress?: JSONFilter | null;

  completedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  email?: StringFilter | null;

  invoiceSentAt?: DateTimeFilter | null;

  invoiceUrl?: StringFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  order?: JSONFilter | null;

  poNumber?: StringFilter | null;

  shippingAddress?: JSONFilter | null;

  shippingLine?: JSONFilter | null;

  status?: StringFilter | null;

  subtotalPrice?: StringFilter | null;

  tags?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  taxExemptions?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  totalPrice?: StringFilter | null;

  totalTax?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  customer?: IDFilter | null;

  customerId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the additionalFees field. Defaults to ascending (smallest value first). */
  additionalFees?: SortOrder | null;

  /** Sort the results by the cancellation field. Defaults to ascending (smallest value first). */
  cancellation?: SortOrder | null;

  /** Sort the results by the shopifyProtect field. Defaults to ascending (smallest value first). */
  shopifyProtect?: SortOrder | null;

  /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
  billingAddress?: SortOrder | null;

  /** Sort the results by the browserIp field. Defaults to ascending (smallest value first). */
  browserIp?: SortOrder | null;

  /** Sort the results by the buyerAcceptsMarketing field. Defaults to ascending (smallest value first). */
  buyerAcceptsMarketing?: SortOrder | null;

  /** Sort the results by the cancelReason field. Defaults to ascending (smallest value first). */
  cancelReason?: SortOrder | null;

  /** Sort the results by the cancelledAt field. Defaults to ascending (smallest value first). */
  cancelledAt?: SortOrder | null;

  /** Sort the results by the cartToken field. Defaults to ascending (smallest value first). */
  cartToken?: SortOrder | null;

  /** Sort the results by the checkoutToken field. Defaults to ascending (smallest value first). */
  checkoutToken?: SortOrder | null;

  /** Sort the results by the clientDetails field. Defaults to ascending (smallest value first). */
  clientDetails?: SortOrder | null;

  /** Sort the results by the closedAt field. Defaults to ascending (smallest value first). */
  closedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the currentSubtotalPrice field. Defaults to ascending (smallest value first). */
  currentSubtotalPrice?: SortOrder | null;

  /** Sort the results by the currentSubtotalPriceSet field. Defaults to ascending (smallest value first). */
  currentSubtotalPriceSet?: SortOrder | null;

  /** Sort the results by the currentTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
  currentTotalAdditionalFeesSet?: SortOrder | null;

  /** Sort the results by the currentTotalDiscounts field. Defaults to ascending (smallest value first). */
  currentTotalDiscounts?: SortOrder | null;

  /** Sort the results by the currentTotalDiscountsSet field. Defaults to ascending (smallest value first). */
  currentTotalDiscountsSet?: SortOrder | null;

  /** Sort the results by the currentTotalDutiesSet field. Defaults to ascending (smallest value first). */
  currentTotalDutiesSet?: SortOrder | null;

  /** Sort the results by the currentTotalPrice field. Defaults to ascending (smallest value first). */
  currentTotalPrice?: SortOrder | null;

  /** Sort the results by the currentTotalPriceSet field. Defaults to ascending (smallest value first). */
  currentTotalPriceSet?: SortOrder | null;

  /** Sort the results by the currentTotalTax field. Defaults to ascending (smallest value first). */
  currentTotalTax?: SortOrder | null;

  /** Sort the results by the currentTotalTaxSet field. Defaults to ascending (smallest value first). */
  currentTotalTaxSet?: SortOrder | null;

  /** Sort the results by the customerLocale field. Defaults to ascending (smallest value first). */
  customerLocale?: SortOrder | null;

  /** Sort the results by the discountApplications field. Defaults to ascending (smallest value first). */
  discountApplications?: SortOrder | null;

  /** Sort the results by the discountCodes field. Defaults to ascending (smallest value first). */
  discountCodes?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the estimatedTaxes field. Defaults to ascending (smallest value first). */
  estimatedTaxes?: SortOrder | null;

  /** Sort the results by the financialStatus field. Defaults to ascending (smallest value first). */
  financialStatus?: SortOrder | null;

  /** Sort the results by the fulfillmentStatus field. Defaults to ascending (smallest value first). */
  fulfillmentStatus?: SortOrder | null;

  /** Sort the results by the landingSite field. Defaults to ascending (smallest value first). */
  landingSite?: SortOrder | null;

  /** Sort the results by the merchantOfRecordAppId field. Defaults to ascending (smallest value first). */
  merchantOfRecordAppId?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the noteAttributes field. Defaults to ascending (smallest value first). */
  noteAttributes?: SortOrder | null;

  /** Sort the results by the number field. Defaults to ascending (smallest value first). */
  number?: SortOrder | null;

  /** Sort the results by the orderNumber field. Defaults to ascending (smallest value first). */
  orderNumber?: SortOrder | null;

  /** Sort the results by the orderStatusUrl field. Defaults to ascending (smallest value first). */
  orderStatusUrl?: SortOrder | null;

  /** Sort the results by the originalTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
  originalTotalAdditionalFeesSet?: SortOrder | null;

  /** Sort the results by the originalTotalDutiesSet field. Defaults to ascending (smallest value first). */
  originalTotalDutiesSet?: SortOrder | null;

  /** Sort the results by the paymentGatewayNames field. Defaults to ascending (smallest value first). */
  paymentGatewayNames?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the poNumber field. Defaults to ascending (smallest value first). */
  poNumber?: SortOrder | null;

  /** Sort the results by the presentmentCurrency field. Defaults to ascending (smallest value first). */
  presentmentCurrency?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the referringSite field. Defaults to ascending (smallest value first). */
  referringSite?: SortOrder | null;

  /** Sort the results by the shippingAddress field. Defaults to ascending (smallest value first). */
  shippingAddress?: SortOrder | null;

  /** Sort the results by the sourceIdentifier field. Defaults to ascending (smallest value first). */
  sourceIdentifier?: SortOrder | null;

  /** Sort the results by the sourceName field. Defaults to ascending (smallest value first). */
  sourceName?: SortOrder | null;

  /** Sort the results by the sourceUrl field. Defaults to ascending (smallest value first). */
  sourceUrl?: SortOrder | null;

  /** Sort the results by the subtotalPrice field. Defaults to ascending (smallest value first). */
  subtotalPrice?: SortOrder | null;

  /** Sort the results by the subtotalPriceSet field. Defaults to ascending (smallest value first). */
  subtotalPriceSet?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
  taxExempt?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;

  /** Sort the results by the token field. Defaults to ascending (smallest value first). */
  token?: SortOrder | null;

  /** Sort the results by the totalDiscounts field. Defaults to ascending (smallest value first). */
  totalDiscounts?: SortOrder | null;

  /** Sort the results by the totalDiscountsSet field. Defaults to ascending (smallest value first). */
  totalDiscountsSet?: SortOrder | null;

  /** Sort the results by the totalLineItemsPrice field. Defaults to ascending (smallest value first). */
  totalLineItemsPrice?: SortOrder | null;

  /** Sort the results by the totalLineItemsPriceSet field. Defaults to ascending (smallest value first). */
  totalLineItemsPriceSet?: SortOrder | null;

  /** Sort the results by the totalOutstanding field. Defaults to ascending (smallest value first). */
  totalOutstanding?: SortOrder | null;

  /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
  totalPrice?: SortOrder | null;

  /** Sort the results by the totalPriceSet field. Defaults to ascending (smallest value first). */
  totalPriceSet?: SortOrder | null;

  /** Sort the results by the totalShippingPriceSet field. Defaults to ascending (smallest value first). */
  totalShippingPriceSet?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the totalTaxSet field. Defaults to ascending (smallest value first). */
  totalTaxSet?: SortOrder | null;

  /** Sort the results by the totalTipReceived field. Defaults to ascending (smallest value first). */
  totalTipReceived?: SortOrder | null;

  /** Sort the results by the totalWeight field. Defaults to ascending (smallest value first). */
  totalWeight?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyOrderFilter = {

  AND?: (ShopifyOrderFilter | null)[];

  OR?: (ShopifyOrderFilter | null)[];

  NOT?: (ShopifyOrderFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  additionalFees?: JSONFilter | null;

  cancellation?: JSONFilter | null;

  shopifyProtect?: JSONFilter | null;

  billingAddress?: JSONFilter | null;

  browserIp?: StringFilter | null;

  buyerAcceptsMarketing?: BooleanFilter | null;

  cancelReason?: StringFilter | null;

  cancelledAt?: DateTimeFilter | null;

  cartToken?: StringFilter | null;

  checkoutToken?: StringFilter | null;

  clientDetails?: JSONFilter | null;

  closedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  currentSubtotalPrice?: StringFilter | null;

  currentSubtotalPriceSet?: JSONFilter | null;

  currentTotalAdditionalFeesSet?: JSONFilter | null;

  currentTotalDiscounts?: StringFilter | null;

  currentTotalDiscountsSet?: JSONFilter | null;

  currentTotalDutiesSet?: JSONFilter | null;

  currentTotalPrice?: StringFilter | null;

  currentTotalPriceSet?: JSONFilter | null;

  currentTotalTax?: StringFilter | null;

  currentTotalTaxSet?: JSONFilter | null;

  customerLocale?: StringFilter | null;

  discountApplications?: JSONFilter | null;

  discountCodes?: JSONFilter | null;

  email?: StringFilter | null;

  estimatedTaxes?: BooleanFilter | null;

  financialStatus?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  landingSite?: StringFilter | null;

  merchantOfRecordAppId?: StringFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  number?: FloatFilter | null;

  orderNumber?: FloatFilter | null;

  orderStatusUrl?: StringFilter | null;

  originalTotalAdditionalFeesSet?: JSONFilter | null;

  originalTotalDutiesSet?: JSONFilter | null;

  paymentGatewayNames?: JSONFilter | null;

  phone?: StringFilter | null;

  poNumber?: StringFilter | null;

  presentmentCurrency?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  referringSite?: StringFilter | null;

  shippingAddress?: JSONFilter | null;

  sourceIdentifier?: StringFilter | null;

  sourceName?: StringFilter | null;

  sourceUrl?: StringFilter | null;

  subtotalPrice?: StringFilter | null;

  subtotalPriceSet?: JSONFilter | null;

  tags?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  taxLines?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  test?: BooleanFilter | null;

  token?: StringFilter | null;

  totalDiscounts?: StringFilter | null;

  totalDiscountsSet?: JSONFilter | null;

  totalLineItemsPrice?: StringFilter | null;

  totalLineItemsPriceSet?: JSONFilter | null;

  totalOutstanding?: StringFilter | null;

  totalPrice?: StringFilter | null;

  totalPriceSet?: JSONFilter | null;

  totalShippingPriceSet?: JSONFilter | null;

  totalTax?: StringFilter | null;

  totalTaxSet?: JSONFilter | null;

  totalTipReceived?: StringFilter | null;

  totalWeight?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  customer?: IDFilter | null;

  customerId?: IDFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCustomerPaymentMethodSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the adminGraphqlApiId field. Defaults to ascending (smallest value first). */
  adminGraphqlApiId?: SortOrder | null;

  /** Sort the results by the instrument field. Defaults to ascending (smallest value first). */
  instrument?: SortOrder | null;

  /** Sort the results by the revokedAt field. Defaults to ascending (smallest value first). */
  revokedAt?: SortOrder | null;

  /** Sort the results by the revokedReason field. Defaults to ascending (smallest value first). */
  revokedReason?: SortOrder | null;
};



export type ShopifyCustomerPaymentMethodFilter = {

  AND?: (ShopifyCustomerPaymentMethodFilter | null)[];

  OR?: (ShopifyCustomerPaymentMethodFilter | null)[];

  NOT?: (ShopifyCustomerPaymentMethodFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  adminGraphqlApiId?: StringFilter | null;

  instrument?: JSONFilter | null;

  revokedAt?: DateTimeFilter | null;

  revokedReason?: SingleEnumFilter | null;

  customer?: IDFilter | null;

  customerId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type SingleEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];
};



export type ShopifyOrderLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the attributedStaffs field. Defaults to ascending (smallest value first). */
  attributedStaffs?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the discountAllocations field. Defaults to ascending (smallest value first). */
  discountAllocations?: SortOrder | null;

  /** Sort the results by the giftCard field. Defaults to ascending (smallest value first). */
  giftCard?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the priceSet field. Defaults to ascending (smallest value first). */
  priceSet?: SortOrder | null;

  /** Sort the results by the properties field. Defaults to ascending (smallest value first). */
  properties?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the totalDiscount field. Defaults to ascending (smallest value first). */
  totalDiscount?: SortOrder | null;

  /** Sort the results by the totalDiscountSet field. Defaults to ascending (smallest value first). */
  totalDiscountSet?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the variantTitle field. Defaults to ascending (smallest value first). */
  variantTitle?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyOrderLineItemFilter = {

  AND?: (ShopifyOrderLineItemFilter | null)[];

  OR?: (ShopifyOrderLineItemFilter | null)[];

  NOT?: (ShopifyOrderLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  attributedStaffs?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  discountAllocations?: JSONFilter | null;

  giftCard?: BooleanFilter | null;

  name?: StringFilter | null;

  price?: StringFilter | null;

  priceSet?: JSONFilter | null;

  properties?: JSONFilter | null;

  quantity?: FloatFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  taxLines?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  totalDiscount?: StringFilter | null;

  totalDiscountSet?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  variantTitle?: StringFilter | null;

  vendor?: StringFilter | null;

  originLocation?: IDFilter | null;

  originLocationId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  variant?: IDFilter | null;

  variantId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProductVariantSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the barcode field. Defaults to ascending (smallest value first). */
  barcode?: SortOrder | null;

  /** Sort the results by the compareAtPrice field. Defaults to ascending (smallest value first). */
  compareAtPrice?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the fulfillmentService field. Defaults to ascending (smallest value first). */
  fulfillmentService?: SortOrder | null;

  /** Sort the results by the grams field. Defaults to ascending (smallest value first). */
  grams?: SortOrder | null;

  /** Sort the results by the inventoryManagement field. Defaults to ascending (smallest value first). */
  inventoryManagement?: SortOrder | null;

  /** Sort the results by the inventoryPolicy field. Defaults to ascending (smallest value first). */
  inventoryPolicy?: SortOrder | null;

  /** Sort the results by the inventoryQuantity field. Defaults to ascending (smallest value first). */
  inventoryQuantity?: SortOrder | null;

  /** Sort the results by the inventoryQuantityAdjustment field. Defaults to ascending (smallest value first). */
  inventoryQuantityAdjustment?: SortOrder | null;

  /** Sort the results by the oldInventoryQuantity field. Defaults to ascending (smallest value first). */
  oldInventoryQuantity?: SortOrder | null;

  /** Sort the results by the option1 field. Defaults to ascending (smallest value first). */
  option1?: SortOrder | null;

  /** Sort the results by the option2 field. Defaults to ascending (smallest value first). */
  option2?: SortOrder | null;

  /** Sort the results by the option3 field. Defaults to ascending (smallest value first). */
  option3?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the presentmentPrices field. Defaults to ascending (smallest value first). */
  presentmentPrices?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxCode field. Defaults to ascending (smallest value first). */
  taxCode?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weight field. Defaults to ascending (smallest value first). */
  weight?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;
};



export type ShopifyProductVariantFilter = {

  AND?: (ShopifyProductVariantFilter | null)[];

  OR?: (ShopifyProductVariantFilter | null)[];

  NOT?: (ShopifyProductVariantFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  barcode?: StringFilter | null;

  compareAtPrice?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  fulfillmentService?: StringFilter | null;

  grams?: FloatFilter | null;

  inventoryManagement?: StringFilter | null;

  inventoryPolicy?: StringFilter | null;

  inventoryQuantity?: FloatFilter | null;

  inventoryQuantityAdjustment?: FloatFilter | null;

  oldInventoryQuantity?: FloatFilter | null;

  option1?: StringFilter | null;

  option2?: StringFilter | null;

  option3?: StringFilter | null;

  position?: FloatFilter | null;

  presentmentPrices?: JSONFilter | null;

  price?: StringFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  taxCode?: StringFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weight?: FloatFilter | null;

  weightUnit?: StringFilter | null;

  inventoryItem?: IDFilter | null;

  inventoryItemId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  productImage?: IDFilter | null;

  productImageId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProductImageSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
  alt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the height field. Defaults to ascending (smallest value first). */
  height?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the width field. Defaults to ascending (smallest value first). */
  width?: SortOrder | null;
};



export type ShopifyProductImageFilter = {

  AND?: (ShopifyProductImageFilter | null)[];

  OR?: (ShopifyProductImageFilter | null)[];

  NOT?: (ShopifyProductImageFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  alt?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  height?: FloatFilter | null;

  position?: FloatFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  width?: FloatFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProductOptionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the values field. Defaults to ascending (smallest value first). */
  values?: SortOrder | null;
};



export type ShopifyProductOptionFilter = {

  AND?: (ShopifyProductOptionFilter | null)[];

  OR?: (ShopifyProductOptionFilter | null)[];

  NOT?: (ShopifyProductOptionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  name?: StringFilter | null;

  position?: FloatFilter | null;

  values?: JSONFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySellingPlanGroupProductVariantSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;
};



export type ShopifySellingPlanGroupProductVariantFilter = {

  AND?: (ShopifySellingPlanGroupProductVariantFilter | null)[];

  OR?: (ShopifySellingPlanGroupProductVariantFilter | null)[];

  NOT?: (ShopifySellingPlanGroupProductVariantFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  productVariant?: IDFilter | null;

  productVariantId?: IDFilter | null;

  sellingPlanGroup?: IDFilter | null;

  sellingPlanGroupId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type StateFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  inState?: (Scalars['String'] | null) | null;
};



export type ShopifySellingPlanGroupProductSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;
};



export type ShopifySellingPlanGroupProductFilter = {

  AND?: (ShopifySellingPlanGroupProductFilter | null)[];

  OR?: (ShopifySellingPlanGroupProductFilter | null)[];

  NOT?: (ShopifySellingPlanGroupProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  sellingPlanGroup?: IDFilter | null;

  sellingPlanGroupId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySellingPlanSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the billingPolicy field. Defaults to ascending (smallest value first). */
  billingPolicy?: SortOrder | null;

  /** Sort the results by the category field. Defaults to ascending (smallest value first). */
  category?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the deliveryPolicy field. Defaults to ascending (smallest value first). */
  deliveryPolicy?: SortOrder | null;

  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: SortOrder | null;

  /** Sort the results by the inventoryPolicy field. Defaults to ascending (smallest value first). */
  inventoryPolicy?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the options field. Defaults to ascending (smallest value first). */
  options?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the pricingPolicies field. Defaults to ascending (smallest value first). */
  pricingPolicies?: SortOrder | null;
};



export type ShopifySellingPlanFilter = {

  AND?: (ShopifySellingPlanFilter | null)[];

  OR?: (ShopifySellingPlanFilter | null)[];

  NOT?: (ShopifySellingPlanFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  billingPolicy?: JSONFilter | null;

  category?: SingleEnumFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  deliveryPolicy?: JSONFilter | null;

  description?: StringFilter | null;

  inventoryPolicy?: JSONFilter | null;

  name?: StringFilter | null;

  options?: JSONFilter | null;

  position?: IntFilter | null;

  pricingPolicies?: JSONFilter | null;

  sellingPlanGroup?: IDFilter | null;

  sellingPlanGroupId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type IntFilter = {

  equals?: (Scalars['Int'] | null) | null;

  notEquals?: (Scalars['Int'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Int'] | null) | null)[];

  notIn?: ((Scalars['Int'] | null) | null)[];

  lessThan?: (Scalars['Int'] | null) | null;

  lessThanOrEqual?: (Scalars['Int'] | null) | null;

  greaterThan?: (Scalars['Int'] | null) | null;

  greaterThanOrEqual?: (Scalars['Int'] | null) | null;
};



export type ShopifyFulfillmentOrderSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the assignedLocation field. Defaults to ascending (smallest value first). */
  assignedLocation?: SortOrder | null;

  /** Sort the results by the deliveryMethod field. Defaults to ascending (smallest value first). */
  deliveryMethod?: SortOrder | null;

  /** Sort the results by the destination field. Defaults to ascending (smallest value first). */
  destination?: SortOrder | null;

  /** Sort the results by the fulfillAt field. Defaults to ascending (smallest value first). */
  fulfillAt?: SortOrder | null;

  /** Sort the results by the fulfillBy field. Defaults to ascending (smallest value first). */
  fulfillBy?: SortOrder | null;

  /** Sort the results by the fulfillmentHolds field. Defaults to ascending (smallest value first). */
  fulfillmentHolds?: SortOrder | null;

  /** Sort the results by the internationalDuties field. Defaults to ascending (smallest value first). */
  internationalDuties?: SortOrder | null;

  /** Sort the results by the merchantRequests field. Defaults to ascending (smallest value first). */
  merchantRequests?: SortOrder | null;

  /** Sort the results by the requestStatus field. Defaults to ascending (smallest value first). */
  requestStatus?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the supportedActions field. Defaults to ascending (smallest value first). */
  supportedActions?: SortOrder | null;
};



export type ShopifyFulfillmentOrderFilter = {

  AND?: (ShopifyFulfillmentOrderFilter | null)[];

  OR?: (ShopifyFulfillmentOrderFilter | null)[];

  NOT?: (ShopifyFulfillmentOrderFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  assignedLocation?: JSONFilter | null;

  deliveryMethod?: JSONFilter | null;

  destination?: JSONFilter | null;

  fulfillAt?: DateTimeFilter | null;

  fulfillBy?: DateTimeFilter | null;

  fulfillmentHolds?: JSONFilter | null;

  internationalDuties?: JSONFilter | null;

  merchantRequests?: JSONFilter | null;

  requestStatus?: StringFilter | null;

  status?: StringFilter | null;

  supportedActions?: JSONFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyShippingLineSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the carrierIdentifier field. Defaults to ascending (smallest value first). */
  carrierIdentifier?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the discountAllocations field. Defaults to ascending (smallest value first). */
  discountAllocations?: SortOrder | null;

  /** Sort the results by the discountedPrice field. Defaults to ascending (smallest value first). */
  discountedPrice?: SortOrder | null;

  /** Sort the results by the discountedPriceSet field. Defaults to ascending (smallest value first). */
  discountedPriceSet?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the priceSet field. Defaults to ascending (smallest value first). */
  priceSet?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;
};



export type ShopifyShippingLineFilter = {

  AND?: (ShopifyShippingLineFilter | null)[];

  OR?: (ShopifyShippingLineFilter | null)[];

  NOT?: (ShopifyShippingLineFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  carrierIdentifier?: StringFilter | null;

  code?: StringFilter | null;

  discountAllocations?: JSONFilter | null;

  discountedPrice?: StringFilter | null;

  discountedPriceSet?: JSONFilter | null;

  phone?: StringFilter | null;

  price?: StringFilter | null;

  priceSet?: JSONFilter | null;

  source?: StringFilter | null;

  taxLines?: JSONFilter | null;

  title?: StringFilter | null;

  requestedFulfillmentService?: IDFilter | null;

  requestedFulfillmentServiceId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDutySort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the countryCodeOfOrigin field. Defaults to ascending (smallest value first). */
  countryCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the harmonizedSystemCode field. Defaults to ascending (smallest value first). */
  harmonizedSystemCode?: SortOrder | null;

  /** Sort the results by the presentmentMoney field. Defaults to ascending (smallest value first). */
  presentmentMoney?: SortOrder | null;

  /** Sort the results by the shopMoney field. Defaults to ascending (smallest value first). */
  shopMoney?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;
};



export type ShopifyDutyFilter = {

  AND?: (ShopifyDutyFilter | null)[];

  OR?: (ShopifyDutyFilter | null)[];

  NOT?: (ShopifyDutyFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  countryCodeOfOrigin?: StringFilter | null;

  harmonizedSystemCode?: StringFilter | null;

  presentmentMoney?: JSONFilter | null;

  shopMoney?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentServiceSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the callbackUrl field. Defaults to ascending (smallest value first). */
  callbackUrl?: SortOrder | null;

  /** Sort the results by the format field. Defaults to ascending (smallest value first). */
  format?: SortOrder | null;

  /** Sort the results by the fulfillmentOrdersOptIn field. Defaults to ascending (smallest value first). */
  fulfillmentOrdersOptIn?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the inventoryManagement field. Defaults to ascending (smallest value first). */
  inventoryManagement?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the permitsSkuSharing field. Defaults to ascending (smallest value first). */
  permitsSkuSharing?: SortOrder | null;

  /** Sort the results by the requiresShippingMethod field. Defaults to ascending (smallest value first). */
  requiresShippingMethod?: SortOrder | null;

  /** Sort the results by the trackingSupport field. Defaults to ascending (smallest value first). */
  trackingSupport?: SortOrder | null;
};



export type ShopifyFulfillmentServiceFilter = {

  AND?: (ShopifyFulfillmentServiceFilter | null)[];

  OR?: (ShopifyFulfillmentServiceFilter | null)[];

  NOT?: (ShopifyFulfillmentServiceFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  callbackUrl?: StringFilter | null;

  format?: StringFilter | null;

  fulfillmentOrdersOptIn?: BooleanFilter | null;

  handle?: StringFilter | null;

  inventoryManagement?: BooleanFilter | null;

  name?: StringFilter | null;

  permitsSkuSharing?: BooleanFilter | null;

  requiresShippingMethod?: BooleanFilter | null;

  trackingSupport?: BooleanFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyGdprRequestSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: SortOrder | null;

  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: SortOrder | null;
};



export type ShopifyGdprRequestFilter = {

  AND?: (ShopifyGdprRequestFilter | null)[];

  OR?: (ShopifyGdprRequestFilter | null)[];

  NOT?: (ShopifyGdprRequestFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  payload?: JSONFilter | null;

  topic?: SingleEnumFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySellingPlanGroupSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appId field. Defaults to ascending (smallest value first). */
  appId?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: SortOrder | null;

  /** Sort the results by the merchantCode field. Defaults to ascending (smallest value first). */
  merchantCode?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the options field. Defaults to ascending (smallest value first). */
  options?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the summary field. Defaults to ascending (smallest value first). */
  summary?: SortOrder | null;
};



export type ShopifySellingPlanGroupFilter = {

  AND?: (ShopifySellingPlanGroupFilter | null)[];

  OR?: (ShopifySellingPlanGroupFilter | null)[];

  NOT?: (ShopifySellingPlanGroupFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appId?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  description?: StringFilter | null;

  merchantCode?: StringFilter | null;

  name?: StringFilter | null;

  options?: JSONFilter | null;

  position?: IntFilter | null;

  summary?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCollectSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the sortValue field. Defaults to ascending (smallest value first). */
  sortValue?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyCollectFilter = {

  AND?: (ShopifyCollectFilter | null)[];

  OR?: (ShopifyCollectFilter | null)[];

  NOT?: (ShopifyCollectFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  position?: FloatFilter | null;

  sortValue?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  customCollection?: IDFilter | null;

  customCollectionId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyBulkOperationSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the completedAt field. Defaults to ascending (smallest value first). */
  completedAt?: SortOrder | null;

  /** Sort the results by the errorCode field. Defaults to ascending (smallest value first). */
  errorCode?: SortOrder | null;

  /** Sort the results by the fileSize field. Defaults to ascending (smallest value first). */
  fileSize?: SortOrder | null;

  /** Sort the results by the objectCount field. Defaults to ascending (smallest value first). */
  objectCount?: SortOrder | null;

  /** Sort the results by the partialDataUrl field. Defaults to ascending (smallest value first). */
  partialDataUrl?: SortOrder | null;

  /** Sort the results by the query field. Defaults to ascending (smallest value first). */
  query?: SortOrder | null;

  /** Sort the results by the rootObjectCount field. Defaults to ascending (smallest value first). */
  rootObjectCount?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;

  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: SortOrder | null;
};



export type ShopifyBulkOperationFilter = {

  AND?: (ShopifyBulkOperationFilter | null)[];

  OR?: (ShopifyBulkOperationFilter | null)[];

  NOT?: (ShopifyBulkOperationFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  completedAt?: DateTimeFilter | null;

  errorCode?: SingleEnumFilter | null;

  fileSize?: StringFilter | null;

  objectCount?: StringFilter | null;

  partialDataUrl?: StringFilter | null;

  query?: StringFilter | null;

  rootObjectCount?: StringFilter | null;

  status?: SingleEnumFilter | null;

  type?: SingleEnumFilter | null;

  url?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyScriptTagSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the cache field. Defaults to ascending (smallest value first). */
  cache?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the displayScope field. Defaults to ascending (smallest value first). */
  displayScope?: SortOrder | null;

  /** Sort the results by the event field. Defaults to ascending (smallest value first). */
  event?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyScriptTagFilter = {

  AND?: (ShopifyScriptTagFilter | null)[];

  OR?: (ShopifyScriptTagFilter | null)[];

  NOT?: (ShopifyScriptTagFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  cache?: BooleanFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  displayScope?: StringFilter | null;

  event?: StringFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCollectionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the disjunctive field. Defaults to ascending (smallest value first). */
  disjunctive?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the image field. Defaults to ascending (smallest value first). */
  image?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the rules field. Defaults to ascending (smallest value first). */
  rules?: SortOrder | null;

  /** Sort the results by the sortOrder field. Defaults to ascending (smallest value first). */
  sortOrder?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the collectionType field. Defaults to ascending (smallest value first). */
  collectionType?: SortOrder | null;
};



export type ShopifyCollectionFilter = {

  AND?: (ShopifyCollectionFilter | null)[];

  OR?: (ShopifyCollectionFilter | null)[];

  NOT?: (ShopifyCollectionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  body?: StringFilter | null;

  disjunctive?: BooleanFilter | null;

  handle?: StringFilter | null;

  image?: JSONFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  rules?: JSONFilter | null;

  sortOrder?: StringFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  collectionType?: SingleEnumFilter | null;
};



export type ShopifyInventoryItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the cost field. Defaults to ascending (smallest value first). */
  cost?: SortOrder | null;

  /** Sort the results by the countryCodeOfOrigin field. Defaults to ascending (smallest value first). */
  countryCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the countryHarmonizedSystemCodes field. Defaults to ascending (smallest value first). */
  countryHarmonizedSystemCodes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the harmonizedSystemCode field. Defaults to ascending (smallest value first). */
  harmonizedSystemCode?: SortOrder | null;

  /** Sort the results by the provinceCodeOfOrigin field. Defaults to ascending (smallest value first). */
  provinceCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the tracked field. Defaults to ascending (smallest value first). */
  tracked?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyInventoryItemFilter = {

  AND?: (ShopifyInventoryItemFilter | null)[];

  OR?: (ShopifyInventoryItemFilter | null)[];

  NOT?: (ShopifyInventoryItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  cost?: StringFilter | null;

  countryCodeOfOrigin?: StringFilter | null;

  countryHarmonizedSystemCodes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  harmonizedSystemCode?: StringFilter | null;

  provinceCodeOfOrigin?: StringFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  tracked?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyInventoryLevelSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the available field. Defaults to ascending (smallest value first). */
  available?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyInventoryLevelFilter = {

  AND?: (ShopifyInventoryLevelFilter | null)[];

  OR?: (ShopifyInventoryLevelFilter | null)[];

  NOT?: (ShopifyInventoryLevelFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  available?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  inventoryItem?: IDFilter | null;

  inventoryItemId?: IDFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDiscountCodeSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the usageCount field. Defaults to ascending (smallest value first). */
  usageCount?: SortOrder | null;
};



export type ShopifyDiscountCodeFilter = {

  AND?: (ShopifyDiscountCodeFilter | null)[];

  OR?: (ShopifyDiscountCodeFilter | null)[];

  NOT?: (ShopifyDiscountCodeFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  code?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  usageCount?: FloatFilter | null;

  priceRule?: IDFilter | null;

  priceRuleId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProvinceSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the tax field. Defaults to ascending (smallest value first). */
  tax?: SortOrder | null;

  /** Sort the results by the taxName field. Defaults to ascending (smallest value first). */
  taxName?: SortOrder | null;

  /** Sort the results by the taxPercentage field. Defaults to ascending (smallest value first). */
  taxPercentage?: SortOrder | null;

  /** Sort the results by the taxType field. Defaults to ascending (smallest value first). */
  taxType?: SortOrder | null;
};



export type ShopifyProvinceFilter = {

  AND?: (ShopifyProvinceFilter | null)[];

  OR?: (ShopifyProvinceFilter | null)[];

  NOT?: (ShopifyProvinceFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  code?: StringFilter | null;

  name?: StringFilter | null;

  tax?: FloatFilter | null;

  taxName?: StringFilter | null;

  taxPercentage?: FloatFilter | null;

  taxType?: SingleEnumFilter | null;

  country?: IDFilter | null;

  countryId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySyncSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: SortOrder | null;

  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: SortOrder | null;

  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: SortOrder | null;

  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: SortOrder | null;

  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: SortOrder | null;
};



export type ShopifySyncFilter = {

  AND?: (ShopifySyncFilter | null)[];

  OR?: (ShopifySyncFilter | null)[];

  NOT?: (ShopifySyncFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  domain?: StringFilter | null;

  errorMessage?: StringFilter | null;

  errorDetails?: StringFilter | null;

  syncSince?: DateTimeFilter | null;

  force?: BooleanFilter | null;

  models?: JSONFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCustomerMergeableSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the errorFields field. Defaults to ascending (smallest value first). */
  errorFields?: SortOrder | null;

  /** Sort the results by the isMergeable field. Defaults to ascending (smallest value first). */
  isMergeable?: SortOrder | null;

  /** Sort the results by the mergeInProgress field. Defaults to ascending (smallest value first). */
  mergeInProgress?: SortOrder | null;

  /** Sort the results by the reason field. Defaults to ascending (smallest value first). */
  reason?: SortOrder | null;
};



export type ShopifyCustomerMergeableFilter = {

  AND?: (ShopifyCustomerMergeableFilter | null)[];

  OR?: (ShopifyCustomerMergeableFilter | null)[];

  NOT?: (ShopifyCustomerMergeableFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  errorFields?: JSONFilter | null;

  isMergeable?: BooleanFilter | null;

  mergeInProgress?: JSONFilter | null;

  reason?: StringFilter | null;

  shopifyCustomer?: IDFilter | null;

  shopifyCustomerId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyAssetSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the attachment field. Defaults to ascending (smallest value first). */
  attachment?: SortOrder | null;

  /** Sort the results by the checksum field. Defaults to ascending (smallest value first). */
  checksum?: SortOrder | null;

  /** Sort the results by the contentType field. Defaults to ascending (smallest value first). */
  contentType?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the key field. Defaults to ascending (smallest value first). */
  key?: SortOrder | null;

  /** Sort the results by the publicUrl field. Defaults to ascending (smallest value first). */
  publicUrl?: SortOrder | null;

  /** Sort the results by the size field. Defaults to ascending (smallest value first). */
  size?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyAssetFilter = {

  AND?: (ShopifyAssetFilter | null)[];

  OR?: (ShopifyAssetFilter | null)[];

  NOT?: (ShopifyAssetFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  attachment?: StringFilter | null;

  checksum?: StringFilter | null;

  contentType?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  key?: StringFilter | null;

  publicUrl?: StringFilter | null;

  size?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  theme?: IDFilter | null;

  themeId?: IDFilter | null;
};



export type ShopifyThemeSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the previewable field. Defaults to ascending (smallest value first). */
  previewable?: SortOrder | null;

  /** Sort the results by the processing field. Defaults to ascending (smallest value first). */
  processing?: SortOrder | null;

  /** Sort the results by the role field. Defaults to ascending (smallest value first). */
  role?: SortOrder | null;

  /** Sort the results by the themeStoreId field. Defaults to ascending (smallest value first). */
  themeStoreId?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyThemeFilter = {

  AND?: (ShopifyThemeFilter | null)[];

  OR?: (ShopifyThemeFilter | null)[];

  NOT?: (ShopifyThemeFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  name?: StringFilter | null;

  previewable?: BooleanFilter | null;

  processing?: BooleanFilter | null;

  role?: StringFilter | null;

  themeStoreId?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDiscountSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appDiscountType field. Defaults to ascending (smallest value first). */
  appDiscountType?: SortOrder | null;

  /** Sort the results by the appliesOnOneTimePurchase field. Defaults to ascending (smallest value first). */
  appliesOnOneTimePurchase?: SortOrder | null;

  /** Sort the results by the appliesOnSubscription field. Defaults to ascending (smallest value first). */
  appliesOnSubscription?: SortOrder | null;

  /** Sort the results by the appliesOncePerCustomer field. Defaults to ascending (smallest value first). */
  appliesOncePerCustomer?: SortOrder | null;

  /** Sort the results by the asyncUsageCount field. Defaults to ascending (smallest value first). */
  asyncUsageCount?: SortOrder | null;

  /** Sort the results by the codeCount field. Defaults to ascending (smallest value first). */
  codeCount?: SortOrder | null;

  /** Sort the results by the combinesWith field. Defaults to ascending (smallest value first). */
  combinesWith?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the destinationSelection field. Defaults to ascending (smallest value first). */
  destinationSelection?: SortOrder | null;

  /** Sort the results by the discountClass field. Defaults to ascending (smallest value first). */
  discountClass?: SortOrder | null;

  /** Sort the results by the discountId field. Defaults to ascending (smallest value first). */
  discountId?: SortOrder | null;

  /** Sort the results by the endsAt field. Defaults to ascending (smallest value first). */
  endsAt?: SortOrder | null;

  /** Sort the results by the errorHistory field. Defaults to ascending (smallest value first). */
  errorHistory?: SortOrder | null;

  /** Sort the results by the hasTimelineComment field. Defaults to ascending (smallest value first). */
  hasTimelineComment?: SortOrder | null;

  /** Sort the results by the maximumShippingPrice field. Defaults to ascending (smallest value first). */
  maximumShippingPrice?: SortOrder | null;

  /** Sort the results by the minimumRequirement field. Defaults to ascending (smallest value first). */
  minimumRequirement?: SortOrder | null;

  /** Sort the results by the recurringCycleLimit field. Defaults to ascending (smallest value first). */
  recurringCycleLimit?: SortOrder | null;

  /** Sort the results by the shareableUrls field. Defaults to ascending (smallest value first). */
  shareableUrls?: SortOrder | null;

  /** Sort the results by the shortSummary field. Defaults to ascending (smallest value first). */
  shortSummary?: SortOrder | null;

  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the summary field. Defaults to ascending (smallest value first). */
  summary?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the totalSales field. Defaults to ascending (smallest value first). */
  totalSales?: SortOrder | null;

  /** Sort the results by the usageLimit field. Defaults to ascending (smallest value first). */
  usageLimit?: SortOrder | null;

  /** Sort the results by the usesPerOrderLimit field. Defaults to ascending (smallest value first). */
  usesPerOrderLimit?: SortOrder | null;
};



export type ShopifyDiscountFilter = {

  AND?: (ShopifyDiscountFilter | null)[];

  OR?: (ShopifyDiscountFilter | null)[];

  NOT?: (ShopifyDiscountFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appDiscountType?: JSONFilter | null;

  appliesOnOneTimePurchase?: BooleanFilter | null;

  appliesOnSubscription?: BooleanFilter | null;

  appliesOncePerCustomer?: BooleanFilter | null;

  asyncUsageCount?: FloatFilter | null;

  codeCount?: IntFilter | null;

  combinesWith?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  destinationSelection?: JSONFilter | null;

  discountClass?: SingleEnumFilter | null;

  discountId?: StringFilter | null;

  endsAt?: DateTimeFilter | null;

  errorHistory?: JSONFilter | null;

  hasTimelineComment?: BooleanFilter | null;

  maximumShippingPrice?: JSONFilter | null;

  minimumRequirement?: JSONFilter | null;

  recurringCycleLimit?: IntFilter | null;

  shareableUrls?: JSONFilter | null;

  shortSummary?: StringFilter | null;

  startsAt?: DateTimeFilter | null;

  status?: SingleEnumFilter | null;

  summary?: StringFilter | null;

  title?: StringFilter | null;

  totalSales?: JSONFilter | null;

  usageLimit?: IntFilter | null;

  usesPerOrderLimit?: IntFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCustomerSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the statistics field. Defaults to ascending (smallest value first). */
  statistics?: SortOrder | null;

  /** Sort the results by the acceptsMarketing field. Defaults to ascending (smallest value first). */
  acceptsMarketing?: SortOrder | null;

  /** Sort the results by the acceptsMarketingUpdatedAt field. Defaults to ascending (smallest value first). */
  acceptsMarketingUpdatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the emailMarketingConsent field. Defaults to ascending (smallest value first). */
  emailMarketingConsent?: SortOrder | null;

  /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
  firstName?: SortOrder | null;

  /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
  lastName?: SortOrder | null;

  /** Sort the results by the lastOrderName field. Defaults to ascending (smallest value first). */
  lastOrderName?: SortOrder | null;

  /** Sort the results by the marketingOptInLevel field. Defaults to ascending (smallest value first). */
  marketingOptInLevel?: SortOrder | null;

  /** Sort the results by the metafield field. Defaults to ascending (smallest value first). */
  metafield?: SortOrder | null;

  /** Sort the results by the multipassIdentifier field. Defaults to ascending (smallest value first). */
  multipassIdentifier?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the ordersCount field. Defaults to ascending (smallest value first). */
  ordersCount?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the smsMarketingConsent field. Defaults to ascending (smallest value first). */
  smsMarketingConsent?: SortOrder | null;

  /** Sort the results by the shopifyState field. Defaults to ascending (smallest value first). */
  shopifyState?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
  taxExempt?: SortOrder | null;

  /** Sort the results by the taxExemptions field. Defaults to ascending (smallest value first). */
  taxExemptions?: SortOrder | null;

  /** Sort the results by the totalSpent field. Defaults to ascending (smallest value first). */
  totalSpent?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the verifiedEmail field. Defaults to ascending (smallest value first). */
  verifiedEmail?: SortOrder | null;
};



export type ShopifyCustomerFilter = {

  AND?: (ShopifyCustomerFilter | null)[];

  OR?: (ShopifyCustomerFilter | null)[];

  NOT?: (ShopifyCustomerFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  statistics?: JSONFilter | null;

  acceptsMarketing?: BooleanFilter | null;

  acceptsMarketingUpdatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  defaultAddress?: IDFilter | null;

  defaultAddressId?: IDFilter | null;

  email?: StringFilter | null;

  emailMarketingConsent?: JSONFilter | null;

  firstName?: StringFilter | null;

  lastName?: StringFilter | null;

  lastOrderName?: StringFilter | null;

  marketingOptInLevel?: StringFilter | null;

  metafield?: JSONFilter | null;

  multipassIdentifier?: StringFilter | null;

  note?: StringFilter | null;

  ordersCount?: FloatFilter | null;

  phone?: StringFilter | null;

  smsMarketingConsent?: JSONFilter | null;

  shopifyState?: SingleEnumFilter | null;

  tags?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  taxExemptions?: JSONFilter | null;

  totalSpent?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  verifiedEmail?: BooleanFilter | null;

  lastOrder?: IDFilter | null;

  lastOrderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyPriceRuleSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the allocationLimit field. Defaults to ascending (smallest value first). */
  allocationLimit?: SortOrder | null;

  /** Sort the results by the allocationMethod field. Defaults to ascending (smallest value first). */
  allocationMethod?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the customerSegmentPrerequisiteIds field. Defaults to ascending (smallest value first). */
  customerSegmentPrerequisiteIds?: SortOrder | null;

  /** Sort the results by the customerSelection field. Defaults to ascending (smallest value first). */
  customerSelection?: SortOrder | null;

  /** Sort the results by the endsAt field. Defaults to ascending (smallest value first). */
  endsAt?: SortOrder | null;

  /** Sort the results by the entitledCollectionIds field. Defaults to ascending (smallest value first). */
  entitledCollectionIds?: SortOrder | null;

  /** Sort the results by the entitledCountryIds field. Defaults to ascending (smallest value first). */
  entitledCountryIds?: SortOrder | null;

  /** Sort the results by the entitledProductIds field. Defaults to ascending (smallest value first). */
  entitledProductIds?: SortOrder | null;

  /** Sort the results by the entitledVariantIds field. Defaults to ascending (smallest value first). */
  entitledVariantIds?: SortOrder | null;

  /** Sort the results by the oncePerCustomer field. Defaults to ascending (smallest value first). */
  oncePerCustomer?: SortOrder | null;

  /** Sort the results by the prerequisiteCollectionIds field. Defaults to ascending (smallest value first). */
  prerequisiteCollectionIds?: SortOrder | null;

  /** Sort the results by the prerequisiteCustomerIds field. Defaults to ascending (smallest value first). */
  prerequisiteCustomerIds?: SortOrder | null;

  /** Sort the results by the prerequisiteProductIds field. Defaults to ascending (smallest value first). */
  prerequisiteProductIds?: SortOrder | null;

  /** Sort the results by the prerequisiteQuantityRange field. Defaults to ascending (smallest value first). */
  prerequisiteQuantityRange?: SortOrder | null;

  /** Sort the results by the prerequisiteShippingPriceRange field. Defaults to ascending (smallest value first). */
  prerequisiteShippingPriceRange?: SortOrder | null;

  /** Sort the results by the prerequisiteSubtotalRange field. Defaults to ascending (smallest value first). */
  prerequisiteSubtotalRange?: SortOrder | null;

  /** Sort the results by the prerequisiteToEntitlementPurchase field. Defaults to ascending (smallest value first). */
  prerequisiteToEntitlementPurchase?: SortOrder | null;

  /** Sort the results by the prerequisiteToEntitlementQuantityRatio field. Defaults to ascending (smallest value first). */
  prerequisiteToEntitlementQuantityRatio?: SortOrder | null;

  /** Sort the results by the prerequisiteVariants field. Defaults to ascending (smallest value first). */
  prerequisiteVariants?: SortOrder | null;

  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: SortOrder | null;

  /** Sort the results by the targetSelection field. Defaults to ascending (smallest value first). */
  targetSelection?: SortOrder | null;

  /** Sort the results by the targetType field. Defaults to ascending (smallest value first). */
  targetType?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the usageLimit field. Defaults to ascending (smallest value first). */
  usageLimit?: SortOrder | null;

  /** Sort the results by the value field. Defaults to ascending (smallest value first). */
  value?: SortOrder | null;

  /** Sort the results by the valueType field. Defaults to ascending (smallest value first). */
  valueType?: SortOrder | null;
};



export type ShopifyPriceRuleFilter = {

  AND?: (ShopifyPriceRuleFilter | null)[];

  OR?: (ShopifyPriceRuleFilter | null)[];

  NOT?: (ShopifyPriceRuleFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  allocationLimit?: FloatFilter | null;

  allocationMethod?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  customerSegmentPrerequisiteIds?: JSONFilter | null;

  customerSelection?: StringFilter | null;

  endsAt?: DateTimeFilter | null;

  entitledCollectionIds?: JSONFilter | null;

  entitledCountryIds?: JSONFilter | null;

  entitledProductIds?: JSONFilter | null;

  entitledVariantIds?: JSONFilter | null;

  oncePerCustomer?: BooleanFilter | null;

  prerequisiteCollectionIds?: JSONFilter | null;

  prerequisiteCustomerIds?: JSONFilter | null;

  prerequisiteProductIds?: JSONFilter | null;

  prerequisiteQuantityRange?: JSONFilter | null;

  prerequisiteShippingPriceRange?: JSONFilter | null;

  prerequisiteSubtotalRange?: JSONFilter | null;

  prerequisiteToEntitlementPurchase?: JSONFilter | null;

  prerequisiteToEntitlementQuantityRatio?: JSONFilter | null;

  prerequisiteVariants?: JSONFilter | null;

  startsAt?: DateTimeFilter | null;

  targetSelection?: StringFilter | null;

  targetType?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  usageLimit?: FloatFilter | null;

  value?: FloatFilter | null;

  valueType?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCarrierServiceSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the active field. Defaults to ascending (smallest value first). */
  active?: SortOrder | null;

  /** Sort the results by the callbackUrl field. Defaults to ascending (smallest value first). */
  callbackUrl?: SortOrder | null;

  /** Sort the results by the carrierServiceType field. Defaults to ascending (smallest value first). */
  carrierServiceType?: SortOrder | null;

  /** Sort the results by the format field. Defaults to ascending (smallest value first). */
  format?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the serviceDiscovery field. Defaults to ascending (smallest value first). */
  serviceDiscovery?: SortOrder | null;
};



export type ShopifyCarrierServiceFilter = {

  AND?: (ShopifyCarrierServiceFilter | null)[];

  OR?: (ShopifyCarrierServiceFilter | null)[];

  NOT?: (ShopifyCarrierServiceFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  active?: BooleanFilter | null;

  callbackUrl?: StringFilter | null;

  carrierServiceType?: SingleEnumFilter | null;

  format?: SingleEnumFilter | null;

  name?: StringFilter | null;

  serviceDiscovery?: BooleanFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCartSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the token field. Defaults to ascending (smallest value first). */
  token?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyCartFilter = {

  AND?: (ShopifyCartFilter | null)[];

  OR?: (ShopifyCartFilter | null)[];

  NOT?: (ShopifyCartFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  note?: StringFilter | null;

  token?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFileSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;

  /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
  alt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the duration field. Defaults to ascending (smallest value first). */
  duration?: SortOrder | null;

  /** Sort the results by the fileErrors field. Defaults to ascending (smallest value first). */
  fileErrors?: SortOrder | null;

  /** Sort the results by the fileStatus field. Defaults to ascending (smallest value first). */
  fileStatus?: SortOrder | null;

  /** Sort the results by the image field. Defaults to ascending (smallest value first). */
  image?: SortOrder | null;

  /** Sort the results by the originalFileSize field. Defaults to ascending (smallest value first). */
  originalFileSize?: SortOrder | null;

  /** Sort the results by the originalSource field. Defaults to ascending (smallest value first). */
  originalSource?: SortOrder | null;

  /** Sort the results by the preview field. Defaults to ascending (smallest value first). */
  preview?: SortOrder | null;

  /** Sort the results by the sources field. Defaults to ascending (smallest value first). */
  sources?: SortOrder | null;

  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: SortOrder | null;
};



export type ShopifyFileFilter = {

  AND?: (ShopifyFileFilter | null)[];

  OR?: (ShopifyFileFilter | null)[];

  NOT?: (ShopifyFileFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  type?: SingleEnumFilter | null;

  alt?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  duration?: IntFilter | null;

  fileErrors?: JSONFilter | null;

  fileStatus?: SingleEnumFilter | null;

  image?: JSONFilter | null;

  originalFileSize?: IntFilter | null;

  originalSource?: JSONFilter | null;

  preview?: JSONFilter | null;

  sources?: JSONFilter | null;

  url?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProductSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the compareAtPriceRange field. Defaults to ascending (smallest value first). */
  compareAtPriceRange?: SortOrder | null;

  /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
  productCategory?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
  productType?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyProductFilter = {

  AND?: (ShopifyProductFilter | null)[];

  OR?: (ShopifyProductFilter | null)[];

  NOT?: (ShopifyProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  compareAtPriceRange?: JSONFilter | null;

  productCategory?: JSONFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  status?: SingleEnumFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  vendor?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCountrySort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the tax field. Defaults to ascending (smallest value first). */
  tax?: SortOrder | null;
};



export type ShopifyCountryFilter = {

  AND?: (ShopifyCountryFilter | null)[];

  OR?: (ShopifyCountryFilter | null)[];

  NOT?: (ShopifyCountryFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  code?: StringFilter | null;

  name?: StringFilter | null;

  tax?: FloatFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyLocationSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the active field. Defaults to ascending (smallest value first). */
  active?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the legacy field. Defaults to ascending (smallest value first). */
  legacy?: SortOrder | null;

  /** Sort the results by the localizedCountryName field. Defaults to ascending (smallest value first). */
  localizedCountryName?: SortOrder | null;

  /** Sort the results by the localizedProvinceName field. Defaults to ascending (smallest value first). */
  localizedProvinceName?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyLocationFilter = {

  AND?: (ShopifyLocationFilter | null)[];

  OR?: (ShopifyLocationFilter | null)[];

  NOT?: (ShopifyLocationFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  active?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  legacy?: BooleanFilter | null;

  localizedCountryName?: StringFilter | null;

  localizedProvinceName?: StringFilter | null;

  name?: StringFilter | null;

  phone?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  zipCode?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyShopSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
  customerAccountsV2?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
  cookieConsentLevel?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
  eligibleForCardReaderGiveaway?: SortOrder | null;

  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: SortOrder | null;

  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: SortOrder | null;

  /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
  forceSsl?: SortOrder | null;

  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: SortOrder | null;

  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: SortOrder | null;

  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: SortOrder | null;

  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: SortOrder | null;

  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: SortOrder | null;

  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: SortOrder | null;

  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: SortOrder | null;

  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: SortOrder | null;

  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: SortOrder | null;

  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: SortOrder | null;

  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: SortOrder | null;

  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: SortOrder | null;

  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: SortOrder | null;

  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: SortOrder | null;

  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: SortOrder | null;

  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: SortOrder | null;

  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: SortOrder | null;

  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyShopFilter = {

  AND?: (ShopifyShopFilter | null)[];

  OR?: (ShopifyShopFilter | null)[];

  NOT?: (ShopifyShopFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  customerAccountsV2?: JSONFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  checkoutApiSupported?: BooleanFilter | null;

  city?: StringFilter | null;

  cookieConsentLevel?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  customerEmail?: StringFilter | null;

  domain?: StringFilter | null;

  eligibleForCardReaderGiveaway?: BooleanFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: JSONFilter | null;

  finances?: BooleanFilter | null;

  forceSsl?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  grantedScopes?: JSONFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  installedViaApiKey?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  registeredWebhooks?: JSONFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weightUnit?: StringFilter | null;

  zipCode?: StringFilter | null;

  primaryLocation?: IDFilter | null;

  primaryLocationId?: IDFilter | null;
};



export type BulkSignUpUsersInput = {

  email?: (Scalars['String'] | null) | null;

  password?: (Scalars['String'] | null) | null;
};



export type BulkSignInUsersInput = {

  email?: (Scalars['String'] | null) | null;

  password?: (Scalars['String'] | null) | null;
};



export type UpdateUserInput = {

  googleProfileId?: (Scalars['String'] | null) | null;

  googleImageUrl?: (Scalars['String'] | null) | null;

  password?: (Scalars['String'] | null) | null;

  firstName?: (Scalars['String'] | null) | null;

  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;

  emailVerified?: (Scalars['Boolean'] | null) | null;

  resetPasswordTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  lastName?: (Scalars['String'] | null) | null;

  emailVerificationToken?: (Scalars['String'] | null) | null;

  resetPasswordToken?: (Scalars['String'] | null) | null;

  emailVerificationTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  email?: (Scalars['String'] | null) | null;
};



export type BulkUpdateUsersInput = {

  user?: UpdateUserInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type BulkSendVerifyEmailUsersInput = {

  email?: (Scalars['String'] | null) | null;
};



export type BulkVerifyEmailUsersInput = {

  code?: (Scalars['String'] | null) | null;
};



export type BulkSendResetPasswordUsersInput = {

  email?: (Scalars['String'] | null) | null;
};



export type BulkResetPasswordUsersInput = {

  password?: (Scalars['String'] | null) | null;

  code?: (Scalars['String'] | null) | null;
};



export type BulkChangePasswordUsersInput = {

  id: (Scalars['GadgetID'] | null);

  currentPassword?: (Scalars['String'] | null) | null;

  newPassword?: (Scalars['String'] | null) | null;
};



export type RunShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyShopBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type BulkRunShopifySyncsInput = {

  shopifySync?: RunShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type CompleteShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCompleteShopifySyncsInput = {

  shopifySync?: CompleteShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ErrorShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkErrorShopifySyncsInput = {

  shopifySync?: ErrorShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type AbortShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkAbortShopifySyncsInput = {

  shopifySync?: AbortShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type InternalUserInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  googleProfileId?: (Scalars['String'] | null) | null;

  googleImageUrl?: (Scalars['String'] | null) | null;

  password?: (Scalars['String'] | null) | null;

  firstName?: (Scalars['String'] | null) | null;

  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;

  emailVerified?: (Scalars['Boolean'] | null) | null;

  resetPasswordTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  lastName?: (Scalars['String'] | null) | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];

  emailVerificationToken?: (Scalars['String'] | null) | null;

  resetPasswordToken?: (Scalars['String'] | null) | null;

  emailVerificationTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  email?: (Scalars['String'] | null) | null;
};



export type AppGraphQLTriggerMutationContext = {

  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: (Scalars['GadgetID'] | null) | null;
};



export type InternalSessionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  user?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  shopifySID?: (Scalars['String'] | null) | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];
};



export type InternalBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyAssetInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  attachment?: (Scalars['String'] | null) | null;

  checksum?: (Scalars['String'] | null) | null;

  contentType?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  key?: (Scalars['String'] | null) | null;

  publicUrl?: (Scalars['String'] | null) | null;

  size?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  theme?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyAssetAtomicsInput | null;
};



export type InternalShopifyAssetAtomicsInput = {

  /** Numeric atomic commands for operating on size. */
  size?: (NumericAtomicFieldUpdateInput)[];
};



export type NumericAtomicFieldUpdateInput = {

  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;

  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};



export type InternalShopifyBulkOperationInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCarrierServiceInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  carrierServiceType?: ShopifyCarrierServiceCarrierServiceTypeEnum | null;

  format?: ShopifyCarrierServiceFormatEnum | null;

  name?: (Scalars['String'] | null) | null;

  serviceDiscovery?: (Scalars['Boolean'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCartInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  note?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCollectInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  position?: (Scalars['Float'] | null) | null;

  sortValue?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customCollection?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCollectAtomicsInput | null;
};



export type InternalShopifyCollectAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyCollectionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  body?: (Scalars['String'] | null) | null;

  disjunctive?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  rules?: (Scalars['JSON'] | null) | null;

  sortOrder?: (Scalars['String'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  collectionType?: ShopifyCollectionCollectionTypeEnum | null;
};



export type InternalShopifyCountryInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  tax?: (Scalars['Float'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCountryAtomicsInput | null;
};



export type InternalShopifyCountryAtomicsInput = {

  /** Numeric atomic commands for operating on tax. */
  tax?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyCustomerInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  statistics?: (Scalars['JSON'] | null) | null;

  acceptsMarketing?: (Scalars['Boolean'] | null) | null;

  acceptsMarketingUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  defaultAddress?: InternalBelongsToInput | null;

  email?: (Scalars['String'] | null) | null;

  emailMarketingConsent?: (Scalars['JSON'] | null) | null;

  firstName?: (Scalars['String'] | null) | null;

  lastName?: (Scalars['String'] | null) | null;

  lastOrderName?: (Scalars['String'] | null) | null;

  marketingOptInLevel?: (Scalars['String'] | null) | null;

  metafield?: (Scalars['JSON'] | null) | null;

  multipassIdentifier?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  ordersCount?: (Scalars['Float'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  smsMarketingConsent?: (Scalars['JSON'] | null) | null;

  shopifyState?: ShopifyCustomerShopifyStateEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxExemptions?: (Scalars['JSON'] | null) | null;

  totalSpent?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  verifiedEmail?: (Scalars['Boolean'] | null) | null;

  lastOrder?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCustomerAtomicsInput | null;
};



export type InternalShopifyCustomerAtomicsInput = {

  /** Numeric atomic commands for operating on ordersCount. */
  ordersCount?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyCustomerAddressInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  company?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  firstName?: (Scalars['String'] | null) | null;

  lastName?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  shopifyCustomer?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCustomerMergeableInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorFields?: (Scalars['JSON'] | null) | null;

  isMergeable?: (Scalars['Boolean'] | null) | null;

  mergeInProgress?: (Scalars['JSON'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  shopifyCustomer?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCustomerPaymentMethodInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  adminGraphqlApiId?: (Scalars['String'] | null) | null;

  instrument?: (Scalars['JSON'] | null) | null;

  revokedAt?: Date | Scalars['ISO8601DateString'] | null;

  revokedReason?: ShopifyCustomerPaymentMethodRevokedReasonEnum | null;

  customer?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyDiscountInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDiscountAtomicsInput | null;
};



export type InternalShopifyDiscountAtomicsInput = {

  /** Numeric atomic commands for operating on asyncUsageCount. */
  asyncUsageCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on codeCount. */
  codeCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on recurringCycleLimit. */
  recurringCycleLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usageLimit. */
  usageLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usesPerOrderLimit. */
  usesPerOrderLimit?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDiscountCodeInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDiscountCodeAtomicsInput | null;
};



export type InternalShopifyDiscountCodeAtomicsInput = {

  /** Numeric atomic commands for operating on usageCount. */
  usageCount?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDraftOrderInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  billingAddress?: (Scalars['JSON'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  invoiceSentAt?: Date | Scalars['ISO8601DateString'] | null;

  invoiceUrl?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  order?: (Scalars['JSON'] | null) | null;

  poNumber?: (Scalars['String'] | null) | null;

  shippingAddress?: (Scalars['JSON'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  tags?: (Scalars['JSON'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxExemptions?: (Scalars['JSON'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customer?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyDraftOrderLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  giftCard?: (Scalars['Boolean'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  properties?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  draftOrder?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  variant?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDraftOrderLineItemAtomicsInput | null;
};



export type InternalShopifyDraftOrderLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on grams. */
  grams?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDutyInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  countryCodeOfOrigin?: (Scalars['String'] | null) | null;

  harmonizedSystemCode?: (Scalars['String'] | null) | null;

  presentmentMoney?: (Scalars['JSON'] | null) | null;

  shopMoney?: (Scalars['JSON'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  orderLineItem?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyFileInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  type?: ShopifyFileTypeEnum | null;

  alt?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  duration?: (Scalars['Int'] | null) | null;

  fileErrors?: (Scalars['JSON'] | null) | null;

  fileStatus?: ShopifyFileFileStatusEnum | null;

  image?: (Scalars['JSON'] | null) | null;

  originalFileSize?: (Scalars['Int'] | null) | null;

  originalSource?: (Scalars['JSON'] | null) | null;

  preview?: (Scalars['JSON'] | null) | null;

  sources?: (Scalars['JSON'] | null) | null;

  url?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFileAtomicsInput | null;
};



export type InternalShopifyFileAtomicsInput = {

  /** Numeric atomic commands for operating on duration. */
  duration?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on originalFileSize. */
  originalFileSize?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFulfillmentInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  location?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyFulfillmentEventInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  address1?: (Scalars['String'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  estimatedDeliveryAt?: Date | Scalars['ISO8601DateString'] | null;

  happenedAt?: Date | Scalars['ISO8601DateString'] | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  message?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  zipCode?: (Scalars['String'] | null) | null;

  fulfillment?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFulfillmentEventAtomicsInput | null;
};



export type InternalShopifyFulfillmentEventAtomicsInput = {

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFulfillmentLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: InternalBelongsToInput | null;

  orderLineItem?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFulfillmentLineItemAtomicsInput | null;
};



export type InternalShopifyFulfillmentLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFulfillmentOrderInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyFulfillmentOrderLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: InternalBelongsToInput | null;

  inventoryItem?: InternalBelongsToInput | null;

  orderLineItem?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFulfillmentOrderLineItemAtomicsInput | null;
};



export type InternalShopifyFulfillmentOrderLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on remainingQuantity. */
  remainingQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFulfillmentServiceInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  location?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyGdprRequestInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  payload?: (Scalars['JSON'] | null) | null;

  topic?: ShopifyGdprRequestTopicEnum | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyInventoryItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  cost?: (Scalars['String'] | null) | null;

  countryCodeOfOrigin?: (Scalars['String'] | null) | null;

  countryHarmonizedSystemCodes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  harmonizedSystemCode?: (Scalars['String'] | null) | null;

  provinceCodeOfOrigin?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  tracked?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyInventoryLevelInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  available?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  inventoryItem?: InternalBelongsToInput | null;

  location?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyInventoryLevelAtomicsInput | null;
};



export type InternalShopifyInventoryLevelAtomicsInput = {

  /** Numeric atomic commands for operating on available. */
  available?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyLocationInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  legacy?: (Scalars['Boolean'] | null) | null;

  localizedCountryName?: (Scalars['String'] | null) | null;

  localizedProvinceName?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  zipCode?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyOrderInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  additionalFees?: (Scalars['JSON'] | null) | null;

  cancellation?: (Scalars['JSON'] | null) | null;

  shopifyProtect?: (Scalars['JSON'] | null) | null;

  billingAddress?: (Scalars['JSON'] | null) | null;

  browserIp?: (Scalars['String'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  cancelReason?: (Scalars['String'] | null) | null;

  cancelledAt?: Date | Scalars['ISO8601DateString'] | null;

  cartToken?: (Scalars['String'] | null) | null;

  checkoutToken?: (Scalars['String'] | null) | null;

  clientDetails?: (Scalars['JSON'] | null) | null;

  closedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  currentSubtotalPrice?: (Scalars['String'] | null) | null;

  currentSubtotalPriceSet?: (Scalars['JSON'] | null) | null;

  currentTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;

  currentTotalDiscounts?: (Scalars['String'] | null) | null;

  currentTotalDiscountsSet?: (Scalars['JSON'] | null) | null;

  currentTotalDutiesSet?: (Scalars['JSON'] | null) | null;

  currentTotalPrice?: (Scalars['String'] | null) | null;

  currentTotalPriceSet?: (Scalars['JSON'] | null) | null;

  currentTotalTax?: (Scalars['String'] | null) | null;

  currentTotalTaxSet?: (Scalars['JSON'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  discountApplications?: (Scalars['JSON'] | null) | null;

  discountCodes?: (Scalars['JSON'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  estimatedTaxes?: (Scalars['Boolean'] | null) | null;

  financialStatus?: (Scalars['String'] | null) | null;

  fulfillmentStatus?: (Scalars['String'] | null) | null;

  landingSite?: (Scalars['String'] | null) | null;

  merchantOfRecordAppId?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  number?: (Scalars['Float'] | null) | null;

  orderNumber?: (Scalars['Float'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  originalTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;

  originalTotalDutiesSet?: (Scalars['JSON'] | null) | null;

  paymentGatewayNames?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  poNumber?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  referringSite?: (Scalars['String'] | null) | null;

  shippingAddress?: (Scalars['JSON'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  subtotalPriceSet?: (Scalars['JSON'] | null) | null;

  tags?: (Scalars['JSON'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalDiscounts?: (Scalars['String'] | null) | null;

  totalDiscountsSet?: (Scalars['JSON'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalLineItemsPriceSet?: (Scalars['JSON'] | null) | null;

  totalOutstanding?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalPriceSet?: (Scalars['JSON'] | null) | null;

  totalShippingPriceSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  totalWeight?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customer?: InternalBelongsToInput | null;

  location?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyOrderAtomicsInput | null;
};



export type InternalShopifyOrderAtomicsInput = {

  /** Numeric atomic commands for operating on number. */
  number?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on orderNumber. */
  orderNumber?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on totalWeight. */
  totalWeight?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyOrderAdjustmentInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  amountSet?: (Scalars['JSON'] | null) | null;

  kind?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  taxAmount?: (Scalars['String'] | null) | null;

  taxAmountSet?: (Scalars['JSON'] | null) | null;

  order?: InternalBelongsToInput | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyOrderLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  attributedStaffs?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  giftCard?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  priceSet?: (Scalars['JSON'] | null) | null;

  properties?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalDiscount?: (Scalars['String'] | null) | null;

  totalDiscountSet?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  originLocation?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  variant?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyOrderLineItemAtomicsInput | null;
};



export type InternalShopifyOrderLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyOrderRiskInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  causeCancel?: (Scalars['Boolean'] | null) | null;

  display?: (Scalars['Boolean'] | null) | null;

  merchantMessage?: (Scalars['String'] | null) | null;

  message?: (Scalars['String'] | null) | null;

  recommendation?: (Scalars['String'] | null) | null;

  score?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyOrderTransactionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  authorization?: (Scalars['String'] | null) | null;

  authorizationExpiresAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  errorCode?: (Scalars['String'] | null) | null;

  extendedAuthorizationAttributes?: (Scalars['JSON'] | null) | null;

  gateway?: (Scalars['String'] | null) | null;

  kind?: (Scalars['String'] | null) | null;

  message?: (Scalars['String'] | null) | null;

  paymentDetails?: (Scalars['JSON'] | null) | null;

  paymentId?: (Scalars['String'] | null) | null;

  paymentsRefundAttributes?: (Scalars['JSON'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  receipt?: (Scalars['JSON'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  totalUnsettledSet?: (Scalars['JSON'] | null) | null;

  location?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  parent?: InternalBelongsToInput | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyPriceRuleInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  allocationLimit?: (Scalars['Float'] | null) | null;

  allocationMethod?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSegmentPrerequisiteIds?: (Scalars['JSON'] | null) | null;

  customerSelection?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  entitledCollectionIds?: (Scalars['JSON'] | null) | null;

  entitledCountryIds?: (Scalars['JSON'] | null) | null;

  entitledProductIds?: (Scalars['JSON'] | null) | null;

  entitledVariantIds?: (Scalars['JSON'] | null) | null;

  oncePerCustomer?: (Scalars['Boolean'] | null) | null;

  prerequisiteCollectionIds?: (Scalars['JSON'] | null) | null;

  prerequisiteCustomerIds?: (Scalars['JSON'] | null) | null;

  prerequisiteProductIds?: (Scalars['JSON'] | null) | null;

  prerequisiteQuantityRange?: (Scalars['JSON'] | null) | null;

  prerequisiteShippingPriceRange?: (Scalars['JSON'] | null) | null;

  prerequisiteSubtotalRange?: (Scalars['JSON'] | null) | null;

  prerequisiteToEntitlementPurchase?: (Scalars['JSON'] | null) | null;

  prerequisiteToEntitlementQuantityRatio?: (Scalars['JSON'] | null) | null;

  prerequisiteVariants?: (Scalars['JSON'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  targetSelection?: (Scalars['String'] | null) | null;

  targetType?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageLimit?: (Scalars['Float'] | null) | null;

  value?: (Scalars['Float'] | null) | null;

  valueType?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyPriceRuleAtomicsInput | null;
};



export type InternalShopifyPriceRuleAtomicsInput = {

  /** Numeric atomic commands for operating on allocationLimit. */
  allocationLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usageLimit. */
  usageLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on value. */
  value?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  compareAtPriceRange?: (Scalars['JSON'] | null) | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyProductImageInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  alt?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  height?: (Scalars['Float'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  width?: (Scalars['Float'] | null) | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductImageAtomicsInput | null;
};



export type InternalShopifyProductImageAtomicsInput = {

  /** Numeric atomic commands for operating on height. */
  height?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on width. */
  width?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductOptionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  values?: (Scalars['JSON'] | null) | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductOptionAtomicsInput | null;
};



export type InternalShopifyProductOptionAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductVariantInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  barcode?: (Scalars['String'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  inventoryManagement?: (Scalars['String'] | null) | null;

  inventoryPolicy?: (Scalars['String'] | null) | null;

  inventoryQuantity?: (Scalars['Float'] | null) | null;

  inventoryQuantityAdjustment?: (Scalars['Float'] | null) | null;

  oldInventoryQuantity?: (Scalars['Float'] | null) | null;

  option1?: (Scalars['String'] | null) | null;

  option2?: (Scalars['String'] | null) | null;

  option3?: (Scalars['String'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  presentmentPrices?: (Scalars['JSON'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxCode?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weight?: (Scalars['Float'] | null) | null;

  weightUnit?: (Scalars['String'] | null) | null;

  inventoryItem?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  productImage?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductVariantAtomicsInput | null;
};



export type InternalShopifyProductVariantAtomicsInput = {

  /** Numeric atomic commands for operating on grams. */
  grams?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on inventoryQuantity. */
  inventoryQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on inventoryQuantityAdjustment. */
  inventoryQuantityAdjustment?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on oldInventoryQuantity. */
  oldInventoryQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on weight. */
  weight?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProvinceInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  tax?: (Scalars['Float'] | null) | null;

  taxName?: (Scalars['String'] | null) | null;

  taxPercentage?: (Scalars['Float'] | null) | null;

  taxType?: ShopifyProvinceTaxTypeEnum | null;

  country?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProvinceAtomicsInput | null;
};



export type InternalShopifyProvinceAtomicsInput = {

  /** Numeric atomic commands for operating on tax. */
  tax?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on taxPercentage. */
  taxPercentage?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyRefundInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  note?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  restock?: (Scalars['Boolean'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyRefundDutyInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amountSet?: (Scalars['JSON'] | null) | null;

  originalDuty?: InternalBelongsToInput | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyRefundLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  quantity?: (Scalars['Float'] | null) | null;

  restockType?: (Scalars['String'] | null) | null;

  subtotal?: (Scalars['Float'] | null) | null;

  subtotalSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['Float'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  location?: InternalBelongsToInput | null;

  orderLineItem?: InternalBelongsToInput | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyRefundLineItemAtomicsInput | null;
};



export type InternalShopifyRefundLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on subtotal. */
  subtotal?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on totalTax. */
  totalTax?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyScriptTagInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  cache?: (Scalars['Boolean'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  displayScope?: (Scalars['String'] | null) | null;

  event?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifySellingPlanInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  billingPolicy?: (Scalars['JSON'] | null) | null;

  category?: ShopifySellingPlanCategoryEnum | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  deliveryPolicy?: (Scalars['JSON'] | null) | null;

  description?: (Scalars['String'] | null) | null;

  inventoryPolicy?: (Scalars['JSON'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  options?: (Scalars['JSON'] | null) | null;

  position?: (Scalars['Int'] | null) | null;

  pricingPolicies?: (Scalars['JSON'] | null) | null;

  sellingPlanGroup?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifySellingPlanAtomicsInput | null;
};



export type InternalShopifySellingPlanAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifySellingPlanGroupInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appId?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  description?: (Scalars['String'] | null) | null;

  merchantCode?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  options?: (Scalars['JSON'] | null) | null;

  position?: (Scalars['Int'] | null) | null;

  summary?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifySellingPlanGroupAtomicsInput | null;
};



export type InternalShopifySellingPlanGroupAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifySellingPlanGroupProductInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  product?: InternalBelongsToInput | null;

  sellingPlanGroup?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifySellingPlanGroupProductVariantInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  productVariant?: InternalBelongsToInput | null;

  sellingPlanGroup?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyShippingLineInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  carrierIdentifier?: (Scalars['String'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  discountedPrice?: (Scalars['String'] | null) | null;

  discountedPriceSet?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  priceSet?: (Scalars['JSON'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  requestedFulfillmentService?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyShopInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerAccountsV2?: (Scalars['JSON'] | null) | null;

  accessToken?: (Scalars['String'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  grantedScopes?: (Scalars['JSON'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  installedViaApiKey?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  registeredWebhooks?: (Scalars['JSON'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  primaryLocation?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyShopAtomicsInput | null;
};



export type InternalShopifyShopAtomicsInput = {

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifySyncInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyTenderTransactionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  paymentDetails?: (Scalars['JSON'] | null) | null;

  paymentMethod?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  remoteReference?: (Scalars['String'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyThemeInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  previewable?: (Scalars['Boolean'] | null) | null;

  processing?: (Scalars['Boolean'] | null) | null;

  role?: (Scalars['String'] | null) | null;

  themeStoreId?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyThemeAtomicsInput | null;
};



export type InternalShopifyThemeAtomicsInput = {

  /** Numeric atomic commands for operating on themeStoreId. */
  themeStoreId?: (NumericAtomicFieldUpdateInput)[];
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;
  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;
  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSONValue;
  /** The ID of a record in Gadget */
  GadgetID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
  __typename: 'SimpleError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export type ExecutionError = {

  __typename: 'SimpleError'|'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
  __typename: 'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);
  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {

  __typename: 'InvalidFieldError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export type GadgetModel = {

  __typename: 'GadgetModel';

  key: Scalars['String'];

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  filterable: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  searchable: Scalars['Boolean'];

  fields: GadgetModelField[];

  actions: GadgetAction[];

  action: (GadgetAction | null);

  pluralName: Scalars['String'];

  pluralApiIdentifier: Scalars['String'];

  currentSingletonApiIdentifier: (Scalars['String'] | null);

  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;

  actions?: AvailableGadgetActionSelection;

  action?: AvailableGadgetActionSelection;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};


/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
  __typename: 'GadgetModelField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
  isUniqueField: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  examples: GadgetModelFieldExamples;
};



export type AvailableGadgetModelFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  examples?: AvailableGadgetModelFieldExamplesSelection;
};



export type GadgetField = {

  __typename: 'GadgetModelField'|'GadgetObjectField';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  fieldType: GadgetFieldType;

  hasDefault: Scalars['Boolean'];

  required: Scalars['Boolean'];

  requiredArgumentForInput: Scalars['Boolean'];

  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};


/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {

  __typename: 'GadgetGenericFieldConfig'|'GadgetObjectFieldConfig'|'GadgetBelongsToConfig'|'GadgetHasManyConfig'|'GadgetEnumConfig'|'GadgetDateTimeConfig';

  fieldType: GadgetFieldType;
};



export type AvailableGadgetFieldConfigInterfaceSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;
};



export type GadgetModelFieldExamples = {

  __typename: 'GadgetModelFieldExamples';

  linkExistingChild: (GadgetFieldUsageExample | null);

  linkNewChild: (GadgetFieldUsageExample | null);

  linkToExistingParent: (GadgetFieldUsageExample | null);

  createNestedInParent: (GadgetFieldUsageExample | null);
};



export type AvailableGadgetModelFieldExamplesSelection = {

  __typename?: boolean | null | undefined;

  linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;

  linkNewChild?: AvailableGadgetFieldUsageExampleSelection;

  linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;

  createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};



export type GadgetFieldUsageExample = {

  __typename: 'GadgetFieldUsageExample';

  exampleGraphQLMutation: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetFieldUsageExampleSelection = {

  __typename?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};



export type GadgetAction = {

  __typename: 'GadgetAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars['Boolean'];

  isDeleteAction: Scalars['Boolean'];

  isCreateOrUpdateAction: Scalars['Boolean'];

  operatesWithRecordIdentity: Scalars['Boolean'];

  possibleTransitions: Scalars['JSONObject'];

  availableInBulk: Scalars['Boolean'];

  bulkApiIdentifier: (Scalars['String'] | null);

  hasAmbiguousIdentifier: Scalars['Boolean'];

  inputFields: GadgetObjectField[];

  bulkInvokedByIDOnly: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect?: boolean | null | undefined;

  isDeleteAction?: boolean | null | undefined;

  isCreateOrUpdateAction?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  hasAmbiguousIdentifier?: boolean | null | undefined;

  inputFields?: AvailableGadgetObjectFieldSelection;

  bulkInvokedByIDOnly?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};


/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
  __typename: 'GadgetObjectField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetObjectFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};



export type GadgetTrigger = {

  __typename: 'GadgetTrigger';

  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export type GadgetActionGraphQLType = {

  __typename: 'GadgetActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation: (Scalars['String'] | null);

  exampleBulkGraphQLMutation: (Scalars['String'] | null);

  exampleBulkGraphQLVariables: (Scalars['JSON'] | null);

  exampleBulkImperativeInvocation: (Scalars['String'] | null);

  exampleBulkReactHook: (Scalars['String'] | null);

  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation?: boolean | null | undefined;

  exampleBulkGraphQLMutation?: boolean | null | undefined;

  exampleBulkGraphQLVariables?: boolean | null | undefined;

  exampleBulkImperativeInvocation?: boolean | null | undefined;

  exampleBulkReactHook?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetGenericFieldConfig';
  fieldType: GadgetFieldType;
};



export type AvailableGadgetGenericFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;
};



export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetObjectFieldConfig';
  fieldType: GadgetFieldType;
  name: (Scalars['String'] | null);
  fields: GadgetModelField[];
};



export type AvailableGadgetObjectFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  name?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;
};



export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetBelongsToConfig';
  fieldType: GadgetFieldType;
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetBelongsToConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyConfig';
  fieldType: GadgetFieldType;
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetHasManyConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetEnumConfig';
  fieldType: GadgetFieldType;
  allowMultiple: Scalars['Boolean'];
  allowOther: Scalars['Boolean'];
  options: GadgetEnumOption[];
};



export type AvailableGadgetEnumConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  allowMultiple?: boolean | null | undefined;

  allowOther?: boolean | null | undefined;

  options?: AvailableGadgetEnumOptionSelection;
};



export type GadgetEnumOption = {

  __typename: 'GadgetEnumOption';

  name: Scalars['String'];

  color: Scalars['String'];
};



export type AvailableGadgetEnumOptionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  color?: boolean | null | undefined;
};



export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetDateTimeConfig';
  fieldType: GadgetFieldType;
  includeTime: Scalars['Boolean'];
};



export type AvailableGadgetDateTimeConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  includeTime?: boolean | null | undefined;
};



export type Query = {

  __typename: 'Query';

  user: (User | null);

  users: UserConnection;

  session: (Session | null);

  sessions: SessionConnection;

  shopifyAsset: (ShopifyAsset | null);

  shopifyAssets: ShopifyAssetConnection;

  shopifyBulkOperation: (ShopifyBulkOperation | null);

  shopifyBulkOperations: ShopifyBulkOperationConnection;

  shopifyCarrierService: (ShopifyCarrierService | null);

  shopifyCarrierServices: ShopifyCarrierServiceConnection;

  shopifyCart: (ShopifyCart | null);

  shopifyCarts: ShopifyCartConnection;

  shopifyCollect: (ShopifyCollect | null);

  shopifyCollects: ShopifyCollectConnection;

  shopifyCollection: (ShopifyCollection | null);

  shopifyCollections: ShopifyCollectionConnection;

  shopifyCountry: (ShopifyCountry | null);

  shopifyCountries: ShopifyCountryConnection;

  shopifyCustomer: (ShopifyCustomer | null);

  shopifyCustomers: ShopifyCustomerConnection;

  shopifyCustomerAddress: (ShopifyCustomerAddress | null);

  shopifyCustomerAddresses: ShopifyCustomerAddressConnection;

  shopifyCustomerMergeable: (ShopifyCustomerMergeable | null);

  shopifyCustomerMergeables: ShopifyCustomerMergeableConnection;

  shopifyCustomerPaymentMethod: (ShopifyCustomerPaymentMethod | null);

  shopifyCustomerPaymentMethods: ShopifyCustomerPaymentMethodConnection;

  shopifyDiscount: (ShopifyDiscount | null);

  shopifyDiscounts: ShopifyDiscountConnection;

  shopifyDiscountCode: (ShopifyDiscountCode | null);

  shopifyDiscountCodes: ShopifyDiscountCodeConnection;

  shopifyDraftOrder: (ShopifyDraftOrder | null);

  shopifyDraftOrders: ShopifyDraftOrderConnection;

  shopifyDraftOrderLineItem: (ShopifyDraftOrderLineItem | null);

  shopifyDraftOrderLineItems: ShopifyDraftOrderLineItemConnection;

  shopifyDuty: (ShopifyDuty | null);

  shopifyDuties: ShopifyDutyConnection;

  shopifyFile: (ShopifyFile | null);

  shopifyFiles: ShopifyFileConnection;

  shopifyFulfillment: (ShopifyFulfillment | null);

  shopifyFulfillments: ShopifyFulfillmentConnection;

  shopifyFulfillmentEvent: (ShopifyFulfillmentEvent | null);

  shopifyFulfillmentEvents: ShopifyFulfillmentEventConnection;

  shopifyFulfillmentLineItem: (ShopifyFulfillmentLineItem | null);

  shopifyFulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  shopifyFulfillmentOrder: (ShopifyFulfillmentOrder | null);

  shopifyFulfillmentOrders: ShopifyFulfillmentOrderConnection;

  shopifyFulfillmentOrderLineItem: (ShopifyFulfillmentOrderLineItem | null);

  shopifyFulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  shopifyFulfillmentService: (ShopifyFulfillmentService | null);

  shopifyFulfillmentServices: ShopifyFulfillmentServiceConnection;

  shopifyGdprRequest: (ShopifyGdprRequest | null);

  shopifyGdprRequests: ShopifyGdprRequestConnection;

  shopifyInventoryItem: (ShopifyInventoryItem | null);

  shopifyInventoryItems: ShopifyInventoryItemConnection;

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shopifyLocation: (ShopifyLocation | null);

  shopifyLocations: ShopifyLocationConnection;

  shopifyOrder: (ShopifyOrder | null);

  shopifyOrders: ShopifyOrderConnection;

  shopifyOrderAdjustment: (ShopifyOrderAdjustment | null);

  shopifyOrderAdjustments: ShopifyOrderAdjustmentConnection;

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);

  shopifyOrderLineItems: ShopifyOrderLineItemConnection;

  shopifyOrderRisk: (ShopifyOrderRisk | null);

  shopifyOrderRisks: ShopifyOrderRiskConnection;

  shopifyOrderTransaction: (ShopifyOrderTransaction | null);

  shopifyOrderTransactions: ShopifyOrderTransactionConnection;

  shopifyPriceRule: (ShopifyPriceRule | null);

  shopifyPriceRules: ShopifyPriceRuleConnection;

  shopifyProduct: (ShopifyProduct | null);

  shopifyProducts: ShopifyProductConnection;

  shopifyProductImage: (ShopifyProductImage | null);

  shopifyProductImages: ShopifyProductImageConnection;

  shopifyProductOption: (ShopifyProductOption | null);

  shopifyProductOptions: ShopifyProductOptionConnection;

  shopifyProductVariant: (ShopifyProductVariant | null);

  shopifyProductVariants: ShopifyProductVariantConnection;

  shopifyProvince: (ShopifyProvince | null);

  shopifyProvinces: ShopifyProvinceConnection;

  shopifyRefund: (ShopifyRefund | null);

  shopifyRefunds: ShopifyRefundConnection;

  shopifyRefundDuty: (ShopifyRefundDuty | null);

  shopifyRefundDuties: ShopifyRefundDutyConnection;

  shopifyRefundLineItem: (ShopifyRefundLineItem | null);

  shopifyRefundLineItems: ShopifyRefundLineItemConnection;

  shopifyScriptTag: (ShopifyScriptTag | null);

  shopifyScriptTags: ShopifyScriptTagConnection;

  shopifySellingPlan: (ShopifySellingPlan | null);

  shopifySellingPlans: ShopifySellingPlanConnection;

  shopifySellingPlanGroup: (ShopifySellingPlanGroup | null);

  shopifySellingPlanGroups: ShopifySellingPlanGroupConnection;

  shopifySellingPlanGroupProduct: (ShopifySellingPlanGroupProduct | null);

  shopifySellingPlanGroupProducts: ShopifySellingPlanGroupProductConnection;

  shopifySellingPlanGroupProductVariant: (ShopifySellingPlanGroupProductVariant | null);

  shopifySellingPlanGroupProductVariants: ShopifySellingPlanGroupProductVariantConnection;

  shopifyShippingLine: (ShopifyShippingLine | null);

  shopifyShippingLines: ShopifyShippingLineConnection;

  shopifyShop: (ShopifyShop | null);

  shopifyShops: ShopifyShopConnection;

  shopifySync: (ShopifySync | null);

  shopifySyncs: ShopifySyncConnection;

  shopifyTenderTransaction: (ShopifyTenderTransaction | null);

  shopifyTenderTransactions: ShopifyTenderTransactionConnection;

  shopifyTheme: (ShopifyTheme | null);

  shopifyThemes: ShopifyThemeConnection;

  internal: (InternalQueries | null);

  currentSession: (Session | null);

  shopifyConnection: Shopify;
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  user?: AvailableUserSelection;

  users?: AvailableUserConnectionSelection;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  shopifyAsset?: AvailableShopifyAssetSelection;

  shopifyAssets?: AvailableShopifyAssetConnectionSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;

  shopifyBulkOperations?: AvailableShopifyBulkOperationConnectionSelection;

  shopifyCarrierService?: AvailableShopifyCarrierServiceSelection;

  shopifyCarrierServices?: AvailableShopifyCarrierServiceConnectionSelection;

  shopifyCart?: AvailableShopifyCartSelection;

  shopifyCarts?: AvailableShopifyCartConnectionSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;

  shopifyCollections?: AvailableShopifyCollectionConnectionSelection;

  shopifyCountry?: AvailableShopifyCountrySelection;

  shopifyCountries?: AvailableShopifyCountryConnectionSelection;

  shopifyCustomer?: AvailableShopifyCustomerSelection;

  shopifyCustomers?: AvailableShopifyCustomerConnectionSelection;

  shopifyCustomerAddress?: AvailableShopifyCustomerAddressSelection;

  shopifyCustomerAddresses?: AvailableShopifyCustomerAddressConnectionSelection;

  shopifyCustomerMergeable?: AvailableShopifyCustomerMergeableSelection;

  shopifyCustomerMergeables?: AvailableShopifyCustomerMergeableConnectionSelection;

  shopifyCustomerPaymentMethod?: AvailableShopifyCustomerPaymentMethodSelection;

  shopifyCustomerPaymentMethods?: AvailableShopifyCustomerPaymentMethodConnectionSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;

  shopifyDiscounts?: AvailableShopifyDiscountConnectionSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;

  shopifyDiscountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shopifyDraftOrder?: AvailableShopifyDraftOrderSelection;

  shopifyDraftOrders?: AvailableShopifyDraftOrderConnectionSelection;

  shopifyDraftOrderLineItem?: AvailableShopifyDraftOrderLineItemSelection;

  shopifyDraftOrderLineItems?: AvailableShopifyDraftOrderLineItemConnectionSelection;

  shopifyDuty?: AvailableShopifyDutySelection;

  shopifyDuties?: AvailableShopifyDutyConnectionSelection;

  shopifyFile?: AvailableShopifyFileSelection;

  shopifyFiles?: AvailableShopifyFileConnectionSelection;

  shopifyFulfillment?: AvailableShopifyFulfillmentSelection;

  shopifyFulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  shopifyFulfillmentEvent?: AvailableShopifyFulfillmentEventSelection;

  shopifyFulfillmentEvents?: AvailableShopifyFulfillmentEventConnectionSelection;

  shopifyFulfillmentLineItem?: AvailableShopifyFulfillmentLineItemSelection;

  shopifyFulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  shopifyFulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;

  shopifyFulfillmentOrders?: AvailableShopifyFulfillmentOrderConnectionSelection;

  shopifyFulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemSelection;

  shopifyFulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  shopifyFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;

  shopifyFulfillmentServices?: AvailableShopifyFulfillmentServiceConnectionSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;

  shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;

  shopifyInventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;

  shopifyLocations?: AvailableShopifyLocationConnectionSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;

  shopifyOrders?: AvailableShopifyOrderConnectionSelection;

  shopifyOrderAdjustment?: AvailableShopifyOrderAdjustmentSelection;

  shopifyOrderAdjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;

  shopifyOrderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  shopifyOrderRisk?: AvailableShopifyOrderRiskSelection;

  shopifyOrderRisks?: AvailableShopifyOrderRiskConnectionSelection;

  shopifyOrderTransaction?: AvailableShopifyOrderTransactionSelection;

  shopifyOrderTransactions?: AvailableShopifyOrderTransactionConnectionSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;

  shopifyPriceRules?: AvailableShopifyPriceRuleConnectionSelection;

  shopifyProduct?: AvailableShopifyProductSelection;

  shopifyProducts?: AvailableShopifyProductConnectionSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;

  shopifyProductImages?: AvailableShopifyProductImageConnectionSelection;

  shopifyProductOption?: AvailableShopifyProductOptionSelection;

  shopifyProductOptions?: AvailableShopifyProductOptionConnectionSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;

  shopifyProductVariants?: AvailableShopifyProductVariantConnectionSelection;

  shopifyProvince?: AvailableShopifyProvinceSelection;

  shopifyProvinces?: AvailableShopifyProvinceConnectionSelection;

  shopifyRefund?: AvailableShopifyRefundSelection;

  shopifyRefunds?: AvailableShopifyRefundConnectionSelection;

  shopifyRefundDuty?: AvailableShopifyRefundDutySelection;

  shopifyRefundDuties?: AvailableShopifyRefundDutyConnectionSelection;

  shopifyRefundLineItem?: AvailableShopifyRefundLineItemSelection;

  shopifyRefundLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  shopifyScriptTag?: AvailableShopifyScriptTagSelection;

  shopifyScriptTags?: AvailableShopifyScriptTagConnectionSelection;

  shopifySellingPlan?: AvailableShopifySellingPlanSelection;

  shopifySellingPlans?: AvailableShopifySellingPlanConnectionSelection;

  shopifySellingPlanGroup?: AvailableShopifySellingPlanGroupSelection;

  shopifySellingPlanGroups?: AvailableShopifySellingPlanGroupConnectionSelection;

  shopifySellingPlanGroupProduct?: AvailableShopifySellingPlanGroupProductSelection;

  shopifySellingPlanGroupProducts?: AvailableShopifySellingPlanGroupProductConnectionSelection;

  shopifySellingPlanGroupProductVariant?: AvailableShopifySellingPlanGroupProductVariantSelection;

  shopifySellingPlanGroupProductVariants?: AvailableShopifySellingPlanGroupProductVariantConnectionSelection;

  shopifyShippingLine?: AvailableShopifyShippingLineSelection;

  shopifyShippingLines?: AvailableShopifyShippingLineConnectionSelection;

  shopifyShop?: AvailableShopifyShopSelection;

  shopifyShops?: AvailableShopifyShopConnectionSelection;

  shopifySync?: AvailableShopifySyncSelection;

  shopifySyncs?: AvailableShopifySyncConnectionSelection;

  shopifyTenderTransaction?: AvailableShopifyTenderTransactionSelection;

  shopifyTenderTransactions?: AvailableShopifyTenderTransactionConnectionSelection;

  shopifyTheme?: AvailableShopifyThemeSelection;

  shopifyThemes?: AvailableShopifyThemeConnectionSelection;

  internal?: AvailableInternalQueriesSelection;

  currentSession?: AvailableSessionSelection;

  shopifyConnection?: AvailableShopifySelection;
};



export type User = {

  __typename: 'User';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  googleProfileId: (Scalars['String'] | null);

  googleImageUrl: (Scalars['URL'] | null);

  firstName: (Scalars['String'] | null);

  lastSignedIn: (Scalars['DateTime'] | null);

  emailVerified: (Scalars['Boolean'] | null);

  resetPasswordTokenExpiration: (Scalars['DateTime'] | null);

  lastName: (Scalars['String'] | null);

  roles: Role[];

  emailVerificationToken: (Scalars['String'] | null);

  resetPasswordToken: (Scalars['String'] | null);

  emailVerificationTokenExpiration: (Scalars['DateTime'] | null);

  email: Scalars['EmailAddress'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableUserSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  googleProfileId?: boolean | null | undefined;

  googleImageUrl?: boolean | null | undefined;

  firstName?: boolean | null | undefined;

  lastSignedIn?: boolean | null | undefined;

  emailVerified?: boolean | null | undefined;

  resetPasswordTokenExpiration?: boolean | null | undefined;

  lastName?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  emailVerificationToken?: boolean | null | undefined;

  resetPasswordToken?: boolean | null | undefined;

  emailVerificationTokenExpiration?: boolean | null | undefined;

  email?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {

  __typename: 'Role';

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars['String'];

  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};


/** A connection to a list of User items. */
export type UserConnection = {

  __typename: 'UserConnection';

  /** A list of edges. */
  edges: UserEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableUserConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableUserEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a User connection. */
export type UserEdge = {

  __typename: 'UserEdge';

  /** The item at the end of the edge */
  node: User;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableUserEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableUserSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export type PageInfo = {

  __typename: 'PageInfo';

  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];

  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];

  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);

  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};



export type Session = {

  __typename: 'Session';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: (Scalars['GadgetID'] | null);

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  user: (User | null);

  userId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopifySID: (Scalars['String'] | null);

  roles: Role[];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  user?: AvailableUserSelection;

  userId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopifySID?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyShop = {

  __typename: 'ShopifyShop';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  refundLineItems: ShopifyRefundLineItemConnection;

  orderAdjustments: ShopifyOrderAdjustmentConnection;

  orderLineItems: ShopifyOrderLineItemConnection;

  gdprRequests: ShopifyGdprRequestConnection;

  sellingPlanGroups: ShopifySellingPlanGroupConnection;

  draftOrders: ShopifyDraftOrderConnection;

  draftOrderLineItems: ShopifyDraftOrderLineItemConnection;

  duties: ShopifyDutyConnection;

  orderRisks: ShopifyOrderRiskConnection;

  collects: ShopifyCollectConnection;

  bulkOperations: ShopifyBulkOperationConnection;

  sellingPlans: ShopifySellingPlanConnection;

  customerAddresses: ShopifyCustomerAddressConnection;

  scriptTags: ShopifyScriptTagConnection;

  orders: ShopifyOrderConnection;

  collections: ShopifyCollectionConnection;

  inventoryItems: ShopifyInventoryItemConnection;

  inventoryLevels: ShopifyInventoryLevelConnection;

  discountCodes: ShopifyDiscountCodeConnection;

  shippingLines: ShopifyShippingLineConnection;

  sellingPlanGroupsProductVariants: ShopifySellingPlanGroupProductVariantConnection;

  provinces: ShopifyProvinceConnection;

  refundDuties: ShopifyRefundDutyConnection;

  syncs: ShopifySyncConnection;

  fulfillmentOrders: ShopifyFulfillmentOrderConnection;

  customerMergeables: ShopifyCustomerMergeableConnection;

  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  assets: ShopifyAssetConnection;

  customerPaymentMethods: ShopifyCustomerPaymentMethodConnection;

  customerAccountsV2: (Scalars['JSON'] | null);

  /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
  accessToken: (Scalars['String'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  themes: ShopifyThemeConnection;

  checkoutApiSupported: (Scalars['Boolean'] | null);

  city: (Scalars['String'] | null);

  cookieConsentLevel: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  countyTaxes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  customerEmail: (Scalars['String'] | null);

  fulfillmentServices: ShopifyFulfillmentServiceConnection;

  domain: (Scalars['String'] | null);

  eligibleForCardReaderGiveaway: (Scalars['Boolean'] | null);

  eligibleForPayments: (Scalars['Boolean'] | null);

  email: (Scalars['String'] | null);

  enabledPresentmentCurrencies: (Scalars['JSON'] | null);

  finances: (Scalars['Boolean'] | null);

  forceSsl: (Scalars['Boolean'] | null);

  googleAppsDomain: (Scalars['String'] | null);

  googleAppsLoginEnabled: (Scalars['Boolean'] | null);

  grantedScopes: (Scalars['JSON'] | null);

  hasDiscounts: (Scalars['Boolean'] | null);

  hasGiftCards: (Scalars['Boolean'] | null);

  hasStorefront: (Scalars['Boolean'] | null);

  fulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  ianaTimezone: (Scalars['String'] | null);

  installedViaApiKey: (Scalars['String'] | null);

  discounts: ShopifyDiscountConnection;

  customers: ShopifyCustomerConnection;

  priceRules: ShopifyPriceRuleConnection;

  fulfillmentEvents: ShopifyFulfillmentEventConnection;

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);

  moneyFormat: (Scalars['String'] | null);

  moneyInEmailsFormat: (Scalars['String'] | null);

  moneyWithCurrencyFormat: (Scalars['String'] | null);

  moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);

  multiLocationEnabled: (Scalars['Boolean'] | null);

  myshopifyDomain: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  productOptions: ShopifyProductOptionConnection;

  passwordEnabled: (Scalars['Boolean'] | null);

  phone: (Scalars['String'] | null);

  planDisplayName: (Scalars['String'] | null);

  planName: (Scalars['String'] | null);

  preLaunchEnabled: (Scalars['Boolean'] | null);

  primaryLocale: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  registeredWebhooks: (Scalars['JSON'] | null);

  requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);

  setupRequired: (Scalars['Boolean'] | null);

  shopOwner: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  sellingPlanGroupsProducts: ShopifySellingPlanGroupProductConnection;

  carrierServices: ShopifyCarrierServiceConnection;

  carts: ShopifyCartConnection;

  orderTransactions: ShopifyOrderTransactionConnection;

  taxShipping: (Scalars['Boolean'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  timezone: (Scalars['String'] | null);

  transactionalSmsDisabled: (Scalars['Boolean'] | null);

  refunds: ShopifyRefundConnection;

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  files: ShopifyFileConnection;

  weightUnit: (Scalars['String'] | null);

  productVariants: ShopifyProductVariantConnection;

  products: ShopifyProductConnection;

  countries: ShopifyCountryConnection;

  productImages: ShopifyProductImageConnection;

  fulfillments: ShopifyFulfillmentConnection;

  locations: ShopifyLocationConnection;

  zipCode: (Scalars['String'] | null);

  tenderTransactions: ShopifyTenderTransactionConnection;

  primaryLocation: (ShopifyLocation | null);

  primaryLocationId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShopSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  refundLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  orderAdjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  sellingPlanGroups?: AvailableShopifySellingPlanGroupConnectionSelection;

  draftOrders?: AvailableShopifyDraftOrderConnectionSelection;

  draftOrderLineItems?: AvailableShopifyDraftOrderLineItemConnectionSelection;

  duties?: AvailableShopifyDutyConnectionSelection;

  orderRisks?: AvailableShopifyOrderRiskConnectionSelection;

  collects?: AvailableShopifyCollectConnectionSelection;

  bulkOperations?: AvailableShopifyBulkOperationConnectionSelection;

  sellingPlans?: AvailableShopifySellingPlanConnectionSelection;

  customerAddresses?: AvailableShopifyCustomerAddressConnectionSelection;

  scriptTags?: AvailableShopifyScriptTagConnectionSelection;

  orders?: AvailableShopifyOrderConnectionSelection;

  collections?: AvailableShopifyCollectionConnectionSelection;

  inventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  inventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  discountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shippingLines?: AvailableShopifyShippingLineConnectionSelection;

  sellingPlanGroupsProductVariants?: AvailableShopifySellingPlanGroupProductVariantConnectionSelection;

  provinces?: AvailableShopifyProvinceConnectionSelection;

  refundDuties?: AvailableShopifyRefundDutyConnectionSelection;

  syncs?: AvailableShopifySyncConnectionSelection;

  fulfillmentOrders?: AvailableShopifyFulfillmentOrderConnectionSelection;

  customerMergeables?: AvailableShopifyCustomerMergeableConnectionSelection;

  fulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  assets?: AvailableShopifyAssetConnectionSelection;

  customerPaymentMethods?: AvailableShopifyCustomerPaymentMethodConnectionSelection;

  customerAccountsV2?: boolean | null | undefined;

  /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
  accessToken?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  themes?: AvailableShopifyThemeConnectionSelection;

  checkoutApiSupported?: boolean | null | undefined;

  city?: boolean | null | undefined;

  cookieConsentLevel?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  countyTaxes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerEmail?: boolean | null | undefined;

  fulfillmentServices?: AvailableShopifyFulfillmentServiceConnectionSelection;

  domain?: boolean | null | undefined;

  eligibleForCardReaderGiveaway?: boolean | null | undefined;

  eligibleForPayments?: boolean | null | undefined;

  email?: boolean | null | undefined;

  enabledPresentmentCurrencies?: boolean | null | undefined;

  finances?: boolean | null | undefined;

  forceSsl?: boolean | null | undefined;

  googleAppsDomain?: boolean | null | undefined;

  googleAppsLoginEnabled?: boolean | null | undefined;

  grantedScopes?: boolean | null | undefined;

  hasDiscounts?: boolean | null | undefined;

  hasGiftCards?: boolean | null | undefined;

  hasStorefront?: boolean | null | undefined;

  fulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  ianaTimezone?: boolean | null | undefined;

  installedViaApiKey?: boolean | null | undefined;

  discounts?: AvailableShopifyDiscountConnectionSelection;

  customers?: AvailableShopifyCustomerConnectionSelection;

  priceRules?: AvailableShopifyPriceRuleConnectionSelection;

  fulfillmentEvents?: AvailableShopifyFulfillmentEventConnectionSelection;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;

  moneyFormat?: boolean | null | undefined;

  moneyInEmailsFormat?: boolean | null | undefined;

  moneyWithCurrencyFormat?: boolean | null | undefined;

  moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;

  multiLocationEnabled?: boolean | null | undefined;

  myshopifyDomain?: boolean | null | undefined;

  name?: boolean | null | undefined;

  productOptions?: AvailableShopifyProductOptionConnectionSelection;

  passwordEnabled?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  planDisplayName?: boolean | null | undefined;

  planName?: boolean | null | undefined;

  preLaunchEnabled?: boolean | null | undefined;

  primaryLocale?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  registeredWebhooks?: boolean | null | undefined;

  requiresExtraPaymentsAgreement?: boolean | null | undefined;

  setupRequired?: boolean | null | undefined;

  shopOwner?: boolean | null | undefined;

  source?: boolean | null | undefined;

  sellingPlanGroupsProducts?: AvailableShopifySellingPlanGroupProductConnectionSelection;

  carrierServices?: AvailableShopifyCarrierServiceConnectionSelection;

  carts?: AvailableShopifyCartConnectionSelection;

  orderTransactions?: AvailableShopifyOrderTransactionConnectionSelection;

  taxShipping?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  timezone?: boolean | null | undefined;

  transactionalSmsDisabled?: boolean | null | undefined;

  refunds?: AvailableShopifyRefundConnectionSelection;

  shopifyUpdatedAt?: boolean | null | undefined;

  files?: AvailableShopifyFileConnectionSelection;

  weightUnit?: boolean | null | undefined;

  productVariants?: AvailableShopifyProductVariantConnectionSelection;

  products?: AvailableShopifyProductConnectionSelection;

  countries?: AvailableShopifyCountryConnectionSelection;

  productImages?: AvailableShopifyProductImageConnectionSelection;

  fulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  locations?: AvailableShopifyLocationConnectionSelection;

  zipCode?: boolean | null | undefined;

  tenderTransactions?: AvailableShopifyTenderTransactionConnectionSelection;

  primaryLocation?: AvailableShopifyLocationSelection;

  primaryLocationId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRefundLineItem items. */
export type ShopifyRefundLineItemConnection = {

  __typename: 'ShopifyRefundLineItemConnection';

  /** A list of edges. */
  edges: ShopifyRefundLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRefundLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRefundLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRefundLineItem connection. */
export type ShopifyRefundLineItemEdge = {

  __typename: 'ShopifyRefundLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyRefundLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRefundLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRefundLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyRefundLineItem = {

  __typename: 'ShopifyRefundLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  quantity: (Scalars['Float'] | null);

  restockType: (Scalars['String'] | null);

  subtotal: (Scalars['Float'] | null);

  subtotalSet: (Scalars['JSON'] | null);

  totalTax: (Scalars['Float'] | null);

  totalTaxSet: (Scalars['JSON'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRefundLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  restockType?: boolean | null | undefined;

  subtotal?: boolean | null | undefined;

  subtotalSet?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  totalTaxSet?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyLocation = {

  __typename: 'ShopifyLocation';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  refundedLineItems: ShopifyRefundLineItemConnection;

  orderLineItems: ShopifyOrderLineItemConnection;

  fulfillments: ShopifyFulfillmentConnection;

  orderTransactions: ShopifyOrderTransactionConnection;

  active: (Scalars['Boolean'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  city: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  legacy: (Scalars['Boolean'] | null);

  localizedCountryName: (Scalars['String'] | null);

  localizedProvinceName: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  phone: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  fulfillmentServices: ShopifyFulfillmentServiceConnection;

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  orders: ShopifyOrderConnection;

  zipCode: (Scalars['String'] | null);

  inventoryItems: ShopifyInventoryItemConnection;

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyLocationSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  refundedLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  fulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  orderTransactions?: AvailableShopifyOrderTransactionConnectionSelection;

  active?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  city?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  legacy?: boolean | null | undefined;

  localizedCountryName?: boolean | null | undefined;

  localizedProvinceName?: boolean | null | undefined;

  name?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  fulfillmentServices?: AvailableShopifyFulfillmentServiceConnectionSelection;

  shopifyUpdatedAt?: boolean | null | undefined;

  orders?: AvailableShopifyOrderConnectionSelection;

  zipCode?: boolean | null | undefined;

  inventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderLineItem items. */
export type ShopifyOrderLineItemConnection = {

  __typename: 'ShopifyOrderLineItemConnection';

  /** A list of edges. */
  edges: ShopifyOrderLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderLineItem connection. */
export type ShopifyOrderLineItemEdge = {

  __typename: 'ShopifyOrderLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderLineItem = {

  __typename: 'ShopifyOrderLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  refunds: ShopifyRefundLineItemConnection;

  attributedStaffs: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  discountAllocations: (Scalars['JSON'] | null);

  duties: ShopifyDutyConnection;

  giftCard: (Scalars['Boolean'] | null);

  name: (Scalars['String'] | null);

  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  price: (Scalars['String'] | null);

  priceSet: (Scalars['JSON'] | null);

  properties: (Scalars['JSON'] | null);

  quantity: (Scalars['Float'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  totalDiscount: (Scalars['String'] | null);

  totalDiscountSet: (Scalars['JSON'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  variantTitle: (Scalars['String'] | null);

  vendor: (Scalars['String'] | null);

  fulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  originLocation: (ShopifyLocation | null);

  originLocationId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  variant: (ShopifyProductVariant | null);

  variantId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  refunds?: AvailableShopifyRefundLineItemConnectionSelection;

  attributedStaffs?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  discountAllocations?: boolean | null | undefined;

  duties?: AvailableShopifyDutyConnectionSelection;

  giftCard?: boolean | null | undefined;

  name?: boolean | null | undefined;

  fulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  price?: boolean | null | undefined;

  priceSet?: boolean | null | undefined;

  properties?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  totalDiscount?: boolean | null | undefined;

  totalDiscountSet?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  variantTitle?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  fulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  originLocation?: AvailableShopifyLocationSelection;

  originLocationId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  variant?: AvailableShopifyProductVariantSelection;

  variantId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDuty items. */
export type ShopifyDutyConnection = {

  __typename: 'ShopifyDutyConnection';

  /** A list of edges. */
  edges: ShopifyDutyEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDutyConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDutyEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDuty connection. */
export type ShopifyDutyEdge = {

  __typename: 'ShopifyDutyEdge';

  /** The item at the end of the edge */
  node: ShopifyDuty;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDutyEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDutySelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDuty = {

  __typename: 'ShopifyDuty';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  refundDuty: (ShopifyRefundDuty | null);

  countryCodeOfOrigin: (Scalars['String'] | null);

  harmonizedSystemCode: (Scalars['String'] | null);

  presentmentMoney: (Scalars['JSON'] | null);

  shopMoney: (Scalars['JSON'] | null);

  taxLines: (Scalars['JSON'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDutySelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  refundDuty?: AvailableShopifyRefundDutySelection;

  countryCodeOfOrigin?: boolean | null | undefined;

  harmonizedSystemCode?: boolean | null | undefined;

  presentmentMoney?: boolean | null | undefined;

  shopMoney?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyRefundDuty = {

  __typename: 'ShopifyRefundDuty';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amountSet: (Scalars['JSON'] | null);

  originalDuty: (ShopifyDuty | null);

  originalDutyId: (Scalars['GadgetID'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRefundDutySelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amountSet?: boolean | null | undefined;

  originalDuty?: AvailableShopifyDutySelection;

  originalDutyId?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyRefund = {

  __typename: 'ShopifyRefund';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  duties: ShopifyRefundDutyConnection;

  note: (Scalars['String'] | null);

  orderAdjustments: ShopifyOrderAdjustmentConnection;

  processedAt: (Scalars['DateTime'] | null);

  refundLineItems: ShopifyRefundLineItemConnection;

  restock: (Scalars['Boolean'] | null);

  transactions: ShopifyOrderTransactionConnection;

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRefundSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  duties?: AvailableShopifyRefundDutyConnectionSelection;

  note?: boolean | null | undefined;

  orderAdjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  processedAt?: boolean | null | undefined;

  refundLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  restock?: boolean | null | undefined;

  transactions?: AvailableShopifyOrderTransactionConnectionSelection;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRefundDuty items. */
export type ShopifyRefundDutyConnection = {

  __typename: 'ShopifyRefundDutyConnection';

  /** A list of edges. */
  edges: ShopifyRefundDutyEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRefundDutyConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRefundDutyEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRefundDuty connection. */
export type ShopifyRefundDutyEdge = {

  __typename: 'ShopifyRefundDutyEdge';

  /** The item at the end of the edge */
  node: ShopifyRefundDuty;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRefundDutyEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRefundDutySelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderAdjustment items. */
export type ShopifyOrderAdjustmentConnection = {

  __typename: 'ShopifyOrderAdjustmentConnection';

  /** A list of edges. */
  edges: ShopifyOrderAdjustmentEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderAdjustmentConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderAdjustmentEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderAdjustment connection. */
export type ShopifyOrderAdjustmentEdge = {

  __typename: 'ShopifyOrderAdjustmentEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderAdjustment;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderAdjustmentEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderAdjustmentSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderAdjustment = {

  __typename: 'ShopifyOrderAdjustment';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amount: (Scalars['String'] | null);

  amountSet: (Scalars['JSON'] | null);

  kind: (Scalars['String'] | null);

  reason: (Scalars['String'] | null);

  taxAmount: (Scalars['String'] | null);

  taxAmountSet: (Scalars['JSON'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderAdjustmentSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  amountSet?: boolean | null | undefined;

  kind?: boolean | null | undefined;

  reason?: boolean | null | undefined;

  taxAmount?: boolean | null | undefined;

  taxAmountSet?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyOrder = {

  __typename: 'ShopifyOrder';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  adjustments: ShopifyOrderAdjustmentConnection;

  risks: ShopifyOrderRiskConnection;

  refunds: ShopifyRefundConnection;

  additionalFees: (Scalars['JSON'] | null);

  cancellation: (Scalars['JSON'] | null);

  shopifyProtect: (Scalars['JSON'] | null);

  transactions: ShopifyOrderTransactionConnection;

  billingAddress: (Scalars['JSON'] | null);

  browserIp: (Scalars['String'] | null);

  buyerAcceptsMarketing: (Scalars['Boolean'] | null);

  cancelReason: (Scalars['String'] | null);

  cancelledAt: (Scalars['DateTime'] | null);

  cartToken: (Scalars['String'] | null);

  checkoutToken: (Scalars['String'] | null);

  clientDetails: (Scalars['JSON'] | null);

  closedAt: (Scalars['DateTime'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  currentSubtotalPrice: (Scalars['String'] | null);

  currentSubtotalPriceSet: (Scalars['JSON'] | null);

  currentTotalAdditionalFeesSet: (Scalars['JSON'] | null);

  currentTotalDiscounts: (Scalars['String'] | null);

  currentTotalDiscountsSet: (Scalars['JSON'] | null);

  currentTotalDutiesSet: (Scalars['JSON'] | null);

  currentTotalPrice: (Scalars['String'] | null);

  currentTotalPriceSet: (Scalars['JSON'] | null);

  currentTotalTax: (Scalars['String'] | null);

  currentTotalTaxSet: (Scalars['JSON'] | null);

  customerLocale: (Scalars['String'] | null);

  discountApplications: (Scalars['JSON'] | null);

  discountCodes: (Scalars['JSON'] | null);

  email: (Scalars['String'] | null);

  estimatedTaxes: (Scalars['Boolean'] | null);

  financialStatus: (Scalars['String'] | null);

  fulfillmentStatus: (Scalars['String'] | null);

  fulfillments: ShopifyFulfillmentConnection;

  tenderTransactions: ShopifyTenderTransactionConnection;

  landingSite: (Scalars['String'] | null);

  fulfillmentOrders: ShopifyFulfillmentOrderConnection;

  lineItems: ShopifyOrderLineItemConnection;

  merchantOfRecordAppId: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  noteAttributes: (Scalars['JSON'] | null);

  number: (Scalars['Float'] | null);

  orderNumber: (Scalars['Float'] | null);

  orderStatusUrl: (Scalars['String'] | null);

  originalTotalAdditionalFeesSet: (Scalars['JSON'] | null);

  originalTotalDutiesSet: (Scalars['JSON'] | null);

  paymentGatewayNames: (Scalars['JSON'] | null);

  phone: (Scalars['String'] | null);

  poNumber: (Scalars['String'] | null);

  presentmentCurrency: (Scalars['String'] | null);

  processedAt: (Scalars['DateTime'] | null);

  referringSite: (Scalars['String'] | null);

  shippingAddress: (Scalars['JSON'] | null);

  shippingLines: ShopifyShippingLineConnection;

  sourceIdentifier: (Scalars['String'] | null);

  sourceName: (Scalars['String'] | null);

  sourceUrl: (Scalars['String'] | null);

  subtotalPrice: (Scalars['String'] | null);

  subtotalPriceSet: (Scalars['JSON'] | null);

  tags: (Scalars['JSON'] | null);

  taxExempt: (Scalars['Boolean'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  test: (Scalars['Boolean'] | null);

  token: (Scalars['String'] | null);

  totalDiscounts: (Scalars['String'] | null);

  totalDiscountsSet: (Scalars['JSON'] | null);

  totalLineItemsPrice: (Scalars['String'] | null);

  totalLineItemsPriceSet: (Scalars['JSON'] | null);

  totalOutstanding: (Scalars['String'] | null);

  totalPrice: (Scalars['String'] | null);

  totalPriceSet: (Scalars['JSON'] | null);

  totalShippingPriceSet: (Scalars['JSON'] | null);

  totalTax: (Scalars['String'] | null);

  totalTaxSet: (Scalars['JSON'] | null);

  totalTipReceived: (Scalars['String'] | null);

  totalWeight: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  fulfillmentEvents: ShopifyFulfillmentEventConnection;

  customer: (ShopifyCustomer | null);

  customerId: (Scalars['GadgetID'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  adjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  risks?: AvailableShopifyOrderRiskConnectionSelection;

  refunds?: AvailableShopifyRefundConnectionSelection;

  additionalFees?: boolean | null | undefined;

  cancellation?: boolean | null | undefined;

  shopifyProtect?: boolean | null | undefined;

  transactions?: AvailableShopifyOrderTransactionConnectionSelection;

  billingAddress?: boolean | null | undefined;

  browserIp?: boolean | null | undefined;

  buyerAcceptsMarketing?: boolean | null | undefined;

  cancelReason?: boolean | null | undefined;

  cancelledAt?: boolean | null | undefined;

  cartToken?: boolean | null | undefined;

  checkoutToken?: boolean | null | undefined;

  clientDetails?: boolean | null | undefined;

  closedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  currentSubtotalPrice?: boolean | null | undefined;

  currentSubtotalPriceSet?: boolean | null | undefined;

  currentTotalAdditionalFeesSet?: boolean | null | undefined;

  currentTotalDiscounts?: boolean | null | undefined;

  currentTotalDiscountsSet?: boolean | null | undefined;

  currentTotalDutiesSet?: boolean | null | undefined;

  currentTotalPrice?: boolean | null | undefined;

  currentTotalPriceSet?: boolean | null | undefined;

  currentTotalTax?: boolean | null | undefined;

  currentTotalTaxSet?: boolean | null | undefined;

  customerLocale?: boolean | null | undefined;

  discountApplications?: boolean | null | undefined;

  discountCodes?: boolean | null | undefined;

  email?: boolean | null | undefined;

  estimatedTaxes?: boolean | null | undefined;

  financialStatus?: boolean | null | undefined;

  fulfillmentStatus?: boolean | null | undefined;

  fulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  tenderTransactions?: AvailableShopifyTenderTransactionConnectionSelection;

  landingSite?: boolean | null | undefined;

  fulfillmentOrders?: AvailableShopifyFulfillmentOrderConnectionSelection;

  lineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  merchantOfRecordAppId?: boolean | null | undefined;

  name?: boolean | null | undefined;

  note?: boolean | null | undefined;

  noteAttributes?: boolean | null | undefined;

  number?: boolean | null | undefined;

  orderNumber?: boolean | null | undefined;

  orderStatusUrl?: boolean | null | undefined;

  originalTotalAdditionalFeesSet?: boolean | null | undefined;

  originalTotalDutiesSet?: boolean | null | undefined;

  paymentGatewayNames?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  poNumber?: boolean | null | undefined;

  presentmentCurrency?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  referringSite?: boolean | null | undefined;

  shippingAddress?: boolean | null | undefined;

  shippingLines?: AvailableShopifyShippingLineConnectionSelection;

  sourceIdentifier?: boolean | null | undefined;

  sourceName?: boolean | null | undefined;

  sourceUrl?: boolean | null | undefined;

  subtotalPrice?: boolean | null | undefined;

  subtotalPriceSet?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  taxExempt?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  test?: boolean | null | undefined;

  token?: boolean | null | undefined;

  totalDiscounts?: boolean | null | undefined;

  totalDiscountsSet?: boolean | null | undefined;

  totalLineItemsPrice?: boolean | null | undefined;

  totalLineItemsPriceSet?: boolean | null | undefined;

  totalOutstanding?: boolean | null | undefined;

  totalPrice?: boolean | null | undefined;

  totalPriceSet?: boolean | null | undefined;

  totalShippingPriceSet?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  totalTaxSet?: boolean | null | undefined;

  totalTipReceived?: boolean | null | undefined;

  totalWeight?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  fulfillmentEvents?: AvailableShopifyFulfillmentEventConnectionSelection;

  customer?: AvailableShopifyCustomerSelection;

  customerId?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderRisk items. */
export type ShopifyOrderRiskConnection = {

  __typename: 'ShopifyOrderRiskConnection';

  /** A list of edges. */
  edges: ShopifyOrderRiskEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderRiskConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderRiskEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderRisk connection. */
export type ShopifyOrderRiskEdge = {

  __typename: 'ShopifyOrderRiskEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderRisk;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderRiskEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderRiskSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderRisk = {

  __typename: 'ShopifyOrderRisk';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  causeCancel: (Scalars['Boolean'] | null);

  display: (Scalars['Boolean'] | null);

  merchantMessage: (Scalars['String'] | null);

  message: (Scalars['String'] | null);

  recommendation: (Scalars['String'] | null);

  score: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderRiskSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  causeCancel?: boolean | null | undefined;

  display?: boolean | null | undefined;

  merchantMessage?: boolean | null | undefined;

  message?: boolean | null | undefined;

  recommendation?: boolean | null | undefined;

  score?: boolean | null | undefined;

  source?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRefund items. */
export type ShopifyRefundConnection = {

  __typename: 'ShopifyRefundConnection';

  /** A list of edges. */
  edges: ShopifyRefundEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRefundConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRefundEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRefund connection. */
export type ShopifyRefundEdge = {

  __typename: 'ShopifyRefundEdge';

  /** The item at the end of the edge */
  node: ShopifyRefund;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRefundEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRefundSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderTransaction items. */
export type ShopifyOrderTransactionConnection = {

  __typename: 'ShopifyOrderTransactionConnection';

  /** A list of edges. */
  edges: ShopifyOrderTransactionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderTransactionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderTransactionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderTransaction connection. */
export type ShopifyOrderTransactionEdge = {

  __typename: 'ShopifyOrderTransactionEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderTransaction;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderTransactionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderTransactionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderTransaction = {

  __typename: 'ShopifyOrderTransaction';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amount: (Scalars['String'] | null);

  authorization: (Scalars['String'] | null);

  authorizationExpiresAt: (Scalars['DateTime'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  errorCode: (Scalars['String'] | null);

  extendedAuthorizationAttributes: (Scalars['JSON'] | null);

  gateway: (Scalars['String'] | null);

  kind: (Scalars['String'] | null);

  message: (Scalars['String'] | null);

  children: ShopifyOrderTransactionConnection;

  paymentDetails: (Scalars['JSON'] | null);

  paymentId: (Scalars['String'] | null);

  paymentsRefundAttributes: (Scalars['JSON'] | null);

  processedAt: (Scalars['DateTime'] | null);

  receipt: (Scalars['JSON'] | null);

  sourceName: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  test: (Scalars['Boolean'] | null);

  totalUnsettledSet: (Scalars['JSON'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  parent: (ShopifyOrderTransaction | null);

  parentId: (Scalars['GadgetID'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderTransactionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  authorization?: boolean | null | undefined;

  authorizationExpiresAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  errorCode?: boolean | null | undefined;

  extendedAuthorizationAttributes?: boolean | null | undefined;

  gateway?: boolean | null | undefined;

  kind?: boolean | null | undefined;

  message?: boolean | null | undefined;

  children?: AvailableShopifyOrderTransactionConnectionSelection;

  paymentDetails?: boolean | null | undefined;

  paymentId?: boolean | null | undefined;

  paymentsRefundAttributes?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  receipt?: boolean | null | undefined;

  sourceName?: boolean | null | undefined;

  status?: boolean | null | undefined;

  test?: boolean | null | undefined;

  totalUnsettledSet?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  parent?: AvailableShopifyOrderTransactionSelection;

  parentId?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillment items. */
export type ShopifyFulfillmentConnection = {

  __typename: 'ShopifyFulfillmentConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillment connection. */
export type ShopifyFulfillmentEdge = {

  __typename: 'ShopifyFulfillmentEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillment;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillment = {

  __typename: 'ShopifyFulfillment';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  name: (Scalars['String'] | null);

  notifyCustomer: (Scalars['Boolean'] | null);

  originAddress: (Scalars['JSON'] | null);

  receipt: (Scalars['JSON'] | null);

  service: (Scalars['String'] | null);

  shipmentStatus: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  trackingCompany: (Scalars['String'] | null);

  trackingNumbers: (Scalars['JSON'] | null);

  trackingUrls: (Scalars['JSON'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  variantInventoryManagement: (Scalars['String'] | null);

  fulfillmentEvents: ShopifyFulfillmentEventConnection;

  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  name?: boolean | null | undefined;

  notifyCustomer?: boolean | null | undefined;

  originAddress?: boolean | null | undefined;

  receipt?: boolean | null | undefined;

  service?: boolean | null | undefined;

  shipmentStatus?: boolean | null | undefined;

  status?: boolean | null | undefined;

  trackingCompany?: boolean | null | undefined;

  trackingNumbers?: boolean | null | undefined;

  trackingUrls?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  variantInventoryManagement?: boolean | null | undefined;

  fulfillmentEvents?: AvailableShopifyFulfillmentEventConnectionSelection;

  fulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentEvent items. */
export type ShopifyFulfillmentEventConnection = {

  __typename: 'ShopifyFulfillmentEventConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentEventEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentEventConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentEventEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentEvent connection. */
export type ShopifyFulfillmentEventEdge = {

  __typename: 'ShopifyFulfillmentEventEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentEvent;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentEventEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentEventSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillmentEvent = {

  __typename: 'ShopifyFulfillmentEvent';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  address1: (Scalars['String'] | null);

  city: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  estimatedDeliveryAt: (Scalars['DateTime'] | null);

  happenedAt: (Scalars['DateTime'] | null);

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  message: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  zipCode: (Scalars['String'] | null);

  fulfillment: (ShopifyFulfillment | null);

  fulfillmentId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentEventSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  city?: boolean | null | undefined;

  country?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  estimatedDeliveryAt?: boolean | null | undefined;

  happenedAt?: boolean | null | undefined;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  message?: boolean | null | undefined;

  province?: boolean | null | undefined;

  status?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  zipCode?: boolean | null | undefined;

  fulfillment?: AvailableShopifyFulfillmentSelection;

  fulfillmentId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentLineItem items. */
export type ShopifyFulfillmentLineItemConnection = {

  __typename: 'ShopifyFulfillmentLineItemConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentLineItem connection. */
export type ShopifyFulfillmentLineItemEdge = {

  __typename: 'ShopifyFulfillmentLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillmentLineItem = {

  __typename: 'ShopifyFulfillmentLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  originalTotalSet: (Scalars['JSON'] | null);

  quantity: (Scalars['Float'] | null);

  discountedTotalSet: (Scalars['JSON'] | null);

  fulfillment: (ShopifyFulfillment | null);

  fulfillmentId: (Scalars['GadgetID'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  originalTotalSet?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  discountedTotalSet?: boolean | null | undefined;

  fulfillment?: AvailableShopifyFulfillmentSelection;

  fulfillmentId?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyTenderTransaction items. */
export type ShopifyTenderTransactionConnection = {

  __typename: 'ShopifyTenderTransactionConnection';

  /** A list of edges. */
  edges: ShopifyTenderTransactionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyTenderTransactionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyTenderTransactionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyTenderTransaction connection. */
export type ShopifyTenderTransactionEdge = {

  __typename: 'ShopifyTenderTransactionEdge';

  /** The item at the end of the edge */
  node: ShopifyTenderTransaction;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyTenderTransactionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyTenderTransactionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyTenderTransaction = {

  __typename: 'ShopifyTenderTransaction';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amount: (Scalars['String'] | null);

  currency: (Scalars['String'] | null);

  paymentDetails: (Scalars['JSON'] | null);

  paymentMethod: (Scalars['String'] | null);

  processedAt: (Scalars['DateTime'] | null);

  remoteReference: (Scalars['String'] | null);

  test: (Scalars['Boolean'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyTenderTransactionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  paymentDetails?: boolean | null | undefined;

  paymentMethod?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  remoteReference?: boolean | null | undefined;

  test?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentOrder items. */
export type ShopifyFulfillmentOrderConnection = {

  __typename: 'ShopifyFulfillmentOrderConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentOrderEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentOrderConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentOrderEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentOrder connection. */
export type ShopifyFulfillmentOrderEdge = {

  __typename: 'ShopifyFulfillmentOrderEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentOrder;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentOrderEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentOrderSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillmentOrder = {

  __typename: 'ShopifyFulfillmentOrder';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  assignedLocation: (Scalars['JSON'] | null);

  deliveryMethod: (Scalars['JSON'] | null);

  destination: (Scalars['JSON'] | null);

  fulfillAt: (Scalars['DateTime'] | null);

  fulfillBy: (Scalars['DateTime'] | null);

  fulfillmentHolds: (Scalars['JSON'] | null);

  internationalDuties: (Scalars['JSON'] | null);

  merchantRequests: (Scalars['JSON'] | null);

  requestStatus: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  supportedActions: (Scalars['JSON'] | null);

  fulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentOrderSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  assignedLocation?: boolean | null | undefined;

  deliveryMethod?: boolean | null | undefined;

  destination?: boolean | null | undefined;

  fulfillAt?: boolean | null | undefined;

  fulfillBy?: boolean | null | undefined;

  fulfillmentHolds?: boolean | null | undefined;

  internationalDuties?: boolean | null | undefined;

  merchantRequests?: boolean | null | undefined;

  requestStatus?: boolean | null | undefined;

  status?: boolean | null | undefined;

  supportedActions?: boolean | null | undefined;

  fulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentOrderLineItem items. */
export type ShopifyFulfillmentOrderLineItemConnection = {

  __typename: 'ShopifyFulfillmentOrderLineItemConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentOrderLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentOrderLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentOrderLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentOrderLineItem connection. */
export type ShopifyFulfillmentOrderLineItemEdge = {

  __typename: 'ShopifyFulfillmentOrderLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentOrderLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentOrderLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentOrderLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillmentOrderLineItem = {

  __typename: 'ShopifyFulfillmentOrderLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  remainingQuantity: (Scalars['Float'] | null);

  quantity: (Scalars['Float'] | null);

  fulfillmentOrder: (ShopifyFulfillmentOrder | null);

  fulfillmentOrderId: (Scalars['GadgetID'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentOrderLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  remainingQuantity?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  fulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;

  fulfillmentOrderId?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyInventoryItem = {

  __typename: 'ShopifyInventoryItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  fulfillmentOrderLineItem: ShopifyFulfillmentOrderLineItemConnection;

  productVariant: (ShopifyProductVariant | null);

  cost: (Scalars['String'] | null);

  countryCodeOfOrigin: (Scalars['String'] | null);

  countryHarmonizedSystemCodes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  harmonizedSystemCode: (Scalars['String'] | null);

  provinceCodeOfOrigin: (Scalars['String'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  tracked: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  locations: ShopifyLocationConnection;

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyInventoryItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  fulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  productVariant?: AvailableShopifyProductVariantSelection;

  cost?: boolean | null | undefined;

  countryCodeOfOrigin?: boolean | null | undefined;

  countryHarmonizedSystemCodes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  harmonizedSystemCode?: boolean | null | undefined;

  provinceCodeOfOrigin?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  tracked?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  locations?: AvailableShopifyLocationConnectionSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyProductVariant = {

  __typename: 'ShopifyProductVariant';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  draftOrderLineItems: ShopifyDraftOrderLineItemConnection;

  barcode: (Scalars['String'] | null);

  compareAtPrice: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  fulfillmentService: (Scalars['String'] | null);

  grams: (Scalars['Float'] | null);

  inventoryManagement: (Scalars['String'] | null);

  inventoryPolicy: (Scalars['String'] | null);

  inventoryQuantity: (Scalars['Float'] | null);

  inventoryQuantityAdjustment: (Scalars['Float'] | null);

  oldInventoryQuantity: (Scalars['Float'] | null);

  option1: (Scalars['String'] | null);

  option2: (Scalars['String'] | null);

  option3: (Scalars['String'] | null);

  orderLineItems: ShopifyOrderLineItemConnection;

  position: (Scalars['Float'] | null);

  presentmentPrices: (Scalars['JSON'] | null);

  price: (Scalars['String'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  taxCode: (Scalars['String'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  weight: (Scalars['Float'] | null);

  weightUnit: (Scalars['String'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  productImage: (ShopifyProductImage | null);

  productImageId: (Scalars['GadgetID'] | null);

  sellingPlanGroups: ShopifySellingPlanGroupConnection;

  shopifySellingPlanGroupProductVariants: ShopifySellingPlanGroupProductVariantConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductVariantSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  draftOrderLineItems?: AvailableShopifyDraftOrderLineItemConnectionSelection;

  barcode?: boolean | null | undefined;

  compareAtPrice?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  fulfillmentService?: boolean | null | undefined;

  grams?: boolean | null | undefined;

  inventoryManagement?: boolean | null | undefined;

  inventoryPolicy?: boolean | null | undefined;

  inventoryQuantity?: boolean | null | undefined;

  inventoryQuantityAdjustment?: boolean | null | undefined;

  oldInventoryQuantity?: boolean | null | undefined;

  option1?: boolean | null | undefined;

  option2?: boolean | null | undefined;

  option3?: boolean | null | undefined;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  position?: boolean | null | undefined;

  presentmentPrices?: boolean | null | undefined;

  price?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxCode?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  weight?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  productImage?: AvailableShopifyProductImageSelection;

  productImageId?: boolean | null | undefined;

  sellingPlanGroups?: AvailableShopifySellingPlanGroupConnectionSelection;

  shopifySellingPlanGroupProductVariants?: AvailableShopifySellingPlanGroupProductVariantConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDraftOrderLineItem items. */
export type ShopifyDraftOrderLineItemConnection = {

  __typename: 'ShopifyDraftOrderLineItemConnection';

  /** A list of edges. */
  edges: ShopifyDraftOrderLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDraftOrderLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDraftOrderLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDraftOrderLineItem connection. */
export type ShopifyDraftOrderLineItemEdge = {

  __typename: 'ShopifyDraftOrderLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyDraftOrderLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDraftOrderLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDraftOrderLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDraftOrderLineItem = {

  __typename: 'ShopifyDraftOrderLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  appliedDiscount: (Scalars['JSON'] | null);

  fulfillmentService: (Scalars['String'] | null);

  giftCard: (Scalars['Boolean'] | null);

  grams: (Scalars['Float'] | null);

  name: (Scalars['String'] | null);

  price: (Scalars['String'] | null);

  properties: (Scalars['JSON'] | null);

  quantity: (Scalars['Float'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  variantTitle: (Scalars['String'] | null);

  vendor: (Scalars['String'] | null);

  draftOrder: (ShopifyDraftOrder | null);

  draftOrderId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  variant: (ShopifyProductVariant | null);

  variantId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDraftOrderLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  appliedDiscount?: boolean | null | undefined;

  fulfillmentService?: boolean | null | undefined;

  giftCard?: boolean | null | undefined;

  grams?: boolean | null | undefined;

  name?: boolean | null | undefined;

  price?: boolean | null | undefined;

  properties?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  variantTitle?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  draftOrder?: AvailableShopifyDraftOrderSelection;

  draftOrderId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  variant?: AvailableShopifyProductVariantSelection;

  variantId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyDraftOrder = {

  __typename: 'ShopifyDraftOrder';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  appliedDiscount: (Scalars['JSON'] | null);

  billingAddress: (Scalars['JSON'] | null);

  completedAt: (Scalars['DateTime'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  email: (Scalars['String'] | null);

  invoiceSentAt: (Scalars['DateTime'] | null);

  invoiceUrl: (Scalars['String'] | null);

  lineItems: ShopifyDraftOrderLineItemConnection;

  name: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  noteAttributes: (Scalars['JSON'] | null);

  order: (Scalars['JSON'] | null);

  poNumber: (Scalars['String'] | null);

  shippingAddress: (Scalars['JSON'] | null);

  shippingLine: (Scalars['JSON'] | null);

  status: (Scalars['String'] | null);

  subtotalPrice: (Scalars['String'] | null);

  tags: (Scalars['JSON'] | null);

  taxExempt: (Scalars['Boolean'] | null);

  taxExemptions: (Scalars['JSON'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  totalPrice: (Scalars['String'] | null);

  totalTax: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  customer: (ShopifyCustomer | null);

  customerId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDraftOrderSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  appliedDiscount?: boolean | null | undefined;

  billingAddress?: boolean | null | undefined;

  completedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  email?: boolean | null | undefined;

  invoiceSentAt?: boolean | null | undefined;

  invoiceUrl?: boolean | null | undefined;

  lineItems?: AvailableShopifyDraftOrderLineItemConnectionSelection;

  name?: boolean | null | undefined;

  note?: boolean | null | undefined;

  noteAttributes?: boolean | null | undefined;

  order?: boolean | null | undefined;

  poNumber?: boolean | null | undefined;

  shippingAddress?: boolean | null | undefined;

  shippingLine?: boolean | null | undefined;

  status?: boolean | null | undefined;

  subtotalPrice?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  taxExempt?: boolean | null | undefined;

  taxExemptions?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  totalPrice?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  customer?: AvailableShopifyCustomerSelection;

  customerId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyCustomer = {

  __typename: 'ShopifyCustomer';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  mergeable: (ShopifyCustomerMergeable | null);

  statistics: (Scalars['JSON'] | null);

  acceptsMarketing: (Scalars['Boolean'] | null);

  acceptsMarketingUpdatedAt: (Scalars['DateTime'] | null);

  addresses: ShopifyCustomerAddressConnection;

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  defaultAddress: (ShopifyCustomerAddress | null);

  defaultAddressId: (Scalars['GadgetID'] | null);

  email: (Scalars['String'] | null);

  emailMarketingConsent: (Scalars['JSON'] | null);

  firstName: (Scalars['String'] | null);

  lastName: (Scalars['String'] | null);

  lastOrderName: (Scalars['String'] | null);

  marketingOptInLevel: (Scalars['String'] | null);

  metafield: (Scalars['JSON'] | null);

  multipassIdentifier: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  draftOrders: ShopifyDraftOrderConnection;

  orders: ShopifyOrderConnection;

  ordersCount: (Scalars['Float'] | null);

  paymentMethods: ShopifyCustomerPaymentMethodConnection;

  phone: (Scalars['String'] | null);

  smsMarketingConsent: (Scalars['JSON'] | null);

  shopifyState: ShopifyCustomerShopifyStateEnum;

  tags: (Scalars['JSON'] | null);

  taxExempt: (Scalars['Boolean'] | null);

  taxExemptions: (Scalars['JSON'] | null);

  totalSpent: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  verifiedEmail: (Scalars['Boolean'] | null);

  lastOrder: (ShopifyOrder | null);

  lastOrderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCustomerSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  mergeable?: AvailableShopifyCustomerMergeableSelection;

  statistics?: boolean | null | undefined;

  acceptsMarketing?: boolean | null | undefined;

  acceptsMarketingUpdatedAt?: boolean | null | undefined;

  addresses?: AvailableShopifyCustomerAddressConnectionSelection;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  defaultAddress?: AvailableShopifyCustomerAddressSelection;

  defaultAddressId?: boolean | null | undefined;

  email?: boolean | null | undefined;

  emailMarketingConsent?: boolean | null | undefined;

  firstName?: boolean | null | undefined;

  lastName?: boolean | null | undefined;

  lastOrderName?: boolean | null | undefined;

  marketingOptInLevel?: boolean | null | undefined;

  metafield?: boolean | null | undefined;

  multipassIdentifier?: boolean | null | undefined;

  note?: boolean | null | undefined;

  draftOrders?: AvailableShopifyDraftOrderConnectionSelection;

  orders?: AvailableShopifyOrderConnectionSelection;

  ordersCount?: boolean | null | undefined;

  paymentMethods?: AvailableShopifyCustomerPaymentMethodConnectionSelection;

  phone?: boolean | null | undefined;

  smsMarketingConsent?: boolean | null | undefined;

  shopifyState?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  taxExempt?: boolean | null | undefined;

  taxExemptions?: boolean | null | undefined;

  totalSpent?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  verifiedEmail?: boolean | null | undefined;

  lastOrder?: AvailableShopifyOrderSelection;

  lastOrderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyCustomerMergeable = {

  __typename: 'ShopifyCustomerMergeable';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  errorFields: (Scalars['JSON'] | null);

  isMergeable: (Scalars['Boolean'] | null);

  mergeInProgress: (Scalars['JSON'] | null);

  reason: (Scalars['String'] | null);

  shopifyCustomer: (ShopifyCustomer | null);

  shopifyCustomerId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCustomerMergeableSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  errorFields?: boolean | null | undefined;

  isMergeable?: boolean | null | undefined;

  mergeInProgress?: boolean | null | undefined;

  reason?: boolean | null | undefined;

  shopifyCustomer?: AvailableShopifyCustomerSelection;

  shopifyCustomerId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCustomerAddress items. */
export type ShopifyCustomerAddressConnection = {

  __typename: 'ShopifyCustomerAddressConnection';

  /** A list of edges. */
  edges: ShopifyCustomerAddressEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCustomerAddressConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCustomerAddressEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCustomerAddress connection. */
export type ShopifyCustomerAddressEdge = {

  __typename: 'ShopifyCustomerAddressEdge';

  /** The item at the end of the edge */
  node: ShopifyCustomerAddress;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCustomerAddressEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCustomerAddressSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCustomerAddress = {

  __typename: 'ShopifyCustomerAddress';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  city: (Scalars['String'] | null);

  company: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  firstName: (Scalars['String'] | null);

  lastName: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  phone: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  zipCode: (Scalars['String'] | null);

  shopifyCustomer: (ShopifyCustomer | null);

  shopifyCustomerId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCustomerAddressSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  city?: boolean | null | undefined;

  company?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  firstName?: boolean | null | undefined;

  lastName?: boolean | null | undefined;

  name?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  zipCode?: boolean | null | undefined;

  shopifyCustomer?: AvailableShopifyCustomerSelection;

  shopifyCustomerId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDraftOrder items. */
export type ShopifyDraftOrderConnection = {

  __typename: 'ShopifyDraftOrderConnection';

  /** A list of edges. */
  edges: ShopifyDraftOrderEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDraftOrderConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDraftOrderEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDraftOrder connection. */
export type ShopifyDraftOrderEdge = {

  __typename: 'ShopifyDraftOrderEdge';

  /** The item at the end of the edge */
  node: ShopifyDraftOrder;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDraftOrderEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDraftOrderSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrder items. */
export type ShopifyOrderConnection = {

  __typename: 'ShopifyOrderConnection';

  /** A list of edges. */
  edges: ShopifyOrderEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrder connection. */
export type ShopifyOrderEdge = {

  __typename: 'ShopifyOrderEdge';

  /** The item at the end of the edge */
  node: ShopifyOrder;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCustomerPaymentMethod items. */
export type ShopifyCustomerPaymentMethodConnection = {

  __typename: 'ShopifyCustomerPaymentMethodConnection';

  /** A list of edges. */
  edges: ShopifyCustomerPaymentMethodEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCustomerPaymentMethodConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCustomerPaymentMethodEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCustomerPaymentMethod connection. */
export type ShopifyCustomerPaymentMethodEdge = {

  __typename: 'ShopifyCustomerPaymentMethodEdge';

  /** The item at the end of the edge */
  node: ShopifyCustomerPaymentMethod;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCustomerPaymentMethodEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCustomerPaymentMethodSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCustomerPaymentMethod = {

  __typename: 'ShopifyCustomerPaymentMethod';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  adminGraphqlApiId: (Scalars['String'] | null);

  instrument: (Scalars['JSON'] | null);

  revokedAt: (Scalars['DateTime'] | null);

  revokedReason: ShopifyCustomerPaymentMethodRevokedReasonEnum;

  customer: (ShopifyCustomer | null);

  customerId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCustomerPaymentMethodSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  adminGraphqlApiId?: boolean | null | undefined;

  instrument?: boolean | null | undefined;

  revokedAt?: boolean | null | undefined;

  revokedReason?: boolean | null | undefined;

  customer?: AvailableShopifyCustomerSelection;

  customerId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyProduct = {

  __typename: 'ShopifyProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  orderLineItems: ShopifyOrderLineItemConnection;

  draftOrderLineItems: ShopifyDraftOrderLineItemConnection;

  compareAtPriceRange: (Scalars['JSON'] | null);

  productCategory: (Scalars['JSON'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  handle: (Scalars['String'] | null);

  images: ShopifyProductImageConnection;

  options: ShopifyProductOptionConnection;

  productType: (Scalars['String'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  status: ShopifyProductStatusEnum;

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  variants: ShopifyProductVariantConnection;

  vendor: (Scalars['String'] | null);

  customCollections: ShopifyCollectionConnection;

  shopifyCollects: ShopifyCollectConnection;

  sellingPlanGroups: ShopifySellingPlanGroupConnection;

  shopifySellingPlanGroupProducts: ShopifySellingPlanGroupProductConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  draftOrderLineItems?: AvailableShopifyDraftOrderLineItemConnectionSelection;

  compareAtPriceRange?: boolean | null | undefined;

  productCategory?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  images?: AvailableShopifyProductImageConnectionSelection;

  options?: AvailableShopifyProductOptionConnectionSelection;

  productType?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  status?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  variants?: AvailableShopifyProductVariantConnectionSelection;

  vendor?: boolean | null | undefined;

  customCollections?: AvailableShopifyCollectionConnectionSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  sellingPlanGroups?: AvailableShopifySellingPlanGroupConnectionSelection;

  shopifySellingPlanGroupProducts?: AvailableShopifySellingPlanGroupProductConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductImage items. */
export type ShopifyProductImageConnection = {

  __typename: 'ShopifyProductImageConnection';

  /** A list of edges. */
  edges: ShopifyProductImageEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductImageConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductImageEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductImage connection. */
export type ShopifyProductImageEdge = {

  __typename: 'ShopifyProductImageEdge';

  /** The item at the end of the edge */
  node: ShopifyProductImage;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductImageEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductImageSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProductImage = {

  __typename: 'ShopifyProductImage';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  alt: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  variants: ShopifyProductVariantConnection;

  height: (Scalars['Float'] | null);

  position: (Scalars['Float'] | null);

  source: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  width: (Scalars['Float'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductImageSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  alt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  variants?: AvailableShopifyProductVariantConnectionSelection;

  height?: boolean | null | undefined;

  position?: boolean | null | undefined;

  source?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  width?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductVariant items. */
export type ShopifyProductVariantConnection = {

  __typename: 'ShopifyProductVariantConnection';

  /** A list of edges. */
  edges: ShopifyProductVariantEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductVariantConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductVariantEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductVariant connection. */
export type ShopifyProductVariantEdge = {

  __typename: 'ShopifyProductVariantEdge';

  /** The item at the end of the edge */
  node: ShopifyProductVariant;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductVariantEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductVariantSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductOption items. */
export type ShopifyProductOptionConnection = {

  __typename: 'ShopifyProductOptionConnection';

  /** A list of edges. */
  edges: ShopifyProductOptionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductOptionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductOptionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductOption connection. */
export type ShopifyProductOptionEdge = {

  __typename: 'ShopifyProductOptionEdge';

  /** The item at the end of the edge */
  node: ShopifyProductOption;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductOptionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductOptionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProductOption = {

  __typename: 'ShopifyProductOption';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  name: (Scalars['String'] | null);

  position: (Scalars['Float'] | null);

  values: (Scalars['JSON'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductOptionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  name?: boolean | null | undefined;

  position?: boolean | null | undefined;

  values?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCollection items. */
export type ShopifyCollectionConnection = {

  __typename: 'ShopifyCollectionConnection';

  /** A list of edges. */
  edges: ShopifyCollectionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCollectionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCollectionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCollection connection. */
export type ShopifyCollectionEdge = {

  __typename: 'ShopifyCollectionEdge';

  /** The item at the end of the edge */
  node: ShopifyCollection;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCollectionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCollectionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCollection = {

  __typename: 'ShopifyCollection';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  body: (Scalars['String'] | null);

  disjunctive: (Scalars['Boolean'] | null);

  handle: (Scalars['String'] | null);

  image: (Scalars['JSON'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  rules: (Scalars['JSON'] | null);

  sortOrder: (Scalars['String'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  products: ShopifyProductConnection;

  shopifyCollects: ShopifyCollectConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  collectionType: ShopifyCollectionCollectionTypeEnum;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCollectionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  body?: boolean | null | undefined;

  disjunctive?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  image?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  rules?: boolean | null | undefined;

  sortOrder?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  products?: AvailableShopifyProductConnectionSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  collectionType?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {

  __typename: 'ShopifyProductConnection';

  /** A list of edges. */
  edges: ShopifyProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {

  __typename: 'ShopifyProductEdge';

  /** The item at the end of the edge */
  node: ShopifyProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCollect items. */
export type ShopifyCollectConnection = {

  __typename: 'ShopifyCollectConnection';

  /** A list of edges. */
  edges: ShopifyCollectEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCollectConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCollectEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCollect connection. */
export type ShopifyCollectEdge = {

  __typename: 'ShopifyCollectEdge';

  /** The item at the end of the edge */
  node: ShopifyCollect;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCollectEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCollectSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCollect = {

  __typename: 'ShopifyCollect';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  position: (Scalars['Float'] | null);

  sortValue: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  customCollection: (ShopifyCollection | null);

  customCollectionId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCollectSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  position?: boolean | null | undefined;

  sortValue?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  customCollection?: AvailableShopifyCollectionSelection;

  customCollectionId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySellingPlanGroup items. */
export type ShopifySellingPlanGroupConnection = {

  __typename: 'ShopifySellingPlanGroupConnection';

  /** A list of edges. */
  edges: ShopifySellingPlanGroupEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySellingPlanGroupConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySellingPlanGroupEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySellingPlanGroup connection. */
export type ShopifySellingPlanGroupEdge = {

  __typename: 'ShopifySellingPlanGroupEdge';

  /** The item at the end of the edge */
  node: ShopifySellingPlanGroup;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySellingPlanGroupEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySellingPlanGroupSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySellingPlanGroup = {

  __typename: 'ShopifySellingPlanGroup';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  sellingPlanGroupProductVariants: ShopifySellingPlanGroupProductVariantConnection;

  appId: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  description: (Scalars['String'] | null);

  sellingPlanGroupProducts: ShopifySellingPlanGroupProductConnection;

  merchantCode: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  options: (Scalars['JSON'] | null);

  position: (Scalars['Int'] | null);

  sellingPlans: ShopifySellingPlanConnection;

  summary: (Scalars['String'] | null);

  products: ShopifyProductConnection;

  shopifySellingPlanGroupProducts: ShopifySellingPlanGroupProductConnection;

  productVariants: ShopifyProductVariantConnection;

  shopifySellingPlanGroupProductVariants: ShopifySellingPlanGroupProductVariantConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySellingPlanGroupSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  sellingPlanGroupProductVariants?: AvailableShopifySellingPlanGroupProductVariantConnectionSelection;

  appId?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  description?: boolean | null | undefined;

  sellingPlanGroupProducts?: AvailableShopifySellingPlanGroupProductConnectionSelection;

  merchantCode?: boolean | null | undefined;

  name?: boolean | null | undefined;

  options?: boolean | null | undefined;

  position?: boolean | null | undefined;

  sellingPlans?: AvailableShopifySellingPlanConnectionSelection;

  summary?: boolean | null | undefined;

  products?: AvailableShopifyProductConnectionSelection;

  shopifySellingPlanGroupProducts?: AvailableShopifySellingPlanGroupProductConnectionSelection;

  productVariants?: AvailableShopifyProductVariantConnectionSelection;

  shopifySellingPlanGroupProductVariants?: AvailableShopifySellingPlanGroupProductVariantConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySellingPlanGroupProductVariant items. */
export type ShopifySellingPlanGroupProductVariantConnection = {

  __typename: 'ShopifySellingPlanGroupProductVariantConnection';

  /** A list of edges. */
  edges: ShopifySellingPlanGroupProductVariantEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySellingPlanGroupProductVariantConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySellingPlanGroupProductVariantEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySellingPlanGroupProductVariant connection. */
export type ShopifySellingPlanGroupProductVariantEdge = {

  __typename: 'ShopifySellingPlanGroupProductVariantEdge';

  /** The item at the end of the edge */
  node: ShopifySellingPlanGroupProductVariant;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySellingPlanGroupProductVariantEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySellingPlanGroupProductVariantSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySellingPlanGroupProductVariant = {

  __typename: 'ShopifySellingPlanGroupProductVariant';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  productVariant: (ShopifyProductVariant | null);

  productVariantId: (Scalars['GadgetID'] | null);

  sellingPlanGroup: (ShopifySellingPlanGroup | null);

  sellingPlanGroupId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySellingPlanGroupProductVariantSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  productVariant?: AvailableShopifyProductVariantSelection;

  productVariantId?: boolean | null | undefined;

  sellingPlanGroup?: AvailableShopifySellingPlanGroupSelection;

  sellingPlanGroupId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySellingPlanGroupProduct items. */
export type ShopifySellingPlanGroupProductConnection = {

  __typename: 'ShopifySellingPlanGroupProductConnection';

  /** A list of edges. */
  edges: ShopifySellingPlanGroupProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySellingPlanGroupProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySellingPlanGroupProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySellingPlanGroupProduct connection. */
export type ShopifySellingPlanGroupProductEdge = {

  __typename: 'ShopifySellingPlanGroupProductEdge';

  /** The item at the end of the edge */
  node: ShopifySellingPlanGroupProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySellingPlanGroupProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySellingPlanGroupProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySellingPlanGroupProduct = {

  __typename: 'ShopifySellingPlanGroupProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  sellingPlanGroup: (ShopifySellingPlanGroup | null);

  sellingPlanGroupId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySellingPlanGroupProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  sellingPlanGroup?: AvailableShopifySellingPlanGroupSelection;

  sellingPlanGroupId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySellingPlan items. */
export type ShopifySellingPlanConnection = {

  __typename: 'ShopifySellingPlanConnection';

  /** A list of edges. */
  edges: ShopifySellingPlanEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySellingPlanConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySellingPlanEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySellingPlan connection. */
export type ShopifySellingPlanEdge = {

  __typename: 'ShopifySellingPlanEdge';

  /** The item at the end of the edge */
  node: ShopifySellingPlan;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySellingPlanEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySellingPlanSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySellingPlan = {

  __typename: 'ShopifySellingPlan';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  billingPolicy: (Scalars['JSON'] | null);

  category: ShopifySellingPlanCategoryEnum;

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  deliveryPolicy: (Scalars['JSON'] | null);

  description: (Scalars['String'] | null);

  inventoryPolicy: (Scalars['JSON'] | null);

  name: (Scalars['String'] | null);

  options: (Scalars['JSON'] | null);

  position: (Scalars['Int'] | null);

  pricingPolicies: (Scalars['JSON'] | null);

  sellingPlanGroup: (ShopifySellingPlanGroup | null);

  sellingPlanGroupId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySellingPlanSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  billingPolicy?: boolean | null | undefined;

  category?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  deliveryPolicy?: boolean | null | undefined;

  description?: boolean | null | undefined;

  inventoryPolicy?: boolean | null | undefined;

  name?: boolean | null | undefined;

  options?: boolean | null | undefined;

  position?: boolean | null | undefined;

  pricingPolicies?: boolean | null | undefined;

  sellingPlanGroup?: AvailableShopifySellingPlanGroupSelection;

  sellingPlanGroupId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyLocation items. */
export type ShopifyLocationConnection = {

  __typename: 'ShopifyLocationConnection';

  /** A list of edges. */
  edges: ShopifyLocationEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyLocationConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyLocationEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyLocation connection. */
export type ShopifyLocationEdge = {

  __typename: 'ShopifyLocationEdge';

  /** The item at the end of the edge */
  node: ShopifyLocation;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyLocationEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyLocationSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyInventoryLevel items. */
export type ShopifyInventoryLevelConnection = {

  __typename: 'ShopifyInventoryLevelConnection';

  /** A list of edges. */
  edges: ShopifyInventoryLevelEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyInventoryLevelConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyInventoryLevelEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyInventoryLevel connection. */
export type ShopifyInventoryLevelEdge = {

  __typename: 'ShopifyInventoryLevelEdge';

  /** The item at the end of the edge */
  node: ShopifyInventoryLevel;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyInventoryLevelEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyInventoryLevelSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyInventoryLevel = {

  __typename: 'ShopifyInventoryLevel';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  available: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyInventoryLevelSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  available?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShippingLine items. */
export type ShopifyShippingLineConnection = {

  __typename: 'ShopifyShippingLineConnection';

  /** A list of edges. */
  edges: ShopifyShippingLineEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShippingLineConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShippingLineEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShippingLine connection. */
export type ShopifyShippingLineEdge = {

  __typename: 'ShopifyShippingLineEdge';

  /** The item at the end of the edge */
  node: ShopifyShippingLine;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShippingLineEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShippingLineSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyShippingLine = {

  __typename: 'ShopifyShippingLine';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  carrierIdentifier: (Scalars['String'] | null);

  code: (Scalars['String'] | null);

  discountAllocations: (Scalars['JSON'] | null);

  discountedPrice: (Scalars['String'] | null);

  discountedPriceSet: (Scalars['JSON'] | null);

  phone: (Scalars['String'] | null);

  price: (Scalars['String'] | null);

  priceSet: (Scalars['JSON'] | null);

  source: (Scalars['String'] | null);

  taxLines: (Scalars['JSON'] | null);

  title: (Scalars['String'] | null);

  requestedFulfillmentService: (ShopifyFulfillmentService | null);

  requestedFulfillmentServiceId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShippingLineSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  carrierIdentifier?: boolean | null | undefined;

  code?: boolean | null | undefined;

  discountAllocations?: boolean | null | undefined;

  discountedPrice?: boolean | null | undefined;

  discountedPriceSet?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  price?: boolean | null | undefined;

  priceSet?: boolean | null | undefined;

  source?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  title?: boolean | null | undefined;

  requestedFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;

  requestedFulfillmentServiceId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyFulfillmentService = {

  __typename: 'ShopifyFulfillmentService';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  callbackUrl: (Scalars['String'] | null);

  format: (Scalars['String'] | null);

  fulfillmentOrdersOptIn: (Scalars['Boolean'] | null);

  handle: (Scalars['String'] | null);

  shippingLineItems: ShopifyShippingLineConnection;

  inventoryManagement: (Scalars['Boolean'] | null);

  name: (Scalars['String'] | null);

  permitsSkuSharing: (Scalars['Boolean'] | null);

  requiresShippingMethod: (Scalars['Boolean'] | null);

  trackingSupport: (Scalars['Boolean'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentServiceSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  callbackUrl?: boolean | null | undefined;

  format?: boolean | null | undefined;

  fulfillmentOrdersOptIn?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  shippingLineItems?: AvailableShopifyShippingLineConnectionSelection;

  inventoryManagement?: boolean | null | undefined;

  name?: boolean | null | undefined;

  permitsSkuSharing?: boolean | null | undefined;

  requiresShippingMethod?: boolean | null | undefined;

  trackingSupport?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentService items. */
export type ShopifyFulfillmentServiceConnection = {

  __typename: 'ShopifyFulfillmentServiceConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentServiceEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentServiceConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentServiceEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentService connection. */
export type ShopifyFulfillmentServiceEdge = {

  __typename: 'ShopifyFulfillmentServiceEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentService;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentServiceEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentServiceSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyInventoryItem items. */
export type ShopifyInventoryItemConnection = {

  __typename: 'ShopifyInventoryItemConnection';

  /** A list of edges. */
  edges: ShopifyInventoryItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyInventoryItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyInventoryItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyInventoryItem connection. */
export type ShopifyInventoryItemEdge = {

  __typename: 'ShopifyInventoryItemEdge';

  /** The item at the end of the edge */
  node: ShopifyInventoryItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyInventoryItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyInventoryItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {

  __typename: 'ShopifyGdprRequestConnection';

  /** A list of edges. */
  edges: ShopifyGdprRequestEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyGdprRequestConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyGdprRequestEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {

  __typename: 'ShopifyGdprRequestEdge';

  /** The item at the end of the edge */
  node: ShopifyGdprRequest;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyGdprRequestEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyGdprRequestSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyGdprRequest = {

  __typename: 'ShopifyGdprRequest';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  payload: (Scalars['JSON'] | null);

  topic: ShopifyGdprRequestTopicEnum;

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyGdprRequestSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  payload?: boolean | null | undefined;

  topic?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyBulkOperation items. */
export type ShopifyBulkOperationConnection = {

  __typename: 'ShopifyBulkOperationConnection';

  /** A list of edges. */
  edges: ShopifyBulkOperationEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyBulkOperationConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyBulkOperationEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyBulkOperation connection. */
export type ShopifyBulkOperationEdge = {

  __typename: 'ShopifyBulkOperationEdge';

  /** The item at the end of the edge */
  node: ShopifyBulkOperation;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyBulkOperationEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyBulkOperationSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyBulkOperation = {

  __typename: 'ShopifyBulkOperation';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  completedAt: (Scalars['DateTime'] | null);

  errorCode: ShopifyBulkOperationErrorCodeEnum;

  fileSize: (Scalars['String'] | null);

  objectCount: (Scalars['String'] | null);

  partialDataUrl: (Scalars['String'] | null);

  query: (Scalars['String'] | null);

  rootObjectCount: (Scalars['String'] | null);

  status: ShopifyBulkOperationStatusEnum;

  type: ShopifyBulkOperationTypeEnum;

  url: (Scalars['String'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyBulkOperationSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  completedAt?: boolean | null | undefined;

  errorCode?: boolean | null | undefined;

  fileSize?: boolean | null | undefined;

  objectCount?: boolean | null | undefined;

  partialDataUrl?: boolean | null | undefined;

  query?: boolean | null | undefined;

  rootObjectCount?: boolean | null | undefined;

  status?: boolean | null | undefined;

  type?: boolean | null | undefined;

  url?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyScriptTag items. */
export type ShopifyScriptTagConnection = {

  __typename: 'ShopifyScriptTagConnection';

  /** A list of edges. */
  edges: ShopifyScriptTagEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyScriptTagConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyScriptTagEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyScriptTag connection. */
export type ShopifyScriptTagEdge = {

  __typename: 'ShopifyScriptTagEdge';

  /** The item at the end of the edge */
  node: ShopifyScriptTag;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyScriptTagEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyScriptTagSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyScriptTag = {

  __typename: 'ShopifyScriptTag';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  cache: (Scalars['Boolean'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  displayScope: (Scalars['String'] | null);

  event: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyScriptTagSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  cache?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  displayScope?: boolean | null | undefined;

  event?: boolean | null | undefined;

  source?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDiscountCode items. */
export type ShopifyDiscountCodeConnection = {

  __typename: 'ShopifyDiscountCodeConnection';

  /** A list of edges. */
  edges: ShopifyDiscountCodeEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDiscountCodeConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDiscountCodeEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDiscountCode connection. */
export type ShopifyDiscountCodeEdge = {

  __typename: 'ShopifyDiscountCodeEdge';

  /** The item at the end of the edge */
  node: ShopifyDiscountCode;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDiscountCodeEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDiscountCodeSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDiscountCode = {

  __typename: 'ShopifyDiscountCode';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  code: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  usageCount: (Scalars['Float'] | null);

  priceRule: (ShopifyPriceRule | null);

  priceRuleId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDiscountCodeSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  code?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  usageCount?: boolean | null | undefined;

  priceRule?: AvailableShopifyPriceRuleSelection;

  priceRuleId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyPriceRule = {

  __typename: 'ShopifyPriceRule';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  allocationLimit: (Scalars['Float'] | null);

  allocationMethod: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  customerSegmentPrerequisiteIds: (Scalars['JSON'] | null);

  customerSelection: (Scalars['String'] | null);

  endsAt: (Scalars['DateTime'] | null);

  entitledCollectionIds: (Scalars['JSON'] | null);

  entitledCountryIds: (Scalars['JSON'] | null);

  entitledProductIds: (Scalars['JSON'] | null);

  entitledVariantIds: (Scalars['JSON'] | null);

  oncePerCustomer: (Scalars['Boolean'] | null);

  prerequisiteCollectionIds: (Scalars['JSON'] | null);

  prerequisiteCustomerIds: (Scalars['JSON'] | null);

  prerequisiteProductIds: (Scalars['JSON'] | null);

  prerequisiteQuantityRange: (Scalars['JSON'] | null);

  prerequisiteShippingPriceRange: (Scalars['JSON'] | null);

  prerequisiteSubtotalRange: (Scalars['JSON'] | null);

  prerequisiteToEntitlementPurchase: (Scalars['JSON'] | null);

  prerequisiteToEntitlementQuantityRatio: (Scalars['JSON'] | null);

  prerequisiteVariants: (Scalars['JSON'] | null);

  startsAt: (Scalars['DateTime'] | null);

  targetSelection: (Scalars['String'] | null);

  targetType: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  usageLimit: (Scalars['Float'] | null);

  value: (Scalars['Float'] | null);

  valueType: (Scalars['String'] | null);

  discountCodes: ShopifyDiscountCodeConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyPriceRuleSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  allocationLimit?: boolean | null | undefined;

  allocationMethod?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  customerSegmentPrerequisiteIds?: boolean | null | undefined;

  customerSelection?: boolean | null | undefined;

  endsAt?: boolean | null | undefined;

  entitledCollectionIds?: boolean | null | undefined;

  entitledCountryIds?: boolean | null | undefined;

  entitledProductIds?: boolean | null | undefined;

  entitledVariantIds?: boolean | null | undefined;

  oncePerCustomer?: boolean | null | undefined;

  prerequisiteCollectionIds?: boolean | null | undefined;

  prerequisiteCustomerIds?: boolean | null | undefined;

  prerequisiteProductIds?: boolean | null | undefined;

  prerequisiteQuantityRange?: boolean | null | undefined;

  prerequisiteShippingPriceRange?: boolean | null | undefined;

  prerequisiteSubtotalRange?: boolean | null | undefined;

  prerequisiteToEntitlementPurchase?: boolean | null | undefined;

  prerequisiteToEntitlementQuantityRatio?: boolean | null | undefined;

  prerequisiteVariants?: boolean | null | undefined;

  startsAt?: boolean | null | undefined;

  targetSelection?: boolean | null | undefined;

  targetType?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  usageLimit?: boolean | null | undefined;

  value?: boolean | null | undefined;

  valueType?: boolean | null | undefined;

  discountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProvince items. */
export type ShopifyProvinceConnection = {

  __typename: 'ShopifyProvinceConnection';

  /** A list of edges. */
  edges: ShopifyProvinceEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProvinceConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProvinceEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProvince connection. */
export type ShopifyProvinceEdge = {

  __typename: 'ShopifyProvinceEdge';

  /** The item at the end of the edge */
  node: ShopifyProvince;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProvinceEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProvinceSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProvince = {

  __typename: 'ShopifyProvince';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  code: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  tax: (Scalars['Float'] | null);

  taxName: (Scalars['String'] | null);

  taxPercentage: (Scalars['Float'] | null);

  taxType: ShopifyProvinceTaxTypeEnum;

  country: (ShopifyCountry | null);

  countryId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProvinceSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  code?: boolean | null | undefined;

  name?: boolean | null | undefined;

  tax?: boolean | null | undefined;

  taxName?: boolean | null | undefined;

  taxPercentage?: boolean | null | undefined;

  taxType?: boolean | null | undefined;

  country?: AvailableShopifyCountrySelection;

  countryId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyCountry = {

  __typename: 'ShopifyCountry';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  code: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  provinces: ShopifyProvinceConnection;

  tax: (Scalars['Float'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCountrySelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  code?: boolean | null | undefined;

  name?: boolean | null | undefined;

  provinces?: AvailableShopifyProvinceConnectionSelection;

  tax?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {

  __typename: 'ShopifySyncConnection';

  /** A list of edges. */
  edges: ShopifySyncEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySyncConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySyncEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {

  __typename: 'ShopifySyncEdge';

  /** The item at the end of the edge */
  node: ShopifySync;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySyncEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySyncSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySync = {

  __typename: 'ShopifySync';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  domain: Scalars['String'];

  errorMessage: (Scalars['String'] | null);

  errorDetails: (Scalars['String'] | null);

  /** DateTime that this sync was run from */
  syncSince: (Scalars['DateTime'] | null);

  force: (Scalars['Boolean'] | null);

  models: (Scalars['JSON'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySyncSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  errorMessage?: boolean | null | undefined;

  errorDetails?: boolean | null | undefined;

  /** DateTime that this sync was run from */
  syncSince?: boolean | null | undefined;

  force?: boolean | null | undefined;

  models?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCustomerMergeable items. */
export type ShopifyCustomerMergeableConnection = {

  __typename: 'ShopifyCustomerMergeableConnection';

  /** A list of edges. */
  edges: ShopifyCustomerMergeableEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCustomerMergeableConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCustomerMergeableEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCustomerMergeable connection. */
export type ShopifyCustomerMergeableEdge = {

  __typename: 'ShopifyCustomerMergeableEdge';

  /** The item at the end of the edge */
  node: ShopifyCustomerMergeable;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCustomerMergeableEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCustomerMergeableSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyAsset items. */
export type ShopifyAssetConnection = {

  __typename: 'ShopifyAssetConnection';

  /** A list of edges. */
  edges: ShopifyAssetEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyAssetConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyAssetEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyAsset connection. */
export type ShopifyAssetEdge = {

  __typename: 'ShopifyAssetEdge';

  /** The item at the end of the edge */
  node: ShopifyAsset;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyAssetEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyAssetSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyAsset = {

  __typename: 'ShopifyAsset';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  attachment: (Scalars['String'] | null);

  checksum: (Scalars['String'] | null);

  contentType: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  key: (Scalars['String'] | null);

  publicUrl: (Scalars['String'] | null);

  size: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  theme: (ShopifyTheme | null);

  themeId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyAssetSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  attachment?: boolean | null | undefined;

  checksum?: boolean | null | undefined;

  contentType?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  key?: boolean | null | undefined;

  publicUrl?: boolean | null | undefined;

  size?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  theme?: AvailableShopifyThemeSelection;

  themeId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyTheme = {

  __typename: 'ShopifyTheme';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  name: (Scalars['String'] | null);

  previewable: (Scalars['Boolean'] | null);

  processing: (Scalars['Boolean'] | null);

  assets: ShopifyAssetConnection;

  role: (Scalars['String'] | null);

  themeStoreId: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyThemeSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  name?: boolean | null | undefined;

  previewable?: boolean | null | undefined;

  processing?: boolean | null | undefined;

  assets?: AvailableShopifyAssetConnectionSelection;

  role?: boolean | null | undefined;

  themeStoreId?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyTheme items. */
export type ShopifyThemeConnection = {

  __typename: 'ShopifyThemeConnection';

  /** A list of edges. */
  edges: ShopifyThemeEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyThemeConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyThemeEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyTheme connection. */
export type ShopifyThemeEdge = {

  __typename: 'ShopifyThemeEdge';

  /** The item at the end of the edge */
  node: ShopifyTheme;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyThemeEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyThemeSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDiscount items. */
export type ShopifyDiscountConnection = {

  __typename: 'ShopifyDiscountConnection';

  /** A list of edges. */
  edges: ShopifyDiscountEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDiscountConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDiscountEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDiscount connection. */
export type ShopifyDiscountEdge = {

  __typename: 'ShopifyDiscountEdge';

  /** The item at the end of the edge */
  node: ShopifyDiscount;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDiscountEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDiscountSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDiscount = {

  __typename: 'ShopifyDiscount';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  appDiscountType: (Scalars['JSON'] | null);

  appliesOnOneTimePurchase: (Scalars['Boolean'] | null);

  appliesOnSubscription: (Scalars['Boolean'] | null);

  appliesOncePerCustomer: (Scalars['Boolean'] | null);

  asyncUsageCount: (Scalars['Float'] | null);

  codeCount: (Scalars['Int'] | null);

  combinesWith: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  destinationSelection: (Scalars['JSON'] | null);

  discountClass: ShopifyDiscountDiscountClassEnum;

  discountId: (Scalars['String'] | null);

  endsAt: (Scalars['DateTime'] | null);

  errorHistory: (Scalars['JSON'] | null);

  hasTimelineComment: (Scalars['Boolean'] | null);

  maximumShippingPrice: (Scalars['JSON'] | null);

  minimumRequirement: (Scalars['JSON'] | null);

  recurringCycleLimit: (Scalars['Int'] | null);

  shareableUrls: (Scalars['JSON'] | null);

  shortSummary: (Scalars['String'] | null);

  startsAt: (Scalars['DateTime'] | null);

  status: ShopifyDiscountStatusEnum;

  summary: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  totalSales: (Scalars['JSON'] | null);

  usageLimit: (Scalars['Int'] | null);

  usesPerOrderLimit: (Scalars['Int'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDiscountSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  appDiscountType?: boolean | null | undefined;

  appliesOnOneTimePurchase?: boolean | null | undefined;

  appliesOnSubscription?: boolean | null | undefined;

  appliesOncePerCustomer?: boolean | null | undefined;

  asyncUsageCount?: boolean | null | undefined;

  codeCount?: boolean | null | undefined;

  combinesWith?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  destinationSelection?: boolean | null | undefined;

  discountClass?: boolean | null | undefined;

  discountId?: boolean | null | undefined;

  endsAt?: boolean | null | undefined;

  errorHistory?: boolean | null | undefined;

  hasTimelineComment?: boolean | null | undefined;

  maximumShippingPrice?: boolean | null | undefined;

  minimumRequirement?: boolean | null | undefined;

  recurringCycleLimit?: boolean | null | undefined;

  shareableUrls?: boolean | null | undefined;

  shortSummary?: boolean | null | undefined;

  startsAt?: boolean | null | undefined;

  status?: boolean | null | undefined;

  summary?: boolean | null | undefined;

  title?: boolean | null | undefined;

  totalSales?: boolean | null | undefined;

  usageLimit?: boolean | null | undefined;

  usesPerOrderLimit?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCustomer items. */
export type ShopifyCustomerConnection = {

  __typename: 'ShopifyCustomerConnection';

  /** A list of edges. */
  edges: ShopifyCustomerEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCustomerConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCustomerEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCustomer connection. */
export type ShopifyCustomerEdge = {

  __typename: 'ShopifyCustomerEdge';

  /** The item at the end of the edge */
  node: ShopifyCustomer;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCustomerEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCustomerSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyPriceRule items. */
export type ShopifyPriceRuleConnection = {

  __typename: 'ShopifyPriceRuleConnection';

  /** A list of edges. */
  edges: ShopifyPriceRuleEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyPriceRuleConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyPriceRuleEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyPriceRule connection. */
export type ShopifyPriceRuleEdge = {

  __typename: 'ShopifyPriceRuleEdge';

  /** The item at the end of the edge */
  node: ShopifyPriceRule;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyPriceRuleEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyPriceRuleSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCarrierService items. */
export type ShopifyCarrierServiceConnection = {

  __typename: 'ShopifyCarrierServiceConnection';

  /** A list of edges. */
  edges: ShopifyCarrierServiceEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCarrierServiceConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCarrierServiceEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCarrierService connection. */
export type ShopifyCarrierServiceEdge = {

  __typename: 'ShopifyCarrierServiceEdge';

  /** The item at the end of the edge */
  node: ShopifyCarrierService;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCarrierServiceEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCarrierServiceSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCarrierService = {

  __typename: 'ShopifyCarrierService';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  active: (Scalars['Boolean'] | null);

  callbackUrl: (Scalars['String'] | null);

  carrierServiceType: ShopifyCarrierServiceCarrierServiceTypeEnum;

  format: ShopifyCarrierServiceFormatEnum;

  name: (Scalars['String'] | null);

  serviceDiscovery: (Scalars['Boolean'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCarrierServiceSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  active?: boolean | null | undefined;

  callbackUrl?: boolean | null | undefined;

  carrierServiceType?: boolean | null | undefined;

  format?: boolean | null | undefined;

  name?: boolean | null | undefined;

  serviceDiscovery?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCart items. */
export type ShopifyCartConnection = {

  __typename: 'ShopifyCartConnection';

  /** A list of edges. */
  edges: ShopifyCartEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCartConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCartEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCart connection. */
export type ShopifyCartEdge = {

  __typename: 'ShopifyCartEdge';

  /** The item at the end of the edge */
  node: ShopifyCart;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCartEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCartSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCart = {

  __typename: 'ShopifyCart';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  note: (Scalars['String'] | null);

  token: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCartSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  note?: boolean | null | undefined;

  token?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFile items. */
export type ShopifyFileConnection = {

  __typename: 'ShopifyFileConnection';

  /** A list of edges. */
  edges: ShopifyFileEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFileConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFileEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFile connection. */
export type ShopifyFileEdge = {

  __typename: 'ShopifyFileEdge';

  /** The item at the end of the edge */
  node: ShopifyFile;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFileEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFileSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFile = {

  __typename: 'ShopifyFile';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  type: ShopifyFileTypeEnum;

  alt: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  duration: (Scalars['Int'] | null);

  fileErrors: (Scalars['JSON'] | null);

  fileStatus: ShopifyFileFileStatusEnum;

  image: (Scalars['JSON'] | null);

  originalFileSize: (Scalars['Int'] | null);

  originalSource: (Scalars['JSON'] | null);

  preview: (Scalars['JSON'] | null);

  sources: (Scalars['JSON'] | null);

  url: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFileSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  type?: boolean | null | undefined;

  alt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  duration?: boolean | null | undefined;

  fileErrors?: boolean | null | undefined;

  fileStatus?: boolean | null | undefined;

  image?: boolean | null | undefined;

  originalFileSize?: boolean | null | undefined;

  originalSource?: boolean | null | undefined;

  preview?: boolean | null | undefined;

  sources?: boolean | null | undefined;

  url?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCountry items. */
export type ShopifyCountryConnection = {

  __typename: 'ShopifyCountryConnection';

  /** A list of edges. */
  edges: ShopifyCountryEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCountryConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCountryEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCountry connection. */
export type ShopifyCountryEdge = {

  __typename: 'ShopifyCountryEdge';

  /** The item at the end of the edge */
  node: ShopifyCountry;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCountryEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCountrySelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export type SessionConnection = {

  __typename: 'SessionConnection';

  /** A list of edges. */
  edges: SessionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export type SessionEdge = {

  __typename: 'SessionEdge';

  /** The item at the end of the edge */
  node: Session;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {

  __typename: 'ShopifyShopConnection';

  /** A list of edges. */
  edges: ShopifyShopEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShopConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShopEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {

  __typename: 'ShopifyShopEdge';

  /** The item at the end of the edge */
  node: ShopifyShop;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShopEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShopSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type InternalQueries = {

  __typename: 'InternalQueries';

  user: (InternalUserRecord | null);

  listUser: InternalUserRecordConnection;

  session: (InternalSessionRecord | null);

  listSession: InternalSessionRecordConnection;

  shopifyAsset: (InternalShopifyAssetRecord | null);

  listShopifyAsset: InternalShopifyAssetRecordConnection;

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);

  listShopifyBulkOperation: InternalShopifyBulkOperationRecordConnection;

  shopifyCarrierService: (InternalShopifyCarrierServiceRecord | null);

  listShopifyCarrierService: InternalShopifyCarrierServiceRecordConnection;

  shopifyCart: (InternalShopifyCartRecord | null);

  listShopifyCart: InternalShopifyCartRecordConnection;

  shopifyCollect: (InternalShopifyCollectRecord | null);

  listShopifyCollect: InternalShopifyCollectRecordConnection;

  shopifyCollection: (InternalShopifyCollectionRecord | null);

  listShopifyCollection: InternalShopifyCollectionRecordConnection;

  shopifyCountry: (InternalShopifyCountryRecord | null);

  listShopifyCountry: InternalShopifyCountryRecordConnection;

  shopifyCustomer: (InternalShopifyCustomerRecord | null);

  listShopifyCustomer: InternalShopifyCustomerRecordConnection;

  shopifyCustomerAddress: (InternalShopifyCustomerAddressRecord | null);

  listShopifyCustomerAddress: InternalShopifyCustomerAddressRecordConnection;

  shopifyCustomerMergeable: (InternalShopifyCustomerMergeableRecord | null);

  listShopifyCustomerMergeable: InternalShopifyCustomerMergeableRecordConnection;

  shopifyCustomerPaymentMethod: (InternalShopifyCustomerPaymentMethodRecord | null);

  listShopifyCustomerPaymentMethod: InternalShopifyCustomerPaymentMethodRecordConnection;

  shopifyDiscount: (InternalShopifyDiscountRecord | null);

  listShopifyDiscount: InternalShopifyDiscountRecordConnection;

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);

  listShopifyDiscountCode: InternalShopifyDiscountCodeRecordConnection;

  shopifyDraftOrder: (InternalShopifyDraftOrderRecord | null);

  listShopifyDraftOrder: InternalShopifyDraftOrderRecordConnection;

  shopifyDraftOrderLineItem: (InternalShopifyDraftOrderLineItemRecord | null);

  listShopifyDraftOrderLineItem: InternalShopifyDraftOrderLineItemRecordConnection;

  shopifyDuty: (InternalShopifyDutyRecord | null);

  listShopifyDuty: InternalShopifyDutyRecordConnection;

  shopifyFile: (InternalShopifyFileRecord | null);

  listShopifyFile: InternalShopifyFileRecordConnection;

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);

  listShopifyFulfillment: InternalShopifyFulfillmentRecordConnection;

  shopifyFulfillmentEvent: (InternalShopifyFulfillmentEventRecord | null);

  listShopifyFulfillmentEvent: InternalShopifyFulfillmentEventRecordConnection;

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);

  listShopifyFulfillmentLineItem: InternalShopifyFulfillmentLineItemRecordConnection;

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);

  listShopifyFulfillmentOrder: InternalShopifyFulfillmentOrderRecordConnection;

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);

  listShopifyFulfillmentOrderLineItem: InternalShopifyFulfillmentOrderLineItemRecordConnection;

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);

  listShopifyFulfillmentService: InternalShopifyFulfillmentServiceRecordConnection;

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);

  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);

  listShopifyInventoryItem: InternalShopifyInventoryItemRecordConnection;

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);

  listShopifyInventoryLevel: InternalShopifyInventoryLevelRecordConnection;

  shopifyLocation: (InternalShopifyLocationRecord | null);

  listShopifyLocation: InternalShopifyLocationRecordConnection;

  shopifyOrder: (InternalShopifyOrderRecord | null);

  listShopifyOrder: InternalShopifyOrderRecordConnection;

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);

  listShopifyOrderAdjustment: InternalShopifyOrderAdjustmentRecordConnection;

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);

  listShopifyOrderLineItem: InternalShopifyOrderLineItemRecordConnection;

  shopifyOrderRisk: (InternalShopifyOrderRiskRecord | null);

  listShopifyOrderRisk: InternalShopifyOrderRiskRecordConnection;

  shopifyOrderTransaction: (InternalShopifyOrderTransactionRecord | null);

  listShopifyOrderTransaction: InternalShopifyOrderTransactionRecordConnection;

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);

  listShopifyPriceRule: InternalShopifyPriceRuleRecordConnection;

  shopifyProduct: (InternalShopifyProductRecord | null);

  listShopifyProduct: InternalShopifyProductRecordConnection;

  shopifyProductImage: (InternalShopifyProductImageRecord | null);

  listShopifyProductImage: InternalShopifyProductImageRecordConnection;

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);

  listShopifyProductOption: InternalShopifyProductOptionRecordConnection;

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);

  listShopifyProductVariant: InternalShopifyProductVariantRecordConnection;

  shopifyProvince: (InternalShopifyProvinceRecord | null);

  listShopifyProvince: InternalShopifyProvinceRecordConnection;

  shopifyRefund: (InternalShopifyRefundRecord | null);

  listShopifyRefund: InternalShopifyRefundRecordConnection;

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);

  listShopifyRefundDuty: InternalShopifyRefundDutyRecordConnection;

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);

  listShopifyRefundLineItem: InternalShopifyRefundLineItemRecordConnection;

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);

  listShopifyScriptTag: InternalShopifyScriptTagRecordConnection;

  shopifySellingPlan: (InternalShopifySellingPlanRecord | null);

  listShopifySellingPlan: InternalShopifySellingPlanRecordConnection;

  shopifySellingPlanGroup: (InternalShopifySellingPlanGroupRecord | null);

  listShopifySellingPlanGroup: InternalShopifySellingPlanGroupRecordConnection;

  shopifySellingPlanGroupProduct: (InternalShopifySellingPlanGroupProductRecord | null);

  listShopifySellingPlanGroupProduct: InternalShopifySellingPlanGroupProductRecordConnection;

  shopifySellingPlanGroupProductVariant: (InternalShopifySellingPlanGroupProductVariantRecord | null);

  listShopifySellingPlanGroupProductVariant: InternalShopifySellingPlanGroupProductVariantRecordConnection;

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);

  listShopifyShippingLine: InternalShopifyShippingLineRecordConnection;

  shopifyShop: (InternalShopifyShopRecord | null);

  listShopifyShop: InternalShopifyShopRecordConnection;

  shopifySync: (InternalShopifySyncRecord | null);

  listShopifySync: InternalShopifySyncRecordConnection;

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);

  listShopifyTenderTransaction: InternalShopifyTenderTransactionRecordConnection;

  shopifyTheme: (InternalShopifyThemeRecord | null);

  listShopifyTheme: InternalShopifyThemeRecordConnection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  user?: boolean | null | undefined;

  listUser?: AvailableInternalUserRecordConnectionSelection;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  shopifyAsset?: boolean | null | undefined;

  listShopifyAsset?: AvailableInternalShopifyAssetRecordConnectionSelection;

  shopifyBulkOperation?: boolean | null | undefined;

  listShopifyBulkOperation?: AvailableInternalShopifyBulkOperationRecordConnectionSelection;

  shopifyCarrierService?: boolean | null | undefined;

  listShopifyCarrierService?: AvailableInternalShopifyCarrierServiceRecordConnectionSelection;

  shopifyCart?: boolean | null | undefined;

  listShopifyCart?: AvailableInternalShopifyCartRecordConnectionSelection;

  shopifyCollect?: boolean | null | undefined;

  listShopifyCollect?: AvailableInternalShopifyCollectRecordConnectionSelection;

  shopifyCollection?: boolean | null | undefined;

  listShopifyCollection?: AvailableInternalShopifyCollectionRecordConnectionSelection;

  shopifyCountry?: boolean | null | undefined;

  listShopifyCountry?: AvailableInternalShopifyCountryRecordConnectionSelection;

  shopifyCustomer?: boolean | null | undefined;

  listShopifyCustomer?: AvailableInternalShopifyCustomerRecordConnectionSelection;

  shopifyCustomerAddress?: boolean | null | undefined;

  listShopifyCustomerAddress?: AvailableInternalShopifyCustomerAddressRecordConnectionSelection;

  shopifyCustomerMergeable?: boolean | null | undefined;

  listShopifyCustomerMergeable?: AvailableInternalShopifyCustomerMergeableRecordConnectionSelection;

  shopifyCustomerPaymentMethod?: boolean | null | undefined;

  listShopifyCustomerPaymentMethod?: AvailableInternalShopifyCustomerPaymentMethodRecordConnectionSelection;

  shopifyDiscount?: boolean | null | undefined;

  listShopifyDiscount?: AvailableInternalShopifyDiscountRecordConnectionSelection;

  shopifyDiscountCode?: boolean | null | undefined;

  listShopifyDiscountCode?: AvailableInternalShopifyDiscountCodeRecordConnectionSelection;

  shopifyDraftOrder?: boolean | null | undefined;

  listShopifyDraftOrder?: AvailableInternalShopifyDraftOrderRecordConnectionSelection;

  shopifyDraftOrderLineItem?: boolean | null | undefined;

  listShopifyDraftOrderLineItem?: AvailableInternalShopifyDraftOrderLineItemRecordConnectionSelection;

  shopifyDuty?: boolean | null | undefined;

  listShopifyDuty?: AvailableInternalShopifyDutyRecordConnectionSelection;

  shopifyFile?: boolean | null | undefined;

  listShopifyFile?: AvailableInternalShopifyFileRecordConnectionSelection;

  shopifyFulfillment?: boolean | null | undefined;

  listShopifyFulfillment?: AvailableInternalShopifyFulfillmentRecordConnectionSelection;

  shopifyFulfillmentEvent?: boolean | null | undefined;

  listShopifyFulfillmentEvent?: AvailableInternalShopifyFulfillmentEventRecordConnectionSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;

  listShopifyFulfillmentLineItem?: AvailableInternalShopifyFulfillmentLineItemRecordConnectionSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;

  listShopifyFulfillmentOrder?: AvailableInternalShopifyFulfillmentOrderRecordConnectionSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;

  listShopifyFulfillmentOrderLineItem?: AvailableInternalShopifyFulfillmentOrderLineItemRecordConnectionSelection;

  shopifyFulfillmentService?: boolean | null | undefined;

  listShopifyFulfillmentService?: AvailableInternalShopifyFulfillmentServiceRecordConnectionSelection;

  shopifyGdprRequest?: boolean | null | undefined;

  listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;

  shopifyInventoryItem?: boolean | null | undefined;

  listShopifyInventoryItem?: AvailableInternalShopifyInventoryItemRecordConnectionSelection;

  shopifyInventoryLevel?: boolean | null | undefined;

  listShopifyInventoryLevel?: AvailableInternalShopifyInventoryLevelRecordConnectionSelection;

  shopifyLocation?: boolean | null | undefined;

  listShopifyLocation?: AvailableInternalShopifyLocationRecordConnectionSelection;

  shopifyOrder?: boolean | null | undefined;

  listShopifyOrder?: AvailableInternalShopifyOrderRecordConnectionSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;

  listShopifyOrderAdjustment?: AvailableInternalShopifyOrderAdjustmentRecordConnectionSelection;

  shopifyOrderLineItem?: boolean | null | undefined;

  listShopifyOrderLineItem?: AvailableInternalShopifyOrderLineItemRecordConnectionSelection;

  shopifyOrderRisk?: boolean | null | undefined;

  listShopifyOrderRisk?: AvailableInternalShopifyOrderRiskRecordConnectionSelection;

  shopifyOrderTransaction?: boolean | null | undefined;

  listShopifyOrderTransaction?: AvailableInternalShopifyOrderTransactionRecordConnectionSelection;

  shopifyPriceRule?: boolean | null | undefined;

  listShopifyPriceRule?: AvailableInternalShopifyPriceRuleRecordConnectionSelection;

  shopifyProduct?: boolean | null | undefined;

  listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;

  shopifyProductImage?: boolean | null | undefined;

  listShopifyProductImage?: AvailableInternalShopifyProductImageRecordConnectionSelection;

  shopifyProductOption?: boolean | null | undefined;

  listShopifyProductOption?: AvailableInternalShopifyProductOptionRecordConnectionSelection;

  shopifyProductVariant?: boolean | null | undefined;

  listShopifyProductVariant?: AvailableInternalShopifyProductVariantRecordConnectionSelection;

  shopifyProvince?: boolean | null | undefined;

  listShopifyProvince?: AvailableInternalShopifyProvinceRecordConnectionSelection;

  shopifyRefund?: boolean | null | undefined;

  listShopifyRefund?: AvailableInternalShopifyRefundRecordConnectionSelection;

  shopifyRefundDuty?: boolean | null | undefined;

  listShopifyRefundDuty?: AvailableInternalShopifyRefundDutyRecordConnectionSelection;

  shopifyRefundLineItem?: boolean | null | undefined;

  listShopifyRefundLineItem?: AvailableInternalShopifyRefundLineItemRecordConnectionSelection;

  shopifyScriptTag?: boolean | null | undefined;

  listShopifyScriptTag?: AvailableInternalShopifyScriptTagRecordConnectionSelection;

  shopifySellingPlan?: boolean | null | undefined;

  listShopifySellingPlan?: AvailableInternalShopifySellingPlanRecordConnectionSelection;

  shopifySellingPlanGroup?: boolean | null | undefined;

  listShopifySellingPlanGroup?: AvailableInternalShopifySellingPlanGroupRecordConnectionSelection;

  shopifySellingPlanGroupProduct?: boolean | null | undefined;

  listShopifySellingPlanGroupProduct?: AvailableInternalShopifySellingPlanGroupProductRecordConnectionSelection;

  shopifySellingPlanGroupProductVariant?: boolean | null | undefined;

  listShopifySellingPlanGroupProductVariant?: AvailableInternalShopifySellingPlanGroupProductVariantRecordConnectionSelection;

  shopifyShippingLine?: boolean | null | undefined;

  listShopifyShippingLine?: AvailableInternalShopifyShippingLineRecordConnectionSelection;

  shopifyShop?: boolean | null | undefined;

  listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;

  shopifySync?: boolean | null | undefined;

  listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;

  shopifyTenderTransaction?: boolean | null | undefined;

  listShopifyTenderTransaction?: AvailableInternalShopifyTenderTransactionRecordConnectionSelection;

  shopifyTheme?: boolean | null | undefined;

  listShopifyTheme?: AvailableInternalShopifyThemeRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;
};


/** A connection to a list of InternalUserRecord items. */
export type InternalUserRecordConnection = {

  __typename: 'InternalUserRecordConnection';

  /** A list of edges. */
  edges: InternalUserRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalUserRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalUserRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalUserRecord connection. */
export type InternalUserRecordEdge = {

  __typename: 'InternalUserRecordEdge';

  /** The item at the end of the edge */
  node: InternalUserRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalUserRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {

  __typename: 'InternalSessionRecordConnection';

  /** A list of edges. */
  edges: InternalSessionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {

  __typename: 'InternalSessionRecordEdge';

  /** The item at the end of the edge */
  node: InternalSessionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyAssetRecord items. */
export type InternalShopifyAssetRecordConnection = {

  __typename: 'InternalShopifyAssetRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyAssetRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyAssetRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyAssetRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyAssetRecord connection. */
export type InternalShopifyAssetRecordEdge = {

  __typename: 'InternalShopifyAssetRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyAssetRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyAssetRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyBulkOperationRecord items. */
export type InternalShopifyBulkOperationRecordConnection = {

  __typename: 'InternalShopifyBulkOperationRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyBulkOperationRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyBulkOperationRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyBulkOperationRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyBulkOperationRecord connection. */
export type InternalShopifyBulkOperationRecordEdge = {

  __typename: 'InternalShopifyBulkOperationRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyBulkOperationRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyBulkOperationRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCarrierServiceRecord items. */
export type InternalShopifyCarrierServiceRecordConnection = {

  __typename: 'InternalShopifyCarrierServiceRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCarrierServiceRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCarrierServiceRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCarrierServiceRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCarrierServiceRecord connection. */
export type InternalShopifyCarrierServiceRecordEdge = {

  __typename: 'InternalShopifyCarrierServiceRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCarrierServiceRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCarrierServiceRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCartRecord items. */
export type InternalShopifyCartRecordConnection = {

  __typename: 'InternalShopifyCartRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCartRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCartRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCartRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCartRecord connection. */
export type InternalShopifyCartRecordEdge = {

  __typename: 'InternalShopifyCartRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCartRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCartRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCollectRecord items. */
export type InternalShopifyCollectRecordConnection = {

  __typename: 'InternalShopifyCollectRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCollectRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCollectRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCollectRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCollectRecord connection. */
export type InternalShopifyCollectRecordEdge = {

  __typename: 'InternalShopifyCollectRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCollectRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCollectRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCollectionRecord items. */
export type InternalShopifyCollectionRecordConnection = {

  __typename: 'InternalShopifyCollectionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCollectionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCollectionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCollectionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCollectionRecord connection. */
export type InternalShopifyCollectionRecordEdge = {

  __typename: 'InternalShopifyCollectionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCollectionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCollectionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCountryRecord items. */
export type InternalShopifyCountryRecordConnection = {

  __typename: 'InternalShopifyCountryRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCountryRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCountryRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCountryRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCountryRecord connection. */
export type InternalShopifyCountryRecordEdge = {

  __typename: 'InternalShopifyCountryRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCountryRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCountryRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCustomerRecord items. */
export type InternalShopifyCustomerRecordConnection = {

  __typename: 'InternalShopifyCustomerRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCustomerRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCustomerRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCustomerRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCustomerRecord connection. */
export type InternalShopifyCustomerRecordEdge = {

  __typename: 'InternalShopifyCustomerRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCustomerRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCustomerRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCustomerAddressRecord items. */
export type InternalShopifyCustomerAddressRecordConnection = {

  __typename: 'InternalShopifyCustomerAddressRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCustomerAddressRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCustomerAddressRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCustomerAddressRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCustomerAddressRecord connection. */
export type InternalShopifyCustomerAddressRecordEdge = {

  __typename: 'InternalShopifyCustomerAddressRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCustomerAddressRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCustomerAddressRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCustomerMergeableRecord items. */
export type InternalShopifyCustomerMergeableRecordConnection = {

  __typename: 'InternalShopifyCustomerMergeableRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCustomerMergeableRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCustomerMergeableRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCustomerMergeableRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCustomerMergeableRecord connection. */
export type InternalShopifyCustomerMergeableRecordEdge = {

  __typename: 'InternalShopifyCustomerMergeableRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCustomerMergeableRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCustomerMergeableRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCustomerPaymentMethodRecord items. */
export type InternalShopifyCustomerPaymentMethodRecordConnection = {

  __typename: 'InternalShopifyCustomerPaymentMethodRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCustomerPaymentMethodRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCustomerPaymentMethodRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCustomerPaymentMethodRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCustomerPaymentMethodRecord connection. */
export type InternalShopifyCustomerPaymentMethodRecordEdge = {

  __typename: 'InternalShopifyCustomerPaymentMethodRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCustomerPaymentMethodRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCustomerPaymentMethodRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDiscountRecord items. */
export type InternalShopifyDiscountRecordConnection = {

  __typename: 'InternalShopifyDiscountRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDiscountRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDiscountRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDiscountRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDiscountRecord connection. */
export type InternalShopifyDiscountRecordEdge = {

  __typename: 'InternalShopifyDiscountRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDiscountRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDiscountRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDiscountCodeRecord items. */
export type InternalShopifyDiscountCodeRecordConnection = {

  __typename: 'InternalShopifyDiscountCodeRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDiscountCodeRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDiscountCodeRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDiscountCodeRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDiscountCodeRecord connection. */
export type InternalShopifyDiscountCodeRecordEdge = {

  __typename: 'InternalShopifyDiscountCodeRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDiscountCodeRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDiscountCodeRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDraftOrderRecord items. */
export type InternalShopifyDraftOrderRecordConnection = {

  __typename: 'InternalShopifyDraftOrderRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDraftOrderRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDraftOrderRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDraftOrderRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDraftOrderRecord connection. */
export type InternalShopifyDraftOrderRecordEdge = {

  __typename: 'InternalShopifyDraftOrderRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDraftOrderRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDraftOrderRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDraftOrderLineItemRecord items. */
export type InternalShopifyDraftOrderLineItemRecordConnection = {

  __typename: 'InternalShopifyDraftOrderLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDraftOrderLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDraftOrderLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDraftOrderLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDraftOrderLineItemRecord connection. */
export type InternalShopifyDraftOrderLineItemRecordEdge = {

  __typename: 'InternalShopifyDraftOrderLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDraftOrderLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDraftOrderLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDutyRecord items. */
export type InternalShopifyDutyRecordConnection = {

  __typename: 'InternalShopifyDutyRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDutyRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDutyRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDutyRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDutyRecord connection. */
export type InternalShopifyDutyRecordEdge = {

  __typename: 'InternalShopifyDutyRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDutyRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDutyRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFileRecord items. */
export type InternalShopifyFileRecordConnection = {

  __typename: 'InternalShopifyFileRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFileRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFileRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFileRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFileRecord connection. */
export type InternalShopifyFileRecordEdge = {

  __typename: 'InternalShopifyFileRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFileRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFileRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentRecord items. */
export type InternalShopifyFulfillmentRecordConnection = {

  __typename: 'InternalShopifyFulfillmentRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentRecord connection. */
export type InternalShopifyFulfillmentRecordEdge = {

  __typename: 'InternalShopifyFulfillmentRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentEventRecord items. */
export type InternalShopifyFulfillmentEventRecordConnection = {

  __typename: 'InternalShopifyFulfillmentEventRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentEventRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentEventRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentEventRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentEventRecord connection. */
export type InternalShopifyFulfillmentEventRecordEdge = {

  __typename: 'InternalShopifyFulfillmentEventRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentEventRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentEventRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentLineItemRecord items. */
export type InternalShopifyFulfillmentLineItemRecordConnection = {

  __typename: 'InternalShopifyFulfillmentLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentLineItemRecord connection. */
export type InternalShopifyFulfillmentLineItemRecordEdge = {

  __typename: 'InternalShopifyFulfillmentLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentOrderRecord items. */
export type InternalShopifyFulfillmentOrderRecordConnection = {

  __typename: 'InternalShopifyFulfillmentOrderRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentOrderRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentOrderRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentOrderRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentOrderRecord connection. */
export type InternalShopifyFulfillmentOrderRecordEdge = {

  __typename: 'InternalShopifyFulfillmentOrderRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentOrderRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentOrderRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentOrderLineItemRecord items. */
export type InternalShopifyFulfillmentOrderLineItemRecordConnection = {

  __typename: 'InternalShopifyFulfillmentOrderLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentOrderLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentOrderLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentOrderLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentOrderLineItemRecord connection. */
export type InternalShopifyFulfillmentOrderLineItemRecordEdge = {

  __typename: 'InternalShopifyFulfillmentOrderLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentOrderLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentOrderLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentServiceRecord items. */
export type InternalShopifyFulfillmentServiceRecordConnection = {

  __typename: 'InternalShopifyFulfillmentServiceRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentServiceRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentServiceRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentServiceRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentServiceRecord connection. */
export type InternalShopifyFulfillmentServiceRecordEdge = {

  __typename: 'InternalShopifyFulfillmentServiceRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentServiceRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentServiceRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {

  __typename: 'InternalShopifyGdprRequestRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyGdprRequestRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {

  __typename: 'InternalShopifyGdprRequestRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyGdprRequestRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyInventoryItemRecord items. */
export type InternalShopifyInventoryItemRecordConnection = {

  __typename: 'InternalShopifyInventoryItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyInventoryItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyInventoryItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyInventoryItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyInventoryItemRecord connection. */
export type InternalShopifyInventoryItemRecordEdge = {

  __typename: 'InternalShopifyInventoryItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyInventoryItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyInventoryItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyInventoryLevelRecord items. */
export type InternalShopifyInventoryLevelRecordConnection = {

  __typename: 'InternalShopifyInventoryLevelRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyInventoryLevelRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyInventoryLevelRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyInventoryLevelRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyInventoryLevelRecord connection. */
export type InternalShopifyInventoryLevelRecordEdge = {

  __typename: 'InternalShopifyInventoryLevelRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyInventoryLevelRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyInventoryLevelRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyLocationRecord items. */
export type InternalShopifyLocationRecordConnection = {

  __typename: 'InternalShopifyLocationRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyLocationRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyLocationRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyLocationRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyLocationRecord connection. */
export type InternalShopifyLocationRecordEdge = {

  __typename: 'InternalShopifyLocationRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyLocationRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyLocationRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderRecord items. */
export type InternalShopifyOrderRecordConnection = {

  __typename: 'InternalShopifyOrderRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderRecord connection. */
export type InternalShopifyOrderRecordEdge = {

  __typename: 'InternalShopifyOrderRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderAdjustmentRecord items. */
export type InternalShopifyOrderAdjustmentRecordConnection = {

  __typename: 'InternalShopifyOrderAdjustmentRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderAdjustmentRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderAdjustmentRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderAdjustmentRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderAdjustmentRecord connection. */
export type InternalShopifyOrderAdjustmentRecordEdge = {

  __typename: 'InternalShopifyOrderAdjustmentRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderAdjustmentRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderAdjustmentRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderLineItemRecord items. */
export type InternalShopifyOrderLineItemRecordConnection = {

  __typename: 'InternalShopifyOrderLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderLineItemRecord connection. */
export type InternalShopifyOrderLineItemRecordEdge = {

  __typename: 'InternalShopifyOrderLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderRiskRecord items. */
export type InternalShopifyOrderRiskRecordConnection = {

  __typename: 'InternalShopifyOrderRiskRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderRiskRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderRiskRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderRiskRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderRiskRecord connection. */
export type InternalShopifyOrderRiskRecordEdge = {

  __typename: 'InternalShopifyOrderRiskRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderRiskRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderRiskRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderTransactionRecord items. */
export type InternalShopifyOrderTransactionRecordConnection = {

  __typename: 'InternalShopifyOrderTransactionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderTransactionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderTransactionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderTransactionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderTransactionRecord connection. */
export type InternalShopifyOrderTransactionRecordEdge = {

  __typename: 'InternalShopifyOrderTransactionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderTransactionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderTransactionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyPriceRuleRecord items. */
export type InternalShopifyPriceRuleRecordConnection = {

  __typename: 'InternalShopifyPriceRuleRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyPriceRuleRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyPriceRuleRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyPriceRuleRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyPriceRuleRecord connection. */
export type InternalShopifyPriceRuleRecordEdge = {

  __typename: 'InternalShopifyPriceRuleRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyPriceRuleRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyPriceRuleRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {

  __typename: 'InternalShopifyProductRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {

  __typename: 'InternalShopifyProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductImageRecord items. */
export type InternalShopifyProductImageRecordConnection = {

  __typename: 'InternalShopifyProductImageRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductImageRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductImageRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductImageRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductImageRecord connection. */
export type InternalShopifyProductImageRecordEdge = {

  __typename: 'InternalShopifyProductImageRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductImageRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductImageRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductOptionRecord items. */
export type InternalShopifyProductOptionRecordConnection = {

  __typename: 'InternalShopifyProductOptionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductOptionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductOptionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductOptionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductOptionRecord connection. */
export type InternalShopifyProductOptionRecordEdge = {

  __typename: 'InternalShopifyProductOptionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductOptionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductOptionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductVariantRecord items. */
export type InternalShopifyProductVariantRecordConnection = {

  __typename: 'InternalShopifyProductVariantRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductVariantRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductVariantRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductVariantRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductVariantRecord connection. */
export type InternalShopifyProductVariantRecordEdge = {

  __typename: 'InternalShopifyProductVariantRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductVariantRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductVariantRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProvinceRecord items. */
export type InternalShopifyProvinceRecordConnection = {

  __typename: 'InternalShopifyProvinceRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProvinceRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProvinceRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProvinceRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProvinceRecord connection. */
export type InternalShopifyProvinceRecordEdge = {

  __typename: 'InternalShopifyProvinceRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProvinceRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProvinceRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRefundRecord items. */
export type InternalShopifyRefundRecordConnection = {

  __typename: 'InternalShopifyRefundRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRefundRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRefundRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRefundRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRefundRecord connection. */
export type InternalShopifyRefundRecordEdge = {

  __typename: 'InternalShopifyRefundRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRefundRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRefundRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRefundDutyRecord items. */
export type InternalShopifyRefundDutyRecordConnection = {

  __typename: 'InternalShopifyRefundDutyRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRefundDutyRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRefundDutyRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRefundDutyRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRefundDutyRecord connection. */
export type InternalShopifyRefundDutyRecordEdge = {

  __typename: 'InternalShopifyRefundDutyRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRefundDutyRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRefundDutyRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRefundLineItemRecord items. */
export type InternalShopifyRefundLineItemRecordConnection = {

  __typename: 'InternalShopifyRefundLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRefundLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRefundLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRefundLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRefundLineItemRecord connection. */
export type InternalShopifyRefundLineItemRecordEdge = {

  __typename: 'InternalShopifyRefundLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRefundLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRefundLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyScriptTagRecord items. */
export type InternalShopifyScriptTagRecordConnection = {

  __typename: 'InternalShopifyScriptTagRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyScriptTagRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyScriptTagRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyScriptTagRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyScriptTagRecord connection. */
export type InternalShopifyScriptTagRecordEdge = {

  __typename: 'InternalShopifyScriptTagRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyScriptTagRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyScriptTagRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySellingPlanRecord items. */
export type InternalShopifySellingPlanRecordConnection = {

  __typename: 'InternalShopifySellingPlanRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySellingPlanRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySellingPlanRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySellingPlanRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySellingPlanRecord connection. */
export type InternalShopifySellingPlanRecordEdge = {

  __typename: 'InternalShopifySellingPlanRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySellingPlanRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySellingPlanRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySellingPlanGroupRecord items. */
export type InternalShopifySellingPlanGroupRecordConnection = {

  __typename: 'InternalShopifySellingPlanGroupRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySellingPlanGroupRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySellingPlanGroupRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySellingPlanGroupRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySellingPlanGroupRecord connection. */
export type InternalShopifySellingPlanGroupRecordEdge = {

  __typename: 'InternalShopifySellingPlanGroupRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySellingPlanGroupRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySellingPlanGroupRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySellingPlanGroupProductRecord items. */
export type InternalShopifySellingPlanGroupProductRecordConnection = {

  __typename: 'InternalShopifySellingPlanGroupProductRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySellingPlanGroupProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySellingPlanGroupProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySellingPlanGroupProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySellingPlanGroupProductRecord connection. */
export type InternalShopifySellingPlanGroupProductRecordEdge = {

  __typename: 'InternalShopifySellingPlanGroupProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySellingPlanGroupProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySellingPlanGroupProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySellingPlanGroupProductVariantRecord items. */
export type InternalShopifySellingPlanGroupProductVariantRecordConnection = {

  __typename: 'InternalShopifySellingPlanGroupProductVariantRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySellingPlanGroupProductVariantRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySellingPlanGroupProductVariantRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySellingPlanGroupProductVariantRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySellingPlanGroupProductVariantRecord connection. */
export type InternalShopifySellingPlanGroupProductVariantRecordEdge = {

  __typename: 'InternalShopifySellingPlanGroupProductVariantRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySellingPlanGroupProductVariantRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySellingPlanGroupProductVariantRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShippingLineRecord items. */
export type InternalShopifyShippingLineRecordConnection = {

  __typename: 'InternalShopifyShippingLineRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShippingLineRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShippingLineRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShippingLineRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShippingLineRecord connection. */
export type InternalShopifyShippingLineRecordEdge = {

  __typename: 'InternalShopifyShippingLineRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShippingLineRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShippingLineRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {

  __typename: 'InternalShopifyShopRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShopRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShopRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShopRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {

  __typename: 'InternalShopifyShopRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShopRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShopRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {

  __typename: 'InternalShopifySyncRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySyncRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySyncRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySyncRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {

  __typename: 'InternalShopifySyncRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySyncRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySyncRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyTenderTransactionRecord items. */
export type InternalShopifyTenderTransactionRecordConnection = {

  __typename: 'InternalShopifyTenderTransactionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyTenderTransactionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyTenderTransactionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyTenderTransactionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyTenderTransactionRecord connection. */
export type InternalShopifyTenderTransactionRecordEdge = {

  __typename: 'InternalShopifyTenderTransactionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyTenderTransactionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyTenderTransactionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyThemeRecord items. */
export type InternalShopifyThemeRecordConnection = {

  __typename: 'InternalShopifyThemeRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyThemeRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyThemeRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyThemeRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyThemeRecord connection. */
export type InternalShopifyThemeRecordEdge = {

  __typename: 'InternalShopifyThemeRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyThemeRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyThemeRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {

  __typename: 'GadgetRole';

  key: Scalars['String'];

  name: Scalars['String'];

  selectable: Scalars['Boolean'];

  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export type GadgetGlobalAction = {

  __typename: 'GadgetGlobalAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export type GadgetGlobalActionGraphQLType = {

  __typename: 'GadgetGlobalActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {

  __typename: 'DirectUploadToken';

  /** The URL to upload a file to. */
  url: Scalars['String'];

  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};


/** Information about the Shopify Connection */
export type Shopify = {

  __typename: 'Shopify';

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication: (Scalars['Boolean'] | null);

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes: Scalars['String'][];
};



export type AvailableShopifySelection = {

  __typename?: boolean | null | undefined;

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: boolean | null | undefined;

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: boolean | null | undefined;
};



export type Mutation = {

  __typename: 'Mutation';

  signUpUser: (SignUpUserResult | null);

  bulkSignUpUsers: (BulkSignUpUsersResult | null);

  signInUser: (SignInUserResult | null);

  bulkSignInUsers: (BulkSignInUsersResult | null);

  signOutUser: (SignOutUserResult | null);

  bulkSignOutUsers: (BulkSignOutUsersResult | null);

  updateUser: (UpdateUserResult | null);

  bulkUpdateUsers: (BulkUpdateUsersResult | null);

  deleteUser: (DeleteUserResult | null);

  bulkDeleteUsers: (BulkDeleteUsersResult | null);

  sendVerifyEmailUser: (SendVerifyEmailUserResult | null);

  bulkSendVerifyEmailUsers: (BulkSendVerifyEmailUsersResult | null);

  verifyEmailUser: (VerifyEmailUserResult | null);

  bulkVerifyEmailUsers: (BulkVerifyEmailUsersResult | null);

  sendResetPasswordUser: (SendResetPasswordUserResult | null);

  bulkSendResetPasswordUsers: (BulkSendResetPasswordUsersResult | null);

  resetPasswordUser: (ResetPasswordUserResult | null);

  bulkResetPasswordUsers: (BulkResetPasswordUsersResult | null);

  changePasswordUser: (ChangePasswordUserResult | null);

  bulkChangePasswordUsers: (BulkChangePasswordUsersResult | null);

  runShopifySync: (RunShopifySyncResult | null);

  bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);

  completeShopifySync: (CompleteShopifySyncResult | null);

  bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);

  errorShopifySync: (ErrorShopifySyncResult | null);

  bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);

  abortShopifySync: (AbortShopifySyncResult | null);

  bulkAbortShopifySyncs: (BulkAbortShopifySyncsResult | null);

  globalShopifySync: (GlobalShopifySyncResult | null);

  internal: (InternalMutations | null);
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  signUpUser?: AvailableSignUpUserResultSelection;

  bulkSignUpUsers?: AvailableBulkSignUpUsersResultSelection;

  signInUser?: AvailableSignInUserResultSelection;

  bulkSignInUsers?: AvailableBulkSignInUsersResultSelection;

  signOutUser?: AvailableSignOutUserResultSelection;

  bulkSignOutUsers?: AvailableBulkSignOutUsersResultSelection;

  updateUser?: AvailableUpdateUserResultSelection;

  bulkUpdateUsers?: AvailableBulkUpdateUsersResultSelection;

  deleteUser?: AvailableDeleteUserResultSelection;

  bulkDeleteUsers?: AvailableBulkDeleteUsersResultSelection;

  sendVerifyEmailUser?: AvailableSendVerifyEmailUserResultSelection;

  bulkSendVerifyEmailUsers?: AvailableBulkSendVerifyEmailUsersResultSelection;

  verifyEmailUser?: AvailableVerifyEmailUserResultSelection;

  bulkVerifyEmailUsers?: AvailableBulkVerifyEmailUsersResultSelection;

  sendResetPasswordUser?: AvailableSendResetPasswordUserResultSelection;

  bulkSendResetPasswordUsers?: AvailableBulkSendResetPasswordUsersResultSelection;

  resetPasswordUser?: AvailableResetPasswordUserResultSelection;

  bulkResetPasswordUsers?: AvailableBulkResetPasswordUsersResultSelection;

  changePasswordUser?: AvailableChangePasswordUserResultSelection;

  bulkChangePasswordUsers?: AvailableBulkChangePasswordUsersResultSelection;

  runShopifySync?: AvailableRunShopifySyncResultSelection;

  bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;

  completeShopifySync?: AvailableCompleteShopifySyncResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;

  errorShopifySync?: AvailableErrorShopifySyncResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;

  abortShopifySync?: AvailableAbortShopifySyncResultSelection;

  bulkAbortShopifySyncs?: AvailableBulkAbortShopifySyncsResultSelection;

  globalShopifySync?: AvailableGlobalShopifySyncResultSelection;

  internal?: AvailableInternalMutationsSelection;
};



export type SignUpUserResult = {

  __typename: 'SignUpUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSignUpUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the signUp on the user model in bulk. */
export type BulkSignUpUsersResult = {

  __typename: 'BulkSignUpUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkSignUpUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type SignInUserResult = {

  __typename: 'SignInUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableSignInUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the signIn on the user model in bulk. */
export type BulkSignInUsersResult = {

  __typename: 'BulkSignInUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkSignInUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type SignOutUserResult = {

  __typename: 'SignOutUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableSignOutUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the signOut on the user model in bulk. */
export type BulkSignOutUsersResult = {

  __typename: 'BulkSignOutUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkSignOutUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type UpdateUserResult = {

  __typename: 'UpdateUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableUpdateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the update on the user model in bulk. */
export type BulkUpdateUsersResult = {

  __typename: 'BulkUpdateUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkUpdateUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type DeleteUserResult = {

  __typename: 'DeleteUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the user model in bulk. */
export type BulkDeleteUsersResult = {

  __typename: 'BulkDeleteUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type SendVerifyEmailUserResult = {

  __typename: 'SendVerifyEmailUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSendVerifyEmailUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the sendVerifyEmail on the user model in bulk. */
export type BulkSendVerifyEmailUsersResult = {

  __typename: 'BulkSendVerifyEmailUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkSendVerifyEmailUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type VerifyEmailUserResult = {

  __typename: 'VerifyEmailUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableVerifyEmailUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the verifyEmail on the user model in bulk. */
export type BulkVerifyEmailUsersResult = {

  __typename: 'BulkVerifyEmailUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkVerifyEmailUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type SendResetPasswordUserResult = {

  __typename: 'SendResetPasswordUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSendResetPasswordUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the sendResetPassword on the user model in bulk. */
export type BulkSendResetPasswordUsersResult = {

  __typename: 'BulkSendResetPasswordUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkSendResetPasswordUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type ResetPasswordUserResult = {

  __typename: 'ResetPasswordUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableResetPasswordUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the resetPassword on the user model in bulk. */
export type BulkResetPasswordUsersResult = {

  __typename: 'BulkResetPasswordUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkResetPasswordUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type ChangePasswordUserResult = {

  __typename: 'ChangePasswordUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableChangePasswordUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the changePassword on the user model in bulk. */
export type BulkChangePasswordUsersResult = {

  __typename: 'BulkChangePasswordUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkChangePasswordUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type RunShopifySyncResult = {

  __typename: 'RunShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableRunShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {

  __typename: 'BulkRunShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkRunShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CompleteShopifySyncResult = {

  __typename: 'CompleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableCompleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {

  __typename: 'BulkCompleteShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkCompleteShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type ErrorShopifySyncResult = {

  __typename: 'ErrorShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableErrorShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {

  __typename: 'BulkErrorShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkErrorShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type AbortShopifySyncResult = {

  __typename: 'AbortShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableAbortShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {

  __typename: 'BulkAbortShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkAbortShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type GlobalShopifySyncResult = {

  __typename: 'GlobalShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableGlobalShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type InternalMutations = {

  __typename: 'InternalMutations';

  startTransaction: Scalars['String'];

  commitTransaction: Scalars['String'];

  rollbackTransaction: Scalars['String'];

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;

  createUser: (InternalCreateUserResult | null);

  updateUser: (InternalUpdateUserResult | null);

  deleteUser: (InternalDeleteUserResult | null);

  deleteManyUser: (InternalDeleteManyUserResult | null);

  bulkCreateUsers: (InternalBulkCreateUsersResult | null);

  triggerSignUpUser: (SignUpUserResult | null);

  triggerSignInUser: (SignInUserResult | null);

  triggerSignOutUser: (SignOutUserResult | null);

  triggerUpdateUser: (UpdateUserResult | null);

  triggerDeleteUser: (DeleteUserResult | null);

  triggerSendVerifyEmailUser: (SendVerifyEmailUserResult | null);

  triggerVerifyEmailUser: (VerifyEmailUserResult | null);

  triggerSendResetPasswordUser: (SendResetPasswordUserResult | null);

  triggerResetPasswordUser: (ResetPasswordUserResult | null);

  triggerChangePasswordUser: (ChangePasswordUserResult | null);

  createSession: (InternalCreateSessionResult | null);

  updateSession: (InternalUpdateSessionResult | null);

  deleteSession: (InternalDeleteSessionResult | null);

  deleteManySession: (InternalDeleteManySessionResult | null);

  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);

  createShopifyAsset: (InternalCreateShopifyAssetResult | null);

  updateShopifyAsset: (InternalUpdateShopifyAssetResult | null);

  deleteShopifyAsset: (InternalDeleteShopifyAssetResult | null);

  deleteManyShopifyAsset: (InternalDeleteManyShopifyAssetResult | null);

  bulkCreateShopifyAssets: (InternalBulkCreateShopifyAssetsResult | null);

  triggerCreateShopifyAsset: (CreateShopifyAssetResult | null);

  triggerUpdateShopifyAsset: (UpdateShopifyAssetResult | null);

  triggerDeleteShopifyAsset: (DeleteShopifyAssetResult | null);

  createShopifyBulkOperation: (InternalCreateShopifyBulkOperationResult | null);

  updateShopifyBulkOperation: (InternalUpdateShopifyBulkOperationResult | null);

  deleteShopifyBulkOperation: (InternalDeleteShopifyBulkOperationResult | null);

  deleteManyShopifyBulkOperation: (InternalDeleteManyShopifyBulkOperationResult | null);

  bulkCreateShopifyBulkOperations: (InternalBulkCreateShopifyBulkOperationsResult | null);

  triggerCreateShopifyBulkOperation: (CreateShopifyBulkOperationResult | null);

  triggerUpdateShopifyBulkOperation: (UpdateShopifyBulkOperationResult | null);

  triggerCompleteShopifyBulkOperation: (CompleteShopifyBulkOperationResult | null);

  triggerCancelShopifyBulkOperation: (CancelShopifyBulkOperationResult | null);

  triggerFailShopifyBulkOperation: (FailShopifyBulkOperationResult | null);

  triggerExpireShopifyBulkOperation: (ExpireShopifyBulkOperationResult | null);

  createShopifyCarrierService: (InternalCreateShopifyCarrierServiceResult | null);

  updateShopifyCarrierService: (InternalUpdateShopifyCarrierServiceResult | null);

  deleteShopifyCarrierService: (InternalDeleteShopifyCarrierServiceResult | null);

  deleteManyShopifyCarrierService: (InternalDeleteManyShopifyCarrierServiceResult | null);

  bulkCreateShopifyCarrierServices: (InternalBulkCreateShopifyCarrierServicesResult | null);

  triggerCreateShopifyCarrierService: (CreateShopifyCarrierServiceResult | null);

  triggerUpdateShopifyCarrierService: (UpdateShopifyCarrierServiceResult | null);

  triggerDeleteShopifyCarrierService: (DeleteShopifyCarrierServiceResult | null);

  createShopifyCart: (InternalCreateShopifyCartResult | null);

  updateShopifyCart: (InternalUpdateShopifyCartResult | null);

  deleteShopifyCart: (InternalDeleteShopifyCartResult | null);

  deleteManyShopifyCart: (InternalDeleteManyShopifyCartResult | null);

  bulkCreateShopifyCarts: (InternalBulkCreateShopifyCartsResult | null);

  triggerCreateShopifyCart: (CreateShopifyCartResult | null);

  triggerUpdateShopifyCart: (UpdateShopifyCartResult | null);

  createShopifyCollect: (InternalCreateShopifyCollectResult | null);

  updateShopifyCollect: (InternalUpdateShopifyCollectResult | null);

  deleteShopifyCollect: (InternalDeleteShopifyCollectResult | null);

  deleteManyShopifyCollect: (InternalDeleteManyShopifyCollectResult | null);

  bulkCreateShopifyCollects: (InternalBulkCreateShopifyCollectsResult | null);

  triggerCreateShopifyCollect: (CreateShopifyCollectResult | null);

  triggerUpdateShopifyCollect: (UpdateShopifyCollectResult | null);

  triggerDeleteShopifyCollect: (DeleteShopifyCollectResult | null);

  createShopifyCollection: (InternalCreateShopifyCollectionResult | null);

  updateShopifyCollection: (InternalUpdateShopifyCollectionResult | null);

  deleteShopifyCollection: (InternalDeleteShopifyCollectionResult | null);

  deleteManyShopifyCollection: (InternalDeleteManyShopifyCollectionResult | null);

  bulkCreateShopifyCollections: (InternalBulkCreateShopifyCollectionsResult | null);

  triggerCreateShopifyCollection: (CreateShopifyCollectionResult | null);

  triggerUpdateShopifyCollection: (UpdateShopifyCollectionResult | null);

  triggerDeleteShopifyCollection: (DeleteShopifyCollectionResult | null);

  createShopifyCountry: (InternalCreateShopifyCountryResult | null);

  updateShopifyCountry: (InternalUpdateShopifyCountryResult | null);

  deleteShopifyCountry: (InternalDeleteShopifyCountryResult | null);

  deleteManyShopifyCountry: (InternalDeleteManyShopifyCountryResult | null);

  bulkCreateShopifyCountries: (InternalBulkCreateShopifyCountriesResult | null);

  triggerCreateShopifyCountry: (CreateShopifyCountryResult | null);

  triggerUpdateShopifyCountry: (UpdateShopifyCountryResult | null);

  triggerDeleteShopifyCountry: (DeleteShopifyCountryResult | null);

  createShopifyCustomer: (InternalCreateShopifyCustomerResult | null);

  updateShopifyCustomer: (InternalUpdateShopifyCustomerResult | null);

  deleteShopifyCustomer: (InternalDeleteShopifyCustomerResult | null);

  deleteManyShopifyCustomer: (InternalDeleteManyShopifyCustomerResult | null);

  bulkCreateShopifyCustomers: (InternalBulkCreateShopifyCustomersResult | null);

  triggerCreateShopifyCustomer: (CreateShopifyCustomerResult | null);

  triggerUpdateShopifyCustomer: (UpdateShopifyCustomerResult | null);

  triggerDeleteShopifyCustomer: (DeleteShopifyCustomerResult | null);

  createShopifyCustomerAddress: (InternalCreateShopifyCustomerAddressResult | null);

  updateShopifyCustomerAddress: (InternalUpdateShopifyCustomerAddressResult | null);

  deleteShopifyCustomerAddress: (InternalDeleteShopifyCustomerAddressResult | null);

  deleteManyShopifyCustomerAddress: (InternalDeleteManyShopifyCustomerAddressResult | null);

  bulkCreateShopifyCustomerAddresses: (InternalBulkCreateShopifyCustomerAddressesResult | null);

  triggerCreateShopifyCustomerAddress: (CreateShopifyCustomerAddressResult | null);

  triggerUpdateShopifyCustomerAddress: (UpdateShopifyCustomerAddressResult | null);

  triggerDeleteShopifyCustomerAddress: (DeleteShopifyCustomerAddressResult | null);

  createShopifyCustomerMergeable: (InternalCreateShopifyCustomerMergeableResult | null);

  updateShopifyCustomerMergeable: (InternalUpdateShopifyCustomerMergeableResult | null);

  deleteShopifyCustomerMergeable: (InternalDeleteShopifyCustomerMergeableResult | null);

  deleteManyShopifyCustomerMergeable: (InternalDeleteManyShopifyCustomerMergeableResult | null);

  bulkCreateShopifyCustomerMergeables: (InternalBulkCreateShopifyCustomerMergeablesResult | null);

  triggerCreateShopifyCustomerMergeable: (CreateShopifyCustomerMergeableResult | null);

  triggerUpdateShopifyCustomerMergeable: (UpdateShopifyCustomerMergeableResult | null);

  triggerDeleteShopifyCustomerMergeable: (DeleteShopifyCustomerMergeableResult | null);

  createShopifyCustomerPaymentMethod: (InternalCreateShopifyCustomerPaymentMethodResult | null);

  updateShopifyCustomerPaymentMethod: (InternalUpdateShopifyCustomerPaymentMethodResult | null);

  deleteShopifyCustomerPaymentMethod: (InternalDeleteShopifyCustomerPaymentMethodResult | null);

  deleteManyShopifyCustomerPaymentMethod: (InternalDeleteManyShopifyCustomerPaymentMethodResult | null);

  bulkCreateShopifyCustomerPaymentMethods: (InternalBulkCreateShopifyCustomerPaymentMethodsResult | null);

  triggerCreateShopifyCustomerPaymentMethod: (CreateShopifyCustomerPaymentMethodResult | null);

  triggerUpdateShopifyCustomerPaymentMethod: (UpdateShopifyCustomerPaymentMethodResult | null);

  triggerDeleteShopifyCustomerPaymentMethod: (DeleteShopifyCustomerPaymentMethodResult | null);

  triggerRevokeShopifyCustomerPaymentMethod: (RevokeShopifyCustomerPaymentMethodResult | null);

  createShopifyDiscount: (InternalCreateShopifyDiscountResult | null);

  updateShopifyDiscount: (InternalUpdateShopifyDiscountResult | null);

  deleteShopifyDiscount: (InternalDeleteShopifyDiscountResult | null);

  deleteManyShopifyDiscount: (InternalDeleteManyShopifyDiscountResult | null);

  bulkCreateShopifyDiscounts: (InternalBulkCreateShopifyDiscountsResult | null);

  triggerCreateShopifyDiscount: (CreateShopifyDiscountResult | null);

  triggerUpdateShopifyDiscount: (UpdateShopifyDiscountResult | null);

  triggerDeleteShopifyDiscount: (DeleteShopifyDiscountResult | null);

  createShopifyDiscountCode: (InternalCreateShopifyDiscountCodeResult | null);

  updateShopifyDiscountCode: (InternalUpdateShopifyDiscountCodeResult | null);

  deleteShopifyDiscountCode: (InternalDeleteShopifyDiscountCodeResult | null);

  deleteManyShopifyDiscountCode: (InternalDeleteManyShopifyDiscountCodeResult | null);

  bulkCreateShopifyDiscountCodes: (InternalBulkCreateShopifyDiscountCodesResult | null);

  triggerCreateShopifyDiscountCode: (CreateShopifyDiscountCodeResult | null);

  triggerUpdateShopifyDiscountCode: (UpdateShopifyDiscountCodeResult | null);

  triggerDeleteShopifyDiscountCode: (DeleteShopifyDiscountCodeResult | null);

  createShopifyDraftOrder: (InternalCreateShopifyDraftOrderResult | null);

  updateShopifyDraftOrder: (InternalUpdateShopifyDraftOrderResult | null);

  deleteShopifyDraftOrder: (InternalDeleteShopifyDraftOrderResult | null);

  deleteManyShopifyDraftOrder: (InternalDeleteManyShopifyDraftOrderResult | null);

  bulkCreateShopifyDraftOrders: (InternalBulkCreateShopifyDraftOrdersResult | null);

  triggerCreateShopifyDraftOrder: (CreateShopifyDraftOrderResult | null);

  triggerUpdateShopifyDraftOrder: (UpdateShopifyDraftOrderResult | null);

  triggerDeleteShopifyDraftOrder: (DeleteShopifyDraftOrderResult | null);

  createShopifyDraftOrderLineItem: (InternalCreateShopifyDraftOrderLineItemResult | null);

  updateShopifyDraftOrderLineItem: (InternalUpdateShopifyDraftOrderLineItemResult | null);

  deleteShopifyDraftOrderLineItem: (InternalDeleteShopifyDraftOrderLineItemResult | null);

  deleteManyShopifyDraftOrderLineItem: (InternalDeleteManyShopifyDraftOrderLineItemResult | null);

  bulkCreateShopifyDraftOrderLineItems: (InternalBulkCreateShopifyDraftOrderLineItemsResult | null);

  triggerCreateShopifyDraftOrderLineItem: (CreateShopifyDraftOrderLineItemResult | null);

  triggerUpdateShopifyDraftOrderLineItem: (UpdateShopifyDraftOrderLineItemResult | null);

  triggerDeleteShopifyDraftOrderLineItem: (DeleteShopifyDraftOrderLineItemResult | null);

  createShopifyDuty: (InternalCreateShopifyDutyResult | null);

  updateShopifyDuty: (InternalUpdateShopifyDutyResult | null);

  deleteShopifyDuty: (InternalDeleteShopifyDutyResult | null);

  deleteManyShopifyDuty: (InternalDeleteManyShopifyDutyResult | null);

  bulkCreateShopifyDuties: (InternalBulkCreateShopifyDutiesResult | null);

  triggerCreateShopifyDuty: (CreateShopifyDutyResult | null);

  triggerUpdateShopifyDuty: (UpdateShopifyDutyResult | null);

  triggerDeleteShopifyDuty: (DeleteShopifyDutyResult | null);

  createShopifyFile: (InternalCreateShopifyFileResult | null);

  updateShopifyFile: (InternalUpdateShopifyFileResult | null);

  deleteShopifyFile: (InternalDeleteShopifyFileResult | null);

  deleteManyShopifyFile: (InternalDeleteManyShopifyFileResult | null);

  bulkCreateShopifyFiles: (InternalBulkCreateShopifyFilesResult | null);

  triggerCreateShopifyFile: (CreateShopifyFileResult | null);

  triggerUpdateShopifyFile: (UpdateShopifyFileResult | null);

  triggerDeleteShopifyFile: (DeleteShopifyFileResult | null);

  createShopifyFulfillment: (InternalCreateShopifyFulfillmentResult | null);

  updateShopifyFulfillment: (InternalUpdateShopifyFulfillmentResult | null);

  deleteShopifyFulfillment: (InternalDeleteShopifyFulfillmentResult | null);

  deleteManyShopifyFulfillment: (InternalDeleteManyShopifyFulfillmentResult | null);

  bulkCreateShopifyFulfillments: (InternalBulkCreateShopifyFulfillmentsResult | null);

  triggerCreateShopifyFulfillment: (CreateShopifyFulfillmentResult | null);

  triggerUpdateShopifyFulfillment: (UpdateShopifyFulfillmentResult | null);

  triggerDeleteShopifyFulfillment: (DeleteShopifyFulfillmentResult | null);

  createShopifyFulfillmentEvent: (InternalCreateShopifyFulfillmentEventResult | null);

  updateShopifyFulfillmentEvent: (InternalUpdateShopifyFulfillmentEventResult | null);

  deleteShopifyFulfillmentEvent: (InternalDeleteShopifyFulfillmentEventResult | null);

  deleteManyShopifyFulfillmentEvent: (InternalDeleteManyShopifyFulfillmentEventResult | null);

  bulkCreateShopifyFulfillmentEvents: (InternalBulkCreateShopifyFulfillmentEventsResult | null);

  triggerCreateShopifyFulfillmentEvent: (CreateShopifyFulfillmentEventResult | null);

  triggerUpdateShopifyFulfillmentEvent: (UpdateShopifyFulfillmentEventResult | null);

  triggerDeleteShopifyFulfillmentEvent: (DeleteShopifyFulfillmentEventResult | null);

  createShopifyFulfillmentLineItem: (InternalCreateShopifyFulfillmentLineItemResult | null);

  updateShopifyFulfillmentLineItem: (InternalUpdateShopifyFulfillmentLineItemResult | null);

  deleteShopifyFulfillmentLineItem: (InternalDeleteShopifyFulfillmentLineItemResult | null);

  deleteManyShopifyFulfillmentLineItem: (InternalDeleteManyShopifyFulfillmentLineItemResult | null);

  bulkCreateShopifyFulfillmentLineItems: (InternalBulkCreateShopifyFulfillmentLineItemsResult | null);

  triggerCreateShopifyFulfillmentLineItem: (CreateShopifyFulfillmentLineItemResult | null);

  triggerUpdateShopifyFulfillmentLineItem: (UpdateShopifyFulfillmentLineItemResult | null);

  triggerDeleteShopifyFulfillmentLineItem: (DeleteShopifyFulfillmentLineItemResult | null);

  createShopifyFulfillmentOrder: (InternalCreateShopifyFulfillmentOrderResult | null);

  updateShopifyFulfillmentOrder: (InternalUpdateShopifyFulfillmentOrderResult | null);

  deleteShopifyFulfillmentOrder: (InternalDeleteShopifyFulfillmentOrderResult | null);

  deleteManyShopifyFulfillmentOrder: (InternalDeleteManyShopifyFulfillmentOrderResult | null);

  bulkCreateShopifyFulfillmentOrders: (InternalBulkCreateShopifyFulfillmentOrdersResult | null);

  triggerCreateShopifyFulfillmentOrder: (CreateShopifyFulfillmentOrderResult | null);

  triggerUpdateShopifyFulfillmentOrder: (UpdateShopifyFulfillmentOrderResult | null);

  triggerDeleteShopifyFulfillmentOrder: (DeleteShopifyFulfillmentOrderResult | null);

  createShopifyFulfillmentOrderLineItem: (InternalCreateShopifyFulfillmentOrderLineItemResult | null);

  updateShopifyFulfillmentOrderLineItem: (InternalUpdateShopifyFulfillmentOrderLineItemResult | null);

  deleteShopifyFulfillmentOrderLineItem: (InternalDeleteShopifyFulfillmentOrderLineItemResult | null);

  deleteManyShopifyFulfillmentOrderLineItem: (InternalDeleteManyShopifyFulfillmentOrderLineItemResult | null);

  bulkCreateShopifyFulfillmentOrderLineItems: (InternalBulkCreateShopifyFulfillmentOrderLineItemsResult | null);

  triggerCreateShopifyFulfillmentOrderLineItem: (CreateShopifyFulfillmentOrderLineItemResult | null);

  triggerUpdateShopifyFulfillmentOrderLineItem: (UpdateShopifyFulfillmentOrderLineItemResult | null);

  triggerDeleteShopifyFulfillmentOrderLineItem: (DeleteShopifyFulfillmentOrderLineItemResult | null);

  createShopifyFulfillmentService: (InternalCreateShopifyFulfillmentServiceResult | null);

  updateShopifyFulfillmentService: (InternalUpdateShopifyFulfillmentServiceResult | null);

  deleteShopifyFulfillmentService: (InternalDeleteShopifyFulfillmentServiceResult | null);

  deleteManyShopifyFulfillmentService: (InternalDeleteManyShopifyFulfillmentServiceResult | null);

  bulkCreateShopifyFulfillmentServices: (InternalBulkCreateShopifyFulfillmentServicesResult | null);

  triggerCreateShopifyFulfillmentService: (CreateShopifyFulfillmentServiceResult | null);

  triggerUpdateShopifyFulfillmentService: (UpdateShopifyFulfillmentServiceResult | null);

  triggerDeleteShopifyFulfillmentService: (DeleteShopifyFulfillmentServiceResult | null);

  createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);

  updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);

  deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);

  deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);

  bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);

  triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);

  triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);

  createShopifyInventoryItem: (InternalCreateShopifyInventoryItemResult | null);

  updateShopifyInventoryItem: (InternalUpdateShopifyInventoryItemResult | null);

  deleteShopifyInventoryItem: (InternalDeleteShopifyInventoryItemResult | null);

  deleteManyShopifyInventoryItem: (InternalDeleteManyShopifyInventoryItemResult | null);

  bulkCreateShopifyInventoryItems: (InternalBulkCreateShopifyInventoryItemsResult | null);

  triggerCreateShopifyInventoryItem: (CreateShopifyInventoryItemResult | null);

  triggerUpdateShopifyInventoryItem: (UpdateShopifyInventoryItemResult | null);

  triggerDeleteShopifyInventoryItem: (DeleteShopifyInventoryItemResult | null);

  createShopifyInventoryLevel: (InternalCreateShopifyInventoryLevelResult | null);

  updateShopifyInventoryLevel: (InternalUpdateShopifyInventoryLevelResult | null);

  deleteShopifyInventoryLevel: (InternalDeleteShopifyInventoryLevelResult | null);

  deleteManyShopifyInventoryLevel: (InternalDeleteManyShopifyInventoryLevelResult | null);

  bulkCreateShopifyInventoryLevels: (InternalBulkCreateShopifyInventoryLevelsResult | null);

  triggerCreateShopifyInventoryLevel: (CreateShopifyInventoryLevelResult | null);

  triggerUpdateShopifyInventoryLevel: (UpdateShopifyInventoryLevelResult | null);

  triggerDeleteShopifyInventoryLevel: (DeleteShopifyInventoryLevelResult | null);

  createShopifyLocation: (InternalCreateShopifyLocationResult | null);

  updateShopifyLocation: (InternalUpdateShopifyLocationResult | null);

  deleteShopifyLocation: (InternalDeleteShopifyLocationResult | null);

  deleteManyShopifyLocation: (InternalDeleteManyShopifyLocationResult | null);

  bulkCreateShopifyLocations: (InternalBulkCreateShopifyLocationsResult | null);

  triggerCreateShopifyLocation: (CreateShopifyLocationResult | null);

  triggerUpdateShopifyLocation: (UpdateShopifyLocationResult | null);

  triggerDeleteShopifyLocation: (DeleteShopifyLocationResult | null);

  createShopifyOrder: (InternalCreateShopifyOrderResult | null);

  updateShopifyOrder: (InternalUpdateShopifyOrderResult | null);

  deleteShopifyOrder: (InternalDeleteShopifyOrderResult | null);

  deleteManyShopifyOrder: (InternalDeleteManyShopifyOrderResult | null);

  bulkCreateShopifyOrders: (InternalBulkCreateShopifyOrdersResult | null);

  triggerCreateShopifyOrder: (CreateShopifyOrderResult | null);

  triggerUpdateShopifyOrder: (UpdateShopifyOrderResult | null);

  triggerDeleteShopifyOrder: (DeleteShopifyOrderResult | null);

  createShopifyOrderAdjustment: (InternalCreateShopifyOrderAdjustmentResult | null);

  updateShopifyOrderAdjustment: (InternalUpdateShopifyOrderAdjustmentResult | null);

  deleteShopifyOrderAdjustment: (InternalDeleteShopifyOrderAdjustmentResult | null);

  deleteManyShopifyOrderAdjustment: (InternalDeleteManyShopifyOrderAdjustmentResult | null);

  bulkCreateShopifyOrderAdjustments: (InternalBulkCreateShopifyOrderAdjustmentsResult | null);

  triggerCreateShopifyOrderAdjustment: (CreateShopifyOrderAdjustmentResult | null);

  triggerUpdateShopifyOrderAdjustment: (UpdateShopifyOrderAdjustmentResult | null);

  triggerDeleteShopifyOrderAdjustment: (DeleteShopifyOrderAdjustmentResult | null);

  createShopifyOrderLineItem: (InternalCreateShopifyOrderLineItemResult | null);

  updateShopifyOrderLineItem: (InternalUpdateShopifyOrderLineItemResult | null);

  deleteShopifyOrderLineItem: (InternalDeleteShopifyOrderLineItemResult | null);

  deleteManyShopifyOrderLineItem: (InternalDeleteManyShopifyOrderLineItemResult | null);

  bulkCreateShopifyOrderLineItems: (InternalBulkCreateShopifyOrderLineItemsResult | null);

  triggerCreateShopifyOrderLineItem: (CreateShopifyOrderLineItemResult | null);

  triggerUpdateShopifyOrderLineItem: (UpdateShopifyOrderLineItemResult | null);

  triggerDeleteShopifyOrderLineItem: (DeleteShopifyOrderLineItemResult | null);

  createShopifyOrderRisk: (InternalCreateShopifyOrderRiskResult | null);

  updateShopifyOrderRisk: (InternalUpdateShopifyOrderRiskResult | null);

  deleteShopifyOrderRisk: (InternalDeleteShopifyOrderRiskResult | null);

  deleteManyShopifyOrderRisk: (InternalDeleteManyShopifyOrderRiskResult | null);

  bulkCreateShopifyOrderRisks: (InternalBulkCreateShopifyOrderRisksResult | null);

  triggerCreateShopifyOrderRisk: (CreateShopifyOrderRiskResult | null);

  triggerUpdateShopifyOrderRisk: (UpdateShopifyOrderRiskResult | null);

  triggerDeleteShopifyOrderRisk: (DeleteShopifyOrderRiskResult | null);

  createShopifyOrderTransaction: (InternalCreateShopifyOrderTransactionResult | null);

  updateShopifyOrderTransaction: (InternalUpdateShopifyOrderTransactionResult | null);

  deleteShopifyOrderTransaction: (InternalDeleteShopifyOrderTransactionResult | null);

  deleteManyShopifyOrderTransaction: (InternalDeleteManyShopifyOrderTransactionResult | null);

  bulkCreateShopifyOrderTransactions: (InternalBulkCreateShopifyOrderTransactionsResult | null);

  triggerCreateShopifyOrderTransaction: (CreateShopifyOrderTransactionResult | null);

  triggerUpdateShopifyOrderTransaction: (UpdateShopifyOrderTransactionResult | null);

  triggerDeleteShopifyOrderTransaction: (DeleteShopifyOrderTransactionResult | null);

  createShopifyPriceRule: (InternalCreateShopifyPriceRuleResult | null);

  updateShopifyPriceRule: (InternalUpdateShopifyPriceRuleResult | null);

  deleteShopifyPriceRule: (InternalDeleteShopifyPriceRuleResult | null);

  deleteManyShopifyPriceRule: (InternalDeleteManyShopifyPriceRuleResult | null);

  bulkCreateShopifyPriceRules: (InternalBulkCreateShopifyPriceRulesResult | null);

  triggerCreateShopifyPriceRule: (CreateShopifyPriceRuleResult | null);

  triggerUpdateShopifyPriceRule: (UpdateShopifyPriceRuleResult | null);

  triggerDeleteShopifyPriceRule: (DeleteShopifyPriceRuleResult | null);

  createShopifyProduct: (InternalCreateShopifyProductResult | null);

  updateShopifyProduct: (InternalUpdateShopifyProductResult | null);

  deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);

  deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);

  bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);

  triggerCreateShopifyProduct: (CreateShopifyProductResult | null);

  triggerUpdateShopifyProduct: (UpdateShopifyProductResult | null);

  triggerDeleteShopifyProduct: (DeleteShopifyProductResult | null);

  createShopifyProductImage: (InternalCreateShopifyProductImageResult | null);

  updateShopifyProductImage: (InternalUpdateShopifyProductImageResult | null);

  deleteShopifyProductImage: (InternalDeleteShopifyProductImageResult | null);

  deleteManyShopifyProductImage: (InternalDeleteManyShopifyProductImageResult | null);

  bulkCreateShopifyProductImages: (InternalBulkCreateShopifyProductImagesResult | null);

  triggerCreateShopifyProductImage: (CreateShopifyProductImageResult | null);

  triggerUpdateShopifyProductImage: (UpdateShopifyProductImageResult | null);

  triggerDeleteShopifyProductImage: (DeleteShopifyProductImageResult | null);

  createShopifyProductOption: (InternalCreateShopifyProductOptionResult | null);

  updateShopifyProductOption: (InternalUpdateShopifyProductOptionResult | null);

  deleteShopifyProductOption: (InternalDeleteShopifyProductOptionResult | null);

  deleteManyShopifyProductOption: (InternalDeleteManyShopifyProductOptionResult | null);

  bulkCreateShopifyProductOptions: (InternalBulkCreateShopifyProductOptionsResult | null);

  triggerCreateShopifyProductOption: (CreateShopifyProductOptionResult | null);

  triggerUpdateShopifyProductOption: (UpdateShopifyProductOptionResult | null);

  triggerDeleteShopifyProductOption: (DeleteShopifyProductOptionResult | null);

  createShopifyProductVariant: (InternalCreateShopifyProductVariantResult | null);

  updateShopifyProductVariant: (InternalUpdateShopifyProductVariantResult | null);

  deleteShopifyProductVariant: (InternalDeleteShopifyProductVariantResult | null);

  deleteManyShopifyProductVariant: (InternalDeleteManyShopifyProductVariantResult | null);

  bulkCreateShopifyProductVariants: (InternalBulkCreateShopifyProductVariantsResult | null);

  triggerCreateShopifyProductVariant: (CreateShopifyProductVariantResult | null);

  triggerUpdateShopifyProductVariant: (UpdateShopifyProductVariantResult | null);

  triggerDeleteShopifyProductVariant: (DeleteShopifyProductVariantResult | null);

  createShopifyProvince: (InternalCreateShopifyProvinceResult | null);

  updateShopifyProvince: (InternalUpdateShopifyProvinceResult | null);

  deleteShopifyProvince: (InternalDeleteShopifyProvinceResult | null);

  deleteManyShopifyProvince: (InternalDeleteManyShopifyProvinceResult | null);

  bulkCreateShopifyProvinces: (InternalBulkCreateShopifyProvincesResult | null);

  triggerCreateShopifyProvince: (CreateShopifyProvinceResult | null);

  triggerUpdateShopifyProvince: (UpdateShopifyProvinceResult | null);

  triggerDeleteShopifyProvince: (DeleteShopifyProvinceResult | null);

  createShopifyRefund: (InternalCreateShopifyRefundResult | null);

  updateShopifyRefund: (InternalUpdateShopifyRefundResult | null);

  deleteShopifyRefund: (InternalDeleteShopifyRefundResult | null);

  deleteManyShopifyRefund: (InternalDeleteManyShopifyRefundResult | null);

  bulkCreateShopifyRefunds: (InternalBulkCreateShopifyRefundsResult | null);

  triggerCreateShopifyRefund: (CreateShopifyRefundResult | null);

  triggerUpdateShopifyRefund: (UpdateShopifyRefundResult | null);

  triggerDeleteShopifyRefund: (DeleteShopifyRefundResult | null);

  createShopifyRefundDuty: (InternalCreateShopifyRefundDutyResult | null);

  updateShopifyRefundDuty: (InternalUpdateShopifyRefundDutyResult | null);

  deleteShopifyRefundDuty: (InternalDeleteShopifyRefundDutyResult | null);

  deleteManyShopifyRefundDuty: (InternalDeleteManyShopifyRefundDutyResult | null);

  bulkCreateShopifyRefundDuties: (InternalBulkCreateShopifyRefundDutiesResult | null);

  triggerCreateShopifyRefundDuty: (CreateShopifyRefundDutyResult | null);

  triggerUpdateShopifyRefundDuty: (UpdateShopifyRefundDutyResult | null);

  triggerDeleteShopifyRefundDuty: (DeleteShopifyRefundDutyResult | null);

  createShopifyRefundLineItem: (InternalCreateShopifyRefundLineItemResult | null);

  updateShopifyRefundLineItem: (InternalUpdateShopifyRefundLineItemResult | null);

  deleteShopifyRefundLineItem: (InternalDeleteShopifyRefundLineItemResult | null);

  deleteManyShopifyRefundLineItem: (InternalDeleteManyShopifyRefundLineItemResult | null);

  bulkCreateShopifyRefundLineItems: (InternalBulkCreateShopifyRefundLineItemsResult | null);

  triggerCreateShopifyRefundLineItem: (CreateShopifyRefundLineItemResult | null);

  triggerUpdateShopifyRefundLineItem: (UpdateShopifyRefundLineItemResult | null);

  triggerDeleteShopifyRefundLineItem: (DeleteShopifyRefundLineItemResult | null);

  createShopifyScriptTag: (InternalCreateShopifyScriptTagResult | null);

  updateShopifyScriptTag: (InternalUpdateShopifyScriptTagResult | null);

  deleteShopifyScriptTag: (InternalDeleteShopifyScriptTagResult | null);

  deleteManyShopifyScriptTag: (InternalDeleteManyShopifyScriptTagResult | null);

  bulkCreateShopifyScriptTags: (InternalBulkCreateShopifyScriptTagsResult | null);

  triggerCreateShopifyScriptTag: (CreateShopifyScriptTagResult | null);

  triggerUpdateShopifyScriptTag: (UpdateShopifyScriptTagResult | null);

  triggerDeleteShopifyScriptTag: (DeleteShopifyScriptTagResult | null);

  createShopifySellingPlan: (InternalCreateShopifySellingPlanResult | null);

  updateShopifySellingPlan: (InternalUpdateShopifySellingPlanResult | null);

  deleteShopifySellingPlan: (InternalDeleteShopifySellingPlanResult | null);

  deleteManyShopifySellingPlan: (InternalDeleteManyShopifySellingPlanResult | null);

  bulkCreateShopifySellingPlans: (InternalBulkCreateShopifySellingPlansResult | null);

  triggerCreateShopifySellingPlan: (CreateShopifySellingPlanResult | null);

  triggerUpdateShopifySellingPlan: (UpdateShopifySellingPlanResult | null);

  triggerDeleteShopifySellingPlan: (DeleteShopifySellingPlanResult | null);

  createShopifySellingPlanGroup: (InternalCreateShopifySellingPlanGroupResult | null);

  updateShopifySellingPlanGroup: (InternalUpdateShopifySellingPlanGroupResult | null);

  deleteShopifySellingPlanGroup: (InternalDeleteShopifySellingPlanGroupResult | null);

  deleteManyShopifySellingPlanGroup: (InternalDeleteManyShopifySellingPlanGroupResult | null);

  bulkCreateShopifySellingPlanGroups: (InternalBulkCreateShopifySellingPlanGroupsResult | null);

  triggerCreateShopifySellingPlanGroup: (CreateShopifySellingPlanGroupResult | null);

  triggerUpdateShopifySellingPlanGroup: (UpdateShopifySellingPlanGroupResult | null);

  triggerDeleteShopifySellingPlanGroup: (DeleteShopifySellingPlanGroupResult | null);

  createShopifySellingPlanGroupProduct: (InternalCreateShopifySellingPlanGroupProductResult | null);

  updateShopifySellingPlanGroupProduct: (InternalUpdateShopifySellingPlanGroupProductResult | null);

  deleteShopifySellingPlanGroupProduct: (InternalDeleteShopifySellingPlanGroupProductResult | null);

  deleteManyShopifySellingPlanGroupProduct: (InternalDeleteManyShopifySellingPlanGroupProductResult | null);

  bulkCreateShopifySellingPlanGroupProducts: (InternalBulkCreateShopifySellingPlanGroupProductsResult | null);

  triggerCreateShopifySellingPlanGroupProduct: (CreateShopifySellingPlanGroupProductResult | null);

  triggerUpdateShopifySellingPlanGroupProduct: (UpdateShopifySellingPlanGroupProductResult | null);

  triggerDeleteShopifySellingPlanGroupProduct: (DeleteShopifySellingPlanGroupProductResult | null);

  createShopifySellingPlanGroupProductVariant: (InternalCreateShopifySellingPlanGroupProductVariantResult | null);

  updateShopifySellingPlanGroupProductVariant: (InternalUpdateShopifySellingPlanGroupProductVariantResult | null);

  deleteShopifySellingPlanGroupProductVariant: (InternalDeleteShopifySellingPlanGroupProductVariantResult | null);

  deleteManyShopifySellingPlanGroupProductVariant: (InternalDeleteManyShopifySellingPlanGroupProductVariantResult | null);

  bulkCreateShopifySellingPlanGroupProductVariants: (InternalBulkCreateShopifySellingPlanGroupProductVariantsResult | null);

  triggerCreateShopifySellingPlanGroupProductVariant: (CreateShopifySellingPlanGroupProductVariantResult | null);

  triggerUpdateShopifySellingPlanGroupProductVariant: (UpdateShopifySellingPlanGroupProductVariantResult | null);

  triggerDeleteShopifySellingPlanGroupProductVariant: (DeleteShopifySellingPlanGroupProductVariantResult | null);

  createShopifyShippingLine: (InternalCreateShopifyShippingLineResult | null);

  updateShopifyShippingLine: (InternalUpdateShopifyShippingLineResult | null);

  deleteShopifyShippingLine: (InternalDeleteShopifyShippingLineResult | null);

  deleteManyShopifyShippingLine: (InternalDeleteManyShopifyShippingLineResult | null);

  bulkCreateShopifyShippingLines: (InternalBulkCreateShopifyShippingLinesResult | null);

  triggerCreateShopifyShippingLine: (CreateShopifyShippingLineResult | null);

  triggerUpdateShopifyShippingLine: (UpdateShopifyShippingLineResult | null);

  triggerDeleteShopifyShippingLine: (DeleteShopifyShippingLineResult | null);

  createShopifyShop: (InternalCreateShopifyShopResult | null);

  updateShopifyShop: (InternalUpdateShopifyShopResult | null);

  deleteShopifyShop: (InternalDeleteShopifyShopResult | null);

  deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);

  bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);

  triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);

  triggerInstallShopifyShop: (InstallShopifyShopResult | null);

  triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);

  triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);

  createShopifySync: (InternalCreateShopifySyncResult | null);

  updateShopifySync: (InternalUpdateShopifySyncResult | null);

  deleteShopifySync: (InternalDeleteShopifySyncResult | null);

  deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);

  bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);

  triggerRunShopifySync: (RunShopifySyncResult | null);

  triggerCompleteShopifySync: (CompleteShopifySyncResult | null);

  triggerErrorShopifySync: (ErrorShopifySyncResult | null);

  triggerAbortShopifySync: (AbortShopifySyncResult | null);

  createShopifyTenderTransaction: (InternalCreateShopifyTenderTransactionResult | null);

  updateShopifyTenderTransaction: (InternalUpdateShopifyTenderTransactionResult | null);

  deleteShopifyTenderTransaction: (InternalDeleteShopifyTenderTransactionResult | null);

  deleteManyShopifyTenderTransaction: (InternalDeleteManyShopifyTenderTransactionResult | null);

  bulkCreateShopifyTenderTransactions: (InternalBulkCreateShopifyTenderTransactionsResult | null);

  triggerCreateShopifyTenderTransaction: (CreateShopifyTenderTransactionResult | null);

  triggerUpdateShopifyTenderTransaction: (UpdateShopifyTenderTransactionResult | null);

  triggerDeleteShopifyTenderTransaction: (DeleteShopifyTenderTransactionResult | null);

  createShopifyTheme: (InternalCreateShopifyThemeResult | null);

  updateShopifyTheme: (InternalUpdateShopifyThemeResult | null);

  deleteShopifyTheme: (InternalDeleteShopifyThemeResult | null);

  deleteManyShopifyTheme: (InternalDeleteManyShopifyThemeResult | null);

  bulkCreateShopifyThemes: (InternalBulkCreateShopifyThemesResult | null);

  triggerCreateShopifyTheme: (CreateShopifyThemeResult | null);

  triggerUpdateShopifyTheme: (UpdateShopifyThemeResult | null);

  triggerDeleteShopifyTheme: (DeleteShopifyThemeResult | null);

  triggerGlobalShopifySync: (GlobalShopifySyncResult | null);
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createUser?: AvailableInternalCreateUserResultSelection;

  updateUser?: AvailableInternalUpdateUserResultSelection;

  deleteUser?: AvailableInternalDeleteUserResultSelection;

  deleteManyUser?: AvailableInternalDeleteManyUserResultSelection;

  bulkCreateUsers?: AvailableInternalBulkCreateUsersResultSelection;

  triggerSignUpUser?: AvailableSignUpUserResultSelection;

  triggerSignInUser?: AvailableSignInUserResultSelection;

  triggerSignOutUser?: AvailableSignOutUserResultSelection;

  triggerUpdateUser?: AvailableUpdateUserResultSelection;

  triggerDeleteUser?: AvailableDeleteUserResultSelection;

  triggerSendVerifyEmailUser?: AvailableSendVerifyEmailUserResultSelection;

  triggerVerifyEmailUser?: AvailableVerifyEmailUserResultSelection;

  triggerSendResetPasswordUser?: AvailableSendResetPasswordUserResultSelection;

  triggerResetPasswordUser?: AvailableResetPasswordUserResultSelection;

  triggerChangePasswordUser?: AvailableChangePasswordUserResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  createShopifyAsset?: AvailableInternalCreateShopifyAssetResultSelection;

  updateShopifyAsset?: AvailableInternalUpdateShopifyAssetResultSelection;

  deleteShopifyAsset?: AvailableInternalDeleteShopifyAssetResultSelection;

  deleteManyShopifyAsset?: AvailableInternalDeleteManyShopifyAssetResultSelection;

  bulkCreateShopifyAssets?: AvailableInternalBulkCreateShopifyAssetsResultSelection;

  triggerCreateShopifyAsset?: AvailableCreateShopifyAssetResultSelection;

  triggerUpdateShopifyAsset?: AvailableUpdateShopifyAssetResultSelection;

  triggerDeleteShopifyAsset?: AvailableDeleteShopifyAssetResultSelection;

  createShopifyBulkOperation?: AvailableInternalCreateShopifyBulkOperationResultSelection;

  updateShopifyBulkOperation?: AvailableInternalUpdateShopifyBulkOperationResultSelection;

  deleteShopifyBulkOperation?: AvailableInternalDeleteShopifyBulkOperationResultSelection;

  deleteManyShopifyBulkOperation?: AvailableInternalDeleteManyShopifyBulkOperationResultSelection;

  bulkCreateShopifyBulkOperations?: AvailableInternalBulkCreateShopifyBulkOperationsResultSelection;

  triggerCreateShopifyBulkOperation?: AvailableCreateShopifyBulkOperationResultSelection;

  triggerUpdateShopifyBulkOperation?: AvailableUpdateShopifyBulkOperationResultSelection;

  triggerCompleteShopifyBulkOperation?: AvailableCompleteShopifyBulkOperationResultSelection;

  triggerCancelShopifyBulkOperation?: AvailableCancelShopifyBulkOperationResultSelection;

  triggerFailShopifyBulkOperation?: AvailableFailShopifyBulkOperationResultSelection;

  triggerExpireShopifyBulkOperation?: AvailableExpireShopifyBulkOperationResultSelection;

  createShopifyCarrierService?: AvailableInternalCreateShopifyCarrierServiceResultSelection;

  updateShopifyCarrierService?: AvailableInternalUpdateShopifyCarrierServiceResultSelection;

  deleteShopifyCarrierService?: AvailableInternalDeleteShopifyCarrierServiceResultSelection;

  deleteManyShopifyCarrierService?: AvailableInternalDeleteManyShopifyCarrierServiceResultSelection;

  bulkCreateShopifyCarrierServices?: AvailableInternalBulkCreateShopifyCarrierServicesResultSelection;

  triggerCreateShopifyCarrierService?: AvailableCreateShopifyCarrierServiceResultSelection;

  triggerUpdateShopifyCarrierService?: AvailableUpdateShopifyCarrierServiceResultSelection;

  triggerDeleteShopifyCarrierService?: AvailableDeleteShopifyCarrierServiceResultSelection;

  createShopifyCart?: AvailableInternalCreateShopifyCartResultSelection;

  updateShopifyCart?: AvailableInternalUpdateShopifyCartResultSelection;

  deleteShopifyCart?: AvailableInternalDeleteShopifyCartResultSelection;

  deleteManyShopifyCart?: AvailableInternalDeleteManyShopifyCartResultSelection;

  bulkCreateShopifyCarts?: AvailableInternalBulkCreateShopifyCartsResultSelection;

  triggerCreateShopifyCart?: AvailableCreateShopifyCartResultSelection;

  triggerUpdateShopifyCart?: AvailableUpdateShopifyCartResultSelection;

  createShopifyCollect?: AvailableInternalCreateShopifyCollectResultSelection;

  updateShopifyCollect?: AvailableInternalUpdateShopifyCollectResultSelection;

  deleteShopifyCollect?: AvailableInternalDeleteShopifyCollectResultSelection;

  deleteManyShopifyCollect?: AvailableInternalDeleteManyShopifyCollectResultSelection;

  bulkCreateShopifyCollects?: AvailableInternalBulkCreateShopifyCollectsResultSelection;

  triggerCreateShopifyCollect?: AvailableCreateShopifyCollectResultSelection;

  triggerUpdateShopifyCollect?: AvailableUpdateShopifyCollectResultSelection;

  triggerDeleteShopifyCollect?: AvailableDeleteShopifyCollectResultSelection;

  createShopifyCollection?: AvailableInternalCreateShopifyCollectionResultSelection;

  updateShopifyCollection?: AvailableInternalUpdateShopifyCollectionResultSelection;

  deleteShopifyCollection?: AvailableInternalDeleteShopifyCollectionResultSelection;

  deleteManyShopifyCollection?: AvailableInternalDeleteManyShopifyCollectionResultSelection;

  bulkCreateShopifyCollections?: AvailableInternalBulkCreateShopifyCollectionsResultSelection;

  triggerCreateShopifyCollection?: AvailableCreateShopifyCollectionResultSelection;

  triggerUpdateShopifyCollection?: AvailableUpdateShopifyCollectionResultSelection;

  triggerDeleteShopifyCollection?: AvailableDeleteShopifyCollectionResultSelection;

  createShopifyCountry?: AvailableInternalCreateShopifyCountryResultSelection;

  updateShopifyCountry?: AvailableInternalUpdateShopifyCountryResultSelection;

  deleteShopifyCountry?: AvailableInternalDeleteShopifyCountryResultSelection;

  deleteManyShopifyCountry?: AvailableInternalDeleteManyShopifyCountryResultSelection;

  bulkCreateShopifyCountries?: AvailableInternalBulkCreateShopifyCountriesResultSelection;

  triggerCreateShopifyCountry?: AvailableCreateShopifyCountryResultSelection;

  triggerUpdateShopifyCountry?: AvailableUpdateShopifyCountryResultSelection;

  triggerDeleteShopifyCountry?: AvailableDeleteShopifyCountryResultSelection;

  createShopifyCustomer?: AvailableInternalCreateShopifyCustomerResultSelection;

  updateShopifyCustomer?: AvailableInternalUpdateShopifyCustomerResultSelection;

  deleteShopifyCustomer?: AvailableInternalDeleteShopifyCustomerResultSelection;

  deleteManyShopifyCustomer?: AvailableInternalDeleteManyShopifyCustomerResultSelection;

  bulkCreateShopifyCustomers?: AvailableInternalBulkCreateShopifyCustomersResultSelection;

  triggerCreateShopifyCustomer?: AvailableCreateShopifyCustomerResultSelection;

  triggerUpdateShopifyCustomer?: AvailableUpdateShopifyCustomerResultSelection;

  triggerDeleteShopifyCustomer?: AvailableDeleteShopifyCustomerResultSelection;

  createShopifyCustomerAddress?: AvailableInternalCreateShopifyCustomerAddressResultSelection;

  updateShopifyCustomerAddress?: AvailableInternalUpdateShopifyCustomerAddressResultSelection;

  deleteShopifyCustomerAddress?: AvailableInternalDeleteShopifyCustomerAddressResultSelection;

  deleteManyShopifyCustomerAddress?: AvailableInternalDeleteManyShopifyCustomerAddressResultSelection;

  bulkCreateShopifyCustomerAddresses?: AvailableInternalBulkCreateShopifyCustomerAddressesResultSelection;

  triggerCreateShopifyCustomerAddress?: AvailableCreateShopifyCustomerAddressResultSelection;

  triggerUpdateShopifyCustomerAddress?: AvailableUpdateShopifyCustomerAddressResultSelection;

  triggerDeleteShopifyCustomerAddress?: AvailableDeleteShopifyCustomerAddressResultSelection;

  createShopifyCustomerMergeable?: AvailableInternalCreateShopifyCustomerMergeableResultSelection;

  updateShopifyCustomerMergeable?: AvailableInternalUpdateShopifyCustomerMergeableResultSelection;

  deleteShopifyCustomerMergeable?: AvailableInternalDeleteShopifyCustomerMergeableResultSelection;

  deleteManyShopifyCustomerMergeable?: AvailableInternalDeleteManyShopifyCustomerMergeableResultSelection;

  bulkCreateShopifyCustomerMergeables?: AvailableInternalBulkCreateShopifyCustomerMergeablesResultSelection;

  triggerCreateShopifyCustomerMergeable?: AvailableCreateShopifyCustomerMergeableResultSelection;

  triggerUpdateShopifyCustomerMergeable?: AvailableUpdateShopifyCustomerMergeableResultSelection;

  triggerDeleteShopifyCustomerMergeable?: AvailableDeleteShopifyCustomerMergeableResultSelection;

  createShopifyCustomerPaymentMethod?: AvailableInternalCreateShopifyCustomerPaymentMethodResultSelection;

  updateShopifyCustomerPaymentMethod?: AvailableInternalUpdateShopifyCustomerPaymentMethodResultSelection;

  deleteShopifyCustomerPaymentMethod?: AvailableInternalDeleteShopifyCustomerPaymentMethodResultSelection;

  deleteManyShopifyCustomerPaymentMethod?: AvailableInternalDeleteManyShopifyCustomerPaymentMethodResultSelection;

  bulkCreateShopifyCustomerPaymentMethods?: AvailableInternalBulkCreateShopifyCustomerPaymentMethodsResultSelection;

  triggerCreateShopifyCustomerPaymentMethod?: AvailableCreateShopifyCustomerPaymentMethodResultSelection;

  triggerUpdateShopifyCustomerPaymentMethod?: AvailableUpdateShopifyCustomerPaymentMethodResultSelection;

  triggerDeleteShopifyCustomerPaymentMethod?: AvailableDeleteShopifyCustomerPaymentMethodResultSelection;

  triggerRevokeShopifyCustomerPaymentMethod?: AvailableRevokeShopifyCustomerPaymentMethodResultSelection;

  createShopifyDiscount?: AvailableInternalCreateShopifyDiscountResultSelection;

  updateShopifyDiscount?: AvailableInternalUpdateShopifyDiscountResultSelection;

  deleteShopifyDiscount?: AvailableInternalDeleteShopifyDiscountResultSelection;

  deleteManyShopifyDiscount?: AvailableInternalDeleteManyShopifyDiscountResultSelection;

  bulkCreateShopifyDiscounts?: AvailableInternalBulkCreateShopifyDiscountsResultSelection;

  triggerCreateShopifyDiscount?: AvailableCreateShopifyDiscountResultSelection;

  triggerUpdateShopifyDiscount?: AvailableUpdateShopifyDiscountResultSelection;

  triggerDeleteShopifyDiscount?: AvailableDeleteShopifyDiscountResultSelection;

  createShopifyDiscountCode?: AvailableInternalCreateShopifyDiscountCodeResultSelection;

  updateShopifyDiscountCode?: AvailableInternalUpdateShopifyDiscountCodeResultSelection;

  deleteShopifyDiscountCode?: AvailableInternalDeleteShopifyDiscountCodeResultSelection;

  deleteManyShopifyDiscountCode?: AvailableInternalDeleteManyShopifyDiscountCodeResultSelection;

  bulkCreateShopifyDiscountCodes?: AvailableInternalBulkCreateShopifyDiscountCodesResultSelection;

  triggerCreateShopifyDiscountCode?: AvailableCreateShopifyDiscountCodeResultSelection;

  triggerUpdateShopifyDiscountCode?: AvailableUpdateShopifyDiscountCodeResultSelection;

  triggerDeleteShopifyDiscountCode?: AvailableDeleteShopifyDiscountCodeResultSelection;

  createShopifyDraftOrder?: AvailableInternalCreateShopifyDraftOrderResultSelection;

  updateShopifyDraftOrder?: AvailableInternalUpdateShopifyDraftOrderResultSelection;

  deleteShopifyDraftOrder?: AvailableInternalDeleteShopifyDraftOrderResultSelection;

  deleteManyShopifyDraftOrder?: AvailableInternalDeleteManyShopifyDraftOrderResultSelection;

  bulkCreateShopifyDraftOrders?: AvailableInternalBulkCreateShopifyDraftOrdersResultSelection;

  triggerCreateShopifyDraftOrder?: AvailableCreateShopifyDraftOrderResultSelection;

  triggerUpdateShopifyDraftOrder?: AvailableUpdateShopifyDraftOrderResultSelection;

  triggerDeleteShopifyDraftOrder?: AvailableDeleteShopifyDraftOrderResultSelection;

  createShopifyDraftOrderLineItem?: AvailableInternalCreateShopifyDraftOrderLineItemResultSelection;

  updateShopifyDraftOrderLineItem?: AvailableInternalUpdateShopifyDraftOrderLineItemResultSelection;

  deleteShopifyDraftOrderLineItem?: AvailableInternalDeleteShopifyDraftOrderLineItemResultSelection;

  deleteManyShopifyDraftOrderLineItem?: AvailableInternalDeleteManyShopifyDraftOrderLineItemResultSelection;

  bulkCreateShopifyDraftOrderLineItems?: AvailableInternalBulkCreateShopifyDraftOrderLineItemsResultSelection;

  triggerCreateShopifyDraftOrderLineItem?: AvailableCreateShopifyDraftOrderLineItemResultSelection;

  triggerUpdateShopifyDraftOrderLineItem?: AvailableUpdateShopifyDraftOrderLineItemResultSelection;

  triggerDeleteShopifyDraftOrderLineItem?: AvailableDeleteShopifyDraftOrderLineItemResultSelection;

  createShopifyDuty?: AvailableInternalCreateShopifyDutyResultSelection;

  updateShopifyDuty?: AvailableInternalUpdateShopifyDutyResultSelection;

  deleteShopifyDuty?: AvailableInternalDeleteShopifyDutyResultSelection;

  deleteManyShopifyDuty?: AvailableInternalDeleteManyShopifyDutyResultSelection;

  bulkCreateShopifyDuties?: AvailableInternalBulkCreateShopifyDutiesResultSelection;

  triggerCreateShopifyDuty?: AvailableCreateShopifyDutyResultSelection;

  triggerUpdateShopifyDuty?: AvailableUpdateShopifyDutyResultSelection;

  triggerDeleteShopifyDuty?: AvailableDeleteShopifyDutyResultSelection;

  createShopifyFile?: AvailableInternalCreateShopifyFileResultSelection;

  updateShopifyFile?: AvailableInternalUpdateShopifyFileResultSelection;

  deleteShopifyFile?: AvailableInternalDeleteShopifyFileResultSelection;

  deleteManyShopifyFile?: AvailableInternalDeleteManyShopifyFileResultSelection;

  bulkCreateShopifyFiles?: AvailableInternalBulkCreateShopifyFilesResultSelection;

  triggerCreateShopifyFile?: AvailableCreateShopifyFileResultSelection;

  triggerUpdateShopifyFile?: AvailableUpdateShopifyFileResultSelection;

  triggerDeleteShopifyFile?: AvailableDeleteShopifyFileResultSelection;

  createShopifyFulfillment?: AvailableInternalCreateShopifyFulfillmentResultSelection;

  updateShopifyFulfillment?: AvailableInternalUpdateShopifyFulfillmentResultSelection;

  deleteShopifyFulfillment?: AvailableInternalDeleteShopifyFulfillmentResultSelection;

  deleteManyShopifyFulfillment?: AvailableInternalDeleteManyShopifyFulfillmentResultSelection;

  bulkCreateShopifyFulfillments?: AvailableInternalBulkCreateShopifyFulfillmentsResultSelection;

  triggerCreateShopifyFulfillment?: AvailableCreateShopifyFulfillmentResultSelection;

  triggerUpdateShopifyFulfillment?: AvailableUpdateShopifyFulfillmentResultSelection;

  triggerDeleteShopifyFulfillment?: AvailableDeleteShopifyFulfillmentResultSelection;

  createShopifyFulfillmentEvent?: AvailableInternalCreateShopifyFulfillmentEventResultSelection;

  updateShopifyFulfillmentEvent?: AvailableInternalUpdateShopifyFulfillmentEventResultSelection;

  deleteShopifyFulfillmentEvent?: AvailableInternalDeleteShopifyFulfillmentEventResultSelection;

  deleteManyShopifyFulfillmentEvent?: AvailableInternalDeleteManyShopifyFulfillmentEventResultSelection;

  bulkCreateShopifyFulfillmentEvents?: AvailableInternalBulkCreateShopifyFulfillmentEventsResultSelection;

  triggerCreateShopifyFulfillmentEvent?: AvailableCreateShopifyFulfillmentEventResultSelection;

  triggerUpdateShopifyFulfillmentEvent?: AvailableUpdateShopifyFulfillmentEventResultSelection;

  triggerDeleteShopifyFulfillmentEvent?: AvailableDeleteShopifyFulfillmentEventResultSelection;

  createShopifyFulfillmentLineItem?: AvailableInternalCreateShopifyFulfillmentLineItemResultSelection;

  updateShopifyFulfillmentLineItem?: AvailableInternalUpdateShopifyFulfillmentLineItemResultSelection;

  deleteShopifyFulfillmentLineItem?: AvailableInternalDeleteShopifyFulfillmentLineItemResultSelection;

  deleteManyShopifyFulfillmentLineItem?: AvailableInternalDeleteManyShopifyFulfillmentLineItemResultSelection;

  bulkCreateShopifyFulfillmentLineItems?: AvailableInternalBulkCreateShopifyFulfillmentLineItemsResultSelection;

  triggerCreateShopifyFulfillmentLineItem?: AvailableCreateShopifyFulfillmentLineItemResultSelection;

  triggerUpdateShopifyFulfillmentLineItem?: AvailableUpdateShopifyFulfillmentLineItemResultSelection;

  triggerDeleteShopifyFulfillmentLineItem?: AvailableDeleteShopifyFulfillmentLineItemResultSelection;

  createShopifyFulfillmentOrder?: AvailableInternalCreateShopifyFulfillmentOrderResultSelection;

  updateShopifyFulfillmentOrder?: AvailableInternalUpdateShopifyFulfillmentOrderResultSelection;

  deleteShopifyFulfillmentOrder?: AvailableInternalDeleteShopifyFulfillmentOrderResultSelection;

  deleteManyShopifyFulfillmentOrder?: AvailableInternalDeleteManyShopifyFulfillmentOrderResultSelection;

  bulkCreateShopifyFulfillmentOrders?: AvailableInternalBulkCreateShopifyFulfillmentOrdersResultSelection;

  triggerCreateShopifyFulfillmentOrder?: AvailableCreateShopifyFulfillmentOrderResultSelection;

  triggerUpdateShopifyFulfillmentOrder?: AvailableUpdateShopifyFulfillmentOrderResultSelection;

  triggerDeleteShopifyFulfillmentOrder?: AvailableDeleteShopifyFulfillmentOrderResultSelection;

  createShopifyFulfillmentOrderLineItem?: AvailableInternalCreateShopifyFulfillmentOrderLineItemResultSelection;

  updateShopifyFulfillmentOrderLineItem?: AvailableInternalUpdateShopifyFulfillmentOrderLineItemResultSelection;

  deleteShopifyFulfillmentOrderLineItem?: AvailableInternalDeleteShopifyFulfillmentOrderLineItemResultSelection;

  deleteManyShopifyFulfillmentOrderLineItem?: AvailableInternalDeleteManyShopifyFulfillmentOrderLineItemResultSelection;

  bulkCreateShopifyFulfillmentOrderLineItems?: AvailableInternalBulkCreateShopifyFulfillmentOrderLineItemsResultSelection;

  triggerCreateShopifyFulfillmentOrderLineItem?: AvailableCreateShopifyFulfillmentOrderLineItemResultSelection;

  triggerUpdateShopifyFulfillmentOrderLineItem?: AvailableUpdateShopifyFulfillmentOrderLineItemResultSelection;

  triggerDeleteShopifyFulfillmentOrderLineItem?: AvailableDeleteShopifyFulfillmentOrderLineItemResultSelection;

  createShopifyFulfillmentService?: AvailableInternalCreateShopifyFulfillmentServiceResultSelection;

  updateShopifyFulfillmentService?: AvailableInternalUpdateShopifyFulfillmentServiceResultSelection;

  deleteShopifyFulfillmentService?: AvailableInternalDeleteShopifyFulfillmentServiceResultSelection;

  deleteManyShopifyFulfillmentService?: AvailableInternalDeleteManyShopifyFulfillmentServiceResultSelection;

  bulkCreateShopifyFulfillmentServices?: AvailableInternalBulkCreateShopifyFulfillmentServicesResultSelection;

  triggerCreateShopifyFulfillmentService?: AvailableCreateShopifyFulfillmentServiceResultSelection;

  triggerUpdateShopifyFulfillmentService?: AvailableUpdateShopifyFulfillmentServiceResultSelection;

  triggerDeleteShopifyFulfillmentService?: AvailableDeleteShopifyFulfillmentServiceResultSelection;

  createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;

  updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;

  deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;

  deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;

  bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;

  triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;

  triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;

  createShopifyInventoryItem?: AvailableInternalCreateShopifyInventoryItemResultSelection;

  updateShopifyInventoryItem?: AvailableInternalUpdateShopifyInventoryItemResultSelection;

  deleteShopifyInventoryItem?: AvailableInternalDeleteShopifyInventoryItemResultSelection;

  deleteManyShopifyInventoryItem?: AvailableInternalDeleteManyShopifyInventoryItemResultSelection;

  bulkCreateShopifyInventoryItems?: AvailableInternalBulkCreateShopifyInventoryItemsResultSelection;

  triggerCreateShopifyInventoryItem?: AvailableCreateShopifyInventoryItemResultSelection;

  triggerUpdateShopifyInventoryItem?: AvailableUpdateShopifyInventoryItemResultSelection;

  triggerDeleteShopifyInventoryItem?: AvailableDeleteShopifyInventoryItemResultSelection;

  createShopifyInventoryLevel?: AvailableInternalCreateShopifyInventoryLevelResultSelection;

  updateShopifyInventoryLevel?: AvailableInternalUpdateShopifyInventoryLevelResultSelection;

  deleteShopifyInventoryLevel?: AvailableInternalDeleteShopifyInventoryLevelResultSelection;

  deleteManyShopifyInventoryLevel?: AvailableInternalDeleteManyShopifyInventoryLevelResultSelection;

  bulkCreateShopifyInventoryLevels?: AvailableInternalBulkCreateShopifyInventoryLevelsResultSelection;

  triggerCreateShopifyInventoryLevel?: AvailableCreateShopifyInventoryLevelResultSelection;

  triggerUpdateShopifyInventoryLevel?: AvailableUpdateShopifyInventoryLevelResultSelection;

  triggerDeleteShopifyInventoryLevel?: AvailableDeleteShopifyInventoryLevelResultSelection;

  createShopifyLocation?: AvailableInternalCreateShopifyLocationResultSelection;

  updateShopifyLocation?: AvailableInternalUpdateShopifyLocationResultSelection;

  deleteShopifyLocation?: AvailableInternalDeleteShopifyLocationResultSelection;

  deleteManyShopifyLocation?: AvailableInternalDeleteManyShopifyLocationResultSelection;

  bulkCreateShopifyLocations?: AvailableInternalBulkCreateShopifyLocationsResultSelection;

  triggerCreateShopifyLocation?: AvailableCreateShopifyLocationResultSelection;

  triggerUpdateShopifyLocation?: AvailableUpdateShopifyLocationResultSelection;

  triggerDeleteShopifyLocation?: AvailableDeleteShopifyLocationResultSelection;

  createShopifyOrder?: AvailableInternalCreateShopifyOrderResultSelection;

  updateShopifyOrder?: AvailableInternalUpdateShopifyOrderResultSelection;

  deleteShopifyOrder?: AvailableInternalDeleteShopifyOrderResultSelection;

  deleteManyShopifyOrder?: AvailableInternalDeleteManyShopifyOrderResultSelection;

  bulkCreateShopifyOrders?: AvailableInternalBulkCreateShopifyOrdersResultSelection;

  triggerCreateShopifyOrder?: AvailableCreateShopifyOrderResultSelection;

  triggerUpdateShopifyOrder?: AvailableUpdateShopifyOrderResultSelection;

  triggerDeleteShopifyOrder?: AvailableDeleteShopifyOrderResultSelection;

  createShopifyOrderAdjustment?: AvailableInternalCreateShopifyOrderAdjustmentResultSelection;

  updateShopifyOrderAdjustment?: AvailableInternalUpdateShopifyOrderAdjustmentResultSelection;

  deleteShopifyOrderAdjustment?: AvailableInternalDeleteShopifyOrderAdjustmentResultSelection;

  deleteManyShopifyOrderAdjustment?: AvailableInternalDeleteManyShopifyOrderAdjustmentResultSelection;

  bulkCreateShopifyOrderAdjustments?: AvailableInternalBulkCreateShopifyOrderAdjustmentsResultSelection;

  triggerCreateShopifyOrderAdjustment?: AvailableCreateShopifyOrderAdjustmentResultSelection;

  triggerUpdateShopifyOrderAdjustment?: AvailableUpdateShopifyOrderAdjustmentResultSelection;

  triggerDeleteShopifyOrderAdjustment?: AvailableDeleteShopifyOrderAdjustmentResultSelection;

  createShopifyOrderLineItem?: AvailableInternalCreateShopifyOrderLineItemResultSelection;

  updateShopifyOrderLineItem?: AvailableInternalUpdateShopifyOrderLineItemResultSelection;

  deleteShopifyOrderLineItem?: AvailableInternalDeleteShopifyOrderLineItemResultSelection;

  deleteManyShopifyOrderLineItem?: AvailableInternalDeleteManyShopifyOrderLineItemResultSelection;

  bulkCreateShopifyOrderLineItems?: AvailableInternalBulkCreateShopifyOrderLineItemsResultSelection;

  triggerCreateShopifyOrderLineItem?: AvailableCreateShopifyOrderLineItemResultSelection;

  triggerUpdateShopifyOrderLineItem?: AvailableUpdateShopifyOrderLineItemResultSelection;

  triggerDeleteShopifyOrderLineItem?: AvailableDeleteShopifyOrderLineItemResultSelection;

  createShopifyOrderRisk?: AvailableInternalCreateShopifyOrderRiskResultSelection;

  updateShopifyOrderRisk?: AvailableInternalUpdateShopifyOrderRiskResultSelection;

  deleteShopifyOrderRisk?: AvailableInternalDeleteShopifyOrderRiskResultSelection;

  deleteManyShopifyOrderRisk?: AvailableInternalDeleteManyShopifyOrderRiskResultSelection;

  bulkCreateShopifyOrderRisks?: AvailableInternalBulkCreateShopifyOrderRisksResultSelection;

  triggerCreateShopifyOrderRisk?: AvailableCreateShopifyOrderRiskResultSelection;

  triggerUpdateShopifyOrderRisk?: AvailableUpdateShopifyOrderRiskResultSelection;

  triggerDeleteShopifyOrderRisk?: AvailableDeleteShopifyOrderRiskResultSelection;

  createShopifyOrderTransaction?: AvailableInternalCreateShopifyOrderTransactionResultSelection;

  updateShopifyOrderTransaction?: AvailableInternalUpdateShopifyOrderTransactionResultSelection;

  deleteShopifyOrderTransaction?: AvailableInternalDeleteShopifyOrderTransactionResultSelection;

  deleteManyShopifyOrderTransaction?: AvailableInternalDeleteManyShopifyOrderTransactionResultSelection;

  bulkCreateShopifyOrderTransactions?: AvailableInternalBulkCreateShopifyOrderTransactionsResultSelection;

  triggerCreateShopifyOrderTransaction?: AvailableCreateShopifyOrderTransactionResultSelection;

  triggerUpdateShopifyOrderTransaction?: AvailableUpdateShopifyOrderTransactionResultSelection;

  triggerDeleteShopifyOrderTransaction?: AvailableDeleteShopifyOrderTransactionResultSelection;

  createShopifyPriceRule?: AvailableInternalCreateShopifyPriceRuleResultSelection;

  updateShopifyPriceRule?: AvailableInternalUpdateShopifyPriceRuleResultSelection;

  deleteShopifyPriceRule?: AvailableInternalDeleteShopifyPriceRuleResultSelection;

  deleteManyShopifyPriceRule?: AvailableInternalDeleteManyShopifyPriceRuleResultSelection;

  bulkCreateShopifyPriceRules?: AvailableInternalBulkCreateShopifyPriceRulesResultSelection;

  triggerCreateShopifyPriceRule?: AvailableCreateShopifyPriceRuleResultSelection;

  triggerUpdateShopifyPriceRule?: AvailableUpdateShopifyPriceRuleResultSelection;

  triggerDeleteShopifyPriceRule?: AvailableDeleteShopifyPriceRuleResultSelection;

  createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;

  updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;

  deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;

  deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;

  bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;

  triggerCreateShopifyProduct?: AvailableCreateShopifyProductResultSelection;

  triggerUpdateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;

  triggerDeleteShopifyProduct?: AvailableDeleteShopifyProductResultSelection;

  createShopifyProductImage?: AvailableInternalCreateShopifyProductImageResultSelection;

  updateShopifyProductImage?: AvailableInternalUpdateShopifyProductImageResultSelection;

  deleteShopifyProductImage?: AvailableInternalDeleteShopifyProductImageResultSelection;

  deleteManyShopifyProductImage?: AvailableInternalDeleteManyShopifyProductImageResultSelection;

  bulkCreateShopifyProductImages?: AvailableInternalBulkCreateShopifyProductImagesResultSelection;

  triggerCreateShopifyProductImage?: AvailableCreateShopifyProductImageResultSelection;

  triggerUpdateShopifyProductImage?: AvailableUpdateShopifyProductImageResultSelection;

  triggerDeleteShopifyProductImage?: AvailableDeleteShopifyProductImageResultSelection;

  createShopifyProductOption?: AvailableInternalCreateShopifyProductOptionResultSelection;

  updateShopifyProductOption?: AvailableInternalUpdateShopifyProductOptionResultSelection;

  deleteShopifyProductOption?: AvailableInternalDeleteShopifyProductOptionResultSelection;

  deleteManyShopifyProductOption?: AvailableInternalDeleteManyShopifyProductOptionResultSelection;

  bulkCreateShopifyProductOptions?: AvailableInternalBulkCreateShopifyProductOptionsResultSelection;

  triggerCreateShopifyProductOption?: AvailableCreateShopifyProductOptionResultSelection;

  triggerUpdateShopifyProductOption?: AvailableUpdateShopifyProductOptionResultSelection;

  triggerDeleteShopifyProductOption?: AvailableDeleteShopifyProductOptionResultSelection;

  createShopifyProductVariant?: AvailableInternalCreateShopifyProductVariantResultSelection;

  updateShopifyProductVariant?: AvailableInternalUpdateShopifyProductVariantResultSelection;

  deleteShopifyProductVariant?: AvailableInternalDeleteShopifyProductVariantResultSelection;

  deleteManyShopifyProductVariant?: AvailableInternalDeleteManyShopifyProductVariantResultSelection;

  bulkCreateShopifyProductVariants?: AvailableInternalBulkCreateShopifyProductVariantsResultSelection;

  triggerCreateShopifyProductVariant?: AvailableCreateShopifyProductVariantResultSelection;

  triggerUpdateShopifyProductVariant?: AvailableUpdateShopifyProductVariantResultSelection;

  triggerDeleteShopifyProductVariant?: AvailableDeleteShopifyProductVariantResultSelection;

  createShopifyProvince?: AvailableInternalCreateShopifyProvinceResultSelection;

  updateShopifyProvince?: AvailableInternalUpdateShopifyProvinceResultSelection;

  deleteShopifyProvince?: AvailableInternalDeleteShopifyProvinceResultSelection;

  deleteManyShopifyProvince?: AvailableInternalDeleteManyShopifyProvinceResultSelection;

  bulkCreateShopifyProvinces?: AvailableInternalBulkCreateShopifyProvincesResultSelection;

  triggerCreateShopifyProvince?: AvailableCreateShopifyProvinceResultSelection;

  triggerUpdateShopifyProvince?: AvailableUpdateShopifyProvinceResultSelection;

  triggerDeleteShopifyProvince?: AvailableDeleteShopifyProvinceResultSelection;

  createShopifyRefund?: AvailableInternalCreateShopifyRefundResultSelection;

  updateShopifyRefund?: AvailableInternalUpdateShopifyRefundResultSelection;

  deleteShopifyRefund?: AvailableInternalDeleteShopifyRefundResultSelection;

  deleteManyShopifyRefund?: AvailableInternalDeleteManyShopifyRefundResultSelection;

  bulkCreateShopifyRefunds?: AvailableInternalBulkCreateShopifyRefundsResultSelection;

  triggerCreateShopifyRefund?: AvailableCreateShopifyRefundResultSelection;

  triggerUpdateShopifyRefund?: AvailableUpdateShopifyRefundResultSelection;

  triggerDeleteShopifyRefund?: AvailableDeleteShopifyRefundResultSelection;

  createShopifyRefundDuty?: AvailableInternalCreateShopifyRefundDutyResultSelection;

  updateShopifyRefundDuty?: AvailableInternalUpdateShopifyRefundDutyResultSelection;

  deleteShopifyRefundDuty?: AvailableInternalDeleteShopifyRefundDutyResultSelection;

  deleteManyShopifyRefundDuty?: AvailableInternalDeleteManyShopifyRefundDutyResultSelection;

  bulkCreateShopifyRefundDuties?: AvailableInternalBulkCreateShopifyRefundDutiesResultSelection;

  triggerCreateShopifyRefundDuty?: AvailableCreateShopifyRefundDutyResultSelection;

  triggerUpdateShopifyRefundDuty?: AvailableUpdateShopifyRefundDutyResultSelection;

  triggerDeleteShopifyRefundDuty?: AvailableDeleteShopifyRefundDutyResultSelection;

  createShopifyRefundLineItem?: AvailableInternalCreateShopifyRefundLineItemResultSelection;

  updateShopifyRefundLineItem?: AvailableInternalUpdateShopifyRefundLineItemResultSelection;

  deleteShopifyRefundLineItem?: AvailableInternalDeleteShopifyRefundLineItemResultSelection;

  deleteManyShopifyRefundLineItem?: AvailableInternalDeleteManyShopifyRefundLineItemResultSelection;

  bulkCreateShopifyRefundLineItems?: AvailableInternalBulkCreateShopifyRefundLineItemsResultSelection;

  triggerCreateShopifyRefundLineItem?: AvailableCreateShopifyRefundLineItemResultSelection;

  triggerUpdateShopifyRefundLineItem?: AvailableUpdateShopifyRefundLineItemResultSelection;

  triggerDeleteShopifyRefundLineItem?: AvailableDeleteShopifyRefundLineItemResultSelection;

  createShopifyScriptTag?: AvailableInternalCreateShopifyScriptTagResultSelection;

  updateShopifyScriptTag?: AvailableInternalUpdateShopifyScriptTagResultSelection;

  deleteShopifyScriptTag?: AvailableInternalDeleteShopifyScriptTagResultSelection;

  deleteManyShopifyScriptTag?: AvailableInternalDeleteManyShopifyScriptTagResultSelection;

  bulkCreateShopifyScriptTags?: AvailableInternalBulkCreateShopifyScriptTagsResultSelection;

  triggerCreateShopifyScriptTag?: AvailableCreateShopifyScriptTagResultSelection;

  triggerUpdateShopifyScriptTag?: AvailableUpdateShopifyScriptTagResultSelection;

  triggerDeleteShopifyScriptTag?: AvailableDeleteShopifyScriptTagResultSelection;

  createShopifySellingPlan?: AvailableInternalCreateShopifySellingPlanResultSelection;

  updateShopifySellingPlan?: AvailableInternalUpdateShopifySellingPlanResultSelection;

  deleteShopifySellingPlan?: AvailableInternalDeleteShopifySellingPlanResultSelection;

  deleteManyShopifySellingPlan?: AvailableInternalDeleteManyShopifySellingPlanResultSelection;

  bulkCreateShopifySellingPlans?: AvailableInternalBulkCreateShopifySellingPlansResultSelection;

  triggerCreateShopifySellingPlan?: AvailableCreateShopifySellingPlanResultSelection;

  triggerUpdateShopifySellingPlan?: AvailableUpdateShopifySellingPlanResultSelection;

  triggerDeleteShopifySellingPlan?: AvailableDeleteShopifySellingPlanResultSelection;

  createShopifySellingPlanGroup?: AvailableInternalCreateShopifySellingPlanGroupResultSelection;

  updateShopifySellingPlanGroup?: AvailableInternalUpdateShopifySellingPlanGroupResultSelection;

  deleteShopifySellingPlanGroup?: AvailableInternalDeleteShopifySellingPlanGroupResultSelection;

  deleteManyShopifySellingPlanGroup?: AvailableInternalDeleteManyShopifySellingPlanGroupResultSelection;

  bulkCreateShopifySellingPlanGroups?: AvailableInternalBulkCreateShopifySellingPlanGroupsResultSelection;

  triggerCreateShopifySellingPlanGroup?: AvailableCreateShopifySellingPlanGroupResultSelection;

  triggerUpdateShopifySellingPlanGroup?: AvailableUpdateShopifySellingPlanGroupResultSelection;

  triggerDeleteShopifySellingPlanGroup?: AvailableDeleteShopifySellingPlanGroupResultSelection;

  createShopifySellingPlanGroupProduct?: AvailableInternalCreateShopifySellingPlanGroupProductResultSelection;

  updateShopifySellingPlanGroupProduct?: AvailableInternalUpdateShopifySellingPlanGroupProductResultSelection;

  deleteShopifySellingPlanGroupProduct?: AvailableInternalDeleteShopifySellingPlanGroupProductResultSelection;

  deleteManyShopifySellingPlanGroupProduct?: AvailableInternalDeleteManyShopifySellingPlanGroupProductResultSelection;

  bulkCreateShopifySellingPlanGroupProducts?: AvailableInternalBulkCreateShopifySellingPlanGroupProductsResultSelection;

  triggerCreateShopifySellingPlanGroupProduct?: AvailableCreateShopifySellingPlanGroupProductResultSelection;

  triggerUpdateShopifySellingPlanGroupProduct?: AvailableUpdateShopifySellingPlanGroupProductResultSelection;

  triggerDeleteShopifySellingPlanGroupProduct?: AvailableDeleteShopifySellingPlanGroupProductResultSelection;

  createShopifySellingPlanGroupProductVariant?: AvailableInternalCreateShopifySellingPlanGroupProductVariantResultSelection;

  updateShopifySellingPlanGroupProductVariant?: AvailableInternalUpdateShopifySellingPlanGroupProductVariantResultSelection;

  deleteShopifySellingPlanGroupProductVariant?: AvailableInternalDeleteShopifySellingPlanGroupProductVariantResultSelection;

  deleteManyShopifySellingPlanGroupProductVariant?: AvailableInternalDeleteManyShopifySellingPlanGroupProductVariantResultSelection;

  bulkCreateShopifySellingPlanGroupProductVariants?: AvailableInternalBulkCreateShopifySellingPlanGroupProductVariantsResultSelection;

  triggerCreateShopifySellingPlanGroupProductVariant?: AvailableCreateShopifySellingPlanGroupProductVariantResultSelection;

  triggerUpdateShopifySellingPlanGroupProductVariant?: AvailableUpdateShopifySellingPlanGroupProductVariantResultSelection;

  triggerDeleteShopifySellingPlanGroupProductVariant?: AvailableDeleteShopifySellingPlanGroupProductVariantResultSelection;

  createShopifyShippingLine?: AvailableInternalCreateShopifyShippingLineResultSelection;

  updateShopifyShippingLine?: AvailableInternalUpdateShopifyShippingLineResultSelection;

  deleteShopifyShippingLine?: AvailableInternalDeleteShopifyShippingLineResultSelection;

  deleteManyShopifyShippingLine?: AvailableInternalDeleteManyShopifyShippingLineResultSelection;

  bulkCreateShopifyShippingLines?: AvailableInternalBulkCreateShopifyShippingLinesResultSelection;

  triggerCreateShopifyShippingLine?: AvailableCreateShopifyShippingLineResultSelection;

  triggerUpdateShopifyShippingLine?: AvailableUpdateShopifyShippingLineResultSelection;

  triggerDeleteShopifyShippingLine?: AvailableDeleteShopifyShippingLineResultSelection;

  createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;

  updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;

  deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;

  deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;

  bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;

  triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;

  triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;

  triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;

  triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;

  createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;

  updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;

  deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;

  deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;

  bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;

  triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;

  triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;

  triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;

  triggerAbortShopifySync?: AvailableAbortShopifySyncResultSelection;

  createShopifyTenderTransaction?: AvailableInternalCreateShopifyTenderTransactionResultSelection;

  updateShopifyTenderTransaction?: AvailableInternalUpdateShopifyTenderTransactionResultSelection;

  deleteShopifyTenderTransaction?: AvailableInternalDeleteShopifyTenderTransactionResultSelection;

  deleteManyShopifyTenderTransaction?: AvailableInternalDeleteManyShopifyTenderTransactionResultSelection;

  bulkCreateShopifyTenderTransactions?: AvailableInternalBulkCreateShopifyTenderTransactionsResultSelection;

  triggerCreateShopifyTenderTransaction?: AvailableCreateShopifyTenderTransactionResultSelection;

  triggerUpdateShopifyTenderTransaction?: AvailableUpdateShopifyTenderTransactionResultSelection;

  triggerDeleteShopifyTenderTransaction?: AvailableDeleteShopifyTenderTransactionResultSelection;

  createShopifyTheme?: AvailableInternalCreateShopifyThemeResultSelection;

  updateShopifyTheme?: AvailableInternalUpdateShopifyThemeResultSelection;

  deleteShopifyTheme?: AvailableInternalDeleteShopifyThemeResultSelection;

  deleteManyShopifyTheme?: AvailableInternalDeleteManyShopifyThemeResultSelection;

  bulkCreateShopifyThemes?: AvailableInternalBulkCreateShopifyThemesResultSelection;

  triggerCreateShopifyTheme?: AvailableCreateShopifyThemeResultSelection;

  triggerUpdateShopifyTheme?: AvailableUpdateShopifyThemeResultSelection;

  triggerDeleteShopifyTheme?: AvailableDeleteShopifyThemeResultSelection;

  triggerGlobalShopifySync?: AvailableGlobalShopifySyncResultSelection;
};



export type LockOperationResult = {

  __typename: 'LockOperationResult';

  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];

  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateUserResult = {

  __typename: 'InternalCreateUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (InternalUserRecord | null);
};



export type AvailableInternalCreateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export type InternalUpdateUserResult = {

  __typename: 'InternalUpdateUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (InternalUserRecord | null);
};



export type AvailableInternalUpdateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export type InternalDeleteUserResult = {

  __typename: 'InternalDeleteUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (InternalUserRecord | null);
};



export type AvailableInternalDeleteUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export type InternalDeleteManyUserResult = {

  __typename: 'InternalDeleteManyUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateUsersResult = {

  __typename: 'InternalBulkCreateUsersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  users: (InternalUserRecord | null)[];
};



export type AvailableInternalBulkCreateUsersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  users?: boolean | null | undefined;
};



export type InternalCreateSessionResult = {

  __typename: 'InternalCreateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalUpdateSessionResult = {

  __typename: 'InternalUpdateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteSessionResult = {

  __typename: 'InternalDeleteSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteManySessionResult = {

  __typename: 'InternalDeleteManySessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateSessionsResult = {

  __typename: 'InternalBulkCreateSessionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export type InternalCreateShopifyAssetResult = {

  __typename: 'InternalCreateShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAsset: (InternalShopifyAssetRecord | null);
};



export type AvailableInternalCreateShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAsset?: boolean | null | undefined;
};



export type InternalUpdateShopifyAssetResult = {

  __typename: 'InternalUpdateShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAsset: (InternalShopifyAssetRecord | null);
};



export type AvailableInternalUpdateShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAsset?: boolean | null | undefined;
};



export type InternalDeleteShopifyAssetResult = {

  __typename: 'InternalDeleteShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAsset: (InternalShopifyAssetRecord | null);
};



export type AvailableInternalDeleteShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAsset?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyAssetResult = {

  __typename: 'InternalDeleteManyShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyAssetsResult = {

  __typename: 'InternalBulkCreateShopifyAssetsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAssets: (InternalShopifyAssetRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyAssetsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAssets?: boolean | null | undefined;
};



export type CreateShopifyAssetResult = {

  __typename: 'CreateShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAsset: (ShopifyAsset | null);
};



export type AvailableCreateShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAsset?: AvailableShopifyAssetSelection;
};



export type UpdateShopifyAssetResult = {

  __typename: 'UpdateShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAsset: (ShopifyAsset | null);
};



export type AvailableUpdateShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAsset?: AvailableShopifyAssetSelection;
};



export type DeleteShopifyAssetResult = {

  __typename: 'DeleteShopifyAssetResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyAssetResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyBulkOperationResult = {

  __typename: 'InternalCreateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);
};



export type AvailableInternalCreateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: boolean | null | undefined;
};



export type InternalUpdateShopifyBulkOperationResult = {

  __typename: 'InternalUpdateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);
};



export type AvailableInternalUpdateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: boolean | null | undefined;
};



export type InternalDeleteShopifyBulkOperationResult = {

  __typename: 'InternalDeleteShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);
};



export type AvailableInternalDeleteShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyBulkOperationResult = {

  __typename: 'InternalDeleteManyShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyBulkOperationsResult = {

  __typename: 'InternalBulkCreateShopifyBulkOperationsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperations: (InternalShopifyBulkOperationRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperations?: boolean | null | undefined;
};



export type CreateShopifyBulkOperationResult = {

  __typename: 'CreateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableCreateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};



export type UpdateShopifyBulkOperationResult = {

  __typename: 'UpdateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableUpdateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};



export type CompleteShopifyBulkOperationResult = {

  __typename: 'CompleteShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableCompleteShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};



export type CancelShopifyBulkOperationResult = {

  __typename: 'CancelShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableCancelShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};



export type FailShopifyBulkOperationResult = {

  __typename: 'FailShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableFailShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};



export type ExpireShopifyBulkOperationResult = {

  __typename: 'ExpireShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableExpireShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};



export type InternalCreateShopifyCarrierServiceResult = {

  __typename: 'InternalCreateShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarrierService: (InternalShopifyCarrierServiceRecord | null);
};



export type AvailableInternalCreateShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarrierService?: boolean | null | undefined;
};



export type InternalUpdateShopifyCarrierServiceResult = {

  __typename: 'InternalUpdateShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarrierService: (InternalShopifyCarrierServiceRecord | null);
};



export type AvailableInternalUpdateShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarrierService?: boolean | null | undefined;
};



export type InternalDeleteShopifyCarrierServiceResult = {

  __typename: 'InternalDeleteShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarrierService: (InternalShopifyCarrierServiceRecord | null);
};



export type AvailableInternalDeleteShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarrierService?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCarrierServiceResult = {

  __typename: 'InternalDeleteManyShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCarrierServicesResult = {

  __typename: 'InternalBulkCreateShopifyCarrierServicesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarrierServices: (InternalShopifyCarrierServiceRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCarrierServicesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarrierServices?: boolean | null | undefined;
};



export type CreateShopifyCarrierServiceResult = {

  __typename: 'CreateShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarrierService: (ShopifyCarrierService | null);
};



export type AvailableCreateShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarrierService?: AvailableShopifyCarrierServiceSelection;
};



export type UpdateShopifyCarrierServiceResult = {

  __typename: 'UpdateShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarrierService: (ShopifyCarrierService | null);
};



export type AvailableUpdateShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarrierService?: AvailableShopifyCarrierServiceSelection;
};



export type DeleteShopifyCarrierServiceResult = {

  __typename: 'DeleteShopifyCarrierServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCarrierServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCartResult = {

  __typename: 'InternalCreateShopifyCartResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCart: (InternalShopifyCartRecord | null);
};



export type AvailableInternalCreateShopifyCartResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCart?: boolean | null | undefined;
};



export type InternalUpdateShopifyCartResult = {

  __typename: 'InternalUpdateShopifyCartResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCart: (InternalShopifyCartRecord | null);
};



export type AvailableInternalUpdateShopifyCartResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCart?: boolean | null | undefined;
};



export type InternalDeleteShopifyCartResult = {

  __typename: 'InternalDeleteShopifyCartResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCart: (InternalShopifyCartRecord | null);
};



export type AvailableInternalDeleteShopifyCartResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCart?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCartResult = {

  __typename: 'InternalDeleteManyShopifyCartResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCartResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCartsResult = {

  __typename: 'InternalBulkCreateShopifyCartsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCarts: (InternalShopifyCartRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCartsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCarts?: boolean | null | undefined;
};



export type CreateShopifyCartResult = {

  __typename: 'CreateShopifyCartResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCart: (ShopifyCart | null);
};



export type AvailableCreateShopifyCartResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCart?: AvailableShopifyCartSelection;
};



export type UpdateShopifyCartResult = {

  __typename: 'UpdateShopifyCartResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCart: (ShopifyCart | null);
};



export type AvailableUpdateShopifyCartResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCart?: AvailableShopifyCartSelection;
};



export type InternalCreateShopifyCollectResult = {

  __typename: 'InternalCreateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalCreateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalUpdateShopifyCollectResult = {

  __typename: 'InternalUpdateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalUpdateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalDeleteShopifyCollectResult = {

  __typename: 'InternalDeleteShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalDeleteShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCollectResult = {

  __typename: 'InternalDeleteManyShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCollectsResult = {

  __typename: 'InternalBulkCreateShopifyCollectsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollects: (InternalShopifyCollectRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollects?: boolean | null | undefined;
};



export type CreateShopifyCollectResult = {

  __typename: 'CreateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (ShopifyCollect | null);
};



export type AvailableCreateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;
};



export type UpdateShopifyCollectResult = {

  __typename: 'UpdateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (ShopifyCollect | null);
};



export type AvailableUpdateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;
};



export type DeleteShopifyCollectResult = {

  __typename: 'DeleteShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCollectionResult = {

  __typename: 'InternalCreateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalCreateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalUpdateShopifyCollectionResult = {

  __typename: 'InternalUpdateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalUpdateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalDeleteShopifyCollectionResult = {

  __typename: 'InternalDeleteShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalDeleteShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCollectionResult = {

  __typename: 'InternalDeleteManyShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCollectionsResult = {

  __typename: 'InternalBulkCreateShopifyCollectionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollections: (InternalShopifyCollectionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCollectionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollections?: boolean | null | undefined;
};



export type CreateShopifyCollectionResult = {

  __typename: 'CreateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableCreateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};



export type UpdateShopifyCollectionResult = {

  __typename: 'UpdateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableUpdateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};



export type DeleteShopifyCollectionResult = {

  __typename: 'DeleteShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCountryResult = {

  __typename: 'InternalCreateShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCountry: (InternalShopifyCountryRecord | null);
};



export type AvailableInternalCreateShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCountry?: boolean | null | undefined;
};



export type InternalUpdateShopifyCountryResult = {

  __typename: 'InternalUpdateShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCountry: (InternalShopifyCountryRecord | null);
};



export type AvailableInternalUpdateShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCountry?: boolean | null | undefined;
};



export type InternalDeleteShopifyCountryResult = {

  __typename: 'InternalDeleteShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCountry: (InternalShopifyCountryRecord | null);
};



export type AvailableInternalDeleteShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCountry?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCountryResult = {

  __typename: 'InternalDeleteManyShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCountriesResult = {

  __typename: 'InternalBulkCreateShopifyCountriesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCountries: (InternalShopifyCountryRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCountriesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCountries?: boolean | null | undefined;
};



export type CreateShopifyCountryResult = {

  __typename: 'CreateShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCountry: (ShopifyCountry | null);
};



export type AvailableCreateShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCountry?: AvailableShopifyCountrySelection;
};



export type UpdateShopifyCountryResult = {

  __typename: 'UpdateShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCountry: (ShopifyCountry | null);
};



export type AvailableUpdateShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCountry?: AvailableShopifyCountrySelection;
};



export type DeleteShopifyCountryResult = {

  __typename: 'DeleteShopifyCountryResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCountryResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCustomerResult = {

  __typename: 'InternalCreateShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomer: (InternalShopifyCustomerRecord | null);
};



export type AvailableInternalCreateShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomer?: boolean | null | undefined;
};



export type InternalUpdateShopifyCustomerResult = {

  __typename: 'InternalUpdateShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomer: (InternalShopifyCustomerRecord | null);
};



export type AvailableInternalUpdateShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomer?: boolean | null | undefined;
};



export type InternalDeleteShopifyCustomerResult = {

  __typename: 'InternalDeleteShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomer: (InternalShopifyCustomerRecord | null);
};



export type AvailableInternalDeleteShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomer?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCustomerResult = {

  __typename: 'InternalDeleteManyShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCustomersResult = {

  __typename: 'InternalBulkCreateShopifyCustomersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomers: (InternalShopifyCustomerRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCustomersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomers?: boolean | null | undefined;
};



export type CreateShopifyCustomerResult = {

  __typename: 'CreateShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomer: (ShopifyCustomer | null);
};



export type AvailableCreateShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomer?: AvailableShopifyCustomerSelection;
};



export type UpdateShopifyCustomerResult = {

  __typename: 'UpdateShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomer: (ShopifyCustomer | null);
};



export type AvailableUpdateShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomer?: AvailableShopifyCustomerSelection;
};



export type DeleteShopifyCustomerResult = {

  __typename: 'DeleteShopifyCustomerResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCustomerResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCustomerAddressResult = {

  __typename: 'InternalCreateShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerAddress: (InternalShopifyCustomerAddressRecord | null);
};



export type AvailableInternalCreateShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerAddress?: boolean | null | undefined;
};



export type InternalUpdateShopifyCustomerAddressResult = {

  __typename: 'InternalUpdateShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerAddress: (InternalShopifyCustomerAddressRecord | null);
};



export type AvailableInternalUpdateShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerAddress?: boolean | null | undefined;
};



export type InternalDeleteShopifyCustomerAddressResult = {

  __typename: 'InternalDeleteShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerAddress: (InternalShopifyCustomerAddressRecord | null);
};



export type AvailableInternalDeleteShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerAddress?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCustomerAddressResult = {

  __typename: 'InternalDeleteManyShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCustomerAddressesResult = {

  __typename: 'InternalBulkCreateShopifyCustomerAddressesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerAddresses: (InternalShopifyCustomerAddressRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCustomerAddressesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerAddresses?: boolean | null | undefined;
};



export type CreateShopifyCustomerAddressResult = {

  __typename: 'CreateShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerAddress: (ShopifyCustomerAddress | null);
};



export type AvailableCreateShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerAddress?: AvailableShopifyCustomerAddressSelection;
};



export type UpdateShopifyCustomerAddressResult = {

  __typename: 'UpdateShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerAddress: (ShopifyCustomerAddress | null);
};



export type AvailableUpdateShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerAddress?: AvailableShopifyCustomerAddressSelection;
};



export type DeleteShopifyCustomerAddressResult = {

  __typename: 'DeleteShopifyCustomerAddressResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCustomerAddressResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCustomerMergeableResult = {

  __typename: 'InternalCreateShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerMergeable: (InternalShopifyCustomerMergeableRecord | null);
};



export type AvailableInternalCreateShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerMergeable?: boolean | null | undefined;
};



export type InternalUpdateShopifyCustomerMergeableResult = {

  __typename: 'InternalUpdateShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerMergeable: (InternalShopifyCustomerMergeableRecord | null);
};



export type AvailableInternalUpdateShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerMergeable?: boolean | null | undefined;
};



export type InternalDeleteShopifyCustomerMergeableResult = {

  __typename: 'InternalDeleteShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerMergeable: (InternalShopifyCustomerMergeableRecord | null);
};



export type AvailableInternalDeleteShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerMergeable?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCustomerMergeableResult = {

  __typename: 'InternalDeleteManyShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCustomerMergeablesResult = {

  __typename: 'InternalBulkCreateShopifyCustomerMergeablesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerMergeables: (InternalShopifyCustomerMergeableRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCustomerMergeablesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerMergeables?: boolean | null | undefined;
};



export type CreateShopifyCustomerMergeableResult = {

  __typename: 'CreateShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerMergeable: (ShopifyCustomerMergeable | null);
};



export type AvailableCreateShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerMergeable?: AvailableShopifyCustomerMergeableSelection;
};



export type UpdateShopifyCustomerMergeableResult = {

  __typename: 'UpdateShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerMergeable: (ShopifyCustomerMergeable | null);
};



export type AvailableUpdateShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerMergeable?: AvailableShopifyCustomerMergeableSelection;
};



export type DeleteShopifyCustomerMergeableResult = {

  __typename: 'DeleteShopifyCustomerMergeableResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCustomerMergeableResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCustomerPaymentMethodResult = {

  __typename: 'InternalCreateShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethod: (InternalShopifyCustomerPaymentMethodRecord | null);
};



export type AvailableInternalCreateShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethod?: boolean | null | undefined;
};



export type InternalUpdateShopifyCustomerPaymentMethodResult = {

  __typename: 'InternalUpdateShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethod: (InternalShopifyCustomerPaymentMethodRecord | null);
};



export type AvailableInternalUpdateShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethod?: boolean | null | undefined;
};



export type InternalDeleteShopifyCustomerPaymentMethodResult = {

  __typename: 'InternalDeleteShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethod: (InternalShopifyCustomerPaymentMethodRecord | null);
};



export type AvailableInternalDeleteShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethod?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCustomerPaymentMethodResult = {

  __typename: 'InternalDeleteManyShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCustomerPaymentMethodsResult = {

  __typename: 'InternalBulkCreateShopifyCustomerPaymentMethodsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethods: (InternalShopifyCustomerPaymentMethodRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCustomerPaymentMethodsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethods?: boolean | null | undefined;
};



export type CreateShopifyCustomerPaymentMethodResult = {

  __typename: 'CreateShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethod: (ShopifyCustomerPaymentMethod | null);
};



export type AvailableCreateShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethod?: AvailableShopifyCustomerPaymentMethodSelection;
};



export type UpdateShopifyCustomerPaymentMethodResult = {

  __typename: 'UpdateShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethod: (ShopifyCustomerPaymentMethod | null);
};



export type AvailableUpdateShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethod?: AvailableShopifyCustomerPaymentMethodSelection;
};



export type DeleteShopifyCustomerPaymentMethodResult = {

  __typename: 'DeleteShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type RevokeShopifyCustomerPaymentMethodResult = {

  __typename: 'RevokeShopifyCustomerPaymentMethodResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCustomerPaymentMethod: (ShopifyCustomerPaymentMethod | null);
};



export type AvailableRevokeShopifyCustomerPaymentMethodResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCustomerPaymentMethod?: AvailableShopifyCustomerPaymentMethodSelection;
};



export type InternalCreateShopifyDiscountResult = {

  __typename: 'InternalCreateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalCreateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalUpdateShopifyDiscountResult = {

  __typename: 'InternalUpdateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalUpdateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalDeleteShopifyDiscountResult = {

  __typename: 'InternalDeleteShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalDeleteShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDiscountResult = {

  __typename: 'InternalDeleteManyShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDiscountsResult = {

  __typename: 'InternalBulkCreateShopifyDiscountsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscounts: (InternalShopifyDiscountRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDiscountsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscounts?: boolean | null | undefined;
};



export type CreateShopifyDiscountResult = {

  __typename: 'CreateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (ShopifyDiscount | null);
};



export type AvailableCreateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;
};



export type UpdateShopifyDiscountResult = {

  __typename: 'UpdateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (ShopifyDiscount | null);
};



export type AvailableUpdateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;
};



export type DeleteShopifyDiscountResult = {

  __typename: 'DeleteShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyDiscountCodeResult = {

  __typename: 'InternalCreateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalCreateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalUpdateShopifyDiscountCodeResult = {

  __typename: 'InternalUpdateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalUpdateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalDeleteShopifyDiscountCodeResult = {

  __typename: 'InternalDeleteShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalDeleteShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDiscountCodeResult = {

  __typename: 'InternalDeleteManyShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDiscountCodesResult = {

  __typename: 'InternalBulkCreateShopifyDiscountCodesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCodes: (InternalShopifyDiscountCodeRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDiscountCodesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCodes?: boolean | null | undefined;
};



export type CreateShopifyDiscountCodeResult = {

  __typename: 'CreateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (ShopifyDiscountCode | null);
};



export type AvailableCreateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;
};



export type UpdateShopifyDiscountCodeResult = {

  __typename: 'UpdateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (ShopifyDiscountCode | null);
};



export type AvailableUpdateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;
};



export type DeleteShopifyDiscountCodeResult = {

  __typename: 'DeleteShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyDraftOrderResult = {

  __typename: 'InternalCreateShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrder: (InternalShopifyDraftOrderRecord | null);
};



export type AvailableInternalCreateShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrder?: boolean | null | undefined;
};



export type InternalUpdateShopifyDraftOrderResult = {

  __typename: 'InternalUpdateShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrder: (InternalShopifyDraftOrderRecord | null);
};



export type AvailableInternalUpdateShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrder?: boolean | null | undefined;
};



export type InternalDeleteShopifyDraftOrderResult = {

  __typename: 'InternalDeleteShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrder: (InternalShopifyDraftOrderRecord | null);
};



export type AvailableInternalDeleteShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrder?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDraftOrderResult = {

  __typename: 'InternalDeleteManyShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDraftOrdersResult = {

  __typename: 'InternalBulkCreateShopifyDraftOrdersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrders: (InternalShopifyDraftOrderRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDraftOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrders?: boolean | null | undefined;
};



export type CreateShopifyDraftOrderResult = {

  __typename: 'CreateShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrder: (ShopifyDraftOrder | null);
};



export type AvailableCreateShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrder?: AvailableShopifyDraftOrderSelection;
};



export type UpdateShopifyDraftOrderResult = {

  __typename: 'UpdateShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrder: (ShopifyDraftOrder | null);
};



export type AvailableUpdateShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrder?: AvailableShopifyDraftOrderSelection;
};



export type DeleteShopifyDraftOrderResult = {

  __typename: 'DeleteShopifyDraftOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDraftOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyDraftOrderLineItemResult = {

  __typename: 'InternalCreateShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrderLineItem: (InternalShopifyDraftOrderLineItemRecord | null);
};



export type AvailableInternalCreateShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrderLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyDraftOrderLineItemResult = {

  __typename: 'InternalUpdateShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrderLineItem: (InternalShopifyDraftOrderLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyDraftOrderLineItemResult = {

  __typename: 'InternalDeleteShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrderLineItem: (InternalShopifyDraftOrderLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDraftOrderLineItemResult = {

  __typename: 'InternalDeleteManyShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDraftOrderLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyDraftOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrderLineItems: (InternalShopifyDraftOrderLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDraftOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrderLineItems?: boolean | null | undefined;
};



export type CreateShopifyDraftOrderLineItemResult = {

  __typename: 'CreateShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrderLineItem: (ShopifyDraftOrderLineItem | null);
};



export type AvailableCreateShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrderLineItem?: AvailableShopifyDraftOrderLineItemSelection;
};



export type UpdateShopifyDraftOrderLineItemResult = {

  __typename: 'UpdateShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDraftOrderLineItem: (ShopifyDraftOrderLineItem | null);
};



export type AvailableUpdateShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDraftOrderLineItem?: AvailableShopifyDraftOrderLineItemSelection;
};



export type DeleteShopifyDraftOrderLineItemResult = {

  __typename: 'DeleteShopifyDraftOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDraftOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyDutyResult = {

  __typename: 'InternalCreateShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDuty: (InternalShopifyDutyRecord | null);
};



export type AvailableInternalCreateShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDuty?: boolean | null | undefined;
};



export type InternalUpdateShopifyDutyResult = {

  __typename: 'InternalUpdateShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDuty: (InternalShopifyDutyRecord | null);
};



export type AvailableInternalUpdateShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDuty?: boolean | null | undefined;
};



export type InternalDeleteShopifyDutyResult = {

  __typename: 'InternalDeleteShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDuty: (InternalShopifyDutyRecord | null);
};



export type AvailableInternalDeleteShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDuty?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDutyResult = {

  __typename: 'InternalDeleteManyShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDutiesResult = {

  __typename: 'InternalBulkCreateShopifyDutiesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDuties: (InternalShopifyDutyRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDutiesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDuties?: boolean | null | undefined;
};



export type CreateShopifyDutyResult = {

  __typename: 'CreateShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDuty: (ShopifyDuty | null);
};



export type AvailableCreateShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDuty?: AvailableShopifyDutySelection;
};



export type UpdateShopifyDutyResult = {

  __typename: 'UpdateShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDuty: (ShopifyDuty | null);
};



export type AvailableUpdateShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDuty?: AvailableShopifyDutySelection;
};



export type DeleteShopifyDutyResult = {

  __typename: 'DeleteShopifyDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFileResult = {

  __typename: 'InternalCreateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (InternalShopifyFileRecord | null);
};



export type AvailableInternalCreateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: boolean | null | undefined;
};



export type InternalUpdateShopifyFileResult = {

  __typename: 'InternalUpdateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (InternalShopifyFileRecord | null);
};



export type AvailableInternalUpdateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: boolean | null | undefined;
};



export type InternalDeleteShopifyFileResult = {

  __typename: 'InternalDeleteShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (InternalShopifyFileRecord | null);
};



export type AvailableInternalDeleteShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFileResult = {

  __typename: 'InternalDeleteManyShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFilesResult = {

  __typename: 'InternalBulkCreateShopifyFilesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFiles: (InternalShopifyFileRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFilesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFiles?: boolean | null | undefined;
};



export type CreateShopifyFileResult = {

  __typename: 'CreateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (ShopifyFile | null);
};



export type AvailableCreateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: AvailableShopifyFileSelection;
};



export type UpdateShopifyFileResult = {

  __typename: 'UpdateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (ShopifyFile | null);
};



export type AvailableUpdateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: AvailableShopifyFileSelection;
};



export type DeleteShopifyFileResult = {

  __typename: 'DeleteShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentResult = {

  __typename: 'InternalCreateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentResult = {

  __typename: 'InternalUpdateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentResult = {

  __typename: 'InternalDeleteShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillments: (InternalShopifyFulfillmentRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillments?: boolean | null | undefined;
};



export type CreateShopifyFulfillmentResult = {

  __typename: 'CreateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (ShopifyFulfillment | null);
};



export type AvailableCreateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: AvailableShopifyFulfillmentSelection;
};



export type UpdateShopifyFulfillmentResult = {

  __typename: 'UpdateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (ShopifyFulfillment | null);
};



export type AvailableUpdateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: AvailableShopifyFulfillmentSelection;
};



export type DeleteShopifyFulfillmentResult = {

  __typename: 'DeleteShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentEventResult = {

  __typename: 'InternalCreateShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentEvent: (InternalShopifyFulfillmentEventRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentEvent?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentEventResult = {

  __typename: 'InternalUpdateShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentEvent: (InternalShopifyFulfillmentEventRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentEvent?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentEventResult = {

  __typename: 'InternalDeleteShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentEvent: (InternalShopifyFulfillmentEventRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentEvent?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentEventResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentEventsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentEventsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentEvents: (InternalShopifyFulfillmentEventRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentEventsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentEvents?: boolean | null | undefined;
};



export type CreateShopifyFulfillmentEventResult = {

  __typename: 'CreateShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentEvent: (ShopifyFulfillmentEvent | null);
};



export type AvailableCreateShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentEvent?: AvailableShopifyFulfillmentEventSelection;
};



export type UpdateShopifyFulfillmentEventResult = {

  __typename: 'UpdateShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentEvent: (ShopifyFulfillmentEvent | null);
};



export type AvailableUpdateShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentEvent?: AvailableShopifyFulfillmentEventSelection;
};



export type DeleteShopifyFulfillmentEventResult = {

  __typename: 'DeleteShopifyFulfillmentEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentLineItemResult = {

  __typename: 'InternalCreateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentLineItemResult = {

  __typename: 'InternalUpdateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentLineItemResult = {

  __typename: 'InternalDeleteShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentLineItemResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItems: (InternalShopifyFulfillmentLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItems?: boolean | null | undefined;
};



export type CreateShopifyFulfillmentLineItemResult = {

  __typename: 'CreateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (ShopifyFulfillmentLineItem | null);
};



export type AvailableCreateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: AvailableShopifyFulfillmentLineItemSelection;
};



export type UpdateShopifyFulfillmentLineItemResult = {

  __typename: 'UpdateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (ShopifyFulfillmentLineItem | null);
};



export type AvailableUpdateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: AvailableShopifyFulfillmentLineItemSelection;
};



export type DeleteShopifyFulfillmentLineItemResult = {

  __typename: 'DeleteShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentOrderResult = {

  __typename: 'InternalCreateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentOrderResult = {

  __typename: 'InternalUpdateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentOrderResult = {

  __typename: 'InternalDeleteShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentOrderResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentOrdersResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentOrdersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrders: (InternalShopifyFulfillmentOrderRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrders?: boolean | null | undefined;
};



export type CreateShopifyFulfillmentOrderResult = {

  __typename: 'CreateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (ShopifyFulfillmentOrder | null);
};



export type AvailableCreateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;
};



export type UpdateShopifyFulfillmentOrderResult = {

  __typename: 'UpdateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (ShopifyFulfillmentOrder | null);
};



export type AvailableUpdateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;
};



export type DeleteShopifyFulfillmentOrderResult = {

  __typename: 'DeleteShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalCreateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalUpdateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalDeleteShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentOrderLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItems: (InternalShopifyFulfillmentOrderLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItems?: boolean | null | undefined;
};



export type CreateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'CreateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (ShopifyFulfillmentOrderLineItem | null);
};



export type AvailableCreateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemSelection;
};



export type UpdateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'UpdateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (ShopifyFulfillmentOrderLineItem | null);
};



export type AvailableUpdateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemSelection;
};



export type DeleteShopifyFulfillmentOrderLineItemResult = {

  __typename: 'DeleteShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentServiceResult = {

  __typename: 'InternalCreateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentServiceResult = {

  __typename: 'InternalUpdateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentServiceResult = {

  __typename: 'InternalDeleteShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentServiceResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentServicesResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentServicesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentServices: (InternalShopifyFulfillmentServiceRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentServicesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentServices?: boolean | null | undefined;
};



export type CreateShopifyFulfillmentServiceResult = {

  __typename: 'CreateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (ShopifyFulfillmentService | null);
};



export type AvailableCreateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;
};



export type UpdateShopifyFulfillmentServiceResult = {

  __typename: 'UpdateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (ShopifyFulfillmentService | null);
};



export type AvailableUpdateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;
};



export type DeleteShopifyFulfillmentServiceResult = {

  __typename: 'DeleteShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyGdprRequestResult = {

  __typename: 'InternalCreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalUpdateShopifyGdprRequestResult = {

  __typename: 'InternalUpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteShopifyGdprRequestResult = {

  __typename: 'InternalDeleteShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyGdprRequestResult = {

  __typename: 'InternalDeleteManyShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyGdprRequestsResult = {

  __typename: 'InternalBulkCreateShopifyGdprRequestsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequests?: boolean | null | undefined;
};



export type CreateShopifyGdprRequestResult = {

  __typename: 'CreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type UpdateShopifyGdprRequestResult = {

  __typename: 'UpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type InternalCreateShopifyInventoryItemResult = {

  __typename: 'InternalCreateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalCreateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyInventoryItemResult = {

  __typename: 'InternalUpdateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalUpdateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyInventoryItemResult = {

  __typename: 'InternalDeleteShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalDeleteShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyInventoryItemResult = {

  __typename: 'InternalDeleteManyShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyInventoryItemsResult = {

  __typename: 'InternalBulkCreateShopifyInventoryItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItems: (InternalShopifyInventoryItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyInventoryItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItems?: boolean | null | undefined;
};



export type CreateShopifyInventoryItemResult = {

  __typename: 'CreateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (ShopifyInventoryItem | null);
};



export type AvailableCreateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;
};



export type UpdateShopifyInventoryItemResult = {

  __typename: 'UpdateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (ShopifyInventoryItem | null);
};



export type AvailableUpdateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;
};



export type DeleteShopifyInventoryItemResult = {

  __typename: 'DeleteShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyInventoryLevelResult = {

  __typename: 'InternalCreateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalCreateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalUpdateShopifyInventoryLevelResult = {

  __typename: 'InternalUpdateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalUpdateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalDeleteShopifyInventoryLevelResult = {

  __typename: 'InternalDeleteShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalDeleteShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyInventoryLevelResult = {

  __typename: 'InternalDeleteManyShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyInventoryLevelsResult = {

  __typename: 'InternalBulkCreateShopifyInventoryLevelsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevels: (InternalShopifyInventoryLevelRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyInventoryLevelsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevels?: boolean | null | undefined;
};



export type CreateShopifyInventoryLevelResult = {

  __typename: 'CreateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);
};



export type AvailableCreateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;
};



export type UpdateShopifyInventoryLevelResult = {

  __typename: 'UpdateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);
};



export type AvailableUpdateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;
};



export type DeleteShopifyInventoryLevelResult = {

  __typename: 'DeleteShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyLocationResult = {

  __typename: 'InternalCreateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalCreateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalUpdateShopifyLocationResult = {

  __typename: 'InternalUpdateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalUpdateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalDeleteShopifyLocationResult = {

  __typename: 'InternalDeleteShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalDeleteShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyLocationResult = {

  __typename: 'InternalDeleteManyShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyLocationsResult = {

  __typename: 'InternalBulkCreateShopifyLocationsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocations: (InternalShopifyLocationRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyLocationsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocations?: boolean | null | undefined;
};



export type CreateShopifyLocationResult = {

  __typename: 'CreateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (ShopifyLocation | null);
};



export type AvailableCreateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;
};



export type UpdateShopifyLocationResult = {

  __typename: 'UpdateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (ShopifyLocation | null);
};



export type AvailableUpdateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;
};



export type DeleteShopifyLocationResult = {

  __typename: 'DeleteShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderResult = {

  __typename: 'InternalCreateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalCreateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderResult = {

  __typename: 'InternalUpdateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalUpdateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderResult = {

  __typename: 'InternalDeleteShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalDeleteShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderResult = {

  __typename: 'InternalDeleteManyShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrdersResult = {

  __typename: 'InternalBulkCreateShopifyOrdersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrders: (InternalShopifyOrderRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrders?: boolean | null | undefined;
};



export type CreateShopifyOrderResult = {

  __typename: 'CreateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (ShopifyOrder | null);
};



export type AvailableCreateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;
};



export type UpdateShopifyOrderResult = {

  __typename: 'UpdateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (ShopifyOrder | null);
};



export type AvailableUpdateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;
};



export type DeleteShopifyOrderResult = {

  __typename: 'DeleteShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderAdjustmentResult = {

  __typename: 'InternalCreateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);
};



export type AvailableInternalCreateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderAdjustmentResult = {

  __typename: 'InternalUpdateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);
};



export type AvailableInternalUpdateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderAdjustmentResult = {

  __typename: 'InternalDeleteShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);
};



export type AvailableInternalDeleteShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderAdjustmentResult = {

  __typename: 'InternalDeleteManyShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderAdjustmentsResult = {

  __typename: 'InternalBulkCreateShopifyOrderAdjustmentsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustments: (InternalShopifyOrderAdjustmentRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderAdjustmentsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustments?: boolean | null | undefined;
};



export type CreateShopifyOrderAdjustmentResult = {

  __typename: 'CreateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (ShopifyOrderAdjustment | null);
};



export type AvailableCreateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: AvailableShopifyOrderAdjustmentSelection;
};



export type UpdateShopifyOrderAdjustmentResult = {

  __typename: 'UpdateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (ShopifyOrderAdjustment | null);
};



export type AvailableUpdateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: AvailableShopifyOrderAdjustmentSelection;
};



export type DeleteShopifyOrderAdjustmentResult = {

  __typename: 'DeleteShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderLineItemResult = {

  __typename: 'InternalCreateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalCreateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderLineItemResult = {

  __typename: 'InternalUpdateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderLineItemResult = {

  __typename: 'InternalDeleteShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderLineItemResult = {

  __typename: 'InternalDeleteManyShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItems: (InternalShopifyOrderLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItems?: boolean | null | undefined;
};



export type CreateShopifyOrderLineItemResult = {

  __typename: 'CreateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);
};



export type AvailableCreateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;
};



export type UpdateShopifyOrderLineItemResult = {

  __typename: 'UpdateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);
};



export type AvailableUpdateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;
};



export type DeleteShopifyOrderLineItemResult = {

  __typename: 'DeleteShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderRiskResult = {

  __typename: 'InternalCreateShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderRisk: (InternalShopifyOrderRiskRecord | null);
};



export type AvailableInternalCreateShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderRisk?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderRiskResult = {

  __typename: 'InternalUpdateShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderRisk: (InternalShopifyOrderRiskRecord | null);
};



export type AvailableInternalUpdateShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderRisk?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderRiskResult = {

  __typename: 'InternalDeleteShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderRisk: (InternalShopifyOrderRiskRecord | null);
};



export type AvailableInternalDeleteShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderRisk?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderRiskResult = {

  __typename: 'InternalDeleteManyShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderRisksResult = {

  __typename: 'InternalBulkCreateShopifyOrderRisksResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderRisks: (InternalShopifyOrderRiskRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderRisksResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderRisks?: boolean | null | undefined;
};



export type CreateShopifyOrderRiskResult = {

  __typename: 'CreateShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderRisk: (ShopifyOrderRisk | null);
};



export type AvailableCreateShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderRisk?: AvailableShopifyOrderRiskSelection;
};



export type UpdateShopifyOrderRiskResult = {

  __typename: 'UpdateShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderRisk: (ShopifyOrderRisk | null);
};



export type AvailableUpdateShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderRisk?: AvailableShopifyOrderRiskSelection;
};



export type DeleteShopifyOrderRiskResult = {

  __typename: 'DeleteShopifyOrderRiskResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderRiskResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderTransactionResult = {

  __typename: 'InternalCreateShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderTransaction: (InternalShopifyOrderTransactionRecord | null);
};



export type AvailableInternalCreateShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderTransaction?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderTransactionResult = {

  __typename: 'InternalUpdateShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderTransaction: (InternalShopifyOrderTransactionRecord | null);
};



export type AvailableInternalUpdateShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderTransaction?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderTransactionResult = {

  __typename: 'InternalDeleteShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderTransaction: (InternalShopifyOrderTransactionRecord | null);
};



export type AvailableInternalDeleteShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderTransaction?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderTransactionResult = {

  __typename: 'InternalDeleteManyShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderTransactionsResult = {

  __typename: 'InternalBulkCreateShopifyOrderTransactionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderTransactions: (InternalShopifyOrderTransactionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderTransactionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderTransactions?: boolean | null | undefined;
};



export type CreateShopifyOrderTransactionResult = {

  __typename: 'CreateShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderTransaction: (ShopifyOrderTransaction | null);
};



export type AvailableCreateShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderTransaction?: AvailableShopifyOrderTransactionSelection;
};



export type UpdateShopifyOrderTransactionResult = {

  __typename: 'UpdateShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderTransaction: (ShopifyOrderTransaction | null);
};



export type AvailableUpdateShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderTransaction?: AvailableShopifyOrderTransactionSelection;
};



export type DeleteShopifyOrderTransactionResult = {

  __typename: 'DeleteShopifyOrderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyPriceRuleResult = {

  __typename: 'InternalCreateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalCreateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalUpdateShopifyPriceRuleResult = {

  __typename: 'InternalUpdateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalUpdateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalDeleteShopifyPriceRuleResult = {

  __typename: 'InternalDeleteShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalDeleteShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyPriceRuleResult = {

  __typename: 'InternalDeleteManyShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyPriceRulesResult = {

  __typename: 'InternalBulkCreateShopifyPriceRulesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRules: (InternalShopifyPriceRuleRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyPriceRulesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRules?: boolean | null | undefined;
};



export type CreateShopifyPriceRuleResult = {

  __typename: 'CreateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (ShopifyPriceRule | null);
};



export type AvailableCreateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;
};



export type UpdateShopifyPriceRuleResult = {

  __typename: 'UpdateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (ShopifyPriceRule | null);
};



export type AvailableUpdateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;
};



export type DeleteShopifyPriceRuleResult = {

  __typename: 'DeleteShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductResult = {

  __typename: 'InternalCreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductResult = {

  __typename: 'InternalUpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductResult = {

  __typename: 'InternalDeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductResult = {

  __typename: 'InternalDeleteManyShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductsResult = {

  __typename: 'InternalBulkCreateShopifyProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProducts: (InternalShopifyProductRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProducts?: boolean | null | undefined;
};



export type CreateShopifyProductResult = {

  __typename: 'CreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export type UpdateShopifyProductResult = {

  __typename: 'UpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export type DeleteShopifyProductResult = {

  __typename: 'DeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductImageResult = {

  __typename: 'InternalCreateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalCreateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductImageResult = {

  __typename: 'InternalUpdateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalUpdateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductImageResult = {

  __typename: 'InternalDeleteShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalDeleteShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductImageResult = {

  __typename: 'InternalDeleteManyShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductImagesResult = {

  __typename: 'InternalBulkCreateShopifyProductImagesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImages: (InternalShopifyProductImageRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductImagesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImages?: boolean | null | undefined;
};



export type CreateShopifyProductImageResult = {

  __typename: 'CreateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (ShopifyProductImage | null);
};



export type AvailableCreateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;
};



export type UpdateShopifyProductImageResult = {

  __typename: 'UpdateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (ShopifyProductImage | null);
};



export type AvailableUpdateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;
};



export type DeleteShopifyProductImageResult = {

  __typename: 'DeleteShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductOptionResult = {

  __typename: 'InternalCreateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);
};



export type AvailableInternalCreateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductOptionResult = {

  __typename: 'InternalUpdateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);
};



export type AvailableInternalUpdateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductOptionResult = {

  __typename: 'InternalDeleteShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);
};



export type AvailableInternalDeleteShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductOptionResult = {

  __typename: 'InternalDeleteManyShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductOptionsResult = {

  __typename: 'InternalBulkCreateShopifyProductOptionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOptions: (InternalShopifyProductOptionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductOptionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOptions?: boolean | null | undefined;
};



export type CreateShopifyProductOptionResult = {

  __typename: 'CreateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (ShopifyProductOption | null);
};



export type AvailableCreateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: AvailableShopifyProductOptionSelection;
};



export type UpdateShopifyProductOptionResult = {

  __typename: 'UpdateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (ShopifyProductOption | null);
};



export type AvailableUpdateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: AvailableShopifyProductOptionSelection;
};



export type DeleteShopifyProductOptionResult = {

  __typename: 'DeleteShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductVariantResult = {

  __typename: 'InternalCreateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalCreateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductVariantResult = {

  __typename: 'InternalUpdateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalUpdateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductVariantResult = {

  __typename: 'InternalDeleteShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalDeleteShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductVariantResult = {

  __typename: 'InternalDeleteManyShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductVariantsResult = {

  __typename: 'InternalBulkCreateShopifyProductVariantsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariants: (InternalShopifyProductVariantRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductVariantsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariants?: boolean | null | undefined;
};



export type CreateShopifyProductVariantResult = {

  __typename: 'CreateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (ShopifyProductVariant | null);
};



export type AvailableCreateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;
};



export type UpdateShopifyProductVariantResult = {

  __typename: 'UpdateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (ShopifyProductVariant | null);
};



export type AvailableUpdateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;
};



export type DeleteShopifyProductVariantResult = {

  __typename: 'DeleteShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProvinceResult = {

  __typename: 'InternalCreateShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProvince: (InternalShopifyProvinceRecord | null);
};



export type AvailableInternalCreateShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProvince?: boolean | null | undefined;
};



export type InternalUpdateShopifyProvinceResult = {

  __typename: 'InternalUpdateShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProvince: (InternalShopifyProvinceRecord | null);
};



export type AvailableInternalUpdateShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProvince?: boolean | null | undefined;
};



export type InternalDeleteShopifyProvinceResult = {

  __typename: 'InternalDeleteShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProvince: (InternalShopifyProvinceRecord | null);
};



export type AvailableInternalDeleteShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProvince?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProvinceResult = {

  __typename: 'InternalDeleteManyShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProvincesResult = {

  __typename: 'InternalBulkCreateShopifyProvincesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProvinces: (InternalShopifyProvinceRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProvincesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProvinces?: boolean | null | undefined;
};



export type CreateShopifyProvinceResult = {

  __typename: 'CreateShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProvince: (ShopifyProvince | null);
};



export type AvailableCreateShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProvince?: AvailableShopifyProvinceSelection;
};



export type UpdateShopifyProvinceResult = {

  __typename: 'UpdateShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProvince: (ShopifyProvince | null);
};



export type AvailableUpdateShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProvince?: AvailableShopifyProvinceSelection;
};



export type DeleteShopifyProvinceResult = {

  __typename: 'DeleteShopifyProvinceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProvinceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyRefundResult = {

  __typename: 'InternalCreateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (InternalShopifyRefundRecord | null);
};



export type AvailableInternalCreateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: boolean | null | undefined;
};



export type InternalUpdateShopifyRefundResult = {

  __typename: 'InternalUpdateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (InternalShopifyRefundRecord | null);
};



export type AvailableInternalUpdateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: boolean | null | undefined;
};



export type InternalDeleteShopifyRefundResult = {

  __typename: 'InternalDeleteShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (InternalShopifyRefundRecord | null);
};



export type AvailableInternalDeleteShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRefundResult = {

  __typename: 'InternalDeleteManyShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRefundsResult = {

  __typename: 'InternalBulkCreateShopifyRefundsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefunds: (InternalShopifyRefundRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRefundsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefunds?: boolean | null | undefined;
};



export type CreateShopifyRefundResult = {

  __typename: 'CreateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (ShopifyRefund | null);
};



export type AvailableCreateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: AvailableShopifyRefundSelection;
};



export type UpdateShopifyRefundResult = {

  __typename: 'UpdateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (ShopifyRefund | null);
};



export type AvailableUpdateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: AvailableShopifyRefundSelection;
};



export type DeleteShopifyRefundResult = {

  __typename: 'DeleteShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyRefundDutyResult = {

  __typename: 'InternalCreateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);
};



export type AvailableInternalCreateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: boolean | null | undefined;
};



export type InternalUpdateShopifyRefundDutyResult = {

  __typename: 'InternalUpdateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);
};



export type AvailableInternalUpdateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: boolean | null | undefined;
};



export type InternalDeleteShopifyRefundDutyResult = {

  __typename: 'InternalDeleteShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);
};



export type AvailableInternalDeleteShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRefundDutyResult = {

  __typename: 'InternalDeleteManyShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRefundDutiesResult = {

  __typename: 'InternalBulkCreateShopifyRefundDutiesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuties: (InternalShopifyRefundDutyRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRefundDutiesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuties?: boolean | null | undefined;
};



export type CreateShopifyRefundDutyResult = {

  __typename: 'CreateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (ShopifyRefundDuty | null);
};



export type AvailableCreateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: AvailableShopifyRefundDutySelection;
};



export type UpdateShopifyRefundDutyResult = {

  __typename: 'UpdateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (ShopifyRefundDuty | null);
};



export type AvailableUpdateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: AvailableShopifyRefundDutySelection;
};



export type DeleteShopifyRefundDutyResult = {

  __typename: 'DeleteShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyRefundLineItemResult = {

  __typename: 'InternalCreateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);
};



export type AvailableInternalCreateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyRefundLineItemResult = {

  __typename: 'InternalUpdateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyRefundLineItemResult = {

  __typename: 'InternalDeleteShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRefundLineItemResult = {

  __typename: 'InternalDeleteManyShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRefundLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyRefundLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItems: (InternalShopifyRefundLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRefundLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItems?: boolean | null | undefined;
};



export type CreateShopifyRefundLineItemResult = {

  __typename: 'CreateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (ShopifyRefundLineItem | null);
};



export type AvailableCreateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: AvailableShopifyRefundLineItemSelection;
};



export type UpdateShopifyRefundLineItemResult = {

  __typename: 'UpdateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (ShopifyRefundLineItem | null);
};



export type AvailableUpdateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: AvailableShopifyRefundLineItemSelection;
};



export type DeleteShopifyRefundLineItemResult = {

  __typename: 'DeleteShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyScriptTagResult = {

  __typename: 'InternalCreateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);
};



export type AvailableInternalCreateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: boolean | null | undefined;
};



export type InternalUpdateShopifyScriptTagResult = {

  __typename: 'InternalUpdateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);
};



export type AvailableInternalUpdateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: boolean | null | undefined;
};



export type InternalDeleteShopifyScriptTagResult = {

  __typename: 'InternalDeleteShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);
};



export type AvailableInternalDeleteShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyScriptTagResult = {

  __typename: 'InternalDeleteManyShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyScriptTagsResult = {

  __typename: 'InternalBulkCreateShopifyScriptTagsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTags: (InternalShopifyScriptTagRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyScriptTagsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTags?: boolean | null | undefined;
};



export type CreateShopifyScriptTagResult = {

  __typename: 'CreateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (ShopifyScriptTag | null);
};



export type AvailableCreateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: AvailableShopifyScriptTagSelection;
};



export type UpdateShopifyScriptTagResult = {

  __typename: 'UpdateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (ShopifyScriptTag | null);
};



export type AvailableUpdateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: AvailableShopifyScriptTagSelection;
};



export type DeleteShopifyScriptTagResult = {

  __typename: 'DeleteShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifySellingPlanResult = {

  __typename: 'InternalCreateShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlan: (InternalShopifySellingPlanRecord | null);
};



export type AvailableInternalCreateShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlan?: boolean | null | undefined;
};



export type InternalUpdateShopifySellingPlanResult = {

  __typename: 'InternalUpdateShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlan: (InternalShopifySellingPlanRecord | null);
};



export type AvailableInternalUpdateShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlan?: boolean | null | undefined;
};



export type InternalDeleteShopifySellingPlanResult = {

  __typename: 'InternalDeleteShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlan: (InternalShopifySellingPlanRecord | null);
};



export type AvailableInternalDeleteShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlan?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySellingPlanResult = {

  __typename: 'InternalDeleteManyShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySellingPlansResult = {

  __typename: 'InternalBulkCreateShopifySellingPlansResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlans: (InternalShopifySellingPlanRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySellingPlansResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlans?: boolean | null | undefined;
};



export type CreateShopifySellingPlanResult = {

  __typename: 'CreateShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlan: (ShopifySellingPlan | null);
};



export type AvailableCreateShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlan?: AvailableShopifySellingPlanSelection;
};



export type UpdateShopifySellingPlanResult = {

  __typename: 'UpdateShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlan: (ShopifySellingPlan | null);
};



export type AvailableUpdateShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlan?: AvailableShopifySellingPlanSelection;
};



export type DeleteShopifySellingPlanResult = {

  __typename: 'DeleteShopifySellingPlanResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifySellingPlanResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifySellingPlanGroupResult = {

  __typename: 'InternalCreateShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroup: (InternalShopifySellingPlanGroupRecord | null);
};



export type AvailableInternalCreateShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroup?: boolean | null | undefined;
};



export type InternalUpdateShopifySellingPlanGroupResult = {

  __typename: 'InternalUpdateShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroup: (InternalShopifySellingPlanGroupRecord | null);
};



export type AvailableInternalUpdateShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroup?: boolean | null | undefined;
};



export type InternalDeleteShopifySellingPlanGroupResult = {

  __typename: 'InternalDeleteShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroup: (InternalShopifySellingPlanGroupRecord | null);
};



export type AvailableInternalDeleteShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroup?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySellingPlanGroupResult = {

  __typename: 'InternalDeleteManyShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySellingPlanGroupsResult = {

  __typename: 'InternalBulkCreateShopifySellingPlanGroupsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroups: (InternalShopifySellingPlanGroupRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySellingPlanGroupsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroups?: boolean | null | undefined;
};



export type CreateShopifySellingPlanGroupResult = {

  __typename: 'CreateShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroup: (ShopifySellingPlanGroup | null);
};



export type AvailableCreateShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroup?: AvailableShopifySellingPlanGroupSelection;
};



export type UpdateShopifySellingPlanGroupResult = {

  __typename: 'UpdateShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroup: (ShopifySellingPlanGroup | null);
};



export type AvailableUpdateShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroup?: AvailableShopifySellingPlanGroupSelection;
};



export type DeleteShopifySellingPlanGroupResult = {

  __typename: 'DeleteShopifySellingPlanGroupResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifySellingPlanGroupResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifySellingPlanGroupProductResult = {

  __typename: 'InternalCreateShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProduct: (InternalShopifySellingPlanGroupProductRecord | null);
};



export type AvailableInternalCreateShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProduct?: boolean | null | undefined;
};



export type InternalUpdateShopifySellingPlanGroupProductResult = {

  __typename: 'InternalUpdateShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProduct: (InternalShopifySellingPlanGroupProductRecord | null);
};



export type AvailableInternalUpdateShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProduct?: boolean | null | undefined;
};



export type InternalDeleteShopifySellingPlanGroupProductResult = {

  __typename: 'InternalDeleteShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProduct: (InternalShopifySellingPlanGroupProductRecord | null);
};



export type AvailableInternalDeleteShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProduct?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySellingPlanGroupProductResult = {

  __typename: 'InternalDeleteManyShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySellingPlanGroupProductsResult = {

  __typename: 'InternalBulkCreateShopifySellingPlanGroupProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProducts: (InternalShopifySellingPlanGroupProductRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySellingPlanGroupProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProducts?: boolean | null | undefined;
};



export type CreateShopifySellingPlanGroupProductResult = {

  __typename: 'CreateShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProduct: (ShopifySellingPlanGroupProduct | null);
};



export type AvailableCreateShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProduct?: AvailableShopifySellingPlanGroupProductSelection;
};



export type UpdateShopifySellingPlanGroupProductResult = {

  __typename: 'UpdateShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProduct: (ShopifySellingPlanGroupProduct | null);
};



export type AvailableUpdateShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProduct?: AvailableShopifySellingPlanGroupProductSelection;
};



export type DeleteShopifySellingPlanGroupProductResult = {

  __typename: 'DeleteShopifySellingPlanGroupProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifySellingPlanGroupProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifySellingPlanGroupProductVariantResult = {

  __typename: 'InternalCreateShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProductVariant: (InternalShopifySellingPlanGroupProductVariantRecord | null);
};



export type AvailableInternalCreateShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProductVariant?: boolean | null | undefined;
};



export type InternalUpdateShopifySellingPlanGroupProductVariantResult = {

  __typename: 'InternalUpdateShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProductVariant: (InternalShopifySellingPlanGroupProductVariantRecord | null);
};



export type AvailableInternalUpdateShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProductVariant?: boolean | null | undefined;
};



export type InternalDeleteShopifySellingPlanGroupProductVariantResult = {

  __typename: 'InternalDeleteShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProductVariant: (InternalShopifySellingPlanGroupProductVariantRecord | null);
};



export type AvailableInternalDeleteShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProductVariant?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySellingPlanGroupProductVariantResult = {

  __typename: 'InternalDeleteManyShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySellingPlanGroupProductVariantsResult = {

  __typename: 'InternalBulkCreateShopifySellingPlanGroupProductVariantsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProductVariants: (InternalShopifySellingPlanGroupProductVariantRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySellingPlanGroupProductVariantsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProductVariants?: boolean | null | undefined;
};



export type CreateShopifySellingPlanGroupProductVariantResult = {

  __typename: 'CreateShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProductVariant: (ShopifySellingPlanGroupProductVariant | null);
};



export type AvailableCreateShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProductVariant?: AvailableShopifySellingPlanGroupProductVariantSelection;
};



export type UpdateShopifySellingPlanGroupProductVariantResult = {

  __typename: 'UpdateShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySellingPlanGroupProductVariant: (ShopifySellingPlanGroupProductVariant | null);
};



export type AvailableUpdateShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySellingPlanGroupProductVariant?: AvailableShopifySellingPlanGroupProductVariantSelection;
};



export type DeleteShopifySellingPlanGroupProductVariantResult = {

  __typename: 'DeleteShopifySellingPlanGroupProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifySellingPlanGroupProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyShippingLineResult = {

  __typename: 'InternalCreateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);
};



export type AvailableInternalCreateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: boolean | null | undefined;
};



export type InternalUpdateShopifyShippingLineResult = {

  __typename: 'InternalUpdateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);
};



export type AvailableInternalUpdateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: boolean | null | undefined;
};



export type InternalDeleteShopifyShippingLineResult = {

  __typename: 'InternalDeleteShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);
};



export type AvailableInternalDeleteShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShippingLineResult = {

  __typename: 'InternalDeleteManyShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShippingLinesResult = {

  __typename: 'InternalBulkCreateShopifyShippingLinesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLines: (InternalShopifyShippingLineRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShippingLinesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLines?: boolean | null | undefined;
};



export type CreateShopifyShippingLineResult = {

  __typename: 'CreateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (ShopifyShippingLine | null);
};



export type AvailableCreateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: AvailableShopifyShippingLineSelection;
};



export type UpdateShopifyShippingLineResult = {

  __typename: 'UpdateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (ShopifyShippingLine | null);
};



export type AvailableUpdateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: AvailableShopifyShippingLineSelection;
};



export type DeleteShopifyShippingLineResult = {

  __typename: 'DeleteShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyShopResult = {

  __typename: 'InternalCreateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalCreateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalUpdateShopifyShopResult = {

  __typename: 'InternalUpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteShopifyShopResult = {

  __typename: 'InternalDeleteShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalDeleteShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShopResult = {

  __typename: 'InternalDeleteManyShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShopsResult = {

  __typename: 'InternalBulkCreateShopifyShopsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShops: (InternalShopifyShopRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShops?: boolean | null | undefined;
};



export type UpdateShopifyShopResult = {

  __typename: 'UpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InstallShopifyShopResult = {

  __typename: 'InstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableInstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type UninstallShopifyShopResult = {

  __typename: 'UninstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUninstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type ReinstallShopifyShopResult = {

  __typename: 'ReinstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableReinstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InternalCreateShopifySyncResult = {

  __typename: 'InternalCreateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalCreateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalUpdateShopifySyncResult = {

  __typename: 'InternalUpdateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpdateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteShopifySyncResult = {

  __typename: 'InternalDeleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalDeleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySyncResult = {

  __typename: 'InternalDeleteManyShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySyncsResult = {

  __typename: 'InternalBulkCreateShopifySyncsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySyncs: (InternalShopifySyncRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySyncs?: boolean | null | undefined;
};



export type InternalCreateShopifyTenderTransactionResult = {

  __typename: 'InternalCreateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);
};



export type AvailableInternalCreateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: boolean | null | undefined;
};



export type InternalUpdateShopifyTenderTransactionResult = {

  __typename: 'InternalUpdateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);
};



export type AvailableInternalUpdateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: boolean | null | undefined;
};



export type InternalDeleteShopifyTenderTransactionResult = {

  __typename: 'InternalDeleteShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);
};



export type AvailableInternalDeleteShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyTenderTransactionResult = {

  __typename: 'InternalDeleteManyShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyTenderTransactionsResult = {

  __typename: 'InternalBulkCreateShopifyTenderTransactionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransactions: (InternalShopifyTenderTransactionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyTenderTransactionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransactions?: boolean | null | undefined;
};



export type CreateShopifyTenderTransactionResult = {

  __typename: 'CreateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (ShopifyTenderTransaction | null);
};



export type AvailableCreateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: AvailableShopifyTenderTransactionSelection;
};



export type UpdateShopifyTenderTransactionResult = {

  __typename: 'UpdateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (ShopifyTenderTransaction | null);
};



export type AvailableUpdateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: AvailableShopifyTenderTransactionSelection;
};



export type DeleteShopifyTenderTransactionResult = {

  __typename: 'DeleteShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyThemeResult = {

  __typename: 'InternalCreateShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTheme: (InternalShopifyThemeRecord | null);
};



export type AvailableInternalCreateShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTheme?: boolean | null | undefined;
};



export type InternalUpdateShopifyThemeResult = {

  __typename: 'InternalUpdateShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTheme: (InternalShopifyThemeRecord | null);
};



export type AvailableInternalUpdateShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTheme?: boolean | null | undefined;
};



export type InternalDeleteShopifyThemeResult = {

  __typename: 'InternalDeleteShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTheme: (InternalShopifyThemeRecord | null);
};



export type AvailableInternalDeleteShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTheme?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyThemeResult = {

  __typename: 'InternalDeleteManyShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyThemesResult = {

  __typename: 'InternalBulkCreateShopifyThemesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyThemes: (InternalShopifyThemeRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyThemesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyThemes?: boolean | null | undefined;
};



export type CreateShopifyThemeResult = {

  __typename: 'CreateShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTheme: (ShopifyTheme | null);
};



export type AvailableCreateShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTheme?: AvailableShopifyThemeSelection;
};



export type UpdateShopifyThemeResult = {

  __typename: 'UpdateShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTheme: (ShopifyTheme | null);
};



export type AvailableUpdateShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTheme?: AvailableShopifyThemeSelection;
};



export type DeleteShopifyThemeResult = {

  __typename: 'DeleteShopifyThemeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyThemeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };

export type IDsList = {
  ids: string[];
}
