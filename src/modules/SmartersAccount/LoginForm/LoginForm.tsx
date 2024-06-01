import { useFormik } from "formik";

import styles from "./styles.module.scss";
const {
  form,
  inputWrapper,
  email,
  message,
  submitAndRememberMeWrapper,
  field,
} = styles;

const LoginForm = ({
  isRegistered,
  setIsRegistered,
}: {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const formik = useFormik({
    initialValues: isRegistered
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          password: "",
        },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors: any = {};

      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.message = "Required";
      }
      return errors;
    },
  });

  return (
    <>
      <form className={form} onSubmit={formik.handleSubmit} autoComplete="off">
        {!isRegistered && (
          <div className={inputWrapper}>
            <input
              type="name"
              className={`${field} ${email}`}
              id="email"
              placeholder="Enter your Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
            />
          </div>
        )}
        <div className={inputWrapper}>
          <input
            type="email"
            className={`${field} ${email}`}
            id="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
        </div>
        <div className={inputWrapper}>
          <input
            type="password"
            className={`${field} ${message}`}
            id="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
        </div>
        <div className={submitAndRememberMeWrapper}>
          <button
            type="submit"
            className="btn fs-6 fw-bold rounded"
            style={{ backgroundColor: "#00192b", color: "white" }}
          >
            {isRegistered ? "Login" : "Register"}
          </button>
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              value="rememberMe"
            />
            <label className="form-check-label ms-1" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
        </div>
      </form>

      <div className="mt-1 w-50 mx-auto d-flex align-items-center">
        <p className="me-0 mb-0">
          {isRegistered ? "Not registered?" : "Already registered?"}
        </p>
        <button
          className="btn fs-6 fw-bold rounded"
          onClick={() => setIsRegistered(!isRegistered)}
        >
          {isRegistered ? "Create an account" : "Login to your account"}
        </button>
      </div>
    </>
  );
};

export default LoginForm;
