import classes from "./NavDropdown.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const NavDropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const btnRef = useRef();
  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.composedPath()[0] !== btnRef.current &&
        e.composedPath()[1] !== btnRef.current
      ) {
        setIsActive(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const showDropdownHandler = () => {
    setIsActive(!isActive);
  };

  const selectOptionHandler = () => {
    setIsActive(false);
  };
  return (
    <div className={classes.dropdown}>
      <div onClick={showDropdownHandler} className={classes.title} ref={btnRef}>
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
