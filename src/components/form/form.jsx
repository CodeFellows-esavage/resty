/* eslint-disable default-case */
import React from 'react';
import { useState } from 'react';
import './form.scss';

function Form(props) {

 let [method, updateMethod] = useState('GET');

  function handleSelect(e){
    switch (e.target.id){
      case 'get':
        updateMethod('GET');
        break;
      case 'post':
        updateMethod('POST');
        break;
      case 'put':
        updateMethod('PUT');
        break;
      case 'delete':
        updateMethod('DELETE');
        break;
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target[0].value,
    };

    if (method === 'POST' || method === "PUT") formData.data = JSON.parse(e.target[2].value);
    console.log(formData);
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' id='url-input' data-testid="url" type='text' />
            <button type="submit" data-testid="submit">SUBMIT</button>
          </label>
          <label className="methods">
            <span onClick={handleSelect} data-testid="get" id="get">GET</span>
            <span onClick={handleSelect} data-testid="post" id="post">POST</span>
            <span onClick={handleSelect} data-testid="put" id="put">PUT</span>
            <span onClick={handleSelect} data-testid="delete" id="delete">DELETE</span>
          </label> 
            {((method === 'POST' || method === 'PUT') && 
              <label>JSON Object:
                <input type="text"  data-testid="jsonObj"></input>
              </label>
            )}

        </form>
      </>
  );
}

export default Form;
