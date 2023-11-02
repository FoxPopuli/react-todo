import classes from "../LoginForm/LoginForm.module.css";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import TaskContext from "../../store/task-context";

const SignupForm = () => {
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const taskCtx = useContext(TaskContext);

  const emailRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password1Ref.current.value !== password2Ref.current.value) {
      setErrorText("Passwords do not match.");
      return;
    }

    if (password1Ref.current.value.length < 7) {
      setErrorText("Passwords must be at least 6 characters");
      return;
    }

    authCtx.signUp(emailRef.current.value, password1Ref.current.value);
    navigate("/react-todo");
  };

  const cancelHandler = () => navigate("/react-todo");

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Sign up</h2>
        {authCtx.currentUser && authCtx.currentUser.email}
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
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            label="Create password"
            ref={password1Ref}
            required
            placeholder="Password"
          />
        </div>
        <div className={classes.formSection}>
          <label htmlFor="password">Repeat Password</label>
          <input
            type="password"
            label="Repeat password"
            ref={password2Ref}
            required
            placeholder="Password"
          />
        </div>

        <p className={classes.errorTextContainer}>{errorText}</p>

        <div className={classes.buttonContainer}>
          <Button onClick={cancelHandler} theme="light">
            Cancel
          </Button>
          <Button
            theme="blue"
            // onClick={submitHandler}
            disabled={taskCtx.getIsLoading()}
          >
            Sign up
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;
