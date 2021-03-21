import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../store/authStore";
import Cookies from "universal-cookie";
import { AUTH_TOKEN } from "../../constants/common";
import { validateEmail } from "../../helpers/validate-email";
import { validatePassword } from "../../helpers/validate-password";
import "./styles.scss";

function LogIn() {
  const authStore = useAuth();
  const history = useHistory();
  const cookies = new Cookies();

  useEffect(() => {
    if (authStore.loginRequestStatus.success) {
      cookies.set(
        AUTH_TOKEN,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      );
      history.push("/");
    }
  }, [authStore.loginRequestStatus, cookies, history]);

  const [formValidated, setFormValidated] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const isValidForm = () => {
    return (
      validateEmail(loginData.email) && validatePassword(loginData.password)
    );
  };

  const handleSubmit = (event: any) => {
    setFormValidated((formValidated) => !formValidated);
    if (isValidForm()) {
      console.log("entra");
      authStore.logIn(loginData);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div>
      <div
        className="log-in-form"
        style={{
          display: "block",
          marginTop: "10%",
          marginLeft: "35%",
          marginRight: "35%",
        }}
      >
        <h2>Seba App</h2>
        <Form
          noValidate
          validated={formValidated}
          style={{ marginLeft: "15%", marginRight: "15%" }}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label style={{ float: "left" }}>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              onChange={(event) => {
                const val = event.currentTarget.value;
                setLoginData({ ...loginData, email: val });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ float: "left" }}>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={(event) => {
                const val = event.currentTarget.value;
                setLoginData({ ...loginData, password: val });
              }}
              isValid={validatePassword(loginData.password)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button style={{ marginTop: "10px" }} variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default LogIn;
