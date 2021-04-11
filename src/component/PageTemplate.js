// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - PageTemplate.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 03/22/2021, Added a callback function to App
//  in order to retrieve the # of cart items and pass 
//  it back into the MainNav (Pass props to a sibling)
// DAV, 04/11/2021, Added in a CartCounter createContext
// in order to pass down the [cart] length

// Using React library in order to build components 
// for the app and importing needed components
import React, {useState} from 'react';
import MainNav from './MainNav';
import Footer from './Footer';
import App from '../App';

// Creating and exporting the context for CartCounter wrapper
export const CartCounter = React.createContext();

// This function will build a page template that accepts 
// children sandwiched between the main navigation and 
// the footer
function PageTemplate() {
    // Saving the number of items in the cart to state
    const [cartCount, setCartCount] = useState();

    // This callBack method will retrieve the number of items 
    // in the cart and set the updated number of items in 
    // the cart
    const getCartCount = (cartCount) => {
        // If there are no items in the cart nothing is shown
        if (cartCount < 1) {
            setCartCount();
        }
        // Else the number of items in the cart is shown
        else {
            setCartCount(": " + cartCount);
        }
    }

    return (
        <div className="page">
            {/* The cart count is retrieved from in the App component and 
            passed back into the sibling MainNav component. MainNav is 
            wrapped in a provider that allows the retrieval of the cartCount
            without it being explicitly passed down */}
            <CartCounter.Provider value={cartCount}>
                <MainNav />   
            </CartCounter.Provider>
            <App getCartCount={getCartCount} />
            <Footer />
        </div>
    )
}

// Exporting the PageTemplate component
export default PageTemplate;