import { Container } from "react-bootstrap";
import LoginForm from "../modules/SmartersAccount/LoginForm/LoginForm";
import { useState } from "react";

const MySmartersAccount = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <Container className="py-5" style={{ height: "100%" }}>
      <h1 className="text-center pt-5">
        {isRegistered ? "Login" : "Register"}
      </h1>
      <p className="text-center mt-3 fs-6">
        {isRegistered
          ? "Sign in to your account to continue."
          : "Register to get started."}
      </p>
      <LoginForm
        isRegistered={isRegistered}
        setIsRegistered={setIsRegistered}
      />
    </Container>
  );
};

export default MySmartersAccount;
