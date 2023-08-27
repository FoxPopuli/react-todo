import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";

const parseDate = (dateObj) => {
  console.log("Date stuff");
  console.log(dateObj);
  console.log(dateObj.toString());
  return dateObj.toString().split("").splice(4, 11).join("");
};

const TodoItem = (props) => {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  const dateMod = parseDate(props.dueDate);
  return (
    <Card>
      <li className={classes.main}>
        <input type="checkbox" className={classes.checkbox}></input>
        <h3 className={classes.title}>{props.title}</h3>

        <div className={classes.infoContainer}>
          <div className={classes.priority}>
            {"Priority: " + props.priority}
          </div>
          <div className={classes.dueDate}>{"Due: " + dateMod}</div>
        </div>
        {/* <button onClick={removeItemHandler}>Remove</button> */}
        <Button onClick={removeItemHandler}>Remove</Button>
      </li>
    </Card>
  );
};

export default TodoItem;
