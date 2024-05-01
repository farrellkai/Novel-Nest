import React from 'react';

const ResultBox = (props) => {
  console.log(
    'THESE ARE MY PROPS:',
    props.book.volumeInfo.imageLinks.smallThumbnail
  );
};

export default ResultBox;
