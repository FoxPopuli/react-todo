import TodoList from "../../TodoList/TodoList";
import classes from "./TaskGroup.module.css";
const TaskGroup = (props) => {
  // User specified sorting

  // spread operater to avoid mutating original array
  let arrClone = [...props.tasks];
  let sortedTasks;
  switch (props.sortBy) {
    case "alpha":
      sortedTasks = arrClone.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
      break;
    case "priority":
      sortedTasks = arrClone.sort((a, b) => a.priority - b.priority);
      break;
    case "date":
    default:
      sortedTasks = arrClone.sort((a, b) => a.dueDate - b.dueDate);
      break;
  }

  return (
    <div className={classes.taskGroup}>
      <h3>{props.groupTitle}</h3>
      <TodoList tasks={sortedTasks} />
    </div>
  );
};

export default TaskGroup;
