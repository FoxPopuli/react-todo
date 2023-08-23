import "./TodoItem.css";
import SquareDate from "../SquareDate/SquareDate";

const TodoItem = (props) => {
  return (
    <div className="todo-item__main">
      <div className="todo-item__checkmark"></div>
      <div className="todo-item__title-card">{props.title}</div>
      <SquareDate className="s" date={props.date} />
      <div className="todo-item__tag"></div>
    </div>
  );
};

export default TodoItem;
