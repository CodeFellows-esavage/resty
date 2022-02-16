import React from 'react';
import { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [loading, updateLoading] = useState(false);

  async function callApi(requestParams) {
    updateLoading(true);
    setRequestParams(requestParams);

    setTimeout(() => {

      const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      updateLoading(false);
      setData(data);
    }, 5000)
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
