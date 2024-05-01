import React, { useState } from 'react';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);
  return (
    <div>
      <input
        id="searchbar"
        type="text"
        onKeyDown={() => {
          setSearching(true);
          console.log(searching);
        }}
      />
    </div>
  );
};

export default Searchbar;
