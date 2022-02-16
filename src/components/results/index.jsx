import React from 'react';
import './results.scss';

function Results(props) {
  return (
    <section>
      {
        props.loading ? 'Loading...' :
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      }
    </section>
  );
}

export default Results;
