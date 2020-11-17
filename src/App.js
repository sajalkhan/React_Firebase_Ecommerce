import React,{useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import SignInSignUp from './Pages/signIn-signUp/signin-signup';
import './App.css';

import {auth} from './firebase/firebase-util';
 
const App =()=> {
 
  const [state, setState] = useState({
    currentUser: null
  });

  useEffect(()=> {
    var unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      setState({currentUser: user});
    });
    
    return ()=> {
      unsubscribeFromAuth();
    }

  },[]);

  return (
    <div>
      <Header currentUser ={state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
