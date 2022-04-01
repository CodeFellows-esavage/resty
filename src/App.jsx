import React from 'react';
import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';

function App() {

  let [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let fetch = async () => {
      let result = await axios(state.requestParams);
      console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      updateLoading(false);
      setData(data);
      updateHistory(state.requestParams, data);
    }
    if (state.requestParams && state.requestParams.method) fetch();
  }, [state.requestParams])

  function setReqParams(requestParams) {
    dispatch({
      type: 'SET_REQ_PARAMS',
      payload: requestParams,
    });
  }
  function updateLoading(status) {
    dispatch({
      type: 'UPDATE_LOADING',
      payload: status,
    });
  }
  function setData(data) {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  }

  function updateHistory(requestParams, data){
    let reqHistory = {
      method: requestParams.method,
      url: requestParams.url,
      data: data
    }
    dispatch({
      type: 'UPDATE_HISTORY',
      payload: reqHistory
    });
  }

  function callApi(requestParams) {
    updateLoading(true);
    setReqParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <History history={state.history}/>
      <Footer />
    </React.Fragment>
  )
}

export default App;
