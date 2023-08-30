import TodoList from "../TodoList/TodoList";

const Project = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <TodoList tasks={props.tasks} />
    </div>
  );
};

export default Project;
