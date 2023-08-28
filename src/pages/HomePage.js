import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const HomePage = (props) => {
  const completedTasksCtx = useContext(TaskContext);

  return (
    <section className={classes.home}>
      <h1>Todo List Website</h1>
      <TodoList
        data={props.data}
        // data={completedTasksCtx.completeTasks}
        onRemoveItem={props.onRemoveItem}
        onMarkDone={props.onMarkDone}
      />
    </section>
  );
};

export default HomePage;
