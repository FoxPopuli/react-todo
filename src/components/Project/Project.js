import TaskGroup from "../UI/TaskGroup/TaskGroup";
const Project = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <TaskGroup tasks={props.tasks} />
    </div>
  );
};

export default Project;
