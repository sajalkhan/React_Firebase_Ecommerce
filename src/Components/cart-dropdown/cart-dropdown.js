import React from 'react'

import CustomButton from '../custom-button/custom-button'
import CartItems from '../cart-item/cart-item'
import './cart-dropdown.scss'
import {selectedCartItems} from '../../redux/cart/cart.selector'

//redux
import {connect} from 'react-redux'

const CartDropdown = ({ cartItems })=> (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item=> (
                    <CartItems key={item.id}  item={item}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state)=> ({
    cartItems: selectedCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropdown);