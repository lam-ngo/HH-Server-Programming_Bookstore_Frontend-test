import React, { Component } from 'react';
import ListAllBooks from './component_list/Listing';
//import booklist from './data';

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
      fetch('http://localhost:8080/books')
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              booklist: responseData,
          });
      });
  }


  render() {

    var bookListingHandle = this.state.booklist.map(book =>
      <ListAllBooks key={book.id} book={book} />
    );

    return (
      <div className="App">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>ISBN</th>
              <th>Price</th>
            </tr>
          </thead>

          {bookListingHandle}
        </table>
      </div>
    );
  }
}

export default App;
