import { List, Text } from '@shopify/polaris';

const ListComponent = ({ listData }) => {
  return (
    <List type="bullet">
      {listData.map((item, index) =>
        <List.Item key={index}>
          <Text variant="bodyLg" as="p">{item.title}</Text>
          {item.description && item.description}
        </List.Item>
      )}
    </List>
  );
}

export default ListComponent