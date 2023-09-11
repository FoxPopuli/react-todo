import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";
import PriorityMarker from "../UI/PriorityMarker/PriorityMarker";
import Checkbox from "../UI/Checkbox/Checkbox";
import { useContext } from "react";
import { parseDate } from "../../helperFunctions";

import TaskContext from "../../store/task-context";

const TodoItem = (props) => {
  const taskCtx = useContext(TaskContext);

  const removeItemHandler = () => {
    taskCtx.removeTask(props.id);
  };

  const checkboxHandler = () => {
    taskCtx.toggleComplete(props.id);
  };

  return (
    <div
      className={`${classes.outerContainer} ${
        props.complete ? classes.checked : null
      }`}
    >
      <li className={`${classes.main} `}>
        <div className={classes.leftGroup}>
          <Checkbox onClick={checkboxHandler} isChecked={props.complete} />
          <div className={classes.infoContainer}>
            <h3
              className={`${classes.title} ${
                props.complete ? classes.checked : null
              }`}
            >
              {props.title}
            </h3>
            <i
              className={`${classes.dueDate} ${
                props.complete ? classes.checked : null
              }`}
            >
              {parseDate(props.dueDate)}
            </i>
          </div>
        </div>

        <div className={classes.rightGroup}>
          <PriorityMarker priority={props.priority} />
          <Button onClick={removeItemHandler}>Remove</Button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
