import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const HomePage = (props) => {
  const taskCtx = useContext(TaskContext);

  const completeTasks = taskCtx.tasks.filter((task) => task.complete);
  const incompleteTasks = taskCtx.tasks.filter((task) => !task.complete);

  return (
    <section className={classes.home}>
      <h1>Todo List Website</h1>
      <TodoList
        data={incompleteTasks}
        onRemoveItem={props.onRemoveItem}
        onMarkDone={props.onMarkDone}
      />
      <TodoList
        data={completeTasks}
        onRemoveItem={props.onRemoveItem}
        onMarkDone={props.onMarkDone}
      />
    </section>
  );
};

export default HomePage;
