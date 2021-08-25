import React from 'react';
import './book-list.scss';
import BookListItem from '../book-list-item';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map(({ id, ...book }) => (
                    <li key={id}>
                        <BookListItem book={book} onAddedToCart={() => onAddedToCart(id)} />
                    </li>
                ))
            }
        </ul>
    );
};

export default BookList;