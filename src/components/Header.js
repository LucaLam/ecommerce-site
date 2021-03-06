import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import {ReactComponent as Logo } from '../assets/crown.svg'

import { auth } from '../firebase/firebase.utils'
import CartIcon from './CartIcon';
import Cart from './Cart';
import { selectCartHidden } from '../Redux/cart/cart.selectors';
import { selectCurrentUser} from '../Redux/user/user.selector'


import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo-container'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        { hidden ? null : <Cart />}
    </div>
);

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)