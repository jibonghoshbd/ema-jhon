import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';



const Product = (props) => {
    // console.log(props.addProductToCart)
    const { name, img, price, seller, stock, star } = props.product;
    // console.log(props.product)
    const shoppingIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-ditels'>

                <h2 className='product-name'>Name: {name}</h2>
                <div className='reating-justify'>
                    <span>
                        <p>By:{seller} </p>
                        <p>Price: ${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                    </span>
                    <span className='reating'>
                        <Rating
                            initialRating={star}
                            readonly
                            emptySymbol="far fa-star icon-color fa-2x"
                            fullSymbol="fas fa-star icon-color fa-2x"
                        ></Rating>
                    </span>
                </div>
                <br />
                <button

                    onClick={() => props.addProductToCart(props.product)}
                    className='btn-regural'>{shoppingIcon} add to cart</button>

            </div>
        </div>
    );
};

export default Product;