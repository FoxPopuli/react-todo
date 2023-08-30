import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const AllTasksPage = (props) => {
  const taskCtx = useContext(TaskContext);
  const projects = taskCtx.projects;

  return (
    <section className={classes.home}>
      <TodoList data={taskCtx.tasks} />
    </section>
  );
};

export default AllTasksPage;
