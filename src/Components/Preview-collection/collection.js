import React from 'react'
import './collection.scss'
import CollectionItems from '../collection-items/collectionItems'

const collection = ({ title, items }) => {
    return (
        <div className='collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, indx)=> indx<4).map((item) => (
                        <CollectionItems key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default collection; 