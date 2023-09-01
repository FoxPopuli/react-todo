import { capitalize } from "../../helperFunctions";
import classes from "./SortMenu.module.css";

const SortMenu = (props) => {
  const dropdownChangeHandler = (event) => {
    props.sortBy(event.target.value);
  };
  return (
    <div>
      <label className={classes.label}>Sort by</label>

      <select onChange={dropdownChangeHandler}>
        {props.options.map((option) => {
          return <option value={option}>{capitalize(option)}</option>;
        })}
      </select>
    </div>
  );
};

export default SortMenu;
