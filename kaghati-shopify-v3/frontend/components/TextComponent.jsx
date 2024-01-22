import { Text } from "@shopify/polaris";

const TextComponent = ({
  textTitle,
  textVariant,
  textAs,
  textTone,
  textFontWeight,
  children,
}) => {
  return (
    <Text
      variant={textVariant}
      as={textAs}
      tone={textTone}
      fontWeight={textFontWeight}
    >
      {textTitle} {children}
    </Text>
  );
};

export default TextComponent;
