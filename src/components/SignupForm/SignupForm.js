import classes from "../LoginForm/LoginForm.module.css";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const SignupForm = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.signUp(emailRef.current.value, passwordRef.current.value);
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   await createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       navigate("/login");
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       // ..
  //     });
  // };

  const cancelHandler = () => {
    navigate("/react-todo");
  };

  return (
    <Card>
      <form className={classes.form}>
        <h2>Sign up</h2>
        <div className={classes.formSection}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            label="Email address"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
            required
            placeholder="Password"
          />
        </div>

        <div className={classes.buttonContainer}>
          <Button onClick={cancelHandler} theme="light">
            Cancel
          </Button>
          <Button theme="blue" onClick={submitHandler}>
            Sign up
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;
