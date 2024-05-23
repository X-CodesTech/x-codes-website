import { Col, Row } from "react-bootstrap";
import HeadTitle from "../../../components/shared/HeadTitle/HeadTitle";

const ScreenshotsSection = () => {
  return (
    <Row className="my-1">
      <HeadTitle text="Screenshots" />
      <Col xs={12}>
        <img
          src="/screenshots.png"
          alt="screenshots"
          className="img-fluid mt-5"
        />
      </Col>
    </Row>
  );
};

export default ScreenshotsSection;
