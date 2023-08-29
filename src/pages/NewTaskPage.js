import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import classes from "./NewTaskPage.module.css";
const NewTaskPage = (props) => {
  return (
    <section className={classes.main}>
      <NewTaskForm onAddTask={props.onAddTask} />
    </section>
  );
};

export default NewTaskPage;
