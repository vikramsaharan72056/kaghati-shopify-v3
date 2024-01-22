import { Page } from '@shopify/polaris';
import TableComponent from '../components/TableComponent'

const ReportsPage = () => {
  return (
    <Page
      fullWidth
      compactTitle
      title="Reports"
    >
      <TableComponent />
    </Page>
  );
};

export default ReportsPage;
