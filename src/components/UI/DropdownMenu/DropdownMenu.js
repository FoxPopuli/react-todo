import classes from "./DropdownMenu.module.css";
import { useState } from "react";
const DropdownMenu = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [currentOption, setCurrentOption] = useState(props.options[0]);

  //   if (props.styles) classes = props.styles;

  const showDropdownHandler = () => setIsActive(!isActive);

  const selectOptionHandler = (e) => {
    setCurrentOption(e.target.textContent);
    setIsActive(false);
    props.onDropdownChange(e.target.textContent);
  };
  return (
    <div className={classes.dropdown}>
      <div className={classes.label}>{props.label}</div>
      <div>
        <div
          onClick={showDropdownHandler}
          className={`${classes.currentOption} ${
            isActive ? classes.open : null
          }`}
        >
          <span>{currentOption}</span>
          <i
            className={`${classes.arrow} ${
              isActive ? classes.down : classes.right
            }`}
          ></i>
        </div>
        <ul
          className={`${classes.container} ${
            !isActive ? classes.hidden : null
          }`}
        >
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
    </div>
  );
};

export default DropdownMenu;
