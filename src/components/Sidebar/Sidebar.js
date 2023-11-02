import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  const authCtx = useContext(AuthContext);

  const logInLink = (
    <li>
      <Link to="/react-todo/login">Log in</Link>
    </li>
  );

  const signUpLink = (
    <li>
      <Link to="/react-todo/signup">Sign up</Link>
    </li>
  );

  return (
    <nav
      className={`${classes.sidebar} ${
        props.isHidden ? classes.hidden : classes.show
      }`}
    >
      <ul>
        <li>
          <Link to="/react-todo/all-tasks">All Tasks</Link>
        </li>
        <li>
          <Link to="/react-todo/all-projects">All Projects</Link>
        </li>
        <li>
          <Link to="/react-todo/new-project">Add New Project</Link>
        </li>
        <li>
          <Link to="/react-todo/new-task">Add New Task</Link>
        </li>

        {!authCtx.currentUser && logInLink}
        {!authCtx.currentUser && signUpLink}
      </ul>
    </nav>
  );
};

export default Sidebar;
