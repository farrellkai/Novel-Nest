import React, { useState, useEffect } from 'react';
import '../style.css';

const BooksPage = ({ loggedIn, userID }) => {
  const [bookState, setBookState] = useState([]);

  const getUserBooks = async () => {
    try {
      const response = await fetch(`/api/book/all-books/${userID}`);
      const data = await response.json();
      setBookState(data);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    getUserBooks();
  }, []);

  const books = [];
  let i = 0;
  while (i < bookState.length) {
    books.push(bookState[i]);
  }

  return (
    <div id="booksPage">
      <h1>This is the books page</h1>
      <h2>{bookState.length}</h2>
    </div>
  );
};

export default BooksPage;
