import React, { Component } from 'react'

import FormInput from './FormInput';
import CustomBtn from './CustomBtn';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import './signin.scss';

export class Signin extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = async event => {
            event.preventDefault();

            const { email, password} =this.state

            try{
              await auth.signInWithEmailAndPassword( email, password);
              this.setState({email: '', password: ''})
            } catch(error){
              console.log(error);
            }
        }


        this.handleChange = event => {
            const {value, name} = event.target;
            this.setState({[name]: value}) //[name] targets whatever the equivalent to name is in our form.
        }

    }


    render() {
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required 
              />
              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required
              />
              <div className='buttons'> 
              <CustomBtn type="submit">Sign In</CustomBtn>
              <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
              </CustomBtn>
              </div>
            </form>
          </div>
        );
    }
}

export default Signin
