import React, { useEffect } from 'react';
import { withBookstoreService } from '../../components/hoc';
import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import BookList from '../../components/book-list';
import { bindActionCreators } from 'redux';

const BookListContainer = ({ books, loading, error, fetchBooks, onAddedToCart }) => {
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />
};


const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart,
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);

