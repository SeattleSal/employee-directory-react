// used react-bootstrap for drop down for sorter
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Sorter({ handleSelect }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <DropdownButton
          alignRight
          title="Sort by name"
          id="dropdown-menu-align-right"
          name="sort"
          variant="info"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="firstNameAZ" >
            First Name (A - Z)
          </Dropdown.Item>
          <Dropdown.Item eventKey="firstNameZA">
            First Name (Z - A)
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="lastNameAZ">Last Name (A - Z)</Dropdown.Item>
          <Dropdown.Item eventKey="lastNameZA">Last Name (Z - A)</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default Sorter;
