import { TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";

const TextFieldComponent = ({
  textLabel,
  textPlaceHolder,
  textName,
  textMultiLine,
  textType,
  textPrefix,
  textLabelHidden,
  textValue,
  onValueChange,
  children,
}) => {
  const [value, setValue] = useState(textValue);

  const handleChange = useCallback(
    (newValue) => {
      setValue(newValue);
      onValueChange && onValueChange({ name: textName, value: newValue });
    },
    [onValueChange]
  );

  return (
    <TextField
      name={textName}
      type={textType}
      prefix={textPrefix}
      label={textLabel}
      value={value}
      placeholder={textPlaceHolder}
      multiline={textMultiLine}
      onChange={handleChange}
      labelHidden={textLabelHidden}
      autoComplete="off"
      connectedRight={children}
    />
  );
};

export default TextFieldComponent;
