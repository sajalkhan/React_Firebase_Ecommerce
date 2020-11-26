import React,{useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import SignInSignUp from './Pages/signIn-signUp/signin-signup';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase-util';
import {setCurrentUser}  from './redux/user/user.actions';

//Redux
import {connect} from 'react-redux'

const App = ({currentUser, setCurrentUser})=> {

  useEffect(()=> {
    var unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=> {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      
      setCurrentUser( userAuth); 
    });
    
    return ()=> {
      unsubscribeFromAuth();
    }

  }, [setCurrentUser  ]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render={()=> {currentUser? <Redirect to='/' />: <SignInSignUp/>}}/>
      </Switch>
    </div>
  );
} 

const mapStateToProps =({user})=> ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch=> ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps,  mapDispatchToProps)(App);
