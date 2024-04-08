import React from "react";

const UploadButton = () => {
  const handleUpload = async () => {
    try {
      const response = await fetch("/api/upload", { method: "POST" });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Upload successful:", result);
    } catch (error: any) {
      console.error("Failed to upload:", error.message);
    }
  };

  return <button onClick={handleUpload}>Upload File</button>;
};

export default UploadButton;
