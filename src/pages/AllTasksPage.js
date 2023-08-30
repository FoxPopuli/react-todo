import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";
import TaskGroup from "../components/UI/TaskGroup/TaskGroup";

const AllTasksPage = (props) => {
  const taskCtx = useContext(TaskContext);
  const projects = taskCtx.projects;

  return (
    <section className={classes.home}>
      {/* <TodoList tasks={taskCtx.tasks} /> */}
      <TaskGroup tasks={taskCtx.tasks} sortBy="date" />
    </section>
  );
};

export default AllTasksPage;
