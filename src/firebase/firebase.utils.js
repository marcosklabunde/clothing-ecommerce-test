import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDW7P9uRyyJaugAB3cl3upAJaFEuXdOvq8",
    authDomain: "crwn-db-4a5c1.firebaseapp.com",
    projectId: "crwn-db-4a5c1",
    storageBucket: "crwn-db-4a5c1.appspot.com",
    messagingSenderId: "443052724127",
    appId: "1:443052724127:web:dabbd7ef163a3f1af9b7aa",
    measurementId: "G-8YZN0H22KW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;