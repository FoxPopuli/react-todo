import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import Card from "../UI/Card/Card";

const TodoList = (props) => {
  const addNewTaskHandler = () => {
    console.log("Hi");
  };
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
      <li className={classes.addButtonContainer}>
        <Card>
          <div onClick={addNewTaskHandler} className={classes.addNewButton}>
            +
          </div>
        </Card>
      </li>
    </ul>
  );
};

export default TodoList;
