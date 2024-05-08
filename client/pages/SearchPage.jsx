import React, { useState } from 'react';

const SearchPage = ({ userID, searchData }) => {
  const { id, volumeInfo } = searchData;
  const { title, authors } = volumeInfo;
  console.log(id, title, authors, userID);

  const getBookStatus = async () => {
    try {
      const response = await fetch(
        `api/book/book-status?userID=${userID}&googleID=${id}`
      );
      if (!response.ok) throw new Error('Cannot get book data');
      else if (response.ok) {
        const data = response.json();
        console.log(data);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

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
      <button onClick={() => getBookStatus()}>Get Book Status</button>
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a onClick={() => addBook('want to read')}>Want to Read</a>
        <a onClick={() => addBook('currently reading')}>Currently Reading</a>
        <a onClick={() => addBook('read')}>Read</a>
      </div>
    </div>
  );
};

export default SearchPage;
