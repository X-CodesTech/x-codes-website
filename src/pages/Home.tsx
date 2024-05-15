import { Container } from "react-bootstrap";
import Intro from "../modules/HomePage/Intro/Intro";
import Features from "../modules/HomePage/Features/Features";

const Home = () => {
  return (
    <Container>
      <div className="text-center my-2 overflow-hidden">
        <img src="/hero.png" height={300} alt="hero" className="img-fluid" />
      </div>
      <Intro />
      <Features />
    </Container>
  );
};

export default Home;
