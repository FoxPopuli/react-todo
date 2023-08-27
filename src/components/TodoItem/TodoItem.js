import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";
import PriorityMarker from "../UI/PriorityMarker/PriorityMarker";

const parseDate = (dateObj) => {
  const date2 = new Date();
  const isOverdue = date2 - dateObj > 0 ? true : false;
  const diffTime = Math.abs(date2 - dateObj);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let midString;
  if (diffDays < 13) {
    midString = diffDays === 1 ? diffDays + " day" : diffDays + " days";
  } else if (diffDays < 30) {
    const numWeeks = Math.floor(diffDays / 7);
    midString = numWeeks === 1 ? numWeeks + " week" : numWeeks + " weeks";
  } else if (diffDays < 365) {
    const numMonths = Math.floor(diffDays / 30);
    midString = numMonths === 1 ? numMonths + " month" : numMonths + " months";
  } else {
    const numYears = Math.floor(diffDays / 365);
    midString = numYears === 1 ? numYears + " year" : numYears + " years";
  }

  let firstString;
  let lastString;
  if (isOverdue) {
    firstString = "Due ";
    lastString = " ago";
  } else {
    firstString = "Due in ";
    lastString = "";
  }

  return firstString + midString + lastString;
};

const TodoItem = (props) => {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  return (
    <Card>
      <li className={classes.main}>
        <div className={classes.leftGroup}>
          <input type="checkbox" className={classes.checkbox}></input>

          <div className={classes.infoContainer}>
            <h3 className={classes.title}>{props.title}</h3>
            <div className={classes.dueDate}>{parseDate(props.dueDate)}</div>
          </div>
        </div>

        <div className={classes.rightGroup}>
          {/* <div className={classes.priority}>
            {"Priority: " + props.priority}
          </div> */}
          <PriorityMarker priority={props.priority} />
          <Button onClick={removeItemHandler}>Remove</Button>
        </div>
      </li>
    </Card>
  );
};

export default TodoItem;
