import { Col, Row } from "react-bootstrap";
import { aboutIPTVImages } from "../../../Mock/dummy";

const AboutIPTV = ({
  revert = false,
  old = true,
}: {
  revert?: boolean;
  old?: boolean;
}) => {
  return (
    <Row className={`my-5 d-flex ${revert ? "flex-row-reverse" : ""}`}>
      <Col xs={12} md={4}>
        <img src="/new-version.png" alt="version" className="img-fluid" />
      </Col>
      <Col xs={12} md={8}>
        <p className="my-2 fs-5 fw-light text-uppercase text-center mb-2">
          DOWNLOAD {old ? "OLD" : "NEW"} VERSION OF <br /> IPTV SMARTERS PLUS –
          2023 VERSION 4.0
        </p>
        <div
          className="w-100 d-grid"
          style={{ gridTemplateColumns: "repeat(2, 1fr)", columnGap: "20px" }}
        >
          {aboutIPTVImages.map((item: any) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100px",
              }}
            >
              <img
                src={item.image}
                alt="platform"
                className="img-fluid"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default AboutIPTV;
