import { Container } from "react-bootstrap";
import HeadTitle from "../components/shared/HeadTitle/HeadTitle";

const FAQs = () => {
  return (
    <Container className="mt-5 py-5" style={{ overflowY: "auto" }}>
      <HeadTitle text="Frequently Asked Questions" />
      <div className="d-flex flex-column">
        <p className="mt-5 mb-2 fs-6 fw-bold">WHAT IS AN IPTV SMARTERS PRO?</p>
        <p className="my-2 fs-6 fw-bold">
          HOW TO INSTALL IPTV SMARTERS FOR ANDROID DEVICES AS IT'S NOT AVAILABLE
          ON THE PLAY STORE?
        </p>
        <p className="my-2 fs-6 fw-bold">
          WHAT IS THE NEWEST VERSION OF IPTV SMARTERS V4.0?
        </p>
        <p className="my-2 fs-6 fw-bold">
          WHAT IS SBP PANEL AND WHY IS IT CONNECTED TO THE IPTV SMARTERS PRO?
        </p>
        <p className="my-2 fs-6 fw-bold">
          HOW MUCH DOES IT COST FOR IPTV SMARTERS?
        </p>
        <p className="my-2 fs-6 fw-bold">
          WHAT IS THE BEST IPTV STREAMING APP FOR FIRESTICK?
        </p>
        <p className="my-2 fs-6 fw-bold">IS IPTV SMARTERS PRO TRUSTWORTHY?</p>
      </div>
    </Container>
  );
};

export default FAQs;
