import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import SignInSignup from './pages/SignInSignUp';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={SignInSignup}/>
      </Switch>
    </div>
  );
}

export default App;
