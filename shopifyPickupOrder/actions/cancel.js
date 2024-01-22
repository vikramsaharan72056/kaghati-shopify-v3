import { ApplyParams, Save, ActionOptions, CancelOrderActionContext } from "gadget-server";

/**
 * @param {CancelOrderActionContext} context
 */
export async function run({ params, record, logger, api, connections }) {
  try {
    ApplyParams(params, record);

    // Your logic goes here

    const porterHost = 'pfe-apigw-uat.porter.in'; // Replace with your actual host
    const orderId = '2'; // Replace with your actual order ID
    const cancelUrl = `https://${porterHost}/v1/orders/${orderId}/cancel`;

    const apiKey = '68db3908-6cb4-4413-899c-d23e472c2711'; // Adjust the API key as needed

    const response = await fetch(cancelUrl, {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
      },
    });

    const data = await response.json();
    console.log(data); // Handle the response data as needed

    await Save(record);
  } catch (error) {
    console.error('Error:', error);
  }
};

/**
 * @param {CancelOrderActionContext} context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type {ActionOptions} */
export const options = {
  actionType: "cancelOrder"
};
