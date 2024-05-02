import React, { useEffect } from 'react';

const ResultBox = (props) => {
  const { book } = props;
  console.log(props);
  return (
    <div>
      <p>{props.book.volumeInfo.title}</p>
      <p>{props.book.volumeInfo.title}</p>
    </div>
  );
};

export default ResultBox;
