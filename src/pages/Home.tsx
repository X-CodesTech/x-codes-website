import { Container } from "react-bootstrap";
import Intro from "../modules/HomePage/Intro/Intro";
import SmartTVs from "../modules/HomePage/SmartTVs/SmartTVs";
import Features from "../modules/HomePage/Features/Features";
import AboutIPTV from "../modules/HomePage/AboutIPTV/AboutIPTV";
import Screenshots from "../modules/HomePage/Screenshots/Screenshots";
import PremiumVersion from "../modules/HomePage/PremiumVersion/PremiumVersion";
import DownloadSection from "../modules/HomePage/DownloadSection/DownloadSection";
import FraudAwareness from "../modules/HomePage/FraudAwareness/FraudAwareness";

const Home = () => {
  return (
    <Container className="mt-5 py-5">
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
      <SmartTVs />
      <PremiumVersion />
      <Screenshots />
      <FraudAwareness />
    </Container>
  );
};

export default Home;
