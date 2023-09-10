import Button from "../UI/Button/Button";
import { useContext } from "react";
import DummyData from "../../data/dummyData";
import TaskContext from "../../store/task-context";
const TestingButtons = () => {
  const taskCtx = useContext(TaskContext);
  const populateHandler = () => {
    DummyData.tasks.forEach((task) => {
      if (!taskCtx.data.tasks.includes(task)) {
        taskCtx.addTask(task);
      }
    });
    DummyData.projects.forEach((project) => {
      if (!taskCtx.data.projects.includes(project)) {
        taskCtx.addProject(project);
      }
    });
  };

  const resetHandler = () => {
    taskCtx.hardReset();
    // taskCtx.projects.forEach
  };
  return (
    <div>
      <Button onClick={populateHandler} theme="blue">
        Populate
      </Button>
      <Button onClick={resetHandler} theme="white">
        Reset
      </Button>
    </div>
  );
};

export default TestingButtons;
