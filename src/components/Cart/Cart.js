import React from 'react';
import Product from '../Product/Product';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;

    let totalQuentity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuentity = totalQuentity + product.quantity;
    }

    /*  const totalQuentity = cart.reduce((previous, product) => (previous + product.quantity), 0);
     const total = cart.reduce((previous, product) => (previous + product.price), 0); */

    let shippingCost;
    if (total === 0) {
        shippingCost = 0
    } else {
        shippingCost = 15;
    }
    const totalBeforeTax = total + shippingCost;
    const tax = totalBeforeTax / 100;
    const orderTotal = total + shippingCost + tax;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h3>Items Orders: {totalQuentity} </h3>
            <div className='price-ditels'>
                <p>Items : ${total.toFixed(2)}</p>
                <p>Shipping Cost : ${shippingCost.toFixed(2)}</p>
                <p>Total Before Tax : ${totalBeforeTax.toFixed(2)}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h3 className='order-total'>Order Total : ${orderTotal.toFixed(2)}</h3>

            </div>
            <button className='btn-regural'>Review your order</button>
        </div>
    );
};

export default Cart;