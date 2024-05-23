import { useFormik } from "formik";
import styles from "./style.module.scss";

const { form, nameAndEmail, name, email, message, field } = styles;

const ContactForm = () => {
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
  });

  return (
    <>
      <form className={form} onSubmit={formik.handleSubmit} autoComplete="off">
        <div className={nameAndEmail}>
          <input
            id="name"
            type="text"
            className={`${field} ${name}`}
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
          />
          <input
            type="email"
            className={`${field} ${email}`}
            id="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
        </div>
        <div>
          <textarea
            className={`${field} ${message}`}
            id="message"
            rows={3}
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            required
          />
        </div>
        <button
          type="submit"
          className="btn mt-3 m-auto w-25 self-center fs-6 fw-bold rounded text-uppercase"
          style={{ backgroundColor: "#00192b", color: "white" }}
        >
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
