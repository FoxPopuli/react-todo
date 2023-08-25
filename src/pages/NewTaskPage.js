import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import classes from "./NewTaskPage.module.css";
const NewTaskPage = () => {
  return (
    <section className={classes.main}>
      <h1>Todo List Website</h1>

      <NewTaskForm />
    </section>
  );
};

export default NewTaskPage;
