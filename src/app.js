import React from 'react';
import './style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';


class App extends React.Component {
  render() {
    return (
      <div id="bg">
        <Header />
        <br></br>
        <Form />
        <br></br>
        <Footer />
      </div>
    );
  };
};

export default App;


