// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - CartCard.js
// March 18, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/21/2021, Added removeFromCart() and 
//  filled in comments.
// DAB, 4/05/2021, Added hook that will reRender 
//  on cart updates to display the correct quantity

// Using React library in order to build components 
// for the app and importing needed components
import React, {useEffect, useState} from 'react';
import '../stylesheet/CartCard.css';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';

/**
 * The CartCard component generates the product cart cards and 
 * manages the quantity state. It uses callbacks to handle the 
 * state of the cart. Cart items can be removed, added, and updated 
 * from a CartCard.
 * 
 * @param {*} param0 
 * @returns 
 */
function CartCard({product=[], cart=[], addToCart=f=>f, removeFromCart=f=>f}) {

    // The item const will call getInitialQuantity in order to set the 
    // initial quantity state of this cart card
    const item = getInitialQuantity(cart, product);
    // The quantity state is managed by this hook in order to 
    // change it in the quantity input
    const [quantity, setQuantity] = useState(item);

    // The useEffect will reRender the component when the cart
    // contents are changed
    useEffect(() => {
        setQuantity(item)
    }, [cart]);


    // The submitHandler will pass up the cart data 
    // to its parent component
    const submitHandler = (event) => {
        // Preventing the page from sending GET data
        event.preventDefault();

        // Calling the passed through addToCart() method to 
        // pass the cart values to the parent
        addToCart(product.id, event.target[0].value);
    }


    // The changeHandler will update the quantity value in 
    // the product cards
    const changeHandler = (event) => {
        // Pulling the value out of the event
        let {value} = event.target;
        
        // Changing the state of the quantity with the new 
        // value
        setQuantity(value);
    }

    
    // The clickHandler will pass up a cart id through a 
    // callback function that will be removed from the 
    // cart array in the parent
    const clickHandler = (event) => {
        // Calling getId() method to get the cart id of 
        // the product so it can be removed
        removeFromCart(getId(cart, product));
    }


    // The getId() method will traverse the product array 
    // and find a matching product id. It will then return 
    // the cart index of that product so it can be removed
    function getId(cart, product) {
        // Traversing through the cart array with a for 
        // loop
        for (let x = 0; x < cart.length; x++) {
            
            // If a matching one is found that index is 
            // returned. Note that this method can not even 
            // execute unless there is an item in the cart 
            // because this method is in a CartCard component
            if (cart[x].id === product.id) {
                // Returning the cart index
                return x;
            }
        }

        // The first index will be returned if nothing is found. 
        // This should never happen but is in for a back up
        return 0;
    }

    
    // The getInitialQuantity() method will search the cart and 
    // product arrays, find the matching product and get/return the 
    // quantity from the cart.
    function getInitialQuantity(cart, product) {

        // Iterating through the cart array to compare product id's
        for (let x = 0; x < cart.length; x++) {

            // If one matches, the cart quantity is returned
            if (cart[x].id === product.id) {
                return cart[x].quantity;
            }
        }

        // If no match 5 is returned. This should not happen because 
        // an item can not be in the cart without it being in the product 
        // array
        return 5;
    }

    return (
        // The main container for individual CartCard components
        <div className="CartCard">

            {/* Generating the cart card image from props*/}
            <div className="cartCardImage">
                <img src={product.image} alt={product.name}></img>
            </div>

            {/* Generating the cart card info from props*/}
            <ul className="product">
                <li>
                    {product.brand}
                </li>
                <li>
                    {product.name}
                </li>
                <li>
                    {product.description}
                </li>
                <li>
                    ${product.price}
                </li>
            </ul>

            <div className="cartCardUpdate">
                {/* Submit,quantity, and remove from cart form. It will 
                alter the quantity of an item in the cart and pass the 
                value to the parent by using call back method. Removal 
                from the cart is also done via callback */}
                <form onSubmit={submitHandler} className="cartInput">

                {/* This dive will display and allow the user to change the cart quantity */}
                <div className="cartQuantity">
                    <label htmlFor="cartQuantity">
                        Qty: 
                    </label>
                    <input type="text" className="cartCardQuantity" name="cartQuantity" 
                    value={quantity} onChange={changeHandler}></input> 
                </div>
                

                {/* <input type="submit" className="cartCardSubmit" 
                value="Change Quantity" onSubmit={submitHandler}></input> */}

                {/* This button will submit the new quantity */}
                <Button type="submit" variant="contained" 
                aria-label="Change shopping cart quantity" onSubmit={submitHandler}>
                    Quantity<UpdateIcon />
                </Button>

                </form>

                {/* This button uses a clickHandler that will remove an 
                from the cart */}
                <Button variant="contained" className="cartCardRemove" 
                aria-label="Remove Item" onClick={clickHandler}>
                Remove<DeleteOutlineIcon />
                </Button>

            </div>
            

        </div>
    )
}

// Exporting CartCard component
export default CartCard;