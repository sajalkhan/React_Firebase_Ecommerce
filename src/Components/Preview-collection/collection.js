import React from 'react'
import './collection.scss'
import CollectionItems from '../collection-items/collectionItems'

const collection = ({ title, items }) => {
    return (
        <div className='collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, indx)=> indx<4).map(({id, ...othersItems}) => (
                        <CollectionItems key={id} {...othersItems}/>
                    ))
                }
            </div>
        </div>
    )
}

export default collection; 