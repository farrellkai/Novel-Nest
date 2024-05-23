import React from 'react';

const BookCard = ({ bookData }) => {
  const { title, authors } = bookData;
  return <h1>{title}</h1>;
};

export default BookCard;
