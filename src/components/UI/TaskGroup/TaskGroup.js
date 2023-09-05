import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
import SortMenu from "../../SortMenu/SortMenu";
import { sortGroup } from "../../../helperFunctions";
import { useContext } from "react";
import TaskContext from "../../../store/task-context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const TaskGroup = (props) => {
  const sortedTasks = sortGroup(props.tasks, props.sortBy);

  const taskCtx = useContext(TaskContext);
  const placeholder = (sortString) => {
    console.log(props.groupId);
    taskCtx.setGroupSort(props.groupId, sortString);
  };
  return (
    <div className={classes.taskGroup}>
      <div className={classes.titleContainer}>
        <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
        {/* <SortMenu sortGroup={placeholder} /> */}
        <DropdownMenu
          label="Sort by: "
          options={["Priority", "Alpha", "Date"]}
          onDropdownChange={placeholder}
          // label="Test dropdown"
        />
      </div>

      <TodoList tasks={sortedTasks} />
    </div>
  );
};

export default TaskGroup;
