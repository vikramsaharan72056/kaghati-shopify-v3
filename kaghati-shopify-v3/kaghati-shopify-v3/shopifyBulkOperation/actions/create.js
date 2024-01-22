import { transitionState, applyParams, preventCrossShopDataAccess, save, ActionOptions, ShopifyBulkOperationState, CreateShopifyBulkOperationActionContext } from "gadget-server";

/**
 * @param { CreateShopifyBulkOperationActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  transitionState(record, {to: ShopifyBulkOperationState.Created});
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyBulkOperationActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
