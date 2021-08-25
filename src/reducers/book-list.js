import actionTypes from "../action-types";

const getBookList = (books = [], loading = true, error = null) => {
    return {
        books,
        loading,
        error,
    };
};

const updateBookList = (state, action) => {
    if (state === undefined) {
        return getBookList();
    }

    switch (action.type) {
        case actionTypes.booksRequested:
            return getBookList();
        case actionTypes.booksLoaded:
            return getBookList(action.payload, false, null);
        case actionTypes.booksError:
            return getBookList([], false, action.payload);
        default:
            return state.bookList;
    }
};

export default updateBookList;