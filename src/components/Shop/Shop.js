import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addProductToCart = product => {
        console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart addProductToCart={addProductToCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;