import React from 'react'
import {selectedCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../Components/checkout-item/checkout-item'

//redux
import {connect} from 'react-redux'

import './checkout-page.scss'

const CheckoutPage =({cartItems, total})=> {
    return (
        <div className='checkout-page'>
             <div className='checkout-header'>
                 <div className='header-block'>
                     <span>Product</span>
                 </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
             </div>
             {
                 cartItems.map(item=>  (
                     <CheckoutItem key={item.id} cartItem={item}/>
                 )) 
             }
             <div className='total'>
                 <span>TOTAL: ${total} </span>
             </div>
        </div> 
    )
}

const mapStateToProps=(state)=> ({
    cartItems: selectedCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps, null)(CheckoutPage);