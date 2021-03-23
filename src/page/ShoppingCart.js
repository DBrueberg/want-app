// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Cart.js
// March 18, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import CartCard from '../component/CartCard';
import '../stylesheet/ShoppingCart.css'


/**
 * The ShoppingCart component will output the contents of 
 * the shopping cart with product information. It will allow 
 * the removal, addition, and editing of items in the cart 
 * by use of callback functions. 
 * 
 * @param {*} param0 
 * @returns 
 */
function ShoppingCart({cart=[], products=[], removeFromCart=f=>f, addToCart=f=>f}) {

    // The const will hold an array of the products information in the cart
    const cartList = products.filter(product => cartCompare(cart, product));
    

    // The cartCompare() method compares returns true if the item is in the 
    // shopping cart. It uses the cart and product arrays
    function cartCompare(cart, product) {

        // Iterating through the cart array and comparing the product id 
        // with that of the product
        for (let x = 0; x < cart.length; x++) {
            // If a matching Id is found true is returned
            if (cart[x].id === product.id) {
                return true;
            }
        }

        // If there is no matching Id false is returned
        return false;
    }


    // This const will display one header if the cart is empty or another if 
    // an item is in the cart
    const cartHeader = cart.length < 1 ? 
    "Your Cart is Empty!" : "Welcome to Your Cart";

    
    // This const will construct and hold a list of CartCard objects that 
    // will display in the application
    const productList = cartList.map((product, key) =>
        <div key={key} className="shoppingCartCard">

            <CartCard key={key} product={product} cart={cart} 
            addToCart={addToCart} removeFromCart={removeFromCart}/>

        </div> 
    )

    return (
        // The ShoppingCart div will hold the title and contents of the 
        // shopping cart
        <div className="ShoppingCart">
            <h1>
                {cartHeader}
            </h1>
            <div className="shoppingCartCards">
                {productList}
            </div>
        </div>
        
    )
}

// Exporting the ShoppingCart component
export default ShoppingCart;