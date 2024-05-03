import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ResultBox = (props) => {
  const { book, getSearchData } = props;
  const { id, volumeInfo } = book;
  return (
    <Link to="/search" className="page" id="searchPage">
      <div
        className="resultBox"
        onClick={() => getSearchData({ id: id, volumeInfo: volumeInfo })}
      >
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors}</p>
      </div>
    </Link>
  );
};

export default ResultBox;
