import React, { useState } from 'react';

const SearchPage = (props) => {
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
