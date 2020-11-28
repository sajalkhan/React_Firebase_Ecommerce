import React from 'react'

import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button'
import CartItems from '../cart-item/cart-item'
import {selectedCartItems} from '../../redux/cart/cart.selector'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-dropdown.scss'
//redux
import {connect} from 'react-redux'

const CartDropdown = ({ cartItems, history, dispatch })=> (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(item=> (
                    <CartItems key={item.id}  item={item}/>
                )) : 
                <span class='empty-msg'> Your Cart Is Empty!</span>
            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state)=> ({
    cartItems: selectedCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));