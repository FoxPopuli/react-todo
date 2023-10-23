import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
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
        <li>
          <Link to="/react-todo/login">Log in</Link>
        </li>
        <li>
          <Link to="/react-todo/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
