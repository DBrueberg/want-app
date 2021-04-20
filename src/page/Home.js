// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Home.js
// March 18, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 3/20/2021, Passing down state methods and variables from App.
// DAB, 04/19/2021, Added redux user state and added a 
//  responsive header

// Using React library in order to build components 
// for the app and importing needed components
import Products from '../component/Products'
import {connect} from 'react-redux';
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
function Home(props) {
    // Destructing needed variables/methods from props
    const {user, cart=[], products=[], addToCart=f=>f} = props;

    // Header will change depending on if the user is logged in or 
    // not
    const displayHeader = !user.isLoggedIn ?
        <h1>
            Welcome to the Home Page!
        </h1> :
        <h1>
            Welcome to the Home Page {user.userId}!
        </h1>

    return (
        // The Home div houses the Home page, header, and Product 
        // components
        <div className="Home">
            {/* Displaying responsive header */}
            {displayHeader}

            {/* Displaying products */}
            <div className="productCards">
                <Products products={products} cart={cart} addToCart={addToCart} />
            </div>

        </div>
    )
}

// Mapping the redux store states to props
const mapStateToProps = state => 
    ({
        user: state.user
    });


// Exporting the connect Wrapped Home Component
export default connect(mapStateToProps)(Home);