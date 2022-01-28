import React from "react";
import { Row, Col, Container } from "reactstrap";
import CardComp from "./CardComp";

const AboutComp = () => {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">About</h1>
          <p className="col-md-8 fs-4">
            Ut magna vulputate potenti dui ex pretium torquent integer et semper
            viverra erat dapibus nulla morbi fusce pulvinar porta consequat diam
            maecenas elit suscipit mus iaculis accumsan condimentum ad eu
          </p>
        </div>
      </div>
      <Container>
        <Row>
          <Col md="4">
            <CardComp id="1" judul="Belajar React JS" tanggal="30 Mei 2022" />
          </Col>
          <Col md="4">
            <CardComp id="2" judul="Belajar Golang" tanggal="30 Juni 2022" />
          </Col>
          <Col md="4">
            <CardComp id="3" judul="Belajar PHP" tanggal="30 Juli 2022" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComp;
