import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Collection from '../../Components/Preview-collection/collection'

class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...allCollection }) => (
                        <Collection key={id} {...allCollection} />
                    ))
                }
            </div>
        );
    }
}
 
export default shop;