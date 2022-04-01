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
      url: e.target.urlinput.value,
    };
    if (method === 'POST' || method === "PUT") formData.data = JSON.parse(e.target.reqbody.value);
    props.handleApiCall(formData);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' id='urlinput' data-testid="url" type='text' />
            <button type="submit" data-testid="submit">SUBMIT</button>
          </label>
          <label className="methods">
            <button type="button" onClick={handleSelect} data-testid="get" id="get">GET</button>
            <button type="button" onClick={handleSelect} data-testid="post" id="post">POST</button>
            <button type="button" onClick={handleSelect} data-testid="put" id="put">PUT</button>
            <button type="button" onClick={handleSelect} data-testid="delete" id="delete">DELETE</button>
          </label> 
            {((method === 'POST' || method === 'PUT') && 
              <label>BODY:
                <input type="text" id="reqbody" name="reqbody" data-testid="reqbody" />
              </label>
            )}

        </form>
      </>
  );
}

export default Form;
