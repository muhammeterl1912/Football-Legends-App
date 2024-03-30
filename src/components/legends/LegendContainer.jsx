import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { data } from "../../helpers/data";

const LegendContainer = () => {
  return (
    <div>
      <Form.Control type="search" placeholder="Search a Legend" />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {data.map((legends) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={legends.img} />
                <Card.Header>
                  <Card.Title>{legends.name}</Card.Title>
                </Card.Header>
                <ul className="m-auto">{legends.statistics.map((item => <li className="list-unstyled h5 text-start">{item}</li>))}</ul>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
