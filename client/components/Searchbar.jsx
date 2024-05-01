import React, { useState } from 'react';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);

  const search = () => {
    console.log('searching');
    setSearching(true);
  };

  return (
    <div>
      <input
        id="searchbar"
        type="text"
        onKeyDown={() => {
          search();
        }}
      />
      <div>{searching ? <h1>Searching</h1> : null}</div>
    </div>
  );
};

export default Searchbar;
