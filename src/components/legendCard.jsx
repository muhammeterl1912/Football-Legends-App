import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const LegendCard = ({ legends }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Col>
        <Card onClick={() => setShow(!show)}>
          {!show ? (
            <Card.Img variant="top" src={legends.img} />
          ) : (
            <>
              <Card.Header>
                <Card.Title>{legends.name}</Card.Title>
              </Card.Header>
              <ul className="m-auto">
                {legends.statistics.map((item) => (
                  <li className="list-unstyled h5 text-start">{item}</li>
                ))}
              </ul>
              <span>{legends.official_career}</span>
            </>
          )}
        </Card>
      </Col>
    </div>
  );
};
export default LegendCard;
