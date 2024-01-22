import { Listbox, Combobox, Box } from "@shopify/polaris";
import { useState, useCallback, useMemo, useEffect } from "react";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import ButtonComponent from "./ButtonComponent";

const ComboboxComponent = ({
  fieldName,
  placeHolder,
  chooses,
  comboboxButton,
  onValueChange,
  children,
}) => {
  const deselectedOptions = useMemo(() => chooses, [chooses]);

  const [selectedOption, setSelectedOption] = useState();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState();

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
      const matchedOption = chooses.find((option) => {
        return option.value.match(selected);
      });
      setSelectedOption(selected);
      onValueChange({
        name: fieldName,
        value: selected,
      });
      setInputValue((matchedOption && matchedOption.label) || "");
    },
    [chooses, onValueChange]
  );

  const optionsMarkup =
    options && options.length > 0
      ? options.map((option) => {
          const { label, email, value } = option;

          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selectedOption === value}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  useEffect(() => {
    setOptions(chooses);
  }, [chooses]);

  return (
    <Box>
      <Combobox
        activator={
          <Combobox.TextField
            prefix={children}
            onChange={updateText}
            labelHidden
            value={inputValue}
            placeholder={placeHolder}
            autoComplete="off"
          />
        }
      >
        {comboboxButton && (
          <Listbox>
            <ButtonComponent
              buttonVariant="tertiary"
              buttonTitle="Create a new customer"
              buttonIcon={CirclePlusMinor}
              buttonAlign="center"
              buttonTone="critical"
            ></ButtonComponent>
          </Listbox>
        )}
        {options && options.length > 0 ? (
          <Listbox onSelect={updateSelection}>{optionsMarkup}</Listbox>
        ) : null}
      </Combobox>
    </Box>
  );
};

export default ComboboxComponent;
