import { Checkbox } from '@shopify/polaris';
import { useState, useCallback } from 'react';

const CheckboxComponent = ({ checkBoxLabel, checkBoxChecked }) => {
  const [checked, setChecked] = useState(checkBoxChecked);
  const handleChange = useCallback(
    (newChecked) => setChecked(newChecked),
    [],
  );

  return (
    <Checkbox
      label={checkBoxLabel}
      checked={checked}
      onChange={handleChange}
    />
  );
}

export default CheckboxComponent