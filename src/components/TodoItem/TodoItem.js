import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";
import PriorityMarker from "../UI/PriorityMarker/PriorityMarker";
import Checkbox from "../UI/Checkbox/Checkbox";

import helperFunctions from "../../helperFunctions";

const TodoItem = (props) => {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  const checkboxHandler = () => {
    props.onMarkDone(props.id);
  };

  return (
    <Card>
      <li className={classes.main}>
        <div className={classes.leftGroup}>
          <Checkbox onClick={checkboxHandler} />
          <div className={classes.infoContainer}>
            <h3
              className={props.complete ? classes.titleChecked : classes.title}
            >
              {props.title}
            </h3>
            <i
              className={
                props.complete ? classes.dueDateChecked : classes.dueDate
              }
            >
              {helperFunctions.parseDate(props.dueDate)}
            </i>
          </div>
        </div>

        <div className={classes.rightGroup}>
          <PriorityMarker priority={props.priority} />
          <Button onClick={removeItemHandler}>Remove</Button>
        </div>
      </li>
    </Card>
  );
};

export default TodoItem;
