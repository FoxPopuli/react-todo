import classes from "./Button.module.css";

const Button = (props) => {
  let subClass;
  switch (props.theme) {
    case "light":
      subClass = classes.light;
      break;
    case "blue":
    default:
      subClass = classes.blue;
      break;
  }

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
