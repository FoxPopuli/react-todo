import classes from "./Button.module.css";

const Button = (props) => {
  let theme;
  switch (props.theme) {
    case "light":
      theme = classes.lightTheme;
      break;
    case "blue":
      theme = classes.blueTheme;
      break;
    default:
      theme = classes.blueTheme;
  }

  return (
    <button className={theme} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
