import React from 'react';

import { connect } from 'react-redux';

// import CollectionItem from '../../components/CollectionItem'

import { selectCollection} from '../../Redux/shop/shop.selector'

import './collection.scss';

const Collection = ({ collection }) => {
    console.log(collection);
    return(
    <div className='collection'>
        <h2> Category Page</h2>
    </div>
);
};


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);