import classes from "./DueDate.module.css";
import { parseDate } from "../../helperFunctions";

const DueDate = (props) => {
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
