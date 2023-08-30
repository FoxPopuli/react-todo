import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3>
        <Link to="/">React Todo</Link>
      </h3>
      <ul className={classes.list}>
        <li>
          <Link to="/all-projects">All Projects</Link>
        </li>
        <li>
          <Link to="/new-task">Add New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
