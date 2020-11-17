import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import SignInSignUp from './Pages/signIn-signUp/signin-signup';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
