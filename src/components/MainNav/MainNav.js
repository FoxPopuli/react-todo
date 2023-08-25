import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3>React Todo</h3>
      <ul className={classes.list}>
        <li>
          <Link to="/">All Tasks</Link>
        </li>
        <li>
          <Link to="/new-task">Add New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
