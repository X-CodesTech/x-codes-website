import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import platforms from "./platforms.json";
const { footerContainer, footerText } = styles;

type TPlatform = { name: string; source: string; id: number };
const Footer = () => {
  return (
    <Container className={footerContainer} fluid>
      <Row className="p-2">
        <Col xs={12} className="mb-2">
          <p className={footerText}>
            IPTV Smarters Pro – Best OTT Player The IPTV Smarters App is a
            fabulous video streaming player that allows your IPTV customers or
            end-users to stream content like Live TV, VOD, Series, and TV
            Catchup supplied by you; on their Android & iOS devices, Smart TV,
            and even on macOS/Windows PC/Laptop.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <ul className="list-unstyled d-flex flex-column gap-3">
            <li>
              <Link to="/about" className="text-white">
                About Us
              </Link>{" "}
            </li>
            <li>
              <Link to="/terms" className="text-white">
                Terms and Conditions
              </Link>{" "}
            </li>
            <li>
              <Link to="/refund" className="text-white">
                Refund Policy and Cancellation
              </Link>{" "}
            </li>
            <li>
              <Link to="/complaint" className="text-white">
                Copyright Complaint
              </Link>{" "}
            </li>
          </ul>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "20px" }}
        >
          {platforms.map((platform: TPlatform) => (
            <img
              key={platform.id}
              src={platform.source}
              alt={platform.name}
              className="img-fluid"
              style={{ width: "auto", height: "60px" }}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
