import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import SignInSignup from './pages/SignInSignUp';
import CheckoutPage from './pages/Checkout';
import Header from './components/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/user/user.actions'
import { selectCurrentUser} from './Redux/user/user.selector'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop}/>
        <Route exact path ='/checkout' component={CheckoutPage}/>
        <Route 
        exact 
        path='/signin' 
        render={() => 
        this.props.currentUser ? (
        <Redirect to='/'/>
        ) 
        : (
        <SignInSignup />)
        } />
      </Switch>
    </div>
  );
}

}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, 
  mapDispatchToProps
  )(App);
