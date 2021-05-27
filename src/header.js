import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header id="header">
      <h1>RESTy by JESSi</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

