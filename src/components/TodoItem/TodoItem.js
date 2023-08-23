import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  // const itemRemoveHandler = props.removeItem(id);
  return (
    <Card>
      <li className={classes.main}>
        <input type="checkbox" className={classes.checkbox}></input>
        <div className="todo-item__title-card">{props.title}</div>
        <div className="todo-item__tag"></div>
        {/* <button onClick={itemRemoveHandler}></button> */}
      </li>
    </Card>
  );
};

export default TodoItem;
