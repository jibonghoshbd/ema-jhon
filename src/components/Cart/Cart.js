import React from 'react';
import Product from '../Product/Product';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;

    /*   let total = 0;
      for (const product of cart) {
          total = total + product.price;
      } */
    const total = cart.reduce((previous, product) => (previous + product.price), 0)

    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Items Orders: {props.cart.length} </h3>
            <div>
                <p>Total: {total}</p>
            </div>
        </div>
    );
};

export default Cart;