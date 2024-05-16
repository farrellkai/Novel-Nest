import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
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
  for (let book of bookState) {
    books.push(<BookCard key={i} bookData={book} />);
    i++;
  }

  return (
    <div id="booksPage">
      <h1>This is the books page</h1>
      <h2>{bookState.length} books</h2>
      <div>{books}</div>
    </div>
  );
};

export default BooksPage;
