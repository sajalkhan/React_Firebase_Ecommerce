import React from 'react'

import './collectionItems.scss'
import CustomButton from '../custom-button/custom-button'

//Redux
import {connect} from 'react-redux'
import { Add_new_item} from '../../redux/cart/cart.action'

const CollectionItems = ({ item, Add_new_item})=> {

    const { id, name, price, imageUrl } = item;
    
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton addItem onClick={()=>Add_new_item(item)}> Add TO Card </CustomButton>
        </div>
    )
}

export default connect(null, { Add_new_item })(CollectionItems);