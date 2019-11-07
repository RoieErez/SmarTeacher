import React, { Component } from 'react';

export class AppNavbar extends Component {
  render() {
    return (
      <nav className='navbar bg-dark'>
        <h4>
          <a href='index.html'>
            <i className='fas fa-code'></i> SmarTeacher
          </a>
        </h4>
        <ul>
          <li>
            <a href='profiles.html'>
              <i class='fas fa-graduation-cap'></i> Teachers
            </a>
          </li>
          <li>
            <a href='register.html'>
              <i class='fas fa-pen-square'></i> Register
            </a>
          </li>
          <li>
            <a href='login.html'>
              <i class='fas fa-sign-in-alt'></i> Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default AppNavbar;
