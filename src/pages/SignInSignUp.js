import React from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

import './signinsignup.scss';

const SignInSignUp = () =>(
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <Signup/>
    </div>
)

export default SignInSignUp;