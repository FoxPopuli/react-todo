import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import NavDropdown from "../NavDropdown/NavDropdown";

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3 className={classes.logo}>React Todo</h3>
      <ul className={classes.list}>
        <li className={classes.headerLinks}>
          <Link to="/all-tasks">All Tasks</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/all-projects">All Projects</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/login">Login</Link>
        </li>
        <li className={classes.headerLinks}>
          <NavDropdown
            options={[
              {
                value: "Project",
                link: "/new-project",
              },
              {
                value: "Task",
                link: "/new-task",
              },
            ]}
            title="Add New"
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
