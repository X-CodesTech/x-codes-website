import { Col, Row } from "react-bootstrap";
import HeadTitle from "../../../components/shared/HeadTitle/HeadTitle";
import Anchor from "../../../components/shared/Anchor/Anchor";

const SmartTVs = () => {
  return (
    <Row className="my-5">
      <HeadTitle text="IPTV SMARTERS PLUS – SMART TV" />
      <Col xs={12}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "20px" }}
        >
          <Anchor fileURL="/download" buttonText="SAMSUNG SMART TV" />
          <Anchor fileURL="/download" buttonText="LG SMART TV" />
        </div>
      </Col>
      <Col xs={12} md={6} className="justify-content-center my-5">
        <p className="text-muted my-2 fs-5 fw-light">
          IPTV Smarters is an incredible video streaming player which is
          developed especially for end-users that want to be provided with the
          facility to watch live TV, VOD, Series and TV Catchup on their Smart
          TV. This video player app is easy to use and yet highly efficient with
          a powerful player, attractive and very impressive layout and most
          importantly user-friendly.
        </p>
      </Col>
      <Col xs={12} md={6} className="text-center my-5">
        <img
          src="/features.png"
          alt="smart-tv"
          className="img-fluid"
          style={{ width: "80%", height: "200px" }}
        />
      </Col>
    </Row>
  );
};

export default SmartTVs;
