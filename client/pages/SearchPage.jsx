import React, { useState } from 'react';

const SearchPage = ({ searchData }) => {
  const { id, volumeInfo } = searchData;
  console.log(searchData);
  //const { title, authors } = volumeInfo;
  //console.log(id, title, authors);
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a>Want to Read</a>
        <a>Currently Reading</a>
        <a>Read</a>
      </div>
    </div>
  );
};

export default SearchPage;
