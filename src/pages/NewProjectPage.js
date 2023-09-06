import NewProjectForm from "../components/NewProjectForm/NewProjectForm";
import classes from "./NewProjectPage.module.css";
const NewProjectPage = () => {
  return (
    <section className={classes.main}>
      <NewProjectForm />
    </section>
  );
};

export default NewProjectPage;
