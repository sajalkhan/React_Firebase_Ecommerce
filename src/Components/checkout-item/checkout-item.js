import React from 'react'
import './checkout-item.scss'

import {Clear_Cart_Item, Add_new_item, Remove_Item} from '../../redux/cart/cart.action'

//redux
import {connect} from 'react-redux'

const CheckoutItem = ({ Clear_Cart_Item, Add_new_item, Remove_Item, cartItem})=> {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl}  alt='item' />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => Remove_Item(cartItem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> Add_new_item(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={()=> Clear_Cart_Item(cartItem)}>&#10005;</div>
        </div>
    )
}

export default connect(null, { Clear_Cart_Item, Add_new_item, Remove_Item })(CheckoutItem);