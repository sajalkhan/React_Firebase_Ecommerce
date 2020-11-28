import CartActionTypes from './cart.type'

export const toggleCartHidden =()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const Add_new_item = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const Remove_Item = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const Clear_Cart_Item = item => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: item
})