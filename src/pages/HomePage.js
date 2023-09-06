import DropdownMenu from "../components/UI/DropdownMenu/DropdownMenu";
import "react-dropdown/style.css";
const HomePage = (props) => {
  const logDropdownValue = (value) => {
    console.log(value);
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
