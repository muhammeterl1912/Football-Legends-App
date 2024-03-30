import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { data } from "../../helpers/data";
import LegendCard from "../legendCard";

const LegendContainer = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  //   Filtering the Search-box
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search a Legend... "
        className="p-3 my-2"
        onChange={handleChange}
      />

      <Container className="mt-3 rounded-4 card-container my-3">
        <div className="h1 mt-5 text-danger">
          {filteredData.length === 0 && "Legend not Found!!!"}
        </div>
        <Row xs={1} md={2} lg={3} className="justify-content-center g-3">
          {filteredData.map((legends) => (
            <Col key={legends.id}>
              <LegendCard key={legends.id} legends={legends} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
