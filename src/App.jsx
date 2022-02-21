import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

function App() {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [loading, updateLoading] = useState(false);

  useEffect(() => {
    let fetch = async () => {
      let result = await axios(requestParams);
      console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      updateLoading(false);
      setData(data);
    }
    if (requestParams && requestParams.method) fetch();
  }, [requestParams])

  async function callApi(requestParams) {
    updateLoading(true);
    setRequestParams(requestParams);
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
