import { useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewTaskForm.module.css";
const NewTaskForm = (props) => {
  const titleInputRef = useRef();
  const priorityInputRef = useRef();
  const dueDateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    const inputs = {
      title: titleInputRef.current.value,
      priority: priorityInputRef.current.value,
      dueDate: dueDateInputRef.current.value,
    };
    props.onAddTask(inputs);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Add New Task</h2>
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
        <Button onClick={submitHandler}>Submit</Button>
      </form>
    </Card>
  );
};

export default NewTaskForm;
