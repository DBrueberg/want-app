// CURRENTLY UNUSED **** Moved to Shopping Cart

// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - CartCards.js
// March 20, 2021
// Last Edited (Initials, Date, Edits):

import CartCard from './CartCard';
import '../stylesheet/CartCards.css'
// import * as data from '../productData.json';

// const products = data.products

function CartCards({products=[], cart=[], addToCart=f=>f, removeFromCart=f=>f}) {
    // const id = product.id;
    console.log(products)

    


    const productList = products.map((product, key) =>
        <div key={key} className="productCard">
            <CartCard key={key} product={product} cart={cart} addToCart={addToCart} />
        </div> 
        
    )
    return (
        <div className="CartCards">
            {productList}
        </div>
    )
}

export default CartCards;