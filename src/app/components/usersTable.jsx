import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookMark from './bookmark';
import QualitiesList from './qualitiesList';
import Table from './table';

const UsersTable = ({
  users,
  setSort,
  sortBy,
  onToggleBookMark,
  onDelete,
  resultSarch,
  ...rest
}) => {
  const columns = {
    name: {
      i: 'name',
      name: 'Имя',
      component: (item) => <Link to={`/users/${item._id}`}>{item.name}</Link>,
    },
    qualities: {
      name: 'Качества',
      component: (item) => <QualitiesList qualities={item.qualities} />,
    },
    profession: { i: 'profession.name', name: 'Профессия' },
    meet: { i: 'completedMeetings', name: ' Встретился, раз' },
    rate: { i: 'rate', name: 'Оценка' },
    bookmark: {
      i: 'bookmark',
      name: 'Избранное',
      component: (item) => (
        <BookMark
          status={item.bookmark}
          onClick={() => onToggleBookMark(item._id)}
        />
      ),
    },
    deleteItem: {
      component: (item) => (
        <button onClick={() => onDelete(item._id)} className='btn btn-danger'>
          delete
        </button>
      ),
    },
  };

  return (
    <Table
      setSort={setSort}
      sortBy={sortBy}
      columns={columns}
      data={users}
      resultSarch={resultSarch}
    />
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default UsersTable;
