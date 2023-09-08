import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${
        props.theme === "light" ? classes.light : classes.blue
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
