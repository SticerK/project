import { useState } from 'react';
import api from './api/index';
import Users from './components/users';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const deleteList = (id) => {
    setUsers(users.filter((item) => item._id !== id));
  };

  const changeStateIcon = (item) => {
    setUsers(
      users.map((user) => {
        if (user._id === item) user.bookmark = !user.bookmark;
        return user;
      })
    );
  };

  const icon = (item) => {
    return !item ? 'bi bi-award' : 'bi bi-award-fill';
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
  return (
    <Users
      user={users}
      title={titleText}
      onDelete={deleteList}
      classesHTML={classes}
      icon={icon}
      changeStateIcon={changeStateIcon}></Users>
  );
};

export default App;
