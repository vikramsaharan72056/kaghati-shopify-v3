import { applyParams, save, ActionOptions, CreateShopifyOrderShippingActionContext } from "gadget-server";

/**
 * @param { CreateShopifyOrderShippingActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
 fetch('https://pfe-apigw-uat.porter.in/v1/orders/create', {
    method: 'POST',
    headers: {
        'x-api-key': '68db3908-6cb4-4413-899c-d23e472c2711',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "request_id": "TEST_0_8236098bfc-87e0-11ec-a8a3-0242ac120004",
        "delivery_instructions": {
            "instructions_list": [
                {
                    "type": "text",
                    "description": "handle with care"
                }
            ]
        },
        "pickup_details": {
            "address": {
                "apartment_address": "27",
                "street_address1": "Sona Towers",
                "street_address2": "Krishna Nagar Industrial Area",
                "landmark": "Hosur Road",
                "city": "Bengaluru",
                "state": "Karnataka",
                "pincode": "560029",
                "country": "India",
                "lat": 12.935025018880504,
                "lng": 77.6092605236106,
                "contact_details": {
                    "name": "Anupam",
                    "phone_number": "+919535321734"
                }
            }
        },
        "drop_details": {
            "address": {
                "apartment_address": "this is apartment address",
                "street_address1": "BTM Layout",
                "street_address2": "This is My Order ID",
                "landmark": "BTM Layout",
                "city": "Bengaluru",
                "state": "Karnataka",
                "pincode": "560029",
                "country": "India",
                "lat": 12.947146336879577,
                "lng": 77.62102993895199,
                "contact_details": {
                    "name": "Anupam",
                    "phone_number": "+919535321734"
                }
            }
        },
        "additional_comments": "This is a test comment"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
}
/**
 * @param { CreateShopifyOrderShippingActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
