import { applyParams, save, ActionOptions, CreateShopifyStoreActionContext,preventCrossShop } from "gadget-server";

/**
 * @param { CreateShopifyStoreActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyStoreActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
