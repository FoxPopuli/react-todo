import classes from "./PriorityMarker.module.css";

const PriorityMarker = (props) => {
  // 1 - Low
  // 2 - High
  // 3 - Urgent

  let mainClass;
  let priorityString;

  switch (+props.priority) {
    case 1:
      priorityString = "Low";
      mainClass = classes.low;
      break;
    case 2:
      priorityString = "High";
      mainClass = classes.high;
      break;
    case 3:
      priorityString = "Urgent";
      mainClass = classes.urgent;
      break;
    default:
      priorityString = "Low";
      mainClass = classes.low;
      break;
  }

  return <div className={mainClass}></div>;
};

export default PriorityMarker;
