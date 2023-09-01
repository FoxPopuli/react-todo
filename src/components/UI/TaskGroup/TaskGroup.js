import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";

import helperFunctions from "../../../helperFunctions";

const TaskGroup = (props) => {
  const sortedTasks = helperFunctions.sortGroup(props.tasks, props.sortBy);

  return (
    <div className={classes.taskGroup}>
      <h3>{props.groupTitle}</h3>
      <TodoList tasks={sortedTasks} />
    </div>
  );
};

export default TaskGroup;
