import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-ditels'>
                <h2 className='product-name'>Name: {name}</h2>
                <p>By:{seller} </p>
                <p>Price: ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className='btn-regural'>add to cart</button>
            </div>

        </div>
    );
};

export default Product;