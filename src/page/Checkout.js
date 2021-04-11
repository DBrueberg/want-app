// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Checkout.js
// March 28, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 04/07/2021, Added cart and total display.
//  Also added in purchase button that will 
//  generate an order invoice in the future.
// DAB, 04/08/2021, Added a Route to the invoice 
//  page by clicking on the Purchase button.
// DAB, 04/10/2021, Enabled access to the redux 
//  store in order to populate an invoice before 
//  payment is submitted.
//  Added stylesheet.
// DAB, 04/11/2021, Added more comments

// Using React library in order to build components 
// for the app and importing needed components
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {newInvoice} from '../actions';
import '../stylesheet/Checkout.css';

/**
 * The Checkout Component will display all of items in the 
 * cart, display the total price, and allow the customer to 
 * purchase those items. Purchasing the items will generate 
 * an invoice.
 * 
 * @param {*} props 
 * @returns 
 */
function Checkout(props) {
    // The Redux cart, products states and onNewInvoice action
    // are deconstructed from props
    const {cart, products, onNewInvoice} = props;

    // The clickHandler will add a new invoice to the redux store
    // by calling onNewInvoice()
    const clickHandler = () => {
        onNewInvoice(totalCost, purchaseInvoice)
    }

    // The createInvoice function will create a new array with 
    // invoice data and return it to the caller
    const createInvoice = (cart, products) => {
        // Empty array for holding the new purchaseInvoice data
        let purchaseInvoice = [];

        // Iterating through the cart array
        for (let j = 0; j < cart.length; j++) {
            // Iterating through the products array
            for (let k = 0; k < products.length; k++) {
                // If the product is in the cart both the product data and the 
                // cart data are saved into the array in one element
                if (cart[j].id === products[k].id) {
                    purchaseInvoice = [...purchaseInvoice, {...products[k],
                        quantity: cart[j].quantity,
                        total: (cart[j].quantity * products[k].price)}]
                }
            }
        }

        // Returning the newly constructed purchaseInvoice to createInvoice
        return purchaseInvoice;
    }

    // The created invoice is assigned to the purchaseInvoice variable for 
    // processing
    const purchaseInvoice = createInvoice(cart, products);

    // The isPurchaseInvoice will check to see if there is a purchaseInvoice 
    // that was generated
    const isPurchaseInvoice = purchaseInvoice.length > 0;
    
    // The purchaseInvoice array is iterated through and the needed data 
    // is used to generate a list for each product
    const displayInvoice =  purchaseInvoice.map((product) =>  
        <ul key={product.id} className="checkoutItem">
            <li>
                Name: {product.name}
            </li>
            <li>
                Price: {product.price}
            </li>
            <li>
                Quantity: {product.quantity}
            </li>
            <li>
                Total: ${product.total.toFixed(2)}
            </li>
        </ul> 
    );

    // The totalCost is initialized with the totalCost of all the 
    // items in the cart. If there is no purchase invoice, 0 is 
    // returned
    const totalCost = isPurchaseInvoice ? 
        purchaseInvoice.map((product) => 
            product.price * product.quantity).reduce(
                (result, amount) => (
                    result + amount
                )
            ) :
        0;             

    return (
        <div className="Checkout">

            {/* Header for Checkout */}
            <h1>
                Checkout
            </h1>

            {/* This container will display the main layout of the 
            main page contents. The checkout summary and item boxes */}
            <div className="checkoutGridContainer">

                {/* The checkoutSummary will display the total cost and 
                a link to the invoice */}
                <ul className="checkoutSummary">
                    {/* Total cost */}
                    <li>
                        <h3>
                            Total Cost: ${totalCost.toFixed(2)}  
                        </h3>
                    </li>
                    {/* Link to the invoice and will activate the clickHandler that 
                    will generate a new invoice to the Redux state */}
                    <li>
                        <NavLink to='/invoice' style={{textDecoration:'none'}}>
                            <Button variant="contained" aria-label="purchase" 
                            onClick={clickHandler}>
                                Purchase
                            </Button>
                        </NavLink>
                    </li>
                </ul>

                {/* The checkoutFlexContainer will display the invoice items 
                in flex */}
                <div className="checkoutFlexContainer">
                    {/* The invoice table with all of the cart items will be 
                    displayed here  */}
                    {displayInvoice}
                </div>
            
            </div>
            
        </div>
        
    )
}

// Mapping the redux store states to props
const mapStateToProps = state => 
    ({
        invoices: [...state.invoices]
    })

// Mapping the state actions to props
const mapDispatchToProps = dispatch => 
    ({
        // This method will add a new invoice to invoices
        onNewInvoice(total, items) {
            dispatch(newInvoice(total, items))
        }
    })

// Exporting the connect Wrapped Checkout Component
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);