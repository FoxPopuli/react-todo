import classes from "./ProfileButton.module.css";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import blankProfilePic from "../../img/blank-profile-pic.svg";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const ProfileButton = () => {
  const authCtx = useContext(AuthContext);

  const [isDropdownHidden, setIsDropdownHidden] = useState(true);
  const toggleDropdown = () => {
    setIsDropdownHidden(() => !isDropdownHidden);
    console.log("isHidden: ", isDropdownHidden);
  };

  const profilePicSrc = authCtx.currentUser.photoURL
    ? authCtx.currentUser.photoURL
    : blankProfilePic;

  return (
    <div className={classes.main}>
      <img
        src={profilePicSrc}
        className={classes.profileImage}
        onClick={toggleDropdown}
      ></img>
      <ProfileDropdown isHidden={isDropdownHidden} />
    </div>
  );
};

export default ProfileButton;
