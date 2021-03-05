import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import API from './utils/API';
import Filters from './components/Filters';
import Sorter from './components/Sorter/index';

// add components - Header, Body, 
class App extends React.Component {
  state = {
    employees: [],
    search: ""
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

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

  filterEmployees = () => {
    // filter employees based on search string
    const result = this.employees.filter(employee => employee.name.first.contains(this.search));
    console.log(result)
    this.setState({
      employees: result
    })

  }

  render() {
    return (
        <div className="container">
          <Header />
          <Filters handleInputChange={this.handleInputChange}/>
          <p>  {this.state.search} </p>
          {/* {this.state.search ? 
            const filteredemployees = this.state.employees.filter(employee => {
            employee.name.first.contains(this.state.search)}
            )} */}
          <Sorter />
          <Body employees={this.state.employees} search={this.state.search}/>
        </div>
      );
    }
}

export default App;
