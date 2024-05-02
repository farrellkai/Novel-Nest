import React, { useEffect, useState } from 'react';

const ResultBox = (props) => {
  const [searchModal, setSearchModal] = useState(false);
  const { book } = props;
  console.log(book.volumeInfo);
  return (
    <div className="resultBox">
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
    </div>
  );
};

export default ResultBox;
