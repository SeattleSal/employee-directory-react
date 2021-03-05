import "./index.css"

function Sorter() {
  return (
  <div className = "form-group">
    <label htmlFor="sort">Sort by...</label>
    <select name="sort" id="sort">
      <option value="sortFNameAZ">First Name (A - Z)</option>
      <option value="sortFNameZA">First Name (Z - A)</option>
      <option value="sortLNameAZ">Last Name (A - Z)</option>
      <option value="sortLNameZA">Last Name (Z - A)</option>
    </select>
  </div>

  );
}

export default Sorter;
