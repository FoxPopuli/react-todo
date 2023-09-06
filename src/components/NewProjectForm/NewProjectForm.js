import { useRef, useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewProjectForm.module.css";
import TaskContext from "../../store/task-context";
import { useNavigate } from "react-router-dom";

const NewProjectForm = () => {
  const titleInputRef = useRef();
  const dueDateInputRef = useRef();

  const taskCtx = useContext(TaskContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = {
      title: titleInputRef.current.value,
      projd: Math.floor(Math.random() * 100000),
      dateAdded: new Date(),
      dueDate: new Date(dueDateInputRef.current.value.split("-")),
      complete: false,
      sortedBy: "Priority",
    };

    console.log(inputs);
    taskCtx.addProject(inputs);
    navigate("/all-projects");
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    navigate("/all-projects");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Add New Project</h2>
        <div className={classes.formSection}>
          <label htmlFor="title">Title</label>
          <input type="text" required ref={titleInputRef}></input>
        </div>
        <div className={classes.formSection}>
          <label htmlFor="due-date">Due Date</label>
          <input type="date" ref={dueDateInputRef}></input>
        </div>
        <div className={classes.buttonContainer}>
          <Button onClick={cancelHandler} theme="light">
            Cancel
          </Button>
          <Button onClick={submitHandler} theme="blue">
            Add
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewProjectForm;
