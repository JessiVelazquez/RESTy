import React from 'react';
import './style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: []
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
    console.log('RESULTS', results);
  }


  render() {
    return (
      <div id="bg">
        <Header />
        <br></br>
        <Form prompt="click for results" toggleLoading={this.toggleLoading} handler={this.handleForm}/>
        <br></br>
        <Results results={this.state.results}/>
        <br></br>
        <Footer />
      </div>
    );
  };
};

export default App;


