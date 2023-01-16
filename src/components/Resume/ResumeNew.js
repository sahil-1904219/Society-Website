import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Arduino Proposal.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1l-I5YigUFJxetz5ZXlrsOOTRM5BMYDs0/view";
//  
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; know more
          </Button>
        </Row>
<h4>
Our goal is to empower people by giving them the evidence 
                they need to make decisions about</h4>
                <br>
                </br>
                <b className="purple">
                technology in education
                maximum Productivity and efficiency
                </b>
                <h2>Lonex, was founded in the year 2012 with a tiny workforce and manpower. The aim was to innovate and manufacture reliable power conditioning & IoT products. Now we have grown tremendously and increasing our reach worldwide. we consider every order received from our customers whether big or small as opportunity to provide them with reliable and best performing
             products which will help them achieve</h2>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download the Workshop doc
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
