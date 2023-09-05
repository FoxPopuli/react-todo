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
    // console.log(e.target.textContent);
  };
  return (
    <div className={classes.dropdown}>
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

  //   const dropdownChangeHandler = (event) => {
  //     props.onDropdownChange(event.target.value);
  //   };
  //   return (
  //     <div className={classes.dropdown}>
  //       <label className={classes.label}>{props.title}</label>

  //       <select onChange={dropdownChangeHandler}>
  //         {props.options.map((option) => {
  //           return (
  //             <option value={option} key={option}>
  //               {capitalize(option)}
  //             </option>
  //           );
  //         })}
  //       </select>
  //     </div>
  //   );
};

export default DropdownMenu;
