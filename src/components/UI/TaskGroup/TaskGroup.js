import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";

import { sortGroup } from "../../../helperFunctions";

const TaskGroup = (props) => {
  const sortedTasks = sortGroup(props.tasks, props.sortBy);

  return (
    <div className={classes.taskGroup}>
      <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
      <TodoList tasks={sortedTasks} />
    </div>
  );
};

export default TaskGroup;
