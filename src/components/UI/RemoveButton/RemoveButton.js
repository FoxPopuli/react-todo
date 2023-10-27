import classes from "./RemoveButton.module.css";
import xButton from "../../../img/x-button-30.svg";

const RemoveButton = (props) => {
  const onClickHandler = () => {
    console.log("Remove button clicked!");
    props.removeItem();
  };
  return (
    <div className={classes.buttonContainer}>
      {/* <div className={classes.button} onClick={onClickHandler}></div> */}
      <img
        src={xButton}
        onClick={onClickHandler}
        className={classes.button}
      ></img>
    </div>
  );
};

export default RemoveButton;
