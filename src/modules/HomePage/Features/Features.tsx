import { Col, Row } from "react-bootstrap";

const Features = () => {
  return (
    <Row className="my-5">
      <Col xs={12} md={6}>
        <div>
          <img src="/features.png" alt="features" className="img-fluid" />
        </div>
      </Col>
      <Col>
        <p className="text-muted my-2">
          Ability to add external Players Speed Test facility Integrated
          Support: Dynamic language switching Support: Picture-in-Picture Chrome
          Casting Improvements New Controls on the Media Player Auto Next
          Episode Play Supported Support: Clear Cache automatically and Manually
          TabView Supported The new way to download the content Load Your
          Playlist Or File/URL Improvements Ability to open the channel list on
          the video Player Ability to open “ List of episodes” on the video
          Player
        </p>
      </Col>
    </Row>
  );
};

export default Features;
