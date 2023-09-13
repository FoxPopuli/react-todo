import classes from "./TodoItem.module.css";
import Button from "../UI/Button/Button";
import PriorityMarker from "../UI/PriorityMarker/PriorityMarker";
import Checkbox from "../UI/Checkbox/Checkbox";
import { useContext } from "react";

import TaskContext from "../../store/task-context";
import TitleContainer from "../TitleContainer/TitleContainer";

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
        props.complete ? classes.checked : ""
      }`}
    >
      <li className={`${classes.main} `}>
        <div className={classes.leftGroup}>
          <Checkbox onClick={checkboxHandler} isChecked={props.complete} />
          <TitleContainer
            dueDate={props.dueDate}
            complete={props.complete}
            title={props.title}
          />
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
