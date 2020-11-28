import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden, totalItems})=> (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{totalItems}</span>
    </div>
);

const mapStateToProps =(state)=> ({
    totalItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);