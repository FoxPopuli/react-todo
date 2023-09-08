import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <div
      className={`${classes.checkbox} ${
        props.isChecked ? classes.checked : null
      }`}
      onClick={clickHandler}
    ></div>
  );
};

export default Checkbox;
