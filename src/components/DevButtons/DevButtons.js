import Button from "../UI/Button/Button";
import { useContext, useState } from "react";
import DummyData from "../../data/dummyData";
import TaskContext from "../../store/task-context";
import classes from "./DevButtons.module.css";

const DevButtons = () => {
  const taskCtx = useContext(TaskContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleShowHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const populateHandler = () => {
    DummyData.tasks.forEach((task) => {
      if (!taskCtx.data.tasks.includes(task)) {
        taskCtx.addTask(task);
        console.log(task);
      }
    });
    DummyData.projects.forEach((project) => {
      if (!taskCtx.data.projects.includes(project)) {
        taskCtx.addProject(project);
        console.log(project);
      }
    });
  };

  const resetHandler = () => {
    taskCtx.hardReset();
  };
  return (
    <div className={classes.main}>
      <div className={classes.devButtonToggle} onClick={toggleShowHandler}>
        {isOpen ? "Hide dev buttons" : "Show dev buttons"}
      </div>
      <div className={`${classes.devButtons} ${!isOpen ? classes.hidden : ""}`}>
        <Button onClick={populateHandler} theme="blue">
          Populate
        </Button>
        <Button onClick={resetHandler} theme="light">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default DevButtons;
