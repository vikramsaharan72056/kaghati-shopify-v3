import { ApplyParams, Save, ActionOptions, TrackingActionContext } from "gadget-server";

/**
 * @param {TrackingActionContext} context
 */
export async function run({ params, record, logger, api, connections }) {
  try {
    ApplyParams(params, record);

    // Your logic goes here

    const trackingUrl = 'https://pfe-apigw-uat.porter.in/v1/orders/track'; // Adjust the URL as needed
    const trackingApiKey = '68db3908-6cb4-4413-899c-d23e472c2711'; // Adjust the API key as needed

    const response = await fetch(trackingUrl, {
      method: 'GET',
      headers: {
        'X-API-KEY': trackingApiKey,
      },
    });

    const data = await response.json();
    console.log(data); // Handle the tracking response data as needed

    await Save(record);
  } catch (error) {
    console.error('Error:', error);
  }
};

/**
 * @param {TrackingActionContext} context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type {ActionOptions} */
export const options = {
  actionType: "track"
};
