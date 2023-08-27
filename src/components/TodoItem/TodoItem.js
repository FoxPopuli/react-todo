import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";

const parseDate = (dateObj) => {
  console.log("Date stuff");
  console.log(dateObj.getDate());

  return dateObj.toString().split("").splice(4, 11).join("");
};

const parseDate2 = (dateObj) => {
  const date2 = new Date();
  const diffTime = Math.abs(date2 - dateObj);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffTime + " milliseconds");
  console.log(diffDays + " days");

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
    returnString += Math.floor(diffDays / 365) + " years";
  }

  return returnString;
};

const TodoItem = (props) => {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  parseDate2(props.dueDate);

  return (
    <Card>
      <li className={classes.main}>
        <input type="checkbox" className={classes.checkbox}></input>
        <h3 className={classes.title}>{props.title}</h3>

        <div className={classes.infoContainer}>
          <div className={classes.priority}>
            {"Priority: " + props.priority}
          </div>
          <div className={classes.dueDate}>{parseDate2(props.dueDate)}</div>
        </div>
        {/* <button onClick={removeItemHandler}>Remove</button> */}
        <Button onClick={removeItemHandler}>Remove</Button>
      </li>
    </Card>
  );
};

export default TodoItem;
