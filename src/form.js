import React from 'react';
import './form.scss';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storageCounter: 1
    };
  };

  handleSubmit = async e => {
    e.preventDefault();
    let url = this.props.url;
    let route = this.props.route;



    //-----STAR WARS API URL: 'https://swapi.dev/api/people/';
    //-----POKEMON API URL: 'https://pokeapi.co/api/v2/pokemon/ditto';
    let raw = await superagent(route, url);
    let results = raw.body;
    //------fetch verison--------\\
    // let raw = await fetch(this.state.URL);
    // let results = await raw.json();
    let count = results.count;

    //======SESSION STORAGE=========\\
    localStorage.setItem(this.state.storageCounter, JSON.stringify({ apiCall: `${route} ${url}`, results}));
    let counter = this.state.storageCounter + 1;
    this.setState({ storageCounter: counter });

    this.props.handler(count, results, url, route);
    this.props.toggleLoading();
  }

  handleChangeURL = e => {
    this.props.handleChange(e);
  };

  handleChangeMethod = e => {
    this.props.handleChange(e);
  };

  render() {
    return(
      <form id="form" onSubmit={this.handleSubmit}>
        <div id="subForm">
          <label for="URL">URL:</label>
          <input type="text" name="url" onChange={this.handleChangeURL} value={this.props.url}></input>
          <select onChange={this.handleChangeMethod} name="route" value={this.props.route}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <button>GO!</button>
        </div>
        <br></br>
        <h3>{this.props.url}</h3>
        <h3>{this.props.route}</h3>
      </form>
    );
  };
};


export default Form;


