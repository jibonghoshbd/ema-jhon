import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/myFakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, []);

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProducts = products.find(product => product.key === key);
                if (addedProducts) {
                    const quantity = savedCart[key];
                    addedProducts.quantity = quantity;
                    // console.log(addedProducts)
                    storedCart.push(addedProducts)
                }

            }
            setCart(storedCart)
        }
    }, [products]);


    const addProductToCart = product => {
        // console.log(product.name)
        const newCart = [...cart, product]
        setCart(newCart)

        // add to local storage 
        addToDb(product.key)
    }

    // handle search input 
    const handelSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProduct);
    }

    return (
        <>
            <div
                onChange={handelSearch}
                className="search-container">
                <input type="text" />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            addProductToCart={addProductToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;