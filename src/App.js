import React, { Component } from 'react';
import ListAllBooks from './component_list/Listing';
import './App.css';

class App extends Component {

  state = {
    booklist: []
  };

  //life-cycle method to fire the function: get data from backend API
  componentDidMount() {
    this.getBooksFromServer();
  }

  // get data from backend API
  getBooksFromServer() {
      fetch('http://localhost:8080/api/students')
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              students: responseData._embedded.students,
          });
      });
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
