import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden})=> (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default connect(null, {toggleCartHidden})(CartIcon);