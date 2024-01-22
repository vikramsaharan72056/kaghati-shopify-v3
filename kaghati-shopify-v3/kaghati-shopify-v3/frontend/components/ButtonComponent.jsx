import { Button } from "@shopify/polaris";

const ButtonComponent = ({
  buttonTitle,
  buttonVariant,
  buttonAlign,
  buttonIcon,
  buttonSize,
  buttonTone,
  buttonOnClick,
  children,
}) => {
  return (
    <Button
      variant={buttonVariant}
      textAlign={buttonAlign}
      tone={buttonTone}
      icon={buttonIcon}
      size={buttonSize}
      onClick={buttonOnClick}
    >
      {buttonTitle} {children}
    </Button>
  );
};

export default ButtonComponent;
