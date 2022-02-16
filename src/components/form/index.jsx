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

    if (method === 'POST' || method === "PUT") formData.jsonObj = e.target[2].value;
    console.log(formData);
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">SUBMIT</button>
          </label>
          <label className="methods">
            <span onClick={handleSelect} id="get">GET</span>
            <span onClick={handleSelect} id="post">POST</span>
            <span onClick={handleSelect} id="put">PUT</span>
            <span onClick={handleSelect} id="delete">DELETE</span>
          </label> 
            {((method === 'POST' || method === 'PUT') && 
              <label>JSON Object:
                <input type="text"></input>
              </label>
            )}

        </form>
      </>
  );
}

export default Form;
