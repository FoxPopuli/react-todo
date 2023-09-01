import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
import SortMenu from "../../SortMenu/SortMenu";
import { sortGroup } from "../../../helperFunctions";

const TaskGroup = (props) => {
  const sortedTasks = sortGroup(props.tasks, props.sortBy);

  //   const sortString = () => {};
  return (
    <div className={classes.taskGroup}>
      <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
      <SortMenu />
      <TodoList tasks={sortedTasks} />
    </div>
  );
};

export default TaskGroup;
