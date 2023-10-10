import classes from "./SignupForm.module.css";
import Card from "../UI/Card/Card";
import { useRef } from "react";

const SignupForm = () => {
  return (
    <Card>
      <form>
        <h2>Add New Task</h2>
        <div className={classes.formSection}>
          <label htmlFor="email">E-mail</label>
          <input type="email" required ref={titleInputRef}></input>
        </div>
      </form>
    </Card>
  );
};
