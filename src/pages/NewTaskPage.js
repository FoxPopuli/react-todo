import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import classes from "./NewTaskPage.module.css";
const NewTaskPage = (props) => {
  return (
    <section className={classes.main}>
      <h1>Todo List Website</h1>

      <NewTaskForm onAddTask={props.onAddTask} />
    </section>
  );
};

export default NewTaskPage;
