import React, { Component } from 'react'

import SHOP_DATA from './shopData';
import PreviewCollection from '../components/PreviewCollection.js';

export class Shop extends Component {
    state = {
        collections: SHOP_DATA
    }


    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop
