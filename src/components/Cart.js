import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'


import './cart.scss';

import CustomBtn from './CustomBtn';
import CartItem from './CartItem';

import { selectCartItems } from '../Redux/cart/cart.selectors'


const Cart = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomBtn onClick={()=> history.push('/checkout')}> GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));

