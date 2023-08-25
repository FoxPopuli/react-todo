import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3>React Todo</h3>
      <ul>
        <li>All Tasks</li>
        <li>Add New</li>
      </ul>
    </nav>
  );
};

export default MainNav;
