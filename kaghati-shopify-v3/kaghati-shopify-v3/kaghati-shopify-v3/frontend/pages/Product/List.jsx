import { useState, useCallback } from "react";
import {
  useIndexResourceState,
  Page,
  IndexTable,
  Badge,
  Text,
  InlineStack,
  Link,
  Icon,
  BlockStack,
  ChoiceList,
  DropZone,
} from "@shopify/polaris";
import { ViewMajor, RefreshMajor } from "@shopify/polaris-icons";
import TableComponent from "../../components/TableComponent";
import { api } from "../../api";
import { useFindMany } from "@gadgetinc/react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";

const ProductListPage = () => {
  const navigate = useNavigate();
  const NumberOnPage = 50;
  const [cursor, setCursor] = useState({ first: NumberOnPage });
  const [activeExport, setActiveExport] = useState(false);
  const [activeImport, setActiveImport] = useState(false);
  const [selectedExport, setSelectedExport] = useState(["current_page"]);
  const [selectedExportAs, setSelectedExportAs] = useState(["csv_excel"]);

  const handleClose = () => {
    if (activeExport) setActiveExport(false);
    else if (activeImport) setActiveImport(false);
  };

  const handleSelectedExport = useCallback(
    (value) => setSelectedExport(value),
    []
  );

  const handleSelectedExportAs = useCallback(
    (value) => setSelectedExportAs(value),
    []
  );

  const [{ data, fetching, error }] = useFindMany(api.shopifyProduct, {
    ...cursor,
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

  const headings = [
    { title: "" },
    { title: "Product" },
    { title: "Status" },
    { title: "Inventory" },
    { title: "Category" },
    { title: "Vendor" },
    { title: "Refresh" },
  ];

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(data);

  const rowMarkUp = data?.map((product, index) => {
    const capitalizedStatus =
      product.status.charAt(0).toUpperCase() + product.status.slice(1);
    const sumOfInventory = product.variants.edges.reduce((total, edge) => {
      return total + edge.node.inventoryQuantity;
    }, 0);
    return (
      <IndexTable.Row
        id={product?.id}
        key={product?.id}
        selected={selectedResources.includes(product?.id)}
        position={index}
      >
        <IndexTable.Cell>
          <img
            src={product.images.edges[0]?.node?.source}
            alt={"product thumbnail" + product.title}
            width={"40px"}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <InlineStack align="start">
            <Link
              dataPrimaryLink
              removeUnderline
              monochrome
              onClick={() => navigate(`/products/${product?.id}`)}
            >
              <Text as="span" variant="bodyMd">
                {product?.title}
              </Text>
            </Link>
            <Icon
              source={ViewMajor}
              tone="base"
              accessibilityLabel="Preview on Online Store"
            />
          </InlineStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge tone="success">{capitalizedStatus}</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text
            as="span"
            variant="bodyMd"
            tone={sumOfInventory >= 10 ? "" : "critical"}
          >
            {sumOfInventory} in stock{" "}
          </Text>
          <Text as="span" variant="bodyMd">
            for {product?.variants.edges.length} variants
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="p" variant="bodyMd">
            {product?.productType}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="p" variant="bodyMd">
            {product?.vendor}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Icon source={RefreshMajor} tone="base" />
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
      title="Products"
      primaryAction={{
        content: "Add product",
        onClick: () => navigate("/products/new"),
      }}
      secondaryActions={[
        {
          content: "Export",
          onAction: () => setActiveExport(!activeExport),
        },
        {
          content: "Import",
          onAction: () => setActiveImport(true),
        },
      ]}
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
          modalTitle="Export products"
          modalPrimaryButton="Export products"
          modalActive={activeExport}
          handleModalClose={handleClose}
        >
          <BlockStack vertical gap="400">
            <InlineStack>
              <Text variant="bodyLg" as="p">
                This CSV file can update all product information. To update just
                inventory quantities use the{" "}
                <Link url="Example App">CSV file for inventory.</Link>
              </Text>
            </InlineStack>
            <InlineStack>
              <ChoiceList
                title="Export"
                choices={[
                  { label: "Current page", value: "current_page" },
                  { label: "All products", value: "all_products" },
                  {
                    label: "Selected: 0 products",
                    value: "selected_products",
                    disabled: true,
                  },
                  {
                    label: "50+ products matching your search",
                    value: "fifty_plus_products",
                    disabled: true,
                  },
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
            <InlineStack>
              <Text variant="bodyLg" as="p">
                Learn more about{" "}
                <Link url="Example App">exporting products to CSV file</Link> or
                the <Link url="Example App">bulk editor</Link>.
              </Text>
            </InlineStack>
          </BlockStack>
        </ModalComponent>
      )}
      {activeImport && (
        <ModalComponent
          modalTitle="Import customers by CSV"
          modalPrimaryButton="Upload and preview"
          modalActive={activeImport}
          handleModalClose={handleClose}
        >
          <BlockStack vertical>
            <DropZone
              accept=".csv"
              errorOverlayText="File type must be .csv"
              type="file"
              onDrop={() => {}}
            >
              <DropZone.FileUpload />
            </DropZone>
          </BlockStack>
        </ModalComponent>
      )}
    </Page>
  );
};

export default ProductListPage;
