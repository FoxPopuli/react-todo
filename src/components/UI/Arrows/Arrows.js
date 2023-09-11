import classes from "./Arrows.module.css";
const Arrows = (props) => {
  const clickUpHandler = () => {
    props.onUpClick(props.projId);
  };

  const clickDownHandler = () => {
    props.onDownClick(props.projId);
  };

  return (
    <div className={classes.main}>
      <div
        className={`${classes.arrow} ${classes.up}`}
        onClick={clickUpHandler}
      ></div>
      <div
        className={`${classes.arrow} ${classes.down}`}
        onClick={clickDownHandler}
      ></div>
    </div>
  );
};

export default Arrows;
