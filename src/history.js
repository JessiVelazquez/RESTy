import React from 'react';
import './history.scss';

class History extends React.Component {

  getHistory = (e) => {
    let request = e.target.innerHTML;
    request = request.split(' ');
    let route = request[0];
    let url = request[1];
    this.props.handleHistory(route, url);
  };

  render() {
    return (
      <div id="history">
        <h3>History:</h3>
        <section>
          <ul>
          {Object.keys(localStorage).map((index, value) => {
            return (
              <li key={index} onClick={this.getHistory}>{localStorage.getItem(index, value)}
              </li>
            );
          })}
          </ul>
        </section>
      </div>
    )
  }
}

export default History;

