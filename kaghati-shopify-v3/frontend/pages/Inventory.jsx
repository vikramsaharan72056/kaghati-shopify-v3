import { Page } from '@shopify/polaris';
import TableComponent from '../components/TableComponent'

const InventoryPage = () => {
  return (
    <Page
      fullWidth
      compactTitle
      title="Inventory"
      primaryAction={{ content: 'View products' }}
      secondaryActions={[{ content: 'Export' }, { content: 'Import' }]}
    >
      <TableComponent />
    </Page>
  );
};

export default InventoryPage;
