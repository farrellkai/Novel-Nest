import React, { useEffect } from 'react';

const ResultBox = (props) => {
  const { book, stateHandler } = props;
  console.log(book.volumeInfo);
  return (
    <div onClick={stateHandler} className="resultBox">
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
    </div>
  );
};

export default ResultBox;
