import { transitionState, applyParams, preventCrossShopDataAccess, finishBulkOperation, save, ActionOptions, ShopifyBulkOperationState, CompleteShopifyBulkOperationActionContext } from "gadget-server";

/**
 * @param { CompleteShopifyBulkOperationActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  transitionState(record, {from: ShopifyBulkOperationState.Created, to: ShopifyBulkOperationState.Completed});
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await finishBulkOperation(record);
  await save(record);
};

/**
 * @param { CompleteShopifyBulkOperationActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
