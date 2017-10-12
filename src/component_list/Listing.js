import React, { Component } from 'react';

class ListAllBooks extends Component {

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.book.id}</td>
          <td>{this.props.book.title}</td>
          <td>{this.props.book.author}</td>
          <td>{this.props.book.year}</td>
          <td>{this.props.book.isbn}</td>
          <td>{this.props.book.price}</td>
        </tr>
      </tbody>
    );
  }
}

export default ListAllBooks;
