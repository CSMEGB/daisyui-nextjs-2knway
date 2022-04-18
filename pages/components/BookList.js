import React from 'react';
import Book from './Book.js';

export default class BookList extends React.Component {
  render() {
    return (
      <div class="center gap-8 columns-2">
        <Book title="Help is near" id="1" tags="A,B,C"></Book>
        <Book title="Book Title 2" id="2" tags="A"></Book>
        <Book title="Book Title 3" id="3" tags="A,B,C,D"></Book>
        <Book title="Book Title 4" id="4" tags="A,C"></Book>
      </div>
    );
  }
}
