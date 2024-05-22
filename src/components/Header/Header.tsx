import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#00192b" }}
        data-bs-theme="dark"
        bg="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              alt="X Codes"
              height={50}
              width={50}
              className="img-fluid"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/downloads">
                Downloads
              </Nav.Link>
              <Nav.Link as={NavLink} to="/features">
                Features
              </Nav.Link>
              <Nav.Link as={NavLink} to="/how-it-works">
                How it works
              </Nav.Link>
              <Nav.Link as={NavLink} to="/features">
                Features
              </Nav.Link>
              <Nav.Link as={NavLink} to="/screenshots">
                screenshots
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faqs">
                faqs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                contact us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/account">
                my smarters account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
