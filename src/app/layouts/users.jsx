import Users from '../components/users';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/userprofile';

const UsersList = () => {
  const { userID } = useParams();
  return userID ? <UserProfile /> : <Users />;
};

export default UsersList;
