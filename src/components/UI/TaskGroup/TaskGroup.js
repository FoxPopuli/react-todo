import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
import { sortGroup } from "../../../helperFunctions";
import { useContext, useState } from "react";
import TaskContext from "../../../store/task-context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Card from "../Card/Card";
import Button from "../Button/Button";

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

  const removeProjectHandler = () => {
    taskCtx.removeProject(props.groupId);
  };

  const dropdown = (
    <DropdownMenu
      label="Sort by "
      default={props.sortBy}
      options={["Priority", "ABC", "Date"]}
      onDropdownChange={changeGroupSortHandler}
    />
  );

  // throw new Error("An error");

  const removeProjectButton = (
    <div className={classes.buttonContainer}>
      <Button theme="blue" onClick={removeProjectHandler}>
        Remove
      </Button>
    </div>
  );

  return (
    <div>
      <Card>
        <div className={classes.taskGroup}>
          <div className={`${classes.titleContainer}`}>
            <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
            {/* Don't render remove for General (groupId 0) */}
            {!isOpen && +props.groupId ? removeProjectButton : dropdown}
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
