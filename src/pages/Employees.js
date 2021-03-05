import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import API from "../utils/API";
import SearchFilter from "../components/SearchFilter";
import Sorter from "../components/Sorter/index";

// add components - Header, Body,
function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // upon page load, call method to get employees
  useEffect(() => {
    getEmployees();
  }, []);

  // call API function to get employees
  const getEmployees = () => {
    API.getEmployees()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log("Error: " + err));
  };

  // handle input for search
  const handleInputChange = (event) => {
    // console.log(event);
    const { value } = event.target;
    setSearch(value);
  };

  // handle drop down for sort
  const handleSelect = (sortType) => {
    // console.log("Sort: " + sortType);
    setSort(sortType);
    // console.log("sort: " + sort);
    let sortedEmployees;
    switch (sortType) {
      case "firstNameAZ":
        sortedEmployees = employees.sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
        setEmployees(sortedEmployees);
        break;

      case "firstNameZA":
        sortedEmployees = employees.sort((a, b) =>
          b.name.first.localeCompare(a.name.first)
        );
        setEmployees(sortedEmployees);
        break;

      case "lastNameAZ":
        sortedEmployees = employees.sort((a, b) =>
          a.name.last.localeCompare(b.name.last)
        );
        setEmployees(sortedEmployees);
        break;

      case "lastNameZA":
        sortedEmployees = employees.sort((a, b) =>
          b.name.last.localeCompare(a.name.last)
        );
        setEmployees(sortedEmployees);
        break;

        default:
            break;
    }
  };

  return (
    <div className="container">
      <Header />
      <SearchFilter handleInputChange={handleInputChange} />
      <Sorter handleSelect={handleSelect} />
      <Body employees={employees} search={search} />
    </div>
  );
}

export default Employees;
