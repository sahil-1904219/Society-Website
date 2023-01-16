import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFedora } from "react-icons/fa";
import {
  GiElectricalResistance,
  GiElectricalCrescent,
  GiElectricWhip,
  GiElectricalSocket,
} from "react-icons/gi";
import { BiMicrochip } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  SiPytorch,
  SiFirebase,
  SiIcinga,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaFedora />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiElectricalResistance />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiElectricalCrescent />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiElectricWhip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiElectricalSocket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiMicrochip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineFundProjectionScreen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcinga />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
    </Row>
  );
}

export default Techstack;
