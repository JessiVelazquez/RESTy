import React from 'react';
import './style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import History from './history.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
      url: '',
      route: ''
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  handleForm = (count, results, url, route) => {
    this.setState({ count, results, url, route });
  };

  handleHistory = (route, url) => {
    this.setState({ route, url });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <div id="bg">
        <Header />
        <br></br>
        <Form prompt="click for results" toggleLoading={this.toggleLoading} handler={this.handleForm} url={this.state.url} route={this.state.route} handleChange={this.handleChange}/>
        <br></br>
        <Results results={this.state.results}/>
        <br></br>
        <History handleHistory={this.handleHistory}/>
        <Footer />
      </div>
    );
  };
};

export default App;


