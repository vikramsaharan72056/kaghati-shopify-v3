import { Client } from "@gadget-client/kaghati-shopify-v3";

export const api = new Client({ environment: window.gadgetConfig.environment });
