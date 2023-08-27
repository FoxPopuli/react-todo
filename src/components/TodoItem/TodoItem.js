import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";
import PriorityMarker from "../UI/PriorityMarker/PriorityMarker";

const parseDate = (dateObj) => {
  const date2 = new Date();
  const isOverdue = date2 - dateObj > 0 ? true : false;
  console.log(isOverdue);
  const diffTime = Math.abs(date2 - dateObj);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (isOverdue) {
    let returnString = "Due ";
    if (diffDays < 13) {
      returnString += diffDays === 1 ? diffDays + " day" : diffDays + " days";
    } else if (diffDays < 30) {
      const numWeeks = Math.floor(diffDays / 7);
      returnString += numWeeks === 1 ? numWeeks + " week" : numWeeks + " weeks";
    } else if (diffDays < 365) {
      const numMonths = Math.floor(diffDays / 30);
      returnString +=
        numMonths === 1 ? numMonths + " month" : numMonths + " months";
    } else {
      const numYears = Math.floor(diffDays / 365);
      returnString += numYears === 1 ? numYears + " year" : numYears + " years";
    }

    return returnString + " ago";
  } else {
    let returnString = "Due in ";
    if (diffDays < 13) {
      returnString += diffDays === 1 ? diffDays + " day" : diffDays + " days";
    } else if (diffDays < 30) {
      const numWeeks = Math.floor(diffDays / 7);
      returnString += numWeeks === 1 ? numWeeks + " week" : numWeeks + " weeks";
    } else if (diffDays < 365) {
      const numMonths = Math.floor(diffDays / 30);
      returnString +=
        numMonths === 1 ? numMonths + " month" : numMonths + " months";
    } else {
      const numYears = Math.floor(diffDays / 365);
      returnString += numYears === 1 ? numYears + " year" : numYears + " years";
    }

    return returnString;
  }
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
