import CartActionTypes from './cart.type'

export const toggleCartHidden =()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const Add_new_item = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});