import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  const incompleteTasks = props.tasks.filter((task) => !task.complete);
  const completeTasks = props.tasks.filter((task) => task.complete);

  return (
    <ul
      className={`${classes.todoList} ${props.isHidden ? classes.hidden : ""}`}
    >
      {incompleteTasks.map((entry) => {
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
      {completeTasks.map((entry) => {
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
