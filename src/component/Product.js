// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Product.js
// March 18, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/20/2021, Added state for item quantity
//  **may move item quantity state up to App so it can 
//  be displayed as is**

// Using React library in order to build components 
// for the app and importing needed components
import React, {useState} from 'react';
import '../stylesheet/Product.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';

/**
 * The Product component holds a current state and callbacks 
 * cart to the App component. It will also load in and 
 * show Products available to be purchased. The user can 
 * add these products to the cart and edit quantities right 
 * from the product card.
 * 
 * @param {*} param0 
 * @returns 
 */
function Product({product=[], addToCart=f=>f}) {
    // Creating a state for the quantity input
    const [quantity, setQuantity] = useState(1);


    // The submitHandler will pass up the cart data 
    // to its parent component
    const submitHandler = (event) => {
        // Preventing the page from sending GET data
        event.preventDefault();

        // Calling the passed through addToCart() method to 
        // pass the cart values to the parent
        addToCart(product.id, event.target[0].value)
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


    return (
        // The main container for individual product components
        <div className="Product">

            {/* Generating the product image from props*/}
            <div className="productImage">
               <img src={product.image} alt={product.name}></img> 
            </div>
            
            {/* Generating the product info from props */}
            <ul className="productInfo">
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

            {/* Submit and quantity form. It will add an item to the cart and 
            pass the value to the parent by using call back method */}
            <form onSubmit={submitHandler} className="productInput">

                <div className="cartQuantity">
                    <label htmlFor="cartQuantity">
                        Qty: 
                    </label>
                    <input type="text" className="ProductQuantity" 
                    name="cartQuantity" value={quantity} onChange={changeHandler}></input> 
                </div>
                

                {/* <input type="submit" className="ProductSubmit" 
                value="Add To Cart" onSubmit={submitHandler}></input>
                <AddShoppingCartIcon color="orange" /> */}
                {/* <IconButton type="submit" className="ProductSubmit" aria-label="add to shopping cart" onSubmit={submitHandler}>Hello<IconButton /> */}
                <Button type="submit" variant="contained" 
                aria-label="Add to shopping cart" onSubmit={submitHandler}>
                    Add To Cart<AddShoppingCartIcon />
                </Button>

            </form>
        </div>
    )
}

// Exporting the Product component
export default Product;