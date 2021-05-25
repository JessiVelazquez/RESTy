import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: '',
      method: '',
    };
  };

  handleChangeURL = e => {
    let URL = e.target.value;
    this.setState({ URL });
  };

  handleChangeMethod = e => {
    let method = e.target.value;
    this.setState({ method });
  };

  render() {
    return(
      <form id="form">
        <label for="URL">URL:</label>
        <input type="text" onChange={this.handleChangeURL} ></input>
        <select onChange={this.handleChangeMethod} >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <br></br>
        <br></br>
        <h3>URL entered: {this.state.URL}</h3>
        <h3>Method selected: {this.state.method}</h3>
      </form>
    );
  };
};


export default Form;


