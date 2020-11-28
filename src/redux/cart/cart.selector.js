
import { createSelector } from 'reselect'

const selectedCart = state => state.cart;

export const selectedCartItems = createSelector(
    [selectedCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectedCartItems],
    cartItems => cartItems.reduce(
        (prev, next)=> prev + next.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectedCartItems],
    cartItems => cartItems.reduce(
        (prev, next) => prev + next.quantity * next.price, 0)
)