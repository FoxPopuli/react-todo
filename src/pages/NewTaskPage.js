import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import classes from "./NewTaskPage.module.css";
const NewTaskPage = () => {
  return (
    <section className={classes.main}>
      <NewTaskForm />
    </section>
  );
};

export default NewTaskPage;
