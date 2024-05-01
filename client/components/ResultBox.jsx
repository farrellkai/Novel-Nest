import React, { useEffect } from 'react';

const ResultBox = (props) => {
  return (
    <div>
      <p>{props.book.volumeInfo.title}</p>
    </div>
  );
};

export default ResultBox;
