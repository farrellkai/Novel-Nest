import React from 'react';

const SearchPage = (props) => {
  console.log(props);
  return (
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a>Want to Read</a>
        <a>Currently Reading</a>
        <a>Read</a>
      </div>
    </div>
  );
};

export default SearchPage;
