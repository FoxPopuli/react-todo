import classes from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const clickHandler = () => {
    props.onClick();
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  return (
    <div
      className={isChecked ? classes.checked : classes.unchecked}
      onClick={clickHandler}
    ></div>
  );
};

export default Checkbox;
