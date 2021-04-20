// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - reducers.js
// April 9, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 04/10/2021, Added descriptive comments
// DAB, 04/18/2021, Added USER_LOG_IN and 
//  USER_LOG_OUT. Edited ADD_USER

// Using React library in order to build components 
// for the app and importing needed components
import C from './constants';

// The user reducer will allow the user {} state to be 
// altered
export const user = (state = {}, action) => {
    switch (action.type) {
        // ADD_USER will change the current user in 
        // the state
        case C.ADD_USER:
            return {
                ...state,
                id: action.id,
                firstName: action.firstName,
                lastName: action.lastName,
                userId: action.userId,
                password: action.password,
                access: action.access
            }

        // EDIT_USER_NAME will edit the user name 
        // in state
        case C.EDIT_USER_NAME:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName
            }

        // USER_LOG_IN will log in the current user
        case C.USER_LOG_IN:
            return {
                ...state,
                isLoggedIn: true
            }

        // USER_LOG_OUT will log out the current user
        case C.USER_LOG_OUT:
            return {
                ...state,
                isLoggedIn: false
            }

        // EDIT_USER_PASSWORD will edit the current 
        // users password
        case C.EDIT_USER_PASSWORD:
            return {
                    ...state,
                    password: action.password
            }

        // EDIT_USER_ID will edit the current users 
        // id
        case C.EDIT_USER_ID:
            return {
                ...state,
                userId: action.userId
            }

        // Default the original state will be returned
        default:
            return state;
    }
}

// The cart reducer will allow the cart [] state to be 
// altered. It will call a cartItem {} reducer if the 
// actual cart item state needs to be altered
export const cart = (state = [], action) => {
    switch (action.type) {
        // ADD_TO_CART will add an item to the cart by 
        // calling the cartItem{} reducer
        case C.ADD_TO_CART:
            return [
                ...state,
                cartItem({}, action)
            ]

        // REMOVE_FROM_CART will remove an item from the 
        // cart by filtering out the given id
        case C.REMOVE_FROM_CART:
            return state.filter(
                item => item.id !== action.id
            )

        // UPDATE_CART_QUANTITY will update the carts 
        // quantity by calling the cartItem{} reducer 
        // on each cartItem in cart. The id's will be 
        // compared in order to find the one that will 
        // be updated
        case C.UPDATE_CART_QUANTITY:
            return state.map(
                item => cartItem(item, action)
            )

        // Default the original state will be returned
        default: 
            return state;
    }
}

// The cartItem reducer works with the cart reducer in 
// order to update the items in the cart. This reducer 
// is the one that alters the actual cart items
export const cartItem = (state = {}, action) => {
    switch (action.type) {
        // ADD_TO_CART will add a new item to the cart
        case C.ADD_TO_CART:
            return {
                    id: action.id,
                    quantity: action.quantity
                }

        // UPDATE_CART_QUANTITY will update the quantity 
        // of a specified item in the cart
        case C.UPDATE_CART_QUANTITY:
            return (state.id !== action.id) ?
                state : 
                {
                    ...state,
                    quantity: action.quantity
                }

        // Default the original state will be returned
        default: 
            return state;
    }
}

// The products reducer will allow the products [] state 
// to be changed. It will work with the product {} reducer 
// to alter individual products
export const products = (state = [], action) => {
    switch (action.type) {
        // ADD_PRODUCT will add a new product to state
        case C.ADD_PRODUCT:
            return [
                ...state,
                product({}, action)
            ]

        // REMOVE_PRODUCT will remove a product from the cart
        // based off product id
        case C.REMOVE_PRODUCT:
            return state.filter(
                product => product.id !== action.id
            )

        // Default the original state will be returned
        default:
            return state;

    }
    
}

// The product reducer will alter the state of an individual 
// product
export const product = (state = {}, action) => {
    switch (action.type) {
        // ADD_PRODUCT adds a new product to state
        case C.ADD_PRODUCT:
            return {
                id: action.id,
                brand: action.brand,
                name: action.name,
                description: action.description,
                price: action.price,
                image: action.image
            }

        // Default the original state will be returned
        default:
            return state;
    }
    
}

// The invoices reducer will allow the invoices [] state 
// to be altered working with invoice {} and invoiceItem {}
export const invoices = (state = [], action) => {
    switch (action.type) {
        // NEW_INVOICE adds a new invoice to the invoices []
        // by calling invoice {}
        case C.NEW_INVOICE:
            console.log(action)
            return [
                ...state,
                invoice({}, action)
            ]

        // CLEAR_INVOICES clears all of the invoices in state 
        case C.CLEAR_INVOICES:
            return []

        // Default the original state will be returned
        default:
            return state;
    }
}

// The invoice reducer will allow the invoice {} state 
// to be altered working with the invoiceItem {} reducer
export const invoice = (state = {}, action) => {
    switch (action.type) {
        // NEW_INVOICE will add a new invoice {} to state 
        // with the help of the invoiceItem {} reducer
        case C.NEW_INVOICE:
            return {
                id: action.id,
                date: action.date,
                total: action.total,
                items: action.items.map(
                    item => invoiceItem(item, action)
                )
            }

        // Default the original state will be returned
        default:
            return state;
    }
}

// The invoiceItem reducer will edit the state of invoice 
// items
export const invoiceItem = (state = {}, action) => {
    switch (action.type) {
        // NEW_INVOICE will add all of the invoice items to 
        // the invoice
        case C.NEW_INVOICE: 
            return { 
                id: state.id,
                name: state.name,
                quantity: state.quantity,
                price: state.price,
                total: state.total
            }

        // Default the original state will be returned
        default: 
            return state;
    }
}