import classes from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Button from "../UI/Button/Button";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/react-todo");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div className={classes.formSection}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <div className={classes.buttonContainer}>
          <Button onClick={cancelHandler} theme="light">
            Cancel
          </Button>
          <Button theme="blue" onClick={onLogin}>
            Log in
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
