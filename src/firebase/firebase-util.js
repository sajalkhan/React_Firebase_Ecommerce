import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig  = {
    apiKey: "AIzaSyCmmzr4yX9cmu6LtF8sUrOLfAClbvqR3sY",
    authDomain: "crown-db-e6f91.firebaseapp.com",
    databaseURL: "https://crown-db-e6f91.firebaseio.com",
    projectId: "crown-db-e6f91",
    storageBucket: "crown-db-e6f91.appspot.com",
    messagingSenderId: "87878666764",
    appId: "1:87878666764:web:7985d34340cb5d7e603c29",
    measurementId: "G-6JJC7N7P3G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); //use for authentication
export const firestore = firebase.firestore(); // for database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;