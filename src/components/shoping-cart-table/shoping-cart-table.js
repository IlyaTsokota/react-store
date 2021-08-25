import React from 'react';
import './shoping-cart-table.scss';

import { connect } from 'react-redux';
import { cartItemDecrease, cartItemIncrease, cartItemDelete } from '../../actions';
import { bindActionCreators } from 'redux';

const ShopingCartTable = ({ items, total, cartItemDecrease, cartItemIncrease, cartItemDelete }) => {
    console.log(items);

    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button className="btn btn-outline-success btn-plus"
                        onClick={() => cartItemIncrease(id)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-outline-warning btn-minus"
                        onClick={() => cartItemDecrease(id)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button className="btn btn-outline-danger btn-remove"
                        onClick={() => cartItemDelete(id)}>
                        <i className="fa fa-trash" />
                    </button>
                </td>
            </tr>
        );
    };


    return (
        <div className="shoping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ cartItemDecrease, cartItemIncrease, cartItemDelete }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable);