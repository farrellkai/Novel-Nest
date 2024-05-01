import React, { useState } from 'react';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);

  const search = async () => {
    const query = document.getElementById('searchbar').innerText;
    console.log(query);
    try {
    } catch {}
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
