import { Container } from "react-bootstrap";
import Intro from "../modules/HomePage/Intro/Intro";
import Features from "../modules/HomePage/Features/Features";
import DownloadSection from "../modules/HomePage/DownloadSection/DownloadSection";
import AboutIPTV from "../modules/HomePage/AboutIPTV/AboutIPTV";
import PremiumVersion from "../modules/HomePage/PremiumVersion/PremiumVersion";
import Screenshots from "../modules/HomePage/Screenshots/Screenshots";

const Home = () => {
  return (
    <Container>
      <div className="text-center my-2 overflow-hidden">
        <img src="/hero.png" height={300} alt="hero" className="img-fluid" />
      </div>
      <Intro />
      <Features />
      <DownloadSection
        text="Downloads"
        fileURL="/downloads.zip"
        buttonText="Old Version"
      />

      <AboutIPTV />

      <DownloadSection
        text="Downloads"
        fileURL="/downloads.zip"
        buttonText="New Version"
      />

      <AboutIPTV revert old={false} />

      {/* <SmartTVs /> */}
      <PremiumVersion />

      <Screenshots />
    </Container>
  );
};

export default Home;
