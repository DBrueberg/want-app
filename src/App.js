// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - App.js
// March 12, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/20/2021, Change App to class and added state. 
//  Began converting App to the single source of truth.
//  JSON file now loads into App
//  cart and products state now managed here
//  addToCart() method created and functional
// DAB, 3/21/2021, Added removeFromCart() to remove items 
//  from the cart
//  Filled out some functional comments

// Using React library in order to build components 
// for the app
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './stylesheet/App.css';
import Login from './page/Login';
import Whoops404 from './page/Whoops404'
import Home from './page/Home';
import ShoppingCart from './page/ShoppingCart';
// Uploading a JSON file array of products
import * as data from './productData.json';

// Data from the JSON file Array
const productData = data.products

/**
 * The App class will handle most state of the application. It 
 * is to be the one true source.
 */
class App extends React.Component {

  // Constructing the App instance
  constructor(props) {
    super(props)
    // State includes:
    // cart(products that will be bought)
    // products(all descriptive data about the products)
    this.state = {
      cart: [],
      products: [...productData]
    };

    // Binding class methods 
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }



  // The addToCart method will take in a product id and 
  // a quantity of that product and add it to a cart index
  addToCart(id=1, quantity=1) {
    // Copying the cart object data
    let cart = [...this.state.cart];
    // Priming inCart to see if the item is already in the cart
    // and itemId so it can reference the products Id
    let inCart = false;
    let itemId = null;

    // Using a for loop to iterate through the cart items and 
    // checking to see if the item is in the cart or not
    for (let x = 0; x < cart.length; x++) {

      // DEBUG - What id is in the cart?
      // console.log("CART ID")
      // console.log(x)

      // If there is a matching item in the cart, inCart will be 
      // true and itemId will be set to that index
      if (cart && cart.length > 0 && cart[x].id === id) {
        inCart = true;
        itemId = x;
      }
    }

    // If inCart is true, the existing cart item will be 
    // updated with the new quantity
    if (inCart) {
      // Creating a copy of the item
      const item = {...cart[itemId]};
      // Changing the quantity of the copy
      item.quantity = quantity;
      // Adding the copy to the same index in the cart
      cart[itemId] = item;
    }
    // Else the product is not in the cart so a new entry 
    // is added
    else {
      // Copying the cart and appending the new item on the 
      // end of that array
      cart = [
            ...cart,
            {
              "id": id,
              "quantity": quantity
            }
          ];
    }

    // The cart copy will be set as the new cart
    this.setState({cart});
    
    // Passing back the cart count to the parent
    this.props.getCartCount(cart.length);
  }


  // The removedFromCart() method accepts a cart index and 
  // removes that product from the cart array
  removeFromCart(cartIndex) {
    // Filtering out the unneeded cart index
    const cart = this.state.cart.filter((item, index) => index !== cartIndex);

    // Setting the state of cart to the new cart array
    this.setState({cart});
    
    // Passing back the cart count to the parent
    this.props.getCartCount(cart.length);
  }


  // Rendering application
  render() {
    // Class state variables
    const {products} = this.state;
    const {cart} = this.state;

    // Class Methods
    const {addToCart} = this;
    const {removeFromCart} = this;

    return (
      // Using a Switch and Route to traverse through the app
      <div className="App">
        <Switch>

          {/* The Home component will pass down the cart and products 
          array. The call back function, addToCart, is also passed down 
          in order to allow children to alter the cart state in App */}
          <Route exact path='/'>
            <Home cart={cart} products={products} addToCart={addToCart} 
            removeFromCart={removeFromCart}></ Home>
          </Route>

          {/* The ShoppingCart component will pass down the cart and 
          products array. The call back functions, addToCart and 
          removeFromCart, are also passed down in order to allow children 
          to alter the cart state in App */}
          <Route path='/cart'>
            <ShoppingCart cart={cart} products={products} addToCart={addToCart} 
            removeFromCart={removeFromCart}></ShoppingCart>
          </Route>

          {/* The Login component will allow a user to login to the application */}
          <Route path='/login' component={Login} />

          {/* The Whoops404 will handle any bad routes from the user */}
          <Route component={Whoops404} />

        </Switch> 
      </div>
    );
  }
}

// Exporting the App component
export default App;