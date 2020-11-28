import CartActionTypes from '../cart/cart.type'
import {addItemToCart, removeItemToCart} from './cart.util';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer =(state=INITIAL_STATE, action)=> {
    
    const {type, payload} = action;
    switch(type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, payload)
            }
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item=> item.id!==payload.id)
            }
        default:
            return state;
    }
}

export default CartReducer;