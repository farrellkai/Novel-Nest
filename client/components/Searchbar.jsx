import React, { useState } from 'react';
import ResultBox from './ResultBox';

const Searchbar = (props) => {
  const { getSearchData } = props;

  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState(0);
  const [items, setItems] = useState([]);

  document.addEventListener('click', () => {
    setSearching(false);
  });

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
        placeholder="Search for books by title"
        onKeyUp={() => {
          search();
        }}
      />
      {searching && results && (
        <>
          <div className="results">
            {results} results
            <ResultBox getSearchData={getSearchData} book={items[0]} />
            <ResultBox getSearchData={getSearchData} book={items[1]} />
            <ResultBox getSearchData={getSearchData} book={items[2]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Searchbar;
