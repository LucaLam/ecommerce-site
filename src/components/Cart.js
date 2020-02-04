import React from 'react';
import { connect } from 'react-redux';

import './cart.scss';

import CustomBtn from './CustomBtn';
import CartItem from './CartItem';

import { selectCartItems } from '../Redux/cart/cart.selectors'

const Cart = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomBtn> GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart);

