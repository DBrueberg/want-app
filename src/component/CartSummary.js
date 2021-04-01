// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - CartSummary.js
// March 28, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 03/29/2021, Added comments and styles to the 
// component

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import '../stylesheet/CartSummary.css';

/**
 * The CartSummary component will talley up the total amount owed 
 * so far and show it along with a link to the checkout. It uses 
 * componentWillMount() to mount the initial state, 
 * componentWillReceiveProps() to accept the incoming props and 
 * set the new state if there is a change, and last 
 * componentWillUnmount() to display a console.log() saying that 
 * the component was destroyed. 
 */
class CartSummary extends React.Component {
    // Initializing the state from the passed down props. This 
    // METHOD IS DEPRECIATED AND IT IS RECOMMENDED TO INITIALIZE 
    // STATE IN THE CONSTRUCTOR NOW
    // UNSAFE_componentWillMount() {
    //     this.state = {
    //         cartList: [...this.props.cartList],
    //         cartSize: this.props.cartSize, 
    //         total: 0
    //     };

    //     // Binding the totalCost method to this class
    //     this.totalCost = this.totalCost.bind(this);
    // }


    // This lifecycle method will only alter the state passed down
    // through props if there was a change in value
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     // Using an if statement to check if the props are different. 
    //     // If they are the new state is set
    //     if (this.props.cartList !== nextProps.cartList) {
    //         this.setState({
    //             cartList: [...nextProps.cartList], 
    //             cartSize: nextProps.cartSize
    //         });
    //     }
    // }


    // componentWillUnmount() can be used to clean up any processes 
    // started like an interval ticker or background processes. Since 
    // there are none it is set to only send out a console.log() letting 
    // the user know the component was destroyed
    // UNSAFE_componentWillUnmount() {
    //     // Logging the message that the cart summary was destroyed
    //     console.log("Destroying the cart summary!")
    // }


    // The totalCost method uses the cartList iterate through and calculate 
    // the value of the items in the cart
    totalCost(cartList) {
        // If there are items in the cart the value is calculated
        if (cartList.length > 0) {
            // Returning the sum of all of the products * quantities 
            // in the cart and keeping the result to 2 decimal places
            return cartList.map((product) => (
                product.price * product.quantity)).reduce(
                    (result, amount) => (
                        parseFloat(result) + parseFloat(amount)
                    ).toFixed(2)
                );
        }

        // There are no items in the cart so 0.00 is returned
        return (
            0.00
        )
    } 

    // Rendering the class
    render() { 
        // The classes states are declared here for easy access in the 
        // rendering
        const {cartList} = this.props;
        const {totalCost} = this;
        // DEBUG *****************
        // console.log(cartList)
        // console.log(cartSize)
        // console.log(totalCost(cartList))
        // console.log(totalCost(cartList))
        return (
            // A div is returned that includes a header that shows the total
            // cost and a button NavLink to the checkout page
            <div className="CartSummary">
                <h1>
                    Current Total: ${totalCost(cartList)}
                </h1>
                {/* The NavLink will connect the button to the checkout page */}
                <NavLink to='/checkout' style={{textDecoration:'none'}}>
                    <Button variant="contained" aria-label="Go to checkout">
                        Checkout
                    </Button>
                </NavLink>
            </div>
        );
    }
}

// Exporting the CartSummary component
export default CartSummary;