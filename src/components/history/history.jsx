import React from 'react';
import './history.scss';

function History(props){
  return(
    
    <>
      HISTORY
      {(props.history.map( (reqHistory, index) =>
        <div key={index} >
          <span>{reqHistory.method}</span>
          <p>{reqHistory.url}</p>
        </div>
      ))}
    </>
  );
}

export default History;