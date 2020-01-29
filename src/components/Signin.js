import React, { Component } from 'react'

import FormInput from './FormInput';
import CustomBtn from './CustomBtn';
import './signin.scss';

export class Signin extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = event => {
            event.preventDefault();

            this.setState({email: '', password: ''})
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
              <CustomBtn type="submit">Sign In</CustomBtn>
            </form>
          </div>
        );
    }
}

export default Signin
