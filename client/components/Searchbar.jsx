import React, { useState } from 'react';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState(0);

  const search = async () => {
    const query = document.getElementById('searchbar').value;
    console.log(query);
    try {
      const response = await fetch(`/api/external/${query}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResults(data.results);
        setSearching(true);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <div>
      <input
        id="searchbar"
        type="text"
        onKeyUp={() => {
          search();
        }}
      />
      {searching ? <h1>{results} results</h1> : null}
    </div>
  );
};

export default Searchbar;
