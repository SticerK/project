import React from 'react';
const seatchStatus = (props) => {
  return !props.user.length ? (
    <h1>С тобой никто не тусанет</h1>
  ) : (
    <h1>{props.title()}</h1>
  );
};

export default seatchStatus;
