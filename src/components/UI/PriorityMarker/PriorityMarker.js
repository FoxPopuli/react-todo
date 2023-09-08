import classes from "./PriorityMarker.module.css";
import { mergeStyles } from "../../../helperFunctions";
const PriorityMarker = (props) => {
  // 1 - Low
  // 2 - High
  // 3 - Urgent

  let mainClass = props.styles ? mergeStyles(props.styles, classes) : classes;

  let subClass;
  switch (+props.priority) {
    case 2:
      subClass = mainClass.high;
      break;
    case 3:
      subClass = mainClass.urgent;
      break;
    case 1:
    default:
      subClass = mainClass.low;
      break;
  }

  return (
    <div
      className={`${mainClass.marker} ${subClass} ${
        props.checked ? mainClass.checked : null
      }`}
    ></div>
  );
};

export default PriorityMarker;
