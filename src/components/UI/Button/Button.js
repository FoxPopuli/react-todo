import classes from "./Button.module.css";

const Button = (props) => {
  let theme;
  switch (props.theme) {
    case "light":
      theme = classes.lightTheme;
      break;
    case "blue":
    default:
      theme = classes.blueTheme;
      break;
  }

  return (
    <button className={theme} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
