import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
import { sortGroup } from "../../../helperFunctions";
import { useContext, useState } from "react";
import TaskContext from "../../../store/task-context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Card from "../Card/Card";
import Button from "../Button/Button";
import DueDate from "../../DueDate/DueDate";
import RemoveButton from "../RemoveButton/RemoveButton";

const TaskGroup = (props) => {
  const taskCtx = useContext(TaskContext);

  const [isOpen, setIsOpen] = useState(true);
  const sortedTasks = sortGroup(props.tasks, props.sortBy);

  const project = taskCtx.data.projects.filter(
    (project) => +project.id === props.groupId
  )[0];

  const changeGroupSortHandler = (sortString) => {
    taskCtx.setGroupSort(project.id, sortString);
  };

  const toggleCollapsedHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const removeProjectHandler = () => {
    taskCtx.removeProject(project.id);
  };

  const dropdown = (
    <DropdownMenu
      label="Sort by "
      default={props.sortBy}
      options={["Priority", "ABC", "Date"]}
      onDropdownChange={changeGroupSortHandler}
    />
  );

  const removeProjectButton = (
    <div className={classes.buttonContainer}>
      {/* <Button theme="blue" onClick={removeProjectHandler}>
        Remove
      </Button> */}
      <RemoveButton removeItem={removeProjectHandler} />
    </div>
  );

  return (
    <div>
      <Card>
        <div className={classes.taskGroup}>
          <div className={`${classes.titleContainer}`}>
            <div>
              <h3 className={classes.groupTitle}>{props.groupTitle}</h3>
              <DueDate dueDate={project.dueDate} />
            </div>
            {/* Don't render remove for General (groupId 0) */}
            {!isOpen && +project.id ? removeProjectButton : dropdown}
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
