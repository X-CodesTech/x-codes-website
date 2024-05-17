import { Col, Row } from "react-bootstrap";

const Screenshots = () => {
  return (
    <Row>
      <h1 className="text-center">Screenshots</h1>
      <Col xs={12}>
        <img src="/screenshots.png" alt="screenshots" className="img-fluid" />
      </Col>
    </Row>
  );
};

export default Screenshots;
