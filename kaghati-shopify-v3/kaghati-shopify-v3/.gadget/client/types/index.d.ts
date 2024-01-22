/**
* This is the Gadget API client library for:
*
*   _               _           _   _           _                 _  __                  _____
*  | | ____ _  __ _| |__   __ _| |_(_)      ___| |__   ___  _ __ (_)/ _|_   _     __   _|___ /
*  | |/ / _` |/ _` | '_ \ / _` | __| |_____/ __| '_ \ / _ \| '_ \| | |_| | | |____\ \ / / |_ \
*  |   < (_| | (_| | | | | (_| | |_| |_____\__ \ | | | (_) | |_) | |  _| |_| |_____\ V / ___) |
*  |_|\_\__,_|\__, |_| |_|\__,_|\__|_|     |___/_| |_|\___/| .__/|_|_|  \__, |      \_/ |____/
*             |___/                                        |_|          |___/
*
* Built for environment "Development" at version 8
* API docs: https://docs.gadget.dev/api/kaghati-shopify-v3
* Edit this app here: https://kaghati-shopify-v3.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
