import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/webimg/2.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/webimg/3.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/webimg/4.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/webimg/5.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
