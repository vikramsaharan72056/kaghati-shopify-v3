import {
  DropZone,
  BlockStack,
  InlineStack,
  Thumbnail,
  Text,
} from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { api } from "../api";

const DropZoneComponent = ({ DropZoneName, onValueChange }) => {
  const [files, setFiles] = useState([]);

  const handleDropZoneDrop = useCallback(
    async (_dropFiles, acceptedFiles, _rejectedFiles) => {
      const images = []
      acceptedFiles.map(async (file) => {
        const { url, token } = await api.getDirectUploadToken();
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': file.type,
          },
          body: file,
        });
        const imageRecord = await api.temporyImage.create({
          name: file.name,
          src: {
            directUploadToken: token,
            fileName: file.name,
          },
        });
        const imageUrl = imageRecord
        images.push(imageUrl)
      })
      setFiles((files) => [...files, ...acceptedFiles]);
      console.log("images", images);
      onValueChange({
        name: DropZoneName,
        value: images,
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

  return (
    <DropZone onDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </DropZone>
  );
};

export default DropZoneComponent;
