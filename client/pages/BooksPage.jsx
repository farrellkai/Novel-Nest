import React from 'react';
import '../style.css';

const BooksPage = (props) => {
  const { loggedIn, user } = props;
  return (
    <div id="booksPage">
      <h1>This is the books page</h1>
    </div>
  );
};

export default BooksPage;
