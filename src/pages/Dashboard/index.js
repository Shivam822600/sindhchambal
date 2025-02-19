import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Button } from "reactstrap";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './dashboard.scss';

// Set the PDF worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Dashboard = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    document.title = "Sindh Chambal Sanctuary";
  }, []);

  useEffect(() => {
    if (pageNumber > numPages && numPages) {
      setPageNumber(numPages);
    }
  }, [numPages, pageNumber]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
  };

  const goToPreviousPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prevPage => Math.min(prevPage + 1, numPages));
  };

  return (
    <div className="page-content">
      <Container fluid>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <Document
              file="/century.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              style={{ width: "90%", height: "500px", overflow: "auto" }}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>

          {/* Page Counter with Buttons on Large Screens */}
          <div className="position-relative d-none d-md-flex align-items-center justify-content-center mt-2" style={{ width: "100%" }}>
            {/* Previous Button - Left Side */}
            <Button
              color="primary"
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className="p-2 rounded-circle shadow-sm"
              style={{
                background: 'transparent',
                border: '1px solid black',
                width: '40px',
                height: '40px'
              }}
            >
              <span style={{ color: 'black', fontSize: '18px' }}>-</span>
            </Button>

            {/* Page Count in Center */}
            <p className="mx-3 text-center mb-0">Page {pageNumber} of {numPages}</p>

            {/* Next Button - Right Side */}
            <Button
              color="primary"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="p-2 rounded-circle shadow-sm"
              style={{
                background: 'transparent',
                border: '1px solid black',
                width: '40px',
                height: '40px'
              }}
            >
              <span style={{ color: 'black', fontSize: '18px' }}>+</span>
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile View - Buttons at Bottom */}
      <div className="d-flex d-md-none justify-content-between p-3 fixed-bottom bg-white shadow">
        <Button
          color="primary"
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="p-2 rounded-circle shadow-sm"
          style={{
            background: 'transparent',
            border: '1px solid black',
            width: '50px',
            height: '50px'
          }}
        >
          <span style={{ color: 'black', fontSize: '22px' }}>-</span>
        </Button>

        <p className="mb-0 align-self-center">Page {pageNumber} of {numPages}</p>

        <Button
          color="primary"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="p-2 rounded-circle shadow-sm"
          style={{
            background: 'transparent',
            border: '1px solid black',
            width: '50px',
            height: '50px'
          }}
        >
          <span style={{ color: 'black', fontSize: '22px' }}>+</span>
        </Button>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default Dashboard;
