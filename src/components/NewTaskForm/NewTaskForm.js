import { useRef, useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewTaskForm.module.css";
import TaskContext from "../../store/task-context";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import { findProjectId } from "../../helperFunctions";

const NewTaskForm = () => {
  const titleInputRef = useRef();
  const dueDateInputRef = useRef();

  const taskCtx = useContext(TaskContext);

  const navigate = useNavigate();

  let currentProject = "General";
  let currentPriority = "Low";
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(findProjectId("Chores", taskCtx.data.projects));

    const inputs = {
      title: titleInputRef.current.value,
      id: Math.floor(Math.random() * 100000),
      priority: currentPriority,
      dateAdded: new Date(),
      dueDate: new Date(dueDateInputRef.current.value.split("-")),
      complete: false,
      projId: findProjectId(currentProject, taskCtx.data.projects),
    };
    taskCtx.addTask(inputs);

    navigate("/");
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    navigate("/");
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
      </form>
    </Card>
  );
};

export default NewTaskForm;
