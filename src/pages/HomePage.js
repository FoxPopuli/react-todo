import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
// import CompleteTasksContext from "../components/store/todoDataContext";

const HomePage = (props) => {
  // const completedTasksCtx = useContext(CompleteTasksContext);

  return (
    <section className={classes.home}>
      <h1>Todo List Website</h1>
      <TodoList
        data={props.data}
        onRemoveItem={props.onRemoveItem}
        onMarkDone={props.onMarkDone}
      />
    </section>
  );
};

export default HomePage;
