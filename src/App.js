import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage';
import Shop from './pages/Shop';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
