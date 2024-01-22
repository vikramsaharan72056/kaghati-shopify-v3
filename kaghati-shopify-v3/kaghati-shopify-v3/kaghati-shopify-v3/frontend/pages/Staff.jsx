import { Page } from '@shopify/polaris';
import TableComponent from '../components/TableComponent'

const StaffPage = () => {
  return (
    <Page
      fullWidth
      compactTitle
      title="Staff"
    >
      <TableComponent />
    </Page>
  );
};

export default StaffPage;
