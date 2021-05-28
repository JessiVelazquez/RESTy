import React from 'react';
import './style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import History from './history.js';
import Help from './help.js';
import { If, Then, Else } from './if';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: '',
      url: '',
      route: 'GET',
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
    console.log('ROUTE URL', route, url);
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
      <BrowserRouter>
        <div id="bg">
          <Header />
          <Switch>
            <Route exact path="/">
              <Form prompt="click for results" toggleLoading={this.toggleLoading} handler={this.handleForm} url={this.state.url} route={this.state.route} handleChange={this.handleChange}/>
                <If condition={this.state.results}>
                  <Then>
                    <Results results={this.state.results} searchLoading={this.toggleSearchLoading}/>
                  </Then>
                </If>
              </Route>
              <Route exact path="/history">
                <Form prompt="click for results" toggleLoading={this.toggleLoading} handler={this.handleForm} url={this.state.url} route={this.state.route} handleChange={this.handleChange}/>
                <History className="hist" handleHistory={this.handleHistory}/>
                  <If condition={this.state.results}>
                    <Then>
                      <Results results={this.state.results} searchLoading={this.toggleSearchLoading}/>
                    </Then>
                  </If>
              </Route>
              <Route exact path ="/help">
                <Help />
              </Route>
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
};

export default App;


