import React, { useState } from 'react';
import ResultBox from './ResultBox';

const Searchbar = () => {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState(0);
  const [items, setItems] = useState([]);

  const search = async () => {
    const query = document.getElementById('searchbar').value;
    try {
      const response = await fetch(`/api/external/${query}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
        setItems(data.items);
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
        placeholder="Search by title or author"
        onKeyUp={() => {
          search();
        }}
      />
      {searching ? (
        <>
          <div className="resultsModal">
            {results} results
            <ResultBox book={items[0]} />
            <ResultBox book={items[1]} />
            <ResultBox book={items[2]} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Searchbar;
