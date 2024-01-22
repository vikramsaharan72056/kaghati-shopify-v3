import { Page } from '@shopify/polaris';
import TableComponent from '../components/TableComponent'

const StoresPage = () => {
  return (
    <Page
      fullWidth
      compactTitle
      title="Stores"
    >
      <TableComponent />
    </Page>
  );
};

export default StoresPage;
