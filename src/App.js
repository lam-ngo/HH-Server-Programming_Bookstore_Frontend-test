import React, { Component } from 'react';
import ListAllBooks from './component_list/Listing';
import booklist from './data';
import './App.css';

class App extends Component {



  state = {
    booklist: booklist
  };

  /*
  //life-cycle method to fire the function: get data from backend API
  componentDidMount() {
    this.getBooksFromServer();
    console.log(this.state);
  }

  // get data from backend API

  getBooksFromServer() {
      fetch('https://lamngo-bookstore.herokuapp.com/books')
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              booklist: responseData._embedded,
          });
      });
  }
  */

  render() {

    var bookListingHandle = this.state.booklist.map(book =>
      <ListAllBooks key={book.id} book={book} />
    );
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>ISBN</th>
              <th>Price</th>
            </tr>
          </tbody>

          {bookListingHandle}
        </table>
      </div>
    );
  }
}

export default App;
