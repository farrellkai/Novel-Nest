import React, { useState } from 'react';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);

  const search = () => {
    console.log('searching');
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
    </div>
  );
};

export default Searchbar;
