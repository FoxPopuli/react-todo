import classes from "./ProfileDropdown.module.css";
import { useContext, useState, useRef, useEffect } from "react";
import AuthContext from "../../store/auth-context";

const ProfileDropdown = (props) => {
  const authCtx = useContext(AuthContext);
  const btnRef = useRef();

  const [isActive, setIsActive] = useState(false);

  const logoutHandler = () => authCtx.logout();

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

  return (
    <div className={`${classes.main} ${!isActive ? classes.hidden : ""}`}>
      <p>Dropdown!</p>
      <button onClick={logoutHandler} ref={btnRef}>
        Log out
      </button>
    </div>
  );
};

export default ProfileDropdown;
