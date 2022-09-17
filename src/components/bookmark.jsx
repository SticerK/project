import React from 'react';

const Bookmark = (props) => {
  return (
    <i
      className={props.icon(props.bookmark)}
      onClick={() => props.changeStateIcon(props._id)}></i>
  );
};

export default Bookmark;
