// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - constants.js
// April 9, 2021
// Last Edited (Initials, Date, Edits):
//  DAB, 04/10/2021, Added comments
//  DAB, 04/18/2021, Added in USER_LOG_IN and 
// USER_LOG_OUT

// These constants ensure that there will be no 
// spelling errors when working with reducers.js 
// and actions.js. They describe the different 
// action types.
const constants = {
    ADD_USER: "ADD_USER",
    USER_LOG_IN: "USER_LOG_IN",
    USER_LOG_OUT: "USER_LOG_OUT",
    EDIT_USER_PASSWORD: "EDIT_USER_PASSWORD",
    EDIT_USER_NAME: "EDIT_USER_NAME",
    EDIT_USER_ID: "EDIT_USER_ID",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",
    ADD_PRODUCT: "ADD_PRODUCT",
    REMOVE_PRODUCT: "REMOVE_PRODUCT",
    CLEAR_CART: "CLEAR_CART",
    NEW_INVOICE: "NEW_INVOICE",
    CLEAR_INVOICES: "CLEAR_INVOICES"
}

// Exporting constants
export default constants;