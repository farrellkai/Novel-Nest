import React, { useState } from 'react';
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

  return (
    <div id="booksPage">
      <h1>This is the books page</h1>
      <button onClick={() => getUserBooks()}>get book data</button>
    </div>
  );
};

export default BooksPage;
