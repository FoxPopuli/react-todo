import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      <TodoItem title="A test item" />
      <TodoItem title="A test item" />
      <TodoItem title="A test item" />
    </ul>
  );
};

export default TodoList;
