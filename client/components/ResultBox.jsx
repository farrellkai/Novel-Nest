import React, { useEffect } from 'react';

const ResultBox = (props) => {
  const { book } = props;
  console.log(book.volumeInfo);
  return (
    <div>
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
    </div>
  );
};

export default ResultBox;
