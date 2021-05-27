import React from 'react';
import './style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import History from './history.js';
import { If, Then, Else } from './if';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: '',
      url: '',
      route: '',
      searchLoading: false
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  toggleSearchLoading = () => {
    this.setState({ loading: !this.state.searchLoading });
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
        <div className="rapper">
          <History className="hist" handleHistory={this.handleHistory}/>
          <If condition={this.state.results}>
            <Then>
              <Results results={this.state.results} searchLoading={this.toggleSearchLoading}/>
            </Then>
          </If>
        </div>
        <Footer />
      </div>
    );
  };
};

export default App;


