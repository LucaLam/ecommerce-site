import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'


import './cart.scss';

import CustomBtn from './CustomBtn';
import CartItem from './CartItem';

import { selectCartItems } from '../Redux/cart/cart.selectors'
import { toggleCartHidden } from '../Redux/cart/cart.actions'


const Cart = ({cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomBtn onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}> GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));

