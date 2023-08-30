import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const HomePage = (props) => {
  const taskCtx = useContext(TaskContext);

  const projects = taskCtx.projects;

  return (
    <div>
      <TaskGroup tasks={taskCtx.tasks} sortBy="priority" />
    </div>
  );
};

export default HomePage;
