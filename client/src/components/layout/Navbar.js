import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h4>
        <Link to='/'>
          <i class='fas fa-book-open'></i> SmarTeacher
        </Link>
      </h4>
      <ul>
        <li>
          <Link to='/!#'>
            <i class='fas fa-graduation-cap'></i> Teachers
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <i class='fas fa-pen-square'></i> Register
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <i class='fas fa-sign-in-alt'></i> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
