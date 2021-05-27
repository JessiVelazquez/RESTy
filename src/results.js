import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';
import { If, Then, Else } from './if';

const Results = (props) => {
  return (
    <section id="results" className="results">
      <h3>Results:</h3>
      <div>
        <ReactJson src={props.results}/>
      </div>
    </section>
  )
}

export default Results;

