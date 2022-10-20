import { useParams, useHistory } from 'react-router-dom';
import api from '../api/index';
import QualitiesList from './qualitiesList';

const UserProfile = () => {
  const { userID } = useParams();
  const history = useHistory();
  const user = api.users.default.fetchAll().find((user) => user._id === userID);
  const allUsersPage = () => {
    history.push('/users');
  };
  return (
    user && (
      <div>
        <div>{user.name}</div>
        <div>Профессия:{user.profession.name}</div>
        <div>
          <QualitiesList qualities={user.qualities} />
        </div>
        <div>completedMeetings:{user.completedMeetings}</div>
        <div>Rate:{user.rate}</div>
        <button onClick={allUsersPage}>Все пользователи</button>
      </div>
    )
  );
};

export default UserProfile;
