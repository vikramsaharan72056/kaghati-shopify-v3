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
    default?:
      | {
          read?: boolean | undefined;
          action?: boolean | undefined;
        }
      | undefined;
    models?:
      | {
          [x: string]: {
            read?:
              | (
                  | boolean
                  | {
                      filter: string | null;
                    }
                )
              | undefined;
            actions?:
              | {
                  [x: string]:
                    | boolean
                    | {
                        filter: string | null;
                      };
                }
              | undefined;
          };
        }
      | undefined;
    actions?:
      | {
          [x: string]: boolean;
        }
      | undefined;
  };
};

type GadgetSettings = {
  plugins: {
    connections?:
      | {
          shopify?:
            | {
                apiVersion: "2022-01" | "2022-04" | "2022-07" | "2022-10" | "2023-01" | "2023-04" | "2023-07" | "2023-10";
                enabledModels: string[];
                type: "partner" | "admin";
                scopes: string[];
              }
            | undefined;
          openai?:
            | {
                useGadgetManagedKeys: boolean;
              }
            | undefined;
          sentry?:
            | {
                dataSourceName: string;
              }
            | undefined;
        }
      | undefined;
    authentications?:
      | {
          settings: {
            redirectOnSuccessfulSignInPath: string;
            signInPath: string;
            unauthorizedRouteAccess: "redirect" | "show-403-error";
            defaultAuthRoles: string[];
          };
          methods: {
            googleOAuth?:
              | {
                  useGadgetManagedCredential: boolean;
                  callbackPath?: string | undefined;
                  scopes: string[];
                }
              | undefined;
            emailPassword?: boolean | undefined;
          };
        }
      | undefined;
  };
};

type GadgetModel = {
  type: "gadget/model-schema/v1";
  dataKey: string;
  fields: {
    [x: string]:
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "Number";
          default?: number | undefined;
          configuration?:
            | {
                decimals?: number | undefined;
              }
            | undefined;
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          default?: string | undefined;
          type: "String";
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          default?:
            | {
                markdown: string;
              }
            | undefined;
          type: "RichText";
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          default?: string | undefined;
          type: "Email";
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          default?: string | undefined;
          type: "URL";
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          default?: string | undefined;
          type: "Color";
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          default?: string | undefined;
          type: "JSON";
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "Enum";
          default?: (string | string[]) | undefined;
          configuration?:
            | {
                allowMultiple: boolean;
                allowOther: boolean;
                options: string[];
              }
            | undefined;
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "Boolean";
          default?: boolean | undefined;
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "DateTime";
          default?: string | undefined;
          configuration?:
            | {
                includeTime: boolean;
              }
            | undefined;
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "Vector";
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "File";
          configuration?:
            | {
                private: boolean;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "EncryptedString";
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "Computed";
          configuration?:
            | {
                sourceFilePath: string | null;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "BelongsTo";
          configuration?:
            | {
                relatedModel: string | null;
              }
            | undefined;
          shopifyMetafieldConfiguration?:
            | {
                privateMetafield: boolean;
                namespace: string;
                key: string;
                metafieldType: string;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          configuration?:
            | {
                relatedModel: string | null;
                inverseField: string | null;
              }
            | undefined;
          type: "HasOne";
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          configuration?:
            | {
                relatedModel: string | null;
                inverseField: string | null;
              }
            | undefined;
          type: "HasMany";
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "HasManyThrough";
          configuration?:
            | {
                relatedModel: string | null;
                inverseField: string | null;
                joinModel: string | null;
                inverseJoinModelField: string | null;
                inverseRelatedModelField: string | null;
              }
            | undefined;
        }
      | {
          dataKey: string;
          validations?:
            | {
                type: string;
                configuration?:
                  | {
                      [x: string]: any;
                    }
                  | undefined;
              }[]
            | undefined;
          type: "Password";
        }
      | {
          dataKey: string;
          type: "RoleAssignments";
          default?: string[] | undefined;
        };
  };
  shopifyFields?: string[] | undefined;
};

export type { GadgetAccessControl, GadgetSettings, GadgetModel };
