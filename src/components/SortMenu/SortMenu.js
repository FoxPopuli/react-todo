import { capitalize } from "../../helperFunctions";
import classes from "./SortMenu.module.css";

const SortMenu = (props) => {
  const dropdownChangeHandler = (event) => {
    props.sortGroup(event.target.value);
  };
  const options = ["priority", "alpha", "date"];
  return (
    <div>
      <label className={classes.label}>Sort by</label>

      <select onChange={dropdownChangeHandler}>
        {options.map((option) => {
          return <option value={option}>{capitalize(option)}</option>;
        })}
      </select>
    </div>
  );
};

export default SortMenu;
