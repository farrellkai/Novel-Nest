import React, { useState } from 'react';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);
  return (
    <div>
      <input id="searchbar" type="text" />
    </div>
  );
};

export default Searchbar;
