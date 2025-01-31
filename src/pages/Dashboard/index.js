import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Button } from "reactstrap"; // Bootstrap Button
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

  // Ensure page number stays in range
  useEffect(() => {
    if (pageNumber > numPages && numPages) {
      setPageNumber(numPages); // Adjust pageNumber to not exceed numPages
    }
    console.log("PDF loaded successfully. Number of pages:",pageNumber, numPages); // Debugging log
  }, [numPages, pageNumber]);

  const onDocumentLoadSuccess = ({ numPages }) => {

    setNumPages(numPages); 
  };

  const onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error); // Debugging log
  };

  const goToPreviousPage = () => {
    setPageNumber(prevPage =>prevPage - 1, 1);
  };
  const goToNextPage = () => {
    setPageNumber(prevPage => prevPage + 1, numPages);
  };


  return (
    <div className="page-content">
      <Container fluid>
        <div className="d-flex justify-content-center">
          <Document 
            file="/century.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError} // Add error handler
            style={{ width: "90%", height: "500px", overflow: "auto" }}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <Button 
            color="primary" 
            onClick={goToPreviousPage} 
            disabled={pageNumber <= 1} 
            className="mr-3">
           -
          </Button>
          <p className="mx-3">Page {pageNumber} of {numPages}</p>
          <Button 
            color="primary" 
            onClick={goToNextPage} 
            disabled={pageNumber >= numPages}>
            +
          </Button>
        </div>
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default Dashboard;
