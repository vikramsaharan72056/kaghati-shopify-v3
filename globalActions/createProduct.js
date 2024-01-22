import { CreateProductGlobalActionContext } from "gadget-server";

/**
 * @param { CreateProductGlobalActionContext } context
 */
export async function run({ scope, logger, params, connections }) {
  logger.info({params}, "HERE")
  const shopify = connections.shopify.current;
  const product = await shopify.product.create({
    title: params.title,
    body_html: params.body,
    product_type: params.productType,
    status: params.status,
    vendor: params.vendor,
    tags: params.tags
  });
  logger.info({ product }, "created new product in shopify");
  scope.result = product;
}

export const params = {
  title: {
    type: "string"
  },
  body: {
    type: "string"
  },
  productType: {
    type: "string"
  },
  status: {
    type: "string",
  },
  vendor: {
    type: "string"
  },
  tags: {
    type: "string"
  },
  images: {
    type: "array"
  }
}
