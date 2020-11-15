import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
