import { capitalize } from "../../../helperFunctions";
import classes from "./DropdownMenu.module.css";
import { useState } from "react";
const DropdownMenu = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [currentOption, setCurrentOption] = useState(props.options[0]);

  const showDropdownHandler = () => {
    setIsActive(!isActive);
  };

  const selectOptionHandler = (e) => {
    setCurrentOption(e.target.textContent);
    setIsActive(false);
    props.onDropdownChange(e.target.textContent);
  };
  return (
    <div className={classes.dropdown}>
      <div className={classes.label}>{props.label}</div>
      <div onClick={showDropdownHandler} className={classes.title}>
        {currentOption}
      </div>

      <ul className={isActive ? classes.containerActive : classes.container}>
        {props.options.map((option) => {
          return (
            <li
              onClick={selectOptionHandler}
              value={option}
              key={option}
              className={classes.listItem}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
