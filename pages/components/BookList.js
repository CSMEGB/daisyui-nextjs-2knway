import React from 'react';
import Book from './Book.js';

export default class BookList extends React.Component {
  render() {
    return (
      <div class="flex flex-wrap md:flex-wrap">
        <Book title="Help is near" id="1" tags="A,B,C"></Book>
        <div class="divider gap-8" />
        <Book title="Book Title 2" id="2" tags="A"></Book>
        <div class="divider gap-8" />
        <Book title="Book Title 3" id="3" tags="A,B,C,D"></Book>
        <div class="divider gap-8 padding-2" />
        <Book title="Book Title 4" id="4" tags="A,C"></Book>
      </div>
    );
  }
}
