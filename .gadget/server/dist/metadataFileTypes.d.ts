/**
A map of roles with the role key as the map key.

Example:
```
{
  "signed-in": {
    name: "signed-in",
    default: {
      read: true,
      action: true,
    },
    models: {
      user: {
        read: {
          filter: "user/filters/tenant.gelly",
        },
        actions: {
          changePassword: {
            filter: "user/filters/tenant.gelly",
          },
          signOut: {
            filter: "user/filters/tenant.gelly",
          },
        },
      },
    },
  }
}
```
 */
type GadgetAccessControl = {
    [x: string]: {
        name: string;
        default?: {
            read?: boolean | undefined;
            action?: boolean | undefined;
        } | undefined;
        models?: {
            [x: string]: {
                read?: (boolean | {
                    filter: string | null;
                }) | undefined;
                actions?: {
                    [x: string]: boolean | {
                        filter: string | null;
                    };
                } | undefined;
            };
        } | undefined;
        actions?: {
            [x: string]: boolean;
        } | undefined;
    };
};
type GadgetSettings = {
    type: "gadget/settings/v1";
    plugins: {
        connections?: {
            shopify?: {
                apiVersion: "2022-01" | "2022-04" | "2022-07" | "2022-10" | "2023-01" | "2023-04" | "2023-07" | "2023-10" | "2024-01";
                enabledModels: string[];
                type: "partner" | "admin";
                scopes: string[];
            } | undefined;
            openai?: {
                useGadgetManagedKeys: boolean;
            } | undefined;
            sentry?: {
                dataSourceName: string;
            } | undefined;
        } | undefined;
        authentications?: {
            settings: {
                redirectOnSignIn: string;
                signInPath: string;
                unauthorizedUserRedirect: "redirect" | "show-403-error";
                accessControlForSignedInUsers: string[];
            };
            methods: {
                googleOAuth?: ({
                    useGadgetManagedCredential: true;
                } | {
                    useGadgetManagedCredential: false;
                    offlineAccess: boolean;
                    scopes: string[];
                }) | undefined;
                emailPassword?: boolean | undefined;
            };
        } | undefined;
    };
};
type GadgetModel = {
    type: "gadget/model-schema/v1";
    storageKey: string;
    fields: {
        [x: string]: {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "Number";
            default?: number | undefined;
            configuration?: {
                decimals?: number | undefined;
            } | undefined;
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            default?: string | undefined;
            type: "String";
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            default?: {
                markdown: string;
            } | undefined;
            type: "RichText";
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            default?: string | undefined;
            type: "Email";
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            default?: string | undefined;
            type: "URL";
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            default?: string | undefined;
            type: "Color";
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            default?: string | undefined;
            type: "JSON";
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "Enum";
            default?: (string | string[]) | undefined;
            configuration?: {
                allowMultiple: boolean;
                allowOther: boolean;
                options: string[];
            } | undefined;
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "Boolean";
            default?: boolean | undefined;
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "DateTime";
            default?: string | undefined;
            configuration?: {
                includeTime: boolean;
            } | undefined;
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "Vector";
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "File";
            configuration?: {
                private: boolean;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "EncryptedString";
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "Computed";
            configuration?: {
                sourceFilePath: string | null;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "BelongsTo";
            configuration?: {
                relatedModel: string | null;
            } | undefined;
            shopifyMetafieldConfiguration?: {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            configuration?: {
                relatedModel: string | null;
                inverseField: string | null;
            } | undefined;
            type: "HasOne";
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            configuration?: {
                relatedModel: string | null;
                inverseField: string | null;
            } | undefined;
            type: "HasMany";
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "HasManyThrough";
            configuration?: {
                relatedModel: string | null;
                inverseField: string | null;
                joinModel: string | null;
                inverseJoinModelField: string | null;
                inverseRelatedModelField: string | null;
            } | undefined;
        } | {
            storageKey: string;
            validations?: {
                type: string;
                configuration?: {
                    [x: string]: any;
                } | undefined;
            }[] | undefined;
            type: "Password";
        } | {
            storageKey: string;
            type: "RoleAssignments";
            default?: string[] | undefined;
        } | {
            storageKey: string;
            /** @deprecated This field type is deprecated. */
            type: "Money";
            default?: {
                amount: number;
            } | undefined;
            configuration?: {
                currency: string;
            } | undefined;
        } | {
            storageKey: string;
            /** @deprecated This field type is deprecated. */
            type: "RecordState";
        };
    };
    shopifyFields?: string[] | undefined;
};
export type { GadgetAccessControl, GadgetSettings, GadgetModel };
