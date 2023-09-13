import classes from "./TitleContainer.module.css";
import { parseDate } from "../../helperFunctions";

const TitleContainer = (props) => {
  return (
    <div className={classes.infoContainer}>
      <h3
        className={`${classes.title} ${
          props.complete ? classes.checked : null
        }`}
      >
        {props.title}
      </h3>
      <i
        className={`${classes.dueDate} ${
          props.complete ? classes.checked : null
        }`}
      >
        {parseDate(props.dueDate)}
      </i>
    </div>
  );
};

export default TitleContainer;
