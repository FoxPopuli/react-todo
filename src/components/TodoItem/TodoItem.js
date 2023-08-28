import Card from "../UI/Card/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";
import PriorityMarker from "../UI/PriorityMarker/PriorityMarker";
import Checkbox from "../UI/Checkbox/Checkbox";
import { useContext } from "react";
import helperFunctions from "../../helperFunctions";

import TaskContext from "../../store/task-context";

const TodoItem = (props) => {
  const taskCtx = useContext(TaskContext);

  const removeItemHandler = () => {
    taskCtx.removeTask(props.id);
  };

  const checkboxHandler = () => {
    if (props.complete) {
      taskCtx.markTaskIncomplete(props.id);
    } else {
      taskCtx.markTaskComplete(props.id);
    }
    console.log(taskCtx.tasks);
  };

  return (
    <Card>
      <li className={classes.main}>
        <div className={classes.leftGroup}>
          <Checkbox onClick={checkboxHandler} isChecked={props.complete} />
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
