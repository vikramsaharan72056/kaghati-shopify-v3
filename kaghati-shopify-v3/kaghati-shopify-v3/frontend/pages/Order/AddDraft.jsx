import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  InlineGrid,
  BlockStack,
  InlineStack,
  Card,
  Button,
  Icon,
  Link,
  PageActions,
} from "@shopify/polaris";
import {
  EditMajor,
  SearchMinor,
  MobileHorizontalDotsMajor,
} from "@shopify/polaris-icons";
import TextComponent from "../../components/TextComponent";
import TextFieldComponent from "../../components/TextFieldComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useFindMany } from "@gadgetinc/react";
import { api } from "../../api";
import ComboboxComponent from "../../components/ComboboxComponent";
import MultiManualComboboxComponent from "../../components/MultiManualComboboxComponent";
import ModalComponent from "../../components/ModalComponent";
import { useGlobalAction } from "@gadgetinc/react";

const AddDraftOrderPage = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [activeNotes, setActiveNotes] = useState(false);
  const [activeCreateCustomer, setActiveCreateCustomer] = useState(false);
  const [addDraftOrder, setAddDraftOrder] = useState();

  const handleNoteModelClose = () => {
    setActiveNotes(false);
  };

  const handleCreateCustomerModelClose = () => {
    setActiveNotes(false);
  };

  const [
    {
      data: draftOrderData,
      fetching: draftOrderFetching,
      error: draftOrderError,
    },
    draftOrderAdd,
  ] = useGlobalAction(api.createDraftOrder);

  const [
    {
      data: addCustomer,
      fetching: addCustomerFetching,
      error: addCustomerError,
    },
    customerAdd,
  ] = useGlobalAction(api.createCustomer);

  const [
    { data: customerData, fetching: customerFetching, error: customerError },
  ] = useFindMany(api.shopifyCustomer, {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  });

  const selectedCustomerData = async () => {
    const shopifyCustomerRecord = await api.shopifyCustomer.findOne(
      addDraftOrder && addDraftOrder.customer
    );
    setSelectedCustomer(shopifyCustomerRecord);
  };

  const tags = [
    { value: "tag1", label: "Tag 1" },
    { value: "tag2", label: "Tag 2" },
    { value: "tag3", label: "Tag 3" },
    { value: "tag4", label: "Tag 4" },
    { value: "tag5", label: "Tag 5" },
  ];

  const handleValues = ({ name, value }) => {
    setAddDraftOrder({
      ...addDraftOrder,
      [name]: value,
    });
  };

  const handleSubmit = useCallback(async () => {
    const draftData = {
      name: "New Product",
    };
    await draftOrderAdd(draftData);
  }, [addDraftOrder]);

  useEffect(() => {
    if (customerData) {
      const response = customerData.map((item) => {
        return {
          label: `${item.firstName} ${item.lastName}`,
          value: item.id,
        };
      });
      setCustomers(response);
    }
  }, [customerData]);

  useEffect(() => {
    if (addDraftOrder && addDraftOrder.customer) {
      selectedCustomerData(addDraftOrder.customer);
    }
  }, [addDraftOrder]);

  return (
    <Page
      backAction={{ content: "Orders", onAction: () => navigate(-1) }}
      title="Create order"
    >
      <InlineGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="400">
        <BlockStack gap="400">
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <TextComponent
                  textTitle="Products"
                  textVariant="headingSm"
                  textAs="h6"
                />
              </InlineStack>
              <TextFieldComponent textPlaceHolder="Search products">
                <Button size="large">Browse</Button>
              </TextFieldComponent>
            </BlockStack>
          </Card>
        </BlockStack>
        <BlockStack gap={{ xs: "400", md: "200" }}>
          <Card roundedAbove="sm">
            <BlockStack gap="100">
              <InlineStack align="space-between">
                <TextComponent
                  textTitle="Notes"
                  textVariant="headingSm"
                  textAs="h6"
                />
                <ButtonComponent
                  buttonVariant="tertiary"
                  buttonSize="slim"
                  buttonIcon={EditMajor}
                  buttonOnClick={() => setActiveNotes(!activeNotes)}
                />
              </InlineStack>
              <TextComponent
                textVariant="bodyMd"
                textAs="h3"
                textTone="subdued"
              >
                {addDraftOrder && addDraftOrder.notes
                  ? addDraftOrder.notes
                  : "No notes"}
              </TextComponent>
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            {addDraftOrder && addDraftOrder.customer ? (
              <BlockStack gap="100">
                <InlineStack align="space-between">
                  <TextComponent
                    textTitle="Customer"
                    textVariant="headingSm"
                    textAs="h6"
                  />
                  <ButtonComponent
                    buttonVariant="tertiary"
                    buttonSize="slim"
                    buttonIcon={MobileHorizontalDotsMajor}
                  />
                </InlineStack>
                <Link url="Example App" removeUnderline>
                  {selectedCustomer.firstName} {selectedCustomer.lastName}
                </Link>
                <Link url="Example App" removeUnderline>
                  {selectedCustomer.ordersCount} orders
                </Link>
                <TextComponent
                  textAs="p"
                  textVariant="bodyMd"
                  textTone="subdued"
                  textTitle="Customer is tax-exempt"
                ></TextComponent>
                <TextComponent
                  textTitle="Contact information"
                  textVariant="headingSm"
                  textAs="h6"
                />
                <Link url="Example App" removeUnderline>
                  {selectedCustomer.email}
                </Link>
                {selectedCustomer.phone ? (
                  <Link url="Example App" removeUnderline>
                    {selectedCustomer.phone}
                  </Link>
                ) : (
                  <TextComponent
                    textAs="p"
                    textVariant="bodyMd"
                    textTone="subdued"
                    textTitle="No phone number"
                  ></TextComponent>
                )}
                <TextComponent
                  textTitle="Shipping address"
                  textVariant="headingSm"
                  textAs="h6"
                />
                <TextComponent
                  textAs="p"
                  textVariant="bodyLg"
                  textTone="subdued"
                  textTitle="Testig"
                ></TextComponent>
                <TextComponent
                  textTitle="Billing address"
                  textVariant="headingSm"
                  textAs="h6"
                />
                <TextComponent
                  textAs="p"
                  textVariant="bodyLg"
                  textTone="subdued"
                  textTitle="Testig"
                ></TextComponent>
              </BlockStack>
            ) : (
              <BlockStack gap="100">
                <InlineStack align="space-between">
                  <TextComponent
                    textTitle="Customer"
                    textVariant="headingSm"
                    textAs="h6"
                  />
                </InlineStack>
                <ComboboxComponent
                  fieldName="customer"
                  placeHolder="Search or create a customer"
                  comboboxButton={true}
                  chooses={customers}
                  onValueChange={handleValues}
                >
                  <Icon source={SearchMinor} />
                </ComboboxComponent>
              </BlockStack>
            )}
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <TextComponent
                  textTitle="Tags"
                  textVariant="headingSm"
                  textAs="h6"
                />
              </InlineStack>
              <MultiManualComboboxComponent fieldName="tags" chooses={tags} />
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
      {activeNotes && (
        <ModalComponent
          modalTitle="Add Notes"
          modalPrimaryButton="Done"
          modalActive={activeNotes}
          handleModalClose={handleNoteModelClose}
        >
          <BlockStack vertical gap="400">
            <TextFieldComponent
              textLabel="Notes"
              textName="notes"
              textValue={addDraftOrder && addDraftOrder.notes}
              onValueChange={handleValues}
            />
          </BlockStack>
        </ModalComponent>
      )}
      {activeCreateCustomer && (
        <ModalComponent
          modalTitle="Create a new customer"
          modalPrimaryButton="Save customer"
          modalActive={activeCreateCustomer}
          handleModalClose={handleCreateCustomerModelClose}
        >
          <BlockStack vertical gap="400">
            <TextFieldComponent
              textLabel="First name"
              textName="firstName"
              textValue={activeCreateCustomer.firstName}
              onValueChange={handleValues}
            />
          </BlockStack>
        </ModalComponent>
      )}
    </Page>
  );
};

export default AddDraftOrderPage;
