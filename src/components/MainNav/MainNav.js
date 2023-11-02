import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import NavDropdown from "../NavDropdown/NavDropdown";
import ModalContext from "../../store/modal-context";
import AuthContext from "../../store/auth-context";
import burgerIcon from "../../img/menu-icon.svg";

import { useContext } from "react";

const MainNav = () => {
  const ctx = useContext(ModalContext);
  const authCtx = useContext(AuthContext);

  const burgerClickHandler = () => ctx.openSidebar();
  const signOutHandler = () => authCtx.signUserOut();

  const signUpLink = (
    <li className={`${classes.headerLinks} ${classes.authLinks}`}>
      <Link to="/react-todo/signup">Sign up</Link>
    </li>
  );

  const logInLink = (
    <li className={`${classes.headerLinks} ${classes.authLinks}`}>
      <Link to="/react-todo/login">Log in</Link>
    </li>
  );

  const profileIcon = (
    <li className={`${classes.headerLinks} ${classes.authLinks}`}>
      {authCtx.currentUser && <p>Welcome, {authCtx.currentUser.email}!</p>}
    </li>
  );

  const signOutButton = (
    <li className={`${classes.headerLinks} ${classes.authLinks}`}>
      {authCtx.currentUser && <p onClick={signOutHandler}>Sign out</p>}
    </li>
  );

  return (
    <nav className={classes.mainNav}>
      <h3 className={classes.logo}>React To-Do</h3>
      <ul className={classes.centerAlign}>
        <li className={classes.headerLinks}>
          <Link to="/react-todo/all-tasks">All Tasks</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/react-todo/all-projects">All Projects</Link>
        </li>

        <li className={classes.headerLinks}>
          <NavDropdown
            options={[
              {
                value: "Project",
                link: "/react-todo/new-project",
              },
              {
                value: "Task",
                link: "/react-todo/new-task",
              },
            ]}
            title="Add New"
          />
        </li>
      </ul>
      <ul className={classes.rightAlign}>
        {!authCtx.currentUser && logInLink}
        {!authCtx.currentUser && signUpLink}
        {authCtx.currentUser && profileIcon}
        {authCtx.currentUser && signOutButton}
        <li className={`${classes.burgerMenu}`} onClick={burgerClickHandler}>
          <img
            src={burgerIcon}
            className={classes.invert}
            alt="Sidebar Button"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
