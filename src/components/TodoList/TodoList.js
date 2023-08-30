import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.data.map((entry) => {
        return (
          <TodoItem
            title={entry.title}
            key={entry.id}
            id={entry.id}
            dateAdded={entry.dateAdded}
            dueDate={entry.dueDate}
            priority={entry.priority}
            complete={entry.complete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
