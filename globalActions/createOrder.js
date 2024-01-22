import { CreateOrderGlobalActionContext } from "gadget-server";

/**
 * @param { CreateOrderGlobalActionContext } context
 */
export async function run({ scope, logger, params, connections }) {
  const shopify = connections.shopify.current;
  const order = await shopify.draftOrder.create({
    email: "test@gmail.com",
  });
  logger.info({ order }, "created new order in shopify");
  scope.result = order;
}
