import { Page } from '@shopify/polaris';
import TableComponent from '../components/TableComponent'

const SettingsPage = () => {
  return (
    <Page
      fullWidth
      compactTitle
      title="Settings"
    >
      <TableComponent />
    </Page>
  );
};

export default SettingsPage;
