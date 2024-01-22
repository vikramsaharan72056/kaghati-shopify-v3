import { Banner, BlockStack, Card, Layout, Link, Page, Text,InlineStack,Icon } from '@shopify/polaris'
import React, { useEffect,useState } from 'react'
import { StoreMajor } from "@shopify/polaris-icons";
import {api} from "../api";
import { useFindFirst, useQuery, useUser,useFindMany, useFindOne } from '@gadgetinc/react';






const Shop = () => {
    const [cursor, setCursor] = useState({})
    const [{ data, fetching, error }] = useFindMany(api.shopifyProduct, {
        select: {
          id: true,
          title: true,
          productType: true,
          vendor: true,
          status: true,
          images: {
            edges: {
              node: {
                source: true,
              },
            },
          },
          variants: {
            edges: {
              node: {
                inventoryQuantity: true,
              },
            },
          },
        },
        sort: { title: "Ascending" },
      });
    console.log(data);
    // const [{ data, fetching, error}] = useFindFirst(api.shopifyProduct);
    // const [{ data:metaData, fetching:fetchingGadgetMeta}] = useQuery({
    //     query:gadgetMetaQuery,
    // });
   
    
  return (
    <Page title= "App">
        <Layout.Section>
            <Banner title={`${process.env.GADGET_PUBLIC_APP_SLUG} is successfully connected to Shopify`} tone='success'/>
        </Layout.Section>
        <Layout.Section>
            <Card>
                <div style={{width:"100%"}}>
                    <img 
                    src="https://assets.gadget.dev/assets/icon.svg"
                    style={{
                        margin:"14px auto",
                        height:"56px"
                    }}
                    />
                    <BlockStack gap="200">
                        <Text variant="headingLg" as ="h1" alignment="center">
                            This page is powered by{" "}
                            <Link url={"/"}>
                                <code 
                                style={{
                                    fontFamily:"SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
                                    fontSize:"0.95em",
                                }}
                                >Shop.jsx</code>
                            </Link>
                        </Text>
                        <Text variant="bodyMd" as="p" alignment="center">
                Start building your UI by editing file hosted on Gadget.
              </Text>
                    </BlockStack>
                </div>
            </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h6">
                Example Shop Query from your Gadget Database
              </Text>
              <div
                style={{
                  border: "1px solid #e1e3e5",
                  padding: "12px",
                  borderRadius: "0.25rem",
                }}
              >
                
              </div>
            </BlockStack>
          </Card>
        </Layout.Section>
    </Page>
  )
}

export default Shop