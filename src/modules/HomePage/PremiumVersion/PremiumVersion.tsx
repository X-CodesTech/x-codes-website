import { Col, Row } from "react-bootstrap";

const PremiumVersion = () => {
  return (
    <Row className="my-5">
      <Col xs={12} md={12} className="justify-content-center">
        <p className="text-muted fs-5 fw-light text-uppercase text-center">
          GET PREMIUM VERSION – FREE{" "}
        </p>
      </Col>
      <Col xs={12} md={6} className="justify-content-center">
        <img
          src="/premium.png"
          alt="premium"
          className="img-fluid float-center"
        />
      </Col>
      <Col
        xs={12}
        md={6}
        className="mt-2 align-content-center justify-content-between"
      >
        <p className="text-muted fs-5 fw-light text-uppercase mb-1">
          UNLOCK ALL THE PREMIUM FEATURES:
        </p>
        <ul className="list-unstyled flex-column">
          <li>Master Search</li>
          <li>Parental Control</li>
          <li>Manage EPG Sources</li>
          <li>Player Selection and External Players Support</li>
          <li>Picture-in-Picture View Support</li>
        </ul>
      </Col>
    </Row>
  );
};

export default PremiumVersion;
