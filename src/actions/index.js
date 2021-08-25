import actionTypes from "../action-types";

const booksLoaded = (newBooks) => {
    return {
        type: actionTypes.booksLoaded,
        payload: newBooks,
    };
};

const booksRequested = () => {
    return {
        type: actionTypes.booksRequested,
    };
};

const booksError = (error) => {
    return {
        type: actionTypes.booksError,
        payload: error,
    };
};

const bookAddedToCart = (bookId) => {
    return {
        type: actionTypes.bookAddedToCart,
        payload: bookId,
    };
};

// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//     dispatch(booksRequested());
//     bookstoreService.getBooks()
//         .then((data) => dispatch(booksLoaded(data)))
//         .catch((err) => dispatch(booksError(err)));
// };

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

const cartItemIncrease = (cartItemId) => {
    return {
        type: actionTypes.cartItemIncrease,
        payload: cartItemId,
    };
};

const cartItemDecrease = (cartItemId) => {
    return {
        type: actionTypes.cartItemDecrease,
        payload: cartItemId,
    };
};

const cartItemDelete = (cartItemId) => {
    return {
        type: actionTypes.cartItemDelete,
        payload: cartItemId,
    };
};

export {
    fetchBooks,
    bookAddedToCart,
    cartItemIncrease,
    cartItemDecrease,
    cartItemDelete,
};