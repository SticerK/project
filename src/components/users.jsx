import React, { useState } from 'react';
import api from '../api/index';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const deleteList = (id) => {
    setUsers(users.filter((item) => item._id !== id));
  };

  const titleText = () => {
    if (users.length > 4 || users.length === 1)
      return `${users.length} человек тусанет с обой сегодня`;
    if (2 <= users.length <= 4)
      return `${users.length} человека тусанет с обой сегодня`;
  };

  const classes = (color) => {
    return color ? `badge bg-${color} ms-1` : '';
  };
  return !users.length ? (
    <h1 className='badge bg-danger m-2 fs-2'>Никто с тобой не тусанет</h1>
  ) : (
    <React.Fragment>
      <h1>{titleText()}</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>№</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {users.map((list, index) => (
            <tr key={list._id}>
              <td>{index + 1}</td>
              <td>
                {list.qualities.map((qual) => (
                  <span className={classes(qual.color)}>{qual.name}</span>
                ))}
              </td>
              <td>{list.profession.name}</td>
              <td>{list.completedMeetings}</td>
              <td>{list.rate}</td>
              <td>
                <span
                  class='badge bg-danger'
                  role='button'
                  onClick={() => deleteList(list._id)}>
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
