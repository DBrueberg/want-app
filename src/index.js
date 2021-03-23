// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - index.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/19/2021, Added BrowserRouter and PageTemplate

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import PageTemplate from './component/PageTemplate';
import './stylesheet/index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Using BrowserRouter to traverse through the application states. All 
  // pages are built upon a standard PageTemplate
  <BrowserRouter>
    <PageTemplate />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();