import { CreateCustomerGlobalActionContext } from "gadget-server";

/**
 * @param { CreateCustomerGlobalActionContext } context
 */
export async function run({ scope, logger, params, connections }) {
  const shopify = connections.shopify.current;
  const customer = await shopify.customer.create({
    email: "test@gmail.com",
    firstName: "test",
    lastName: "is here",
  });
  logger.info({ customer }, "created new customer in shopify");
  scope.result = customer;
}
