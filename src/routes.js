// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application  - routes.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app
import React from 'react';
import {route, IndexRoute } from 'react-router';

import App from './App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
    </Route>
);