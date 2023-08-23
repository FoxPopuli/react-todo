import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.data.map((entry) => {
        return <TodoItem title={entry.title} />;
      })}
    </ul>
  );
};

export default TodoList;
