import classes from "./DropdownMenu.module.css";
import { useState, useEffect, useRef } from "react";

import { mergeStyles } from "../../../helperFunctions";
const DropdownMenu = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [currentOption, setCurrentOption] = useState(props.default);
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
    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  let activeClass = mergeStyles(props.styles, classes);

  const showDropdownHandler = () => setIsActive(!isActive);

  const selectOptionHandler = (e) => {
    setCurrentOption(e.target.textContent);
    setIsActive(false);
    props.onDropdownChange(e.target.textContent);
  };
  return (
    <div className={activeClass.dropdown}>
      <div className={activeClass.label}>{props.label}</div>
      <div>
        <div
          onClick={showDropdownHandler}
          className={`${activeClass.currentOption} ${
            isActive ? activeClass.open : ""
          }`}
          ref={btnRef}
        >
          <span>{currentOption}</span>
          <i
            className={`${activeClass.arrow} ${
              isActive ? activeClass.down : activeClass.right
            }`}
          ></i>
        </div>
        <ul
          className={`${activeClass.container} ${
            !isActive ? activeClass.hidden : ""
          }`}
        >
          {props.options.map((option) => {
            return (
              <li
                onClick={selectOptionHandler}
                value={option}
                key={option}
                className={activeClass.listItem}
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
