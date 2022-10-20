import Main from './layouts/main';
import { Route, Switch } from 'react-router-dom';
import UsersList from './layouts/users';
import Login from './layouts/login';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/users/:userID?' component={UsersList} />
        <Route path='/login' component={Login} />
        <Route path='' component={Main} />
      </Switch>
    </>
  );
}
export default App;
