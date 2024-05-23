import React from 'react';

const BookCard = ({ bookData }) => {
  const { title, authors } = bookData;
  return (
    <div>
      <h1>{title}</h1>
      <h3>by {authors}</h3>
    </div>
  );
};

export default BookCard;
