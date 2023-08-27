import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.data.map((entry) => {
        return (
          <TodoItem
            title={entry.title}
            id={entry.id}
            dateAdded={entry.dateAdded}
            dueDate={entry.dueDate}
            priority={entry.priority}
            complete={entry.complete}
            onRemoveItem={props.onRemoveItem}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
