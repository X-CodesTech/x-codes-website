import { useFormik } from "formik";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <Container className="mt-5 pb-5">
      <h1 className="text-center pt-5">Contact Us</h1>
      <p className="text-center fw-bold my-2">LET’S CONNECT</p>
      <p className="text-center mt-3 fs-6">
        We'd love to hear from you. Please fill out the form below.
      </p>
      <form
        className="w-50 m-auto d-flex flex-column justify-content-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3">
          <input
            id="name"
            type="text"
            className="form-control w-75 m-auto"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control w-75 m-auto"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control w-75 m-auto"
            id="message"
            rows={3}
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="btn mt-3 m-auto w-25 self-center"
          style={{ backgroundColor: "#00192b", color: "white" }}
        >
          Submit{" "}
        </button>
      </form>
    </Container>
  );
};

export default ContactUs;
