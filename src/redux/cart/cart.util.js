export const addItemToCart = (cartItems, cartItemToAdd)=> {
    const existingCartItem = cartItems.find(Item=> Item.id ===cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(
            cartItem=> cartItem.id === cartItemToAdd.id
            ?{...cartItem, quantity: cartItem.quantity +1}
             : cartItem)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemToCart = (cartItems, cartItemToRemove)=> {

    const existingItem = cartItems.find(Item=> Item.id === cartItemToRemove.id);

    if(existingItem.quantity === 1) {
        return cartItems.filter(Item=> Item.id!==cartItemToRemove.id);
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
}