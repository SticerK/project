import React from 'react';
import Bookmark from './bookmark';

const User = (props) => {
  return (
    <tr key={props._id}>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((qual) => (
          <span className={props.classes(qual.color)} key={qual.name}>
            {qual.name}
          </span>
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}</td>
      <td>
        <Bookmark {...props}></Bookmark>
      </td>
      <td>
        <span
          className='badge bg-danger'
          role='button'
          onClick={() => props.onDelete(props._id)}>
          Delete
        </span>
      </td>
    </tr>
  );
};
export default User;
