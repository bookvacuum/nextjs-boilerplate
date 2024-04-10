"use client";

import React from "react";

const UploadButton = () => {
  const handleUpload = async () => {
    try {
      const response = await fetch("/api/data", { method: "POST" });
      if (!response) {
        throw new Error(`HTTP error! ...`);
      }
      console.log("Upload successful:", response);
    } catch (error: any) {
      console.error("Failed to upload:", error.message);
    }
  };

  return (
    <button
      //style={{ background: "white", color: "black" }}
      className="upload-button"
      onClick={handleUpload}
    >
      Upload File
    </button>
  );
};

export default UploadButton;
