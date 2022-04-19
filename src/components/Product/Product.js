import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';



const Product = (props) => {
    // console.log(props.addProductToCart)
    const { name, img, price, seller, stock } = props.product;

    const shoppingIcon = <FontAwesomeIcon icon={faShoppingCart} />

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
                <button

                    onClick={() => props.addProductToCart(props.product)}
                    className='btn-regural'>{shoppingIcon} add to cart</button>
            </div>

        </div>
    );
};

export default Product;