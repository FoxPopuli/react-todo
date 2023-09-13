import { useRef, useContext, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewTaskForm.module.css";
import TaskContext from "../../store/task-context";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import { findProjectId, getUniqueId } from "../../helperFunctions";
import testStyles from "./DropdownStyles.module.css";

const NewTaskForm = () => {
  const taskCtx = useContext(TaskContext);
  const [errorText, setErrorText] = useState("");
  const titleInputRef = useRef();
  const dueDateInputRef = useRef();

  const navigate = useNavigate();

  let currentPriority;
  let currentProject = "General";
  const submitHandler = (e) => {
    e.preventDefault();
    const newId = getUniqueId(taskCtx.data.tasks);
    const taskTitle = titleInputRef.current.value;

    if (!taskTitle) {
      setErrorText("Please enter a valid title.");
      return;
    }

    const inputs = {
      title: taskTitle,
      id: newId,
      priority: currentPriority,
      dueDate: dueDateInputRef.current.value.split("-"),
      complete: false,
      projId: findProjectId(currentProject, taskCtx.data.projects),
    };
    taskCtx.addTask(inputs);

    navigate("/all-projects");
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    navigate("/all-projects");
  };

  const projectChangeHandler = (projectTitle) => {
    currentProject = projectTitle;
  };

  const priorityChangeHandler = (projectPriority) => {
    switch (projectPriority) {
      case "High":
        currentPriority = 2;
        break;
      case "Urgent":
        currentPriority = 3;
        break;
      case "Low":
      default:
        currentPriority = 1;
        break;
    }
  };

  const projectTitles = [...taskCtx.data.projects].map(
    (project) => project.title
  );

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
          <DropdownMenu
            options={["Low", "High", "Urgent"]}
            onDropdownChange={priorityChangeHandler}
            styles={testStyles}
            default={"Low"}
          />
        </div>
        <div className={classes.formSection}>
          <label htmlFor="due-date">Due Date</label>
          <input type="date" ref={dueDateInputRef}></input>
        </div>
        <div className={classes.formSection}>
          <label htmlFor="due-date">Project</label>

          <DropdownMenu
            options={projectTitles}
            onDropdownChange={projectChangeHandler}
            styles={testStyles}
            default={projectTitles[0]}
          />
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

export default NewTaskForm;
