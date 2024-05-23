import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { introSectionData } from "../../../Mock/dummy";
const Intro = () => {
  return (
    <section className={styles["intro"]}>
      <h1 className={styles["intro__title"]}>
        WHAT IS AN IPTV SMARTERS PLAYER PLUS ?
      </h1>
      <p className={styles["intro__text"]}>
        The IPTV Smarters App is a fabulous video player that allows end-users
        to watch their content like Live TV, Movies, and Series on their
        devices. It supports several platforms, including Android, iOS, Windows,
        MacOS, Web Browsers, Smart TVs, etc. Smarters Pro is compatible with
        various playlists like Player API Based Playlist, 1-Stream Panel API,
        and M3U Playlist / URL.
      </p>
      <p className={styles["intro__text"]}>
        Following is a comprehensive list of the devices supported by IPTV
        Smarters Pro.
      </p>

      <Row className={styles["intro__devices"]}>
        {introSectionData.map((item: any, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            className={styles["intro__devices__item"]}
          >
            <img
              src={item.icon}
              alt={"platform"}
              className={`img-fluid ${styles["intro__devices__item__icon"]}`}
            />
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Intro;
