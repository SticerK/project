import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import lodash from 'lodash';
import GroupList from './groupList';
import api from '../api/index';
import { useEffect } from 'react';
import SearchStatus from './searchStatus';
import UsersTable from './usersTable';
import searchValidate from '../utils/search';

const Users = () => {
  const [users, setUsers] = useState(api.users.default.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [str, setStr] = useState();
  const [activeItems, setActiveItems] = useState();
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });
  const [search, setSearch] = useState('');
  const count = users.length;
  const pageSize = 10;
  const searchUser = ({ target }) => {
    setSearch(target.value);
    setActiveItems();
  };

  const resultSearch = searchValidate(users, search);
  const changeFilter = (props) => {
    setSearch('');
    setActiveItems(props);
    setCurrentPage(1);
  };

  const handleSort = (param) => {
    setSortBy(param);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const resetFilter = () => {
    setActiveItems();
  };
  const filteredUsers = activeItems
    ? users.filter((item) => item.profession === activeItems)
    : resultSearch
    ? resultSearch
    : users;

  const sortItems = lodash.orderBy(
    filteredUsers,
    [sortBy.iter],
    [sortBy.order]
  );
  const usersCrop = paginate(sortItems, currentPage, pageSize);

  useEffect(() => {
    api.professions.fetchAll().then((q) => setStr(q));
  }, []);

  if (users) {
    return (
      <>
        <SearchStatus length={filteredUsers.length} />
        <input type='text' onChange={searchUser} value={search} />
        {str && (
          <GroupList
            onChangeFilter={changeFilter}
            str={str}
            activeItems={activeItems}></GroupList>
        )}
        <button className='btn btn-primary m-2' onClick={resetFilter}>
          Очистить
        </button>
        {count > 0 && (
          <UsersTable
            resultSarch={resultSearch}
            sortBy={sortBy}
            users={usersCrop}
            onDelete={handleDelete}
            onToggleBookMark={handleToggleBookMark}
            setSort={handleSort}></UsersTable>
        )}
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          filteredUsers={filteredUsers}
        />
      </>
    );
  }

  return 'Loading';
};
Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
