// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - store.js
// April 9, 2021
// REFERENCE: The storeFactory was implemented by following 
// the guide from:
// Banks, Alex & Porcello, Eve. (May 2017). Learning React: 
//  Functional Web Development with React and Redux. O' Reilly.
// Last Edited (Initials, Date, Edits):
// DAB, 4/10/2021, Added in comments

// Using React library in order to build components 
// for the app and importing needed components
import {createStore, 
        combineReducers, 
        applyMiddleware} from 'redux';
import {invoices,
        user,
        cart,
        products} from './reducers';
import stateData from './initialState';

// The logger simply logs each action and state change as they 
// occur in the console
const logger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
}

// The saver saves the results after each state change to the
// localStorage
const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
}

// The storeFactory merges the middleware logger and saver to create 
// a store, combine reducers, and then load in the data found in the 
// localStorage if it is there, otherwise it will load in the props 
// initialState data for the store
const storeFactory = (initialState = stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({
            user, cart, invoices, products
        }),
        (localStorage['redux-store']) ? 
            JSON.parse(localStorage['redux-store']) : 
            initialState
    )

// Exporting the storeFactory, with this, a store can be built 
// anywhere by calling storeFactory(initialState)
export default storeFactory;