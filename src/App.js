import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
// import testUsers from './testdata.json'
import API from './utils/API'

// add components - Header, Body, 
class App extends React.Component {
  state = {
    users: []
  }

  // upon page load, call method to get employees
  componentDidMount() {
    this.getEmployees();
  }

  // call API function to get employees
  getEmployees = () => {
    API.getEmployees()
    .then(res => this.setState( { users: res.data.results}))
    .catch(err => console.log('Error: ' + err));
  }


  render() {
    return (
        <div className="container">
          <Header />
          <Body users={this.state.users}/>
        </div>
      );
    }
}

export default App;
