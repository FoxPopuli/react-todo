import classes from "./ProfileButton.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import blankProfilePic from "../../img/blank-profile-pic.svg";

const ProfileButton = () => {
  const authCtx = useContext(AuthContext);

  const profilePicSrc = authCtx.currentUser.photoURL
    ? authCtx.currentUser.photoURL
    : blankProfilePic;

  return (
    <div className={classes.main}>
      <img src={profilePicSrc} className={classes.profileImage}></img>
    </div>
  );
};

export default ProfileButton;
