import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  InlineGrid,
  BlockStack,
  InlineStack,
  Card,
  Text,
  FormLayout,
  Link,
  Divider,
  PageActions,
  Icon,
  Grid,
} from "@shopify/polaris";
import TextComponent from "../../components/TextComponent";
import TextFieldComponent from "../../components/TextFieldComponent";
import DropZoneComponent from "../../components/DropZoneComponent";
import MultiManualComboboxComponent from "../../components/MultiManualComboboxComponent";
import CheckboxComponent from "../../components/CheckboxComponent";
import ListComponent from "../../components/ListComponent";
import ComboboxComponent from "../../components/ComboboxComponent";
import SelectComponent from "../../components/SelectComponent";
import ButtonComponent from "../../components/ButtonComponent";
import PopoverComponent from "../../components/ButtonComponent";
import {
  PlusMinor,
  MobileVerticalDotsMajor,
  SearchMinor,
  DragHandleMinor,
} from "@shopify/polaris-icons";
import { api } from "../../api";
import { useGlobalAction } from "@gadgetinc/react";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [buttonClick, setButtonClick] = useState(false);
  const [addProduct, setAddProduct] = useState();

  const [{ data, fetching, error }, productAdd] = useGlobalAction(
    api.createProduct
  );

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Draft", value: "draft" },
  ];

  const themeOptions = [{ label: "Default product", value: "default-product" }];

  const WeightOptions = [
    { label: "kg", value: "kg" },
    { label: "lb", value: "lb" },
    { label: "oz", value: "oz" },
    { label: "g", value: "g" },
  ];

  const productKeywordOrCode = [
    { value: "productKeywordOrCode1", label: "Product Keyword Or Code 1" },
    { value: "productKeywordOrCode2", label: "Product Keyword Or Code 2" },
    { value: "productKeywordOrCode3", label: "Product Keyword Or Code 3" },
    { value: "productKeywordOrCode4", label: "Product Keyword Or Code 4" },
    { value: "productKeywordOrCode5", label: "Product Keyword Or Code 5" },
  ];

  const productCategory = [
    { value: "productCategory1", label: "Product Category 1" },
    { value: "productCategory2", label: "Product Category 2" },
    { value: "productCategory3", label: "Product Category 3" },
    { value: "productCategory4", label: "Product Category 4" },
    { value: "productCategory5", label: "Product Category 5" },
  ];

  const productType = [
    { value: "productType1", label: "Product Type 1" },
    { value: "productType2", label: "Product Type 2" },
    { value: "productType3", label: "Product Type 3" },
    { value: "productType4", label: "Product Type 4" },
    { value: "productType5", label: "Product Type 5" },
  ];

  const vendors = [
    { value: "vendor1", label: "Vendor 1" },
    { value: "vendor2", label: "Vendor 2" },
    { value: "vendor3", label: "Vendor 3" },
    { value: "vendor4", label: "Vendor 4" },
    { value: "vendor5", label: "Vendor 5" },
  ];

  const collections = [
    { value: "collection1", label: "Collection 1" },
    { value: "collection2", label: "Collection 2" },
    { value: "collection3", label: "Collection 3" },
    { value: "collection4", label: "Collection 4" },
    { value: "collection5", label: "Collection 5" },
  ];

  const tags = [
    { value: "tag1", label: "Tag 1" },
    { value: "tag2", label: "Tag 2" },
    { value: "tag3", label: "Tag 3" },
    { value: "tag4", label: "Tag 4" },
    { value: "tag5", label: "Tag 5" },
  ];

  const salesChannelsList = [
    {
      title: "Online Store",
      description: "",
    },
    {
      title: "Shopify GraphiQL App",
      description: "",
    },
    {
      title: "Point of Sale",
      description: (
        <TextComponent textVariant="bodyLg" textAs="p" tone="subdued">
          Point of Sale has not been set up. Finish the remaining steps to start
          selling in person. <Link url="Example App">Learn more</Link>
        </TextComponent>
      ),
    },
  ];

  const marketsList = [
    {
      title: "India and International",
      description: "",
    },
  ];

  const handleValues = ({ name, value }) => {
    let finalValue = [];
    if (name === "images") {
      finalValue = value.map((image, index) => {
        console.log(`${image.lastModified}${index}`);
        return {
          create: {
            id: `${image.lastModified}${index}`,
            alt: image.name.split(".")[0],
            source: image.name,
            shopifyCreatedAt: image.lastModifiedDate,
            shopifyUpdatedAt: image.lastModifiedDate,
          },
        };
      });
    }
    setAddProduct({
      ...addProduct,
      [name]: name === "images" ? finalValue : value,
    });
  };

  const handleSubmit = useCallback(async () => {
    const productData = {
      title: "New Product",
    };
    await productAdd({ title: "New Product" });
  }, [addProduct]);

  return (
    <Page
      backAction={{ content: "Products", onAction: () => navigate(-1) }}
      title="Add product"
    >
      <InlineGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="400">
        <BlockStack gap="400">
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextFieldComponent
                textLabel="Title"
                textPlaceHolder="Short sleeve t-shirt"
                textName="title"
                onValueChange={handleValues}
              />
              <TextFieldComponent
                textLabel="Description"
                textPlaceHolder="Description"
                textName="body"
                textMultiLine={4}
                onValueChange={handleValues}
              />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <Text variant="headingSm" as="h6">
                Media
              </Text>
              <DropZoneComponent
                DropZoneName="images"
                onValueChange={handleValues}
              />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextComponent
                textTitle="Pricing"
                textVariant="headingSm"
                textAs="h6"
              />
              <FormLayout>
                <FormLayout.Group condensed>
                  <TextFieldComponent
                    textLabel="Price"
                    textPlaceHolder="0.00"
                    textType="number"
                    textPrefix="$"
                  />
                  <TextFieldComponent
                    textLabel="Compare-at price"
                    textPlaceHolder="0.00"
                    textType="number"
                    textPrefix="$"
                  />
                </FormLayout.Group>
              </FormLayout>
              <CheckboxComponent
                checkBoxLabel="Charge tax on this product"
                checkBoxChecked={true}
              />
              <FormLayout>
                <FormLayout.Group condensed>
                  <TextFieldComponent
                    textLabel="Cost per item"
                    textPlaceHolder="0.00"
                    textType="number"
                    textPrefix="$"
                  />
                  <TextFieldComponent textLabel="Profit" textPlaceHolder="--" />
                  <TextFieldComponent textLabel="Margin" textPlaceHolder="--" />
                </FormLayout.Group>
              </FormLayout>
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextComponent
                textTitle="Inventory"
                textVariant="headingSm"
                textAs="h6"
              />
              <CheckboxComponent
                checkBoxLabel="Track quantity"
                checkBoxChecked={true}
              />
              <TextComponent
                textTitle="Quantity"
                textVariant="headingSm"
                textAs="h6"
              />
              <Divider />
              <InlineStack align="space-between">
                <TextComponent
                  textTitle="Shop location"
                  textVariant="bodyMd"
                  textAs="p"
                />
                <TextFieldComponent
                  textLabel="Shop location"
                  textLabelHidden={true}
                  textType="number"
                  textPlaceHolder="0"
                />
              </InlineStack>
              <CheckboxComponent
                checkBoxLabel="Continue selling when out of stock"
                checkBoxChecked={false}
              />
              <TextComponent textVariant="bodyLg" textAs="p">
                This won't affect{" "}
                <Link url="Example App" removeUnderline>
                  Shopify POS
                </Link>
                . Staff will see a warning, but can complete sales when
                available inventory reaches zero and below.
              </TextComponent>
              <CheckboxComponent
                checkBoxLabel="This product has a SKU or barcode"
                checkBoxChecked={false}
              />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextComponent
                textTitle="Shipping"
                textVariant="headingSm"
                textAs="h6"
              />
              <CheckboxComponent
                checkBoxLabel="This is a physical product"
                checkBoxChecked={true}
              />
              <TextFieldComponent
                textLabel="Weight"
                textType="number"
                textPlaceHolder="0.0"
              >
                <SelectComponent
                  fieldName="weight"
                  selectOptions={WeightOptions}
                  onValueChange={handleValues}
                />
              </TextFieldComponent>
              <Divider />
              <SelectComponent
                fieldName="countryOrigin"
                selectLabel="Country/Region of origin"
                selectOptions={themeOptions}
                onValueChange={handleValues}
              />
              <TextComponent
                textTitle="Harmonized System (HS) code"
                textVariant="bodyMd"
                textAs="p"
              />
              <ComboboxComponent
                fieldName="productKeywordOrCode"
                placeHolder="Search by product keyword or code"
                chooses={productKeywordOrCode}
                onValueChange={handleValues}
              >
                <Icon source={SearchMinor} />
              </ComboboxComponent>
              <TextComponent textVariant="bodyLg" textAs="p">
                Learn more about <Link url="Example App">adding HS codes</Link>
              </TextComponent>
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextComponent
                textTitle="Variants"
                textVariant="headingSm"
                textAs="h6"
              />
              <Icon source={DragHandleMinor} tone="base" />
              <SelectComponent
                fieldName="theme"
                selectLabel="Option name"
                selectOptions={themeOptions}
                onValueChange={handleValues}
              />
              <TextFieldComponent
                textLabel="Option values"
                textPlaceHolder="Medium"
              />
              <ButtonComponent buttonTitle="Done" />
              <Divider />
              <ButtonComponent
                buttonTitle="Add options like size or color"
                buttonVariant="plain"
                buttonAlign="left"
                buttonIcon={PlusMinor}
              />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <TextComponent
                  textTitle="Search engine listing"
                  textVariant="headingSm"
                  textAs="h6"
                />
                <ButtonComponent
                  buttonTitle="Edit"
                  buttonVariant="plain"
                  buttonAlign="right"
                />
              </InlineStack>
              <TextComponent
                textTitle="Add a title and description to see how this product might appear in a search engine listing"
                textVariant="bodyMd"
                textAs="p"
              />
            </BlockStack>
          </Card>
        </BlockStack>
        <BlockStack gap={{ xs: "400", md: "200" }}>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextComponent
                textTitle="Status"
                textVariant="headingSm"
                textAs="h6"
              />
              <SelectComponent
                fieldName="status"
                selectOptions={statusOptions}
                onValueChange={handleValues}
              />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <TextComponent
                  textTitle="Publishing"
                  textVariant="headingMd"
                  textAs="h2"
                />
                <ButtonComponent buttonVariant="plain" buttonAlign="right">
                  <Icon
                    source={MobileVerticalDotsMajor}
                    tone="base"
                    onClick={() => setButtonClick(!buttonClick)}
                  />
                </ButtonComponent>
              </InlineStack>
              {buttonClick && <PopoverComponent popoverAction={buttonClick} />}
              <TextComponent
                textTitle="Sales channels"
                textVariant="headingSm"
                textAs="h6"
              />
              <ListComponent listData={salesChannelsList} />
              <TextComponent
                textTitle="Markets"
                textVariant="headingSm"
                textAs="h6"
              />
              <ListComponent listData={marketsList} />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextComponent
                textTitle="Product organization"
                textVariant="headingSm"
                textAs="h6"
              />
              <TextComponent
                textTitle="Product category"
                textVariant="bodyMd"
                textAs="p"
              />
              <ComboboxComponent
                fieldName="productCategory"
                placeHolder="Search"
                chooses={productCategory}
                onValueChange={handleValues}
              />
              <TextComponent textVariant="bodyLg" textAs="p">
                Determines US <Link url="Example App">tax rates</Link>
              </TextComponent>
              <TextComponent
                textTitle="Product type"
                textVariant="bodyMd"
                textAs="p"
              />
              <ComboboxComponent
                fieldName="productType"
                chooses={productType}
                onValueChange={handleValues}
              />
              <TextComponent
                textTitle="Vendor"
                textVariant="bodyMd"
                textAs="p"
              />
              <ComboboxComponent
                fieldName="vendor"
                chooses={vendors}
                onValueChange={handleValues}
              />
              <TextComponent
                textTitle="Collections"
                textVariant="bodyMd"
                textAs="p"
              />
              <MultiManualComboboxComponent
                fieldName="collections"
                chooses={collections}
                onValueChange={handleValues}
              />
              <TextComponent textTitle="Tags" textVariant="bodyMd" textAs="p" />
              <MultiManualComboboxComponent
                fieldName="tags"
                chooses={tags}
                onValueChange={handleValues}
              />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <SelectComponent
                fieldName="themeTemplate"
                selectLabel="Theme template"
                selectOptions={themeOptions}
                onValueChange={handleValues}
              />
            </BlockStack>
          </Card>
        </BlockStack>
      </InlineGrid>
      <PageActions
        primaryAction={{
          content: "Save",
          onAction: () => handleSubmit(),
        }}
      />
    </Page>
  );
};

export default AddProductPage;
