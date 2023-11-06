import classes from "./ProfileButton.module.css";
import { useContext, useState, useEffect, useRef } from "react";
import AuthContext from "../../store/auth-context";
import blankProfilePic from "../../img/blank-profile-pic.svg";

const ProfileButton = () => {
  const [isActive, setIsActive] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.composedPath()[0] !== btnRef.current &&
        e.composedPath()[1] !== btnRef.current
      ) {
        setIsActive(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive);
    console.log("isActive: ", isActive);
  };

  const profilePicSrc = authCtx.currentUser.photoURL
    ? authCtx.currentUser.photoURL
    : blankProfilePic;

  const btnRef = useRef();

  const logoutHandler = () => authCtx.signUserOut();

  return (
    <div className={classes.main}>
      <img
        src={profilePicSrc}
        className={classes.profileImage}
        onClick={toggleDropdown}
        ref={btnRef}
      ></img>
      <div className={`${classes.dropdown} ${!isActive ? classes.hidden : ""}`}>
        <p className={classes.displayName}>
          {authCtx.currentUser.displayName && authCtx.currentUser.displayName}
        </p>

        <p className={classes.email}>
          {authCtx.currentUser.email && authCtx.currentUser.email}
        </p>
        {isActive ? (
          <button
            onClick={logoutHandler}
            className={`${classes.button} ${classes.light}`}
          >
            Log out
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProfileButton;
