import DropdownMenu from "../components/UI/DropdownMenu/DropdownMenu";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import classes from "./HomePage.module.css";
const HomePage = (props) => {
  const logDropdownValue = (e) => {
    console.log(e);
    return;
  };
  return (
    <div>
      <DropdownMenu
        options={["Option 1", "Option 2", "Option 3", "Alphabetically"]}
        onDropdownChange={logDropdownValue}
        label="Test dropdown"
      />
    </div>
  );
};

export default HomePage;
