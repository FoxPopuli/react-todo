import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todo-item__main">
      <div className="todo-item__checkmark"></div>
      <div className="todo-item__title-card">{props.title}</div>
      <div className="todo-item__tag"></div>
    </div>
  );
};

export default TodoItem;
