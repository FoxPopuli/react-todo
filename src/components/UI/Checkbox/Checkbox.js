import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <div
      className={props.isChecked ? classes.checked : classes.unchecked}
      onClick={clickHandler}
    ></div>
  );
};

export default Checkbox;
