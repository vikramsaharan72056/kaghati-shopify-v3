import { useState, useCallback } from "react";
import {
  useIndexResourceState,
  Page,
  IndexTable,
  Badge,
  Text,
  InlineStack,
  BlockStack,
  Link,
  ChoiceList,
} from "@shopify/polaris";
import { PlusMinor } from "@shopify/polaris-icons";
import TableComponent from "../../components/TableComponent";
import { api } from "../../api";
import { useFindMany } from "@gadgetinc/react";
import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../util/commonFunctions";
import ModalComponent from "../../components/ModalComponent";

const OrderListPage = () => {
  const navigate = useNavigate();
  const NumberOnPage = 50;
  const [cursor, setCursor] = useState({ first: NumberOnPage });
  const [activeExport, setActiveExport] = useState(false);
  const [selectedExport, setSelectedExport] = useState(["current_page"]);
  const [selectedExportAs, setSelectedExportAs] = useState(["csv_excel"]);

  const handleClose = () => {
    setActiveExport(false);
  };

  const handleSelectedExport = useCallback(
    (value) => setSelectedExport(value),
    []
  );

  const handleSelectedExportAs = useCallback(
    (value) => setSelectedExportAs(value),
    []
  );

  const [{ data, fetching, error }] = useFindMany(api.shopifyOrder, {
    ...cursor,
    select: {
      id: true,
      name: true,
      shopifyCreatedAt: true,
      customer: {
        firstName: true,
        lastName: true,
      },
      lineItems: {
        edges: {
          node: {
            name: true,
          },
        },
      },
      fulfillmentOrders: {
        edges: {
          node: {
            status: true,
            deliveryMethod: true,
          },
        },
      },
      currentTotalPrice: true,
      currency: true,
      financialStatus: true,
      fulfillmentStatus: true,
      tags: true,
    },
    sort: { number: "Descending" },
  });

  const headings = [
    { title: "Order" },
    { title: "Date" },
    { title: "Customer" },
    { title: "Channel" },
    { title: "Total" },
    { title: "Payment status" },
    { title: "Fulfillment status" },
    { title: "Items" },
    { title: "Delivery status" },
    { title: "Delivery method" },
    { title: "Tags" },
  ];

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(data);

  const rowMarkUp = data?.map((order, index) => {
    const convertDate = dateFormatter.format(order?.shopifyCreatedAt);
    const date = convertDate.replace("PM", "pm").replace("AM", "am");
    return (
      <IndexTable.Row
        id={order?.id}
        key={order?.id}
        selected={selectedResources.includes(order?.id)}
        position={index}
      >
        <IndexTable.Cell>
          <Link
            dataPrimaryLink
            removeUnderline
            monochrome
            onClick={() => navigate(`/orders/${order?.id}`)}
          >
            <Text as="h6" variant="headingSm">
              {order?.name}
            </Text>
          </Link>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <InlineStack align="start">
            <Text as="p" variant="bodyMd">
              {date}
            </Text>
          </InlineStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="p" variant="bodyMd">
            {order?.customer.firstName} {order?.customer.lastName}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="p" variant="bodyMd"></Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="p" variant="bodyMd">
            {order?.currentTotalPrice}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            tone={order?.financialStatus === "pending" ? "warning" : ""}
            progress={
              order?.financialStatus === "pending" ? "incomplete" : "complete"
            }
          >
            {order?.financialStatus === "pending" ? "Payment pending" : "Paid"}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            tone={order?.fulfillmentStatus === null ? "attention" : ""}
            progress={
              order?.fulfillmentStatus === null ? "incomplete" : "complete"
            }
          >
            {order?.fulfillmentStatus === null ? "Unfulfilled" : "Fulfilled"}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="p" variant="bodyMd">
            {order?.lineItems.edges.length}{" "}
            {order?.lineItems.edges.length > 1 ? "items" : "item"}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            tone={
              order?.fulfillmentOrders.edges[0]?.node?.status === "open"
                ? "warning"
                : ""
            }
          >
            {order?.fulfillmentOrders.edges[0]?.node?.status === "open"
              ? "Open"
              : "Close"}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            tone={
              order?.fulfillmentOrders.edges[0]?.node?.deliveryMethod
                .method_type === "shipping"
                ? "attention"
                : "warning"
            }
          >
            {order?.fulfillmentOrders.edges[0]?.node?.deliveryMethod
              .method_type === "shipping"
              ? "Shipping"
              : "Non shipping"}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <InlineStack gap="100">
            {order.tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </InlineStack>
        </IndexTable.Cell>
      </IndexTable.Row>
    );
  });

  const sortOptions = [
    { label: "Product", value: "product asc", directionLabel: "Ascending" },
    { label: "Product", value: "product desc", directionLabel: "Descending" },
    { label: "Status", value: "tone asc", directionLabel: "A-Z" },
    { label: "Status", value: "tone desc", directionLabel: "Z-A" },
    { label: "Type", value: "type asc", directionLabel: "A-Z" },
    { label: "Type", value: "type desc", directionLabel: "Z-A" },
    { label: "Vendor", value: "vendor asc", directionLabel: "Ascending" },
    { label: "Vendor", value: "vendor desc", directionLabel: "Descending" },
  ];

  return (
    <Page
      fullWidth
      compactTitle
      title="Orders"
      primaryAction={{
        content: "Create order",
        icon: PlusMinor,
        onClick: () => navigate("/draft_orders/new"),
      }}
      secondaryActions={[
        {
          content: "Export",
          onAction: () => setActiveExport(!activeExport),
        },
      ]}
      pagination={{
        hasNext: true,
      }}
    >
      <TableComponent
        tableData={data}
        tableHeadings={headings}
        tableRowMarkUp={rowMarkUp}
        tableSortOptions={sortOptions}
        tableSetCursor={setCursor}
        tableNumberOnPage={NumberOnPage}
      />
      {activeExport && (
        <ModalComponent
          modalTitle="Export orders"
          modalPrimaryButton="Export orders"
          modalSecondaryButton="Export transaction histories"
          modalActive={activeExport}
          handleModalClose={handleClose}
        >
          <BlockStack vertical gap="400">
            <InlineStack>
              <ChoiceList
                title="Export"
                choices={[
                  { label: "Current page", value: "current_page" },
                  { label: "All orders", value: "all_orders" },
                  {
                    label: "Selected: 0 orders",
                    value: "selected_orders",
                    disabled: true,
                  },
                  {
                    label: "3 orders matching your search",
                    value: "three_orders",
                    disabled: true,
                  },
                  { label: "Orders by date", value: "orders_by_date" },
                ]}
                selected={selectedExport}
                onChange={handleSelectedExport}
              />
            </InlineStack>
            <InlineStack>
              <ChoiceList
                title="Export as"
                choices={[
                  {
                    label:
                      "CSV for Excel, Numbers, or other spreadsheet programs",
                    value: "csv_excel",
                  },
                  { label: "Plain CSV file", value: "csv_plain" },
                ]}
                selected={selectedExportAs}
                onChange={handleSelectedExportAs}
              />
            </InlineStack>
          </BlockStack>
        </ModalComponent>
      )}
    </Page>
  );
};

export default OrderListPage;
