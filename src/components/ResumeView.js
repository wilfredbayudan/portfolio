import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "../assets/resume.pdf";

const ResumeView = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ height: "100%" }}>
      <embed
        src="https://wbayudan.com/files/resume.pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ResumeView;
