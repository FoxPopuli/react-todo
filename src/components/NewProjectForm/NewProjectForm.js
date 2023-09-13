import { useRef, useContext, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewProjectForm.module.css";
import TaskContext from "../../store/task-context";
import { useNavigate } from "react-router-dom";
import { getUniqueId } from "../../helperFunctions";

const NewProjectForm = () => {
  const titleInputRef = useRef();
  const dueDateInputRef = useRef();

  const taskCtx = useContext(TaskContext);
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const title = titleInputRef.current.value;
    const dueDate = dueDateInputRef.current.value.split("-");

    if (!dueDate[0] && !title) {
      setErrorText("Please enter a valid title and date.");
      return;
    } else if (!title) {
      setErrorText("Please enter a valid title.");
      return;
    } else if (!dueDate[0]) {
      setErrorText("Please enter a valid date");
      return;
    }

    const inputs = {
      title,
      dueDate,
      id: getUniqueId(taskCtx.data.projects),
      complete: false,
      sortedBy: "Priority",
    };

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
        <div className={classes.errorTextContainer}>{errorText}</div>
      </form>
    </Card>
  );
};

export default NewProjectForm;
