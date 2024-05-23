import { Row } from "react-bootstrap";
import Anchor from "../../../components/shared/Anchor/Anchor";
import HeadTitle from "../../../components/shared/HeadTitle/HeadTitle";

type Props = {
  text: string;
  fileURL: string;
  buttonText: string;
};

const DownloadSection = ({ text, fileURL, buttonText }: Props) => {
  return (
    <Row className="my-2 d-flex justify-content-center flex-column">
      <HeadTitle text={text} />
      <div className="d-flex align-items-center justify-content-center">
        <Anchor fileURL={fileURL} buttonText={buttonText} />
      </div>
    </Row>
  );
};

export default DownloadSection;
