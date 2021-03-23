// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Products.js
// March 18, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/20/2021, Moved the JSON download up to App

// Using React library in order to build components 
// for the app and importing needed components
import Product from './Product';
import '../stylesheet/Products.css';

/**
 * The Products component will generate a div full of 
 * Product components that will display all the product 
 * data and allow the user to add an item to the cart 
 * based off the quantity.
 * 
 * @param {*} param0 
 * @returns 
 */
function Products({products=[], addToCart=f=>f}) {

    // The productList method will create a list of Product objects. 
    // Each Product will be able to callback products in order to add 
    // them to the cart
    const productList = products.map((product, key) =>
        <Product key={key} product={product} addToCart={addToCart} />
    )

    return (
        // The Products div will contain all of the Product components
        <div className="Products">
            {productList}
        </div>
    )
}

// Exporting Products component
export default Products;