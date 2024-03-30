import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { data } from "../../helpers/data";
import LegendCard from "../legendCard";

const LegendContainer = () => {
//   const [show, setShow] = useState(false);

  return (
    <div>
      <Form.Control type="search" placeholder="Search a Legend... " />
      <Container className="mt-3">
        <Row xs={1} md={2} lg={3}>
          {data.map((legends) => (
            <Col key={legends.id}>
              <LegendCard legends={legends} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
