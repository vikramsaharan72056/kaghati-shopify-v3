import { Page } from '@shopify/polaris';
import TableComponent from '../components/TableComponent'

const AssignOrdersPage = () => {
  return (
    <Page
      fullWidth
      compactTitle
      title="Assign Orders"
    >
      <TableComponent />
    </Page>
  );
};

export default AssignOrdersPage;
