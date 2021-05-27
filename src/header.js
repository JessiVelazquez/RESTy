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
          <li>You will see your URL entered and method selected displayed below the form</li>
          <li>Select REST method: GET, POST, PUT, or DELETE. Click "GO!"</li>
          <li>You will see a results box appear to the right of history populated with your API call JSON data</li>
          <li>Your route/method history is displayed on the right. You can click any of these to repopulate the form, enabling you to re-run the same routes.</li>
          <li>Keep in mind you lack credentials to POST, PUT, or DELETE to external API's...</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;

