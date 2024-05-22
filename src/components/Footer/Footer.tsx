import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const { footerContainer } = styles;
const Footer = () => {
  return (
    <Container className={footerContainer} fluid>
      <Row className="p-2">
        <Col xs={12}>
          <p
            className="my-2 fs-6 fw-light pb-3"
            style={{ maxWidth: "50%", color: "#fff" }}
          >
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
        <Col xs={12} md={6} className="d-flex" style={{ gap: "20px" }}>
          <img
            src="/android-white.png"
            alt="android"
            className="img-fluid"
            style={{ width: "50px", height: "60px" }}
          />
          <img
            src="/ios-white.png"
            alt="ios"
            className="img-fluid"
            style={{ width: "100px", height: "60px" }}
          />
          <img
            src="/smart-tv-white.png"
            alt="smart tv"
            className="img-fluid"
            style={{ width: "50px", height: "60px" }}
          />
          <img
            src="/windows-white.png"
            alt="windows"
            className="img-fluid"
            style={{ width: "50px", height: "60px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
