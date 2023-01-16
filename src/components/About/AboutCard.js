import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <span className="purple">TECHIQBAL </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />TECHIQBAL is an E-learning platform offering students a holistic learning experience helping them become Industry ready.
Educational technology 
            <br />
            <br />
            is the combined use of computer hardware, software, and educational theory and practice to facilitate learning. When referred to with its abbreviation, edtech, it is
often referring to the industry of companies
that create educational technology.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 
              01 Introduction
              


            </li>
            <li className="about-activity">
              <ImPointRight /> 02 Arduino Introduction
            </li>
            <li className="about-activity">
              <ImPointRight /> 03 Why Arduino?
            </li>
            <li className="about-activity">
              <ImPointRight /> 04 Application ofArduino
            </li>
            <li className="about-activity">
              <ImPointRight /> 
05 Types ofArduino
            </li>
            <li className="about-activity">
              <ImPointRight /> 
06 Application ofArduino
            </li>
            <li className="about-activity">
              <ImPointRight /> 
07 Introduction to Arduino Board
            </li>
            <li className="about-activity">
              <ImPointRight />
08 Features ofArduino
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ourgoalis to empowerpeople bygiving them the evidence they
needto make decisionsabouttechnology in education "{" "}
          </p>
          <footer className="blockquote-footer">LONEX</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
