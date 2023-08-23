import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <Card>
      <li className={classes.main}>
        <input type="checkbox" className={classes.checkbox}></input>
        <div className="todo-item__checkmark"></div>
        <div className="todo-item__title-card">{props.title}</div>
        <div className="todo-item__tag"></div>
      </li>
    </Card>
  );
};

export default TodoItem;
