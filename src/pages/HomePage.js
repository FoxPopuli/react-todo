import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";

const DUMMY_DATA = [
  {
    title: "Take out rubbish",
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 14),
    priority: 1,
    complete: false,
  },
  {
    title: "Do laundry",
    dateAdded: new Date(),
    dueDate: new Date(2023, 9, 12),
    priority: 2,
    complete: false,
  },
  {
    title: "Cook dinner",
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 15),
    priority: 3,
    complete: false,
  },
];

const HomePage = (props) => {
  return (
    <section className={classes.home}>
      <h1>Todo List Website</h1>
      <TodoList data={DUMMY_DATA} />
    </section>
  );
};

export default HomePage;
