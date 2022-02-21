import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

function Main() {
  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
