import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
import { sortGroup } from "../../../helperFunctions";
import { useContext } from "react";
import TaskContext from "../../../store/task-context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Card from "../Card/Card";
import Arrows from "../Arrows/Arrows";

const TaskGroup = (props) => {
  const sortedTasks = sortGroup(props.tasks, props.sortBy);
  const taskCtx = useContext(TaskContext);

  const changeGroupSortHandler = (sortString) => {
    taskCtx.setGroupSort(props.groupId, sortString);
  };

  return (
    <div>
      <Card>
        <div className={classes.taskGroup}>
          <div className={classes.titleContainer}>
            <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
            <DropdownMenu
              label="Sort by "
              currentOption={props.sortBy}
              options={["Priority", "ABC", "Date"]}
              onDropdownChange={changeGroupSortHandler}
            />
          </div>

          <TodoList tasks={sortedTasks} />
        </div>
      </Card>
    </div>
  );
};

export default TaskGroup;
