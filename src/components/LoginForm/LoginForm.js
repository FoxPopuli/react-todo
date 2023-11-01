import classes from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

const LoginForm = () => {
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const logInHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const passwd = passwordRef.current.value;

    if (!email.includes("@") || !email.includes(".")) {
      setErrorText("Please provide a valid email address");
      return;
    }

    if (passwd.length < 7) {
      setErrorText("Passwords must be at least 6 characters");
    }

    authCtx.logIn(email, passwd);
  };

  const cancelHandler = () => {
    navigate("/react-todo");
  };

  return (
    <Card>
      <form className={classes.form}>
        <h2>Log in</h2>
        <div className={classes.formSection}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            label="Email address"
            ref={emailRef}
            required
            placeholder="Email address"
          />
        </div>
        <div className={classes.formSection}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            ref={passwordRef}
            required
            placeholder="Password"
          />
        </div>

        <p className={classes.errorTextContainer}>{errorText}</p>

        <div className={classes.buttonContainer}>
          <Button onClick={cancelHandler} theme="light">
            Cancel
          </Button>
          <Button theme="blue" onClick={logInHandler}>
            Log in
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
