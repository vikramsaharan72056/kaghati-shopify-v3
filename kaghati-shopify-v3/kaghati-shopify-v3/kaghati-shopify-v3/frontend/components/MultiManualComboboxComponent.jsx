import {
  Tag,
  Listbox,
  Combobox,
  InlineStack,
  AutoSelection,
  Box,
} from "@shopify/polaris";
import { useState, useCallback, useMemo } from "react";

function MultiManualComboboxComponent({
  fieldName,
  placeHolder,
  chooses,
  onValueChange,
}) {
  const deselectedOptions = useMemo(() => chooses, []);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex)
      );
      setOptions(resultOptions);
    },
    [deselectedOptions]
  );

  const updateSelection = useCallback(
    (selected) => {
      if (chooses.includes(selected)) {
        setSelectedOptions(chooses.filter((option) => option !== selected));
        onValueChange({
          name: fieldName,
          value: selectedOptions.filter((option) => option !== selected),
        });
      } else {
        setSelectedOptions([...selectedOptions, selected]);
        onValueChange({
          name: fieldName,
          value: [...selectedOptions, selected],
        });
      }
      updateText("");
    },
    [chooses, onValueChange]
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions]
  );

  const tagsMarkup = selectedOptions.map((option) => (
    <Tag key={`option-${option}`} onRemove={removeTag(option)}>
      {option}
    </Tag>
  ));

  const optionsMarkup =
    options && options.length > 0
      ? options.map((option) => {
          const { label, value } = option;

          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selectedOptions.includes(value)}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  return (
    <Box>
      <Combobox
        allowMultiple
        activator={
          <Combobox.TextField
            onChange={updateText}
            labelHidden
            value={inputValue}
            placeholder={placeHolder}
            autoComplete="off"
          />
        }
      >
        {optionsMarkup ? (
          <Listbox
            autoSelection={AutoSelection.None}
            onSelect={updateSelection}
          >
            {optionsMarkup}
          </Listbox>
        ) : null}
      </Combobox>
      <InlineStack gap="200">{tagsMarkup}</InlineStack>
    </Box>
  );
}

export default MultiManualComboboxComponent;
