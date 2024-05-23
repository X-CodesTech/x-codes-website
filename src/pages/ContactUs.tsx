import { Container } from "react-bootstrap";
import ContactForm from "../modules/Contact Us/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <Container className="py-5" style={{ height: "100%" }}>
      <h1 className="text-center pt-5">Contact Us</h1>
      <p className="text-center fw-bold my-2">LET’S CONNECT</p>
      <p className="text-center mt-3 fs-6">
        We'd love to hear from you. Please fill out the form below.
      </p>
      <ContactForm />
    </Container>
  );
};

export default ContactUs;
