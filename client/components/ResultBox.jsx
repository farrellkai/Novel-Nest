import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from './modals/SearchModal';

const ResultBox = (props) => {
  const { book, getSearchData } = props;
  console.log(book.volumeInfo);
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
