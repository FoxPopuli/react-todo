import classes from "./HomePage.module.css";
import TodoList from "../components/TodoList/TodoList";
const HomePage = (props) => {
  return (
    <section className={classes.home}>
      <h1>Todo List Website</h1>
      <TodoList />
    </section>
  );
};

export default HomePage;
