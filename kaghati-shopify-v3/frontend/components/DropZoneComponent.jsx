import {
  DropZone,
  BlockStack,
  InlineStack,
  Thumbnail,
  Text,
} from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import { useState, useCallback, useEffect } from "react";
import { api } from "../api";

const DropZoneComponent = ({ DropZoneName, onValueChange }) => {
  const [files, setFiles] = useState([]);

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => {
      setFiles((files) => [...files, ...acceptedFiles]);
      onValueChange({
        name: DropZoneName,
        value: [...files, ...acceptedFiles],
      });
    },
    [onValueChange]
  );

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const fileUpload = !files.length && <DropZone.FileUpload />;

  const uploadedFiles = files.length > 0 && (
    <div style={{ padding: "0" }}>
      <BlockStack vertical>
        {files.map((file, index) => (
          <InlineStack alignment="center" key={index}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={
                validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteMinor
              }
            />
            <div>
              {file.name}{" "}
              <Text variant="bodySm" as="p">
                {file.size} bytes
              </Text>
            </div>
          </InlineStack>
        ))}
      </BlockStack>
    </div>
  );

  const uploadImage = async () => {
    await api.temporyImage.create({
      name: "example value for name",
      src: {
        copyURL: "https://assets.gadget.dev/assets/icon.svg",
      },
    });
  }

  useEffect(() => {
    if (files.length > 0) {
      uploadImage();
    }
  }, [files]);

  console.log(files);

  return (
    <DropZone onDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </DropZone>
  );
};

export default DropZoneComponent;
