import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ResultBox = (props) => {
  const { book, getSearchData } = props;
  return (
    <Link to="/search" className="page" id="searchPage">
      <div className="resultBox" onClick={() => getSearchData(book)}>
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors}</p>
      </div>
    </Link>
  );
};

export default ResultBox;
