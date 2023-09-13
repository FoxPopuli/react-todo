import DevButtons from "../components/DevButtons/DevButtons";
import classes from "./GenericErrorPage.module.css";
const GenericErrorPage = (props) => {
  return (
    <div className={classes.main}>
      <h1 className={classes.errorText}>Something went wrong!</h1>
      <DevButtons />
    </div>
  );
};

export default GenericErrorPage;
