import React from 'react';

import './cart.scss';

import CustomBtn from './CustomBtn';

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomBtn> GO TO CHECKOUT</CustomBtn>
    </div>
);

export default Cart;

