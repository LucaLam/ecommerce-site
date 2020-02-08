import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../PreviewCollection';
import {selectCollections} from '../../Redux/shop/shop.selector';

import './collectionsoverview.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionProps}) => 
        (
        <PreviewCollection key={id} 
        {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);