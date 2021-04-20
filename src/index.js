// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - index.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/19/2021, Added BrowserRouter and PageTemplate
// DAB, 4/09/2021, Added the Provider and created a react 
//  redux store factory.

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import PageTemplate from './component/PageTemplate';
import './stylesheet/index.css';
import reportWebVitals from './reportWebVitals';
import storeFactory from './store';
import stateData from './initialState';

// DEBUG IMPORT
// import Test from './Test'


// Using the storeFactory to create a store with default 
// stateData
const store = storeFactory(stateData);

ReactDOM.render(
  // DEBUG COMPONENT
  // <Test />
  
  // This store will allow the entire application to access the 
  // store either by using connect or passing down the store
  <Provider store={store}>
   {/* // Using BrowserRouter to traverse through the application states. All 
  // pages are built upon a standard PageTemplate */}
    <BrowserRouter>
        <PageTemplate />
    </BrowserRouter> 
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();