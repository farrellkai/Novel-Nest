import React from 'react';

const BookCard = ({ bookData }) => {
  const { title } = bookData;
  return <h1>{title}</h1>;
};

export default BookCard;
