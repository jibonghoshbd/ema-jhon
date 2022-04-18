import React from 'react';
import './Header.css';
import logo from '../../images/ema-john.png';

const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;