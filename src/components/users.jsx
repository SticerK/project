import React from 'react';
import SearchStatus from './searchStatus';
import User from './user';

const Users = (prop) => {
  return (
    <>
      <SearchStatus user={prop.user} title={prop.title}></SearchStatus>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'>Избранное</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {prop.user.map((list) => {
            return (
              <User
                onDelete={prop.onDelete}
                classes={prop.classesHTML}
                icon={prop.icon}
                changeStateIcon={prop.changeStateIcon}
                {...list}
                key={list._id}></User>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
