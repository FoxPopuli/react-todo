import { useState } from "react";

import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";

const DUMMY_DATA = [
  {
    title: "Take out rubbish",
    id: 1,
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 14),
    priority: 1,
    complete: false,
  },
  {
    title: "Do laundry",
    id: 2,
    dateAdded: new Date(),
    dueDate: new Date(2023, 9, 12),
    priority: 2,
    complete: false,
  },
  {
    title: "Cook dinner",
    id: 3,
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 15),
    priority: 3,
    complete: false,
  },
];

const HomePage = (props) => {
  const [todoData, setTodoData] = useState(DUMMY_DATA);

  const onRemoveItem = (id) => {
    let newData = todoData.filter((item) => {
      return item.id !== id;
    });

    setTodoData(newData);
  };
  return (
    <section className={classes.home}>
      <h1>Todo List Website</h1>
      <TodoList data={todoData} onRemoveItem={onRemoveItem} />
    </section>
  );
};

export default HomePage;
