import { Modal, Frame } from "@shopify/polaris";

const ModalComponent = ({
  modalTitle,
  modalPrimaryButton,
  modalSecondaryButton,
  modalActive,
  handleModalClose,
  children,
}) => {
  return (
    <Frame>
      <Modal
        open={modalActive}
        onClose={handleModalClose}
        title={modalTitle}
        primaryAction={{
          content: modalPrimaryButton,
          onAction: handleModalClose,
        }}
        secondaryActions={
          modalSecondaryButton
            ? [
                {
                  content: "Cancel",
                  onAction: handleModalClose,
                },
                {
                  content: modalSecondaryButton,
                  onAction: handleModalClose,
                },
              ]
            : [
                {
                  content: "Cancel",
                  onAction: handleModalClose,
                },
              ]
        }
      >
        <Modal.Section>{children}</Modal.Section>
      </Modal>
    </Frame>
  );
};

export default ModalComponent;
