// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Home.js
// March 18, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/20/2021, Passing down state methods and variables from App.

// Using React library in order to build components 
// for the app and importing needed components
import Products from '../component/Products'
import '../stylesheet/Home.css'

/**
 * The Home component will generate all of the products in the passed 
 * down product array as Product components. The user will be able 
 * to view all the product info, add a product to the cart, and select 
 * the quantity to add.
 * 
 * @param {*} param0 
 * @returns 
 */
function Home({cart=[], products=[], addToCart=f=>f}) {

    return (
        // The Home div houses the Home page, header, and Product 
        // components
        <div className="Home">
            <h1>
                Welcome to the Home Page!
            </h1>
            <div className="productCards">
                <Products products={products} cart={cart} addToCart={addToCart} />
            </div>
        </div>
    )
}

// Exporting the Home component
export default Home;