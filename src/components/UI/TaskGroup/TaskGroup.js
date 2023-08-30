import TodoList from "../../TodoList/TodoList";

const TaskGroup = (props) => {
  // User specified sorting

  let arrClone = [...props.tasks];
  let sortedTasks;
  switch (props.sortBy) {
    case "alpha":
      // spread operater to avoid mutating original array
      sortedTasks = arrClone.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
      break;
    case "priority":
      sortedTasks = arrClone.sort((a, b) => {
        const priorityA = a.prority;
        const priorityB = b.prority;
        return priorityA < priorityB ? -1 : priorityA > priorityB ? 1 : 0;
      });
      break;
    case "date":
      sortedTasks = arrClone.sort((a, b) => {
        const dateA = a.dueDate;
        const dateB = b.dueDate;
        return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
      });
      break;
    default:
      sortedTasks = arrClone.sort((a, b) => {
        const priorityA = a.prority;
        const priorityB = b.prority;
        return priorityA < priorityB ? -1 : priorityA > priorityB ? 1 : 0;
      });
      break;
  }
  console.log(sortedTasks);

  return (
    <div>
      <h3>{props.groupTitle}</h3>
      <TodoList tasks={sortedTasks} />
    </div>
  );
};

export default TaskGroup;
