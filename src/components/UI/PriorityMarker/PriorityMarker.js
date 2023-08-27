import classes from "./PriorityMarker.module.css";

const PriorityMarker = (props) => {
  // 1 - Low
  // 2 - High
  // 3 - Urgent

  let mainClass;

  switch (+props.priority) {
    case 1:
      mainClass = classes.low;
      break;
    case 2:
      mainClass = classes.high;
      break;
    case 3:
      mainClass = classes.urgent;
      break;
    default:
      mainClass = classes.low;
      break;
  }

  return <div className={mainClass}></div>;
};

export default PriorityMarker;
