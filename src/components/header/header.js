import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ countItems, orderTotal }) => {
    return (
        <div className="header">
            <Link to='/' className="logo text-dark" >ReStore</Link>
            <Link to='/cart' className="cart" >
                <i className="fa fa-shopping-cart"></i>
                <div>
                    {countItems} items (${orderTotal})
                </div>
            </Link>

        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, cartItems } }) => {
    const countItems = cartItems.reduce((acc, { count }) => acc + count, 0);

    return {
        countItems,
        orderTotal,
    };
};

export default connect(mapStateToProps)(Header);