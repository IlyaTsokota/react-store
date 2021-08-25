import React from 'react';
import './book-list-item.scss';

import { Link } from 'react-router-dom';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <Link to="/#" className="book-cover-img">
                    <img src={coverImage} alt={title} />
                </Link>
            </div>
            <div className="book-details">
                <Link to="/#" className="book-title">{title}</Link>
                <div className="book-author">
                    {author}
                </div>
                <div className="book-price">
                    ${price}
                </div>
                <button onClick={onAddedToCart} className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default BookListItem;
