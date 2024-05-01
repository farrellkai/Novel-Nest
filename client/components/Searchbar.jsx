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
      {searching ? <h1>Searching</h1> : null}
    </div>
  );
};

export default Searchbar;
