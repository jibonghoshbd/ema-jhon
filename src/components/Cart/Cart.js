import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;

    /*   let total = 0;
      for (const product of cart) {
          total = total + product.price;
      } */
    const total = cart.reduce((previous, current) => (previous + current.price), 0)


    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Items Orders: {props.cart.length} </h3>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;