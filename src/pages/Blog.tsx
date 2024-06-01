import { Card, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="py-5" style={{ height: "100%" }}>
      <h1 className="text-center pt-5 fw-bold">Blog</h1>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <Col
            xs={12}
            md={4}
            key={index}
            className="justify-content-center align-items-center"
          >
            <Card className="my-3" style={{ width: "100%" }}>
              <Card.Img variant="top" src="/blog.png" />
              <Card.Body>
                <Card.Text
                  style={{
                    color: "#00192b",
                    fontSize: "16px",
                    fontWeight: "800",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  UNLOCK THE POSSIBILITIES: ENHANCING YOUR STREAMING JOURNEY
                  WITH IPTV HACKS AND TIPS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
