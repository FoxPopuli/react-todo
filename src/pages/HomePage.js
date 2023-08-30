import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const HomePage = (props) => {
  const taskCtx = useContext(TaskContext);

  const completeTasks = taskCtx.tasks.filter((task) => task.complete);
  const incompleteTasks = taskCtx.tasks.filter((task) => !task.complete);

  const projects = taskCtx.projects;
  console.log(projects);

  return <div>Homepage</div>;
};

export default HomePage;
