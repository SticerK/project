import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul class='nav nav-tabs'>
      <li class='nav-item'>
        <Link to='' className='navbar-brand'>
          Main
        </Link>
      </li>
      <li class='nav-item'>
        <Link to='/login' className='navbar-brand'>
          Login
        </Link>
      </li>
      <li class='nav-item'>
        <Link to='/users' className='navbar-brand'>
          Users
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
