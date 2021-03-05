import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import API from './utils/API';
import SearchFilter from './components/SearchFilter';
import Sorter from './components/Sorter/index';

// add components - Header, Body, 
class App extends React.Component {
  state = {
    employees: [],
    search: "",
    sort: ""
  }

  handleInputChange = event => {
    console.log(event)
    const {name, value} = event.target;
    this.setState({ 
      ...this.state,
      [name]: value
    })
  };

  handleSelect = event => {
    console.log(event)
    this.setState({
      ...this.state, 
      sort: event});
      this.sortEmployees();

  }

  // upon page load, call method to get employees
  componentDidMount() {
    this.getEmployees();
  }

  // call API function to get employees
  getEmployees = () => {
    API.getEmployees()
    .then(res => this.setState( { employees: res.data.results}))
    .catch(err => console.log('Error: ' + err));
  }

  sortEmployees = () => {
    // add other sorts by this.state.sort
    console.log(this.state.sort)
    const sortedEmployees = this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
    this.setState({
      ...this.state,
      employees: sortedEmployees
    })
  }


  render() {
    return (
        <div className="container">
          <Header />
          <SearchFilter handleInputChange={this.handleInputChange}/>
          <Sorter handleSelect={this.handleSelect} />
          <Body employees={this.state.employees} search={this.state.search}/>
        </div>
      );
    }
}

export default App;
