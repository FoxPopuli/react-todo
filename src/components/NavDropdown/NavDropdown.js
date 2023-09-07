import classes from "./NavDropdown.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavDropdown = (props) => {
  const [isActive, setIsActive] = useState(false);

  const showDropdownHandler = () => {
    setIsActive(!isActive);
  };

  const selectOptionHandler = (e) => {
    setIsActive(false);
  };
  return (
    <div className={classes.dropdown}>
      <div onClick={showDropdownHandler} className={classes.currentOption}>
        <span>{props.title}</span>
        <i
          className={`${classes.arrow} ${
            isActive ? classes.down : classes.right
          }`}
        ></i>
      </div>

      <ul
        className={`${classes.container} ${!isActive ? classes.hidden : null}`}
      >
        {props.options.map((option) => {
          return (
            <li
              onClick={selectOptionHandler}
              value={option.value}
              key={option.value}
            >
              <Link to={option.link}>{option.value}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDropdown;
