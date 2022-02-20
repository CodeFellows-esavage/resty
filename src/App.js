import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form';
import Results from './components/results';

function App() {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [loading, updateLoading] = useState(false);

  async function callApi(requestParams) {
    updateLoading(true);
    setRequestParams(requestParams);
    let result = await axios(requestParams);
    console.log(result);

    console.log(result.data);
    setTimeout(() => {
      console.log(result.headers)
      const data = {
        header: result.headers,
        data: result.data
      };
      updateLoading(false);
      setData(data);
      // setData(result.data);
    }, 1000)
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
