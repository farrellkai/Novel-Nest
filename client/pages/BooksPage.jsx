import React from 'react';
import '../style.css';

const BooksPage = (props) => {
  const { loggedIn, userID } = props;

  const getUserBooks = async () => {
    try {
      const response = await fetch(`/api/book/all-books/${userID}`);
    } catch (err) {}
  };

  return (
    <div id="booksPage">
      <h1>This is the books page</h1>
    </div>
  );
};

export default BooksPage;
