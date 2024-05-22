import { Col, Row } from "react-bootstrap";
import HeadTitle from "../../../components/shared/HeadTitle/HeadTitle";

const FraudAwareness = () => {
  return (
    <Row className="my-5">
      <HeadTitle text="Fraud Awareness" />
      <Col
        xs={12}
        className="d-flex flex-column justify-content-center align-items-center my-2"
      >
        <p className="my-2 fs-5 fw-light">
          This is a disclaimer to inform our users that a few websites are
          illegally duplicating our official website, using our name and site
          content, and selling subscriptions and packages. Please note that we
          do not endorse or have any affiliation with these websites, and any
          transactions made with them will not be honored by us.
        </p>
        <p className="my-2 fs-5 fw-light">
          To ensure that you are using a legitimate website, please ensure that
          the URL begins with “https://www.iptvsmarters.com/” and we don't sell
          any IPTV subscriptions or Channel Packages. Also, you have verified
          the website's authenticity through other means, such as checking for a
          secure SSL certificate and contacting our customer support for
          confirmation.
        </p>
        <p className="my-2 fs-5 fw-light">
          We take the protection of our customers and brand very seriously and
          are taking steps to shut down these fraudulent websites. If you find
          any other website, you suspect is fake. Please report it to us
          immediately.
        </p>
      </Col>
    </Row>
  );
};

export default FraudAwareness;
