import classes from "./TitleContainer.module.css";
import DueDate from "../DueDate/DueDate";

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
      <DueDate complete={props.complete} dueDate={props.dueDate} />
    </div>
  );
};

export default TitleContainer;
