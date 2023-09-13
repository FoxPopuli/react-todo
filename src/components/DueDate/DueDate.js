import classes from "./DueDate.module.css";
import { parseDate } from "../../helperFunctions";

const DueDate = (props) => {
  if (!props.dueDate || props.dueDate === "Invalid Date") {
    return <></>;
  }
  return (
    <i
      className={`${classes.dueDate} ${
        props.complete ? classes.checked : null
      }`}
    >
      {parseDate(props.dueDate)}
    </i>
  );
};

export default DueDate;
