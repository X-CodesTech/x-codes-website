import { Container } from "react-bootstrap";
import Tabs from "../modules/HowItWorks/Tabs/Tabs";

const HowItWorks = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center pt-5">How it works</h1>
      <Tabs />
    </Container>
  );
};

export default HowItWorks;
