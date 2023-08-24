import { useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./NewTaskForm.module.css";
const NewTaskForm = () => {
  const titleInputRef = useRef();
  const priorityInputRef = useRef();
  const dueDateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formSection}>
          <label htmlFor="title">Title</label>
          <input type="text" required ref={titleInputRef}></input>
        </div>
        <div className={classes.formSection}>
          <label htmlFor="priority">Priority</label>
          <input type="number" ref={priorityInputRef}></input>
        </div>
        <div className={classes.formSection}>
          <label htmlFor="due-date">Due Date</label>
          <input type="date" ref={dueDateInputRef}></input>
        </div>
        <button>Submit</button>
      </form>
    </Card>
  );
};

export default NewTaskForm;
