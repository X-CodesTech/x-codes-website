import { Row } from "react-bootstrap";

type Props = {
  text: string;
  fileURL: string;
  buttonText: string;
};

const DownloadSection = ({ text, fileURL, buttonText }: Props) => {
  return (
    <Row className="my-5 d-flex justify-content-center flex-column">
      <p
        className="text-muted text-center my-2 fs-5 fw-bolder text-uppercase"
        style={{ color: "#00192b" }}
      >
        {text}
      </p>
      <a
        href={fileURL}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary rounded my-2 text-white text-uppercase mx-auto fw-bold"
        style={{
          width: "200px",
          backgroundColor: "#00192b",
          borderColor: "#00192b",
        }}
      >
        {buttonText}
      </a>
    </Row>
  );
};

export default DownloadSection;
