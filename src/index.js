// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - index.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import MainNav from './MainNav';
import Login from './Login';
import Footer from './Footer';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Using the ReactDOM to render the different components into a 
// single page. Eventually this page will be responsive, but 
// currently it consists of MainNav, Login, Footer and their 
// components only to form the Login page. The ReactDOM will 
// target the 'root' div in the index.html file
ReactDOM.render(
  <React.StrictMode>
    <MainNav />
    <Login />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
