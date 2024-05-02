import React, { useEffect, useState } from 'react';
import SearchModal from './modals/SearchModal';

const ResultBox = (props) => {
  const [searchModal, setSearchModal] = useState(false);
  const { book, getSearchData } = props;
  console.log(book.volumeInfo);
  return (
    <div
      className="resultBox"
      onClick={() => {
        setSearchModal(true);
        getSearchData(book);
      }}
    >
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
      {searchModal && <SearchModal />}
    </div>
  );
};

export default ResultBox;
