import actionTypes from "../action-types";

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item,
        ];
    }

    if (!item.count) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ];
};

const getNewCartItem = (item, book, actionValue) => {
    return item
        ? {
            ...item,
            count: !actionValue ? 0 : item.count + 1 * actionValue,
            total: item.total + book.price * actionValue,
        }
        : {
            id: book.id, title: book.title, count: 1, total: book.price,
        }
};

const getOrderTotal = (orderTotal, bookPrice, itemTotal, actionValue) => {
    if (!actionValue) {
        return orderTotal - itemTotal;
    }
    return orderTotal + bookPrice * actionValue;
};

const updateCartItem = (state, itemId, actionValue = 1) => {
    const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state;

    const book = books.find(({ id }) => id === itemId);
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    const item = cartItems[itemIndex];
    const newItem = getNewCartItem(item, book, actionValue);
    const newCartItems = updateCartItems(
        cartItems,
        newItem,
        itemIndex);
    const newOrderTotal = getOrderTotal(orderTotal, book.price, newItem.total, actionValue);

    return {
        cartItems: newCartItems,
        orderTotal: newOrderTotal,
    };
};



const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
        };
    }

    switch (action.type) {
        case actionTypes.bookAddedToCart:
        case actionTypes.cartItemIncrease:
            return updateCartItem(state, action.payload);
        case actionTypes.cartItemDecrease:
            return updateCartItem(state, action.payload, -1);
        case actionTypes.cartItemDelete:
            return updateCartItem(state, action.payload, 0);
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;