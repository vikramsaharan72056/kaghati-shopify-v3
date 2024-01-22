import { Popover, ActionList } from '@shopify/polaris';
import { useState, useCallback } from 'react';

const PopoverComponent = ({ popoverAction }) => {
  const [popoverActive, setPopoverActive] = useState(popoverAction);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  return (
    <div style={{ height: '250px' }}>
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[{ content: 'Import' }, { content: 'Export' }]}
        />
      </Popover>
    </div>
  );
}

export default PopoverComponent