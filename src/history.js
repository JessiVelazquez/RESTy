import React from 'react';
import './history.scss';

class History extends React.Component {

  getHistory = (e) => {
    let request = e.target.value;
    console.log('REQ', request);
    request = request.split(' ');
    let route = request[0];
    let url = request[1];
    this.props.handleHistory(route, url);
    console.log(request);
  };

  render() {
    return (
      <div id="history">
        <section>
          <h3>History:</h3>
          <ul>
          {Object.keys(localStorage).map((index, value) => {
            console.log(JSON.parse(localStorage.getItem(index, value)));
            return (
              <div id="histList">
                <li key={index} >
                  <button value={JSON.parse(localStorage.getItem(index, value)).apiCall} onClick={this.getHistory}>Re-Run</button>
                  {JSON.parse(localStorage.getItem(index, value)).apiCall}
                </li>
              </div>
            );
          })}
          </ul>
        </section>
      </div>
    )
  }
}

export default History;

