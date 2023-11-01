import classes from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

const LoginForm = () => {
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const logInHandler = (e) => {
    e.preventDefault();
    authCtx.logIn(emailRef, passwordRef);
    navigate("/react-todo");
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
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

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
