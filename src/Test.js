// /client/src/App.js

import React, { useState, useEffect } from "react";

// SERVICES
import {getAll, deleteProducts, getOne} from '../src/services/productService';
// import {getAll} from '../src/services/productService';
import axios from 'axios';

function Test() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await getAll();
    console.log(res);
    setProducts(res);
    deleteProduct();
    // addProduct();
    getOneProduct();
  }

  const getOneProduct = async() => {
    // let name = "Hot Dogs";
    let name = "Hot Dogs"
    let res = await getOne(name)
    console.log("GETONEIS")
    console.log(res)
  }

  const deleteProduct = async () => {
    let id = "607b9fdf98eccf1eb4df01ba"
    let res = await deleteProducts(id);
    console.log(res);
  }

  // const deleteProduct = async () => {
  //   let id = "607b842f16cfce13d4ab2bf9"
  //   await axios.delete(`/api/product/${id}`)
  //     .then((res) => {
  //       console.log(res.data)
  //     }).catch((error) => {
  //       console.log(error)
  //     });
  // }

  const addProduct = async () => {
    let num = {
                name: "New Entry",
                description: "test"
              }
    await axios.post(`/api/product`, num)
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

export default Test;




// import React, { Component } from 'react';

// import logo from './logo.svg';


// class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       greeting: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
//       .then(response => response.json())
//       .then(state => this.setState(state));
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="name">Enter your name: </label>
//             <input
//               id="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
//           <p>{this.state.greeting}</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default Test;