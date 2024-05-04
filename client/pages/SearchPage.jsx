import React, { useState } from 'react';

const SearchPage = ({ userID, searchData }) => {
  const { id, volumeInfo } = searchData;
  const { title, authors } = volumeInfo;
  console.log(id, title, authors, userID);

  const getBookData = async () => {};

  const addBook = async (statusElement) => {
    try {
      const response = await fetch('api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: userID,
          googleID: id,
          title: title,
          authors: authors,
          status: statusElement,
        }),
      });
      if (!response.ok) throw new Error('Cannot add book data');
      else if (response.ok) {
        console.log('BOOK DATA ADDED');
        //SET UP STATE HANDLING
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

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
