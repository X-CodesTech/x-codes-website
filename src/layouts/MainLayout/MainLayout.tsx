import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container} fluid>
      <Header />
      <div className={wrapper}>{<Outlet />}</div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
