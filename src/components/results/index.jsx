import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';

function Results(props) {
  return (
    <section>
      {
        props.loading ? 'Loading...' :
        props.data ? <ReactJson src={props.data} />: null
      }
    </section>
  );
}

export default Results;
