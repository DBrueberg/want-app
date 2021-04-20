// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - actions.js
// April 9, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 4/10/2021, Added comments
// DAB, 4/18/2021, Added addNewUser, 
//  userLogIn, userLogOut   

// Using React library in order to build components 
// for the app and importing needed components
import C from './constants';
import {v4} from 'uuid';

// This action will add a new invoice into the redux 
// store
export const newInvoice = (total, items) => 
    ({
        type: C.NEW_INVOICE,
        id: v4(),
        date: new Date(),
        total,
        items
    })

// This action will clear all invoices in the 
// redux store
export const clearInvoices = () => 
    ({
        type: C.CLEAR_INVOICES
    })

// This action will add a new user to the redux store
export const addNewUser = (id, firstName, lastName, userId, password, access) =>
    ({
        type: C.ADD_USER,
        id,
        firstName,
        lastName,
        userId,
        password,
        access
    })

// This action will log a user in
export const userLogIn = () =>
    ({
        type: C.USER_LOG_IN
    })

// This action will log a user out
export const userLogOut = () =>
    ({
        type: C.USER_LOG_OUT
    })