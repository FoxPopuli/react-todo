import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
import { sortGroup } from "../../../helperFunctions";
import { useContext, useState } from "react";
import TaskContext from "../../../store/task-context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Card from "../Card/Card";

const TaskGroup = (props) => {
  const taskCtx = useContext(TaskContext);

  const [isOpen, setIsOpen] = useState(true);
  const sortedTasks = sortGroup(props.tasks, props.sortBy);

  const changeGroupSortHandler = (sortString) => {
    taskCtx.setGroupSort(props.groupId, sortString);
  };

  const toggleCollapsedHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Card>
        <div className={classes.taskGroup}>
          <div
            className={`${classes.titleContainer} ${
              !isOpen ? classes.hidden : ""
            }`}
          >
            <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
            <DropdownMenu
              label="Sort by "
              currentOption={props.sortBy}
              options={["Priority", "ABC", "Date"]}
              onDropdownChange={changeGroupSortHandler}
            />
          </div>

          <TodoList tasks={sortedTasks} isHidden={!isOpen} />
          <div
            className={`${classes.toggleButton}`}
            onClick={toggleCollapsedHandler}
          >
            <div
              className={`${classes.arrow} ${
                isOpen ? classes.up : classes.down
              }`}
            ></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskGroup;
