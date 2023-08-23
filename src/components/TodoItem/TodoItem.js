import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const removeItemHandler = (event) => props.onRemoveItem(props.id);
  return (
    <Card>
      <li className={classes.main}>
        <input type="checkbox" className={classes.checkbox}></input>
        <div className="todo-item__title-card">{props.title}</div>
        <div className="todo-item__tag"></div>
        <button onClick={removeItemHandler}>Remove</button>
      </li>
    </Card>
  );
};

export default TodoItem;
