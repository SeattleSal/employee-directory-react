import "./index.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Sorter({handleSelect}) {

  return (
    <DropdownButton
      alignRight
      title="Sort by name"
      id="dropdown-menu-align-right"
      name="sort"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="firstNameAZ">First Name (A - Z)</Dropdown.Item>
      <Dropdown.Item eventKey="firstNameZA">First Name (Z - A)</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="lastNameAZ">Last Name (A - Z)</Dropdown.Item>
      <Dropdown.Item eventKey="lastNameZA">Last Name (Z - A)</Dropdown.Item>
    </DropdownButton>
  );
}

export default Sorter;
