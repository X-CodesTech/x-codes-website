import { Col, Row } from "react-bootstrap";
import HeadTitle from "../../../components/shared/HeadTitle/HeadTitle";

const Screenshots = () => {
  return (
    <Row className="my-5">
      <HeadTitle text="Screenshots" />
      <Col xs={12}>
        <img src="/screenshots.png" alt="screenshots" className="img-fluid" />
      </Col>
    </Row>
  );
};

export default Screenshots;
