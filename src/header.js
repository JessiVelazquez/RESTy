import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header id="header">
      <h1>RESTy</h1>
      <nav>
        <h3>How to use this app:</h3>
        <ol>
          <li>Enter URL for the http route you want to hit</li>
          <li>Select REST method: GET, POST, PUT, or DELETE. Click "GO!"</li>
          <li>You will see your URL entered and method selected displayed below the form</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;

