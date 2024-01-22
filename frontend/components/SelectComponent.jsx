import { Select } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";

const SelectComponent = ({
  selectLabel,
  selectOptions,
  fieldName,
  onValueChange,
}) => {
  const [selected, setSelected] = useState();

  const handleSelectChange = useCallback(
    (value) => {
      setSelected(value);
      onValueChange({
        name: fieldName,
        value: value,
      });
    },
    [onValueChange]
  );

  useEffect(() => {
    selectOptions && setSelected(selectOptions[0].value);
  }, []);

  return (
    <Select
      label={selectLabel}
      options={selectOptions}
      onChange={handleSelectChange}
      value={selected}
    />
  );
};

export default SelectComponent;
