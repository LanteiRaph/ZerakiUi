//Import firebase from firebase and set the configarations

import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4mdB3VhqifM8MD5RkmzuuX9x4fFp1PZg",
    authDomain: "zeraki-6ca2f.firebaseapp.com",
    databaseURL: "https://zeraki-6ca2f.firebaseio.com",
    projectId: "zeraki-6ca2f",
    storageBucket: "zeraki-6ca2f.appspot.com",
    messagingSenderId: "759789538073",
    appId: "1:759789538073:web:4f2df18b2f628882b89388"
  };
  let firebaseApp_ ;
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebaseApp_ = firebase.initializeApp(firebaseConfig);
    
  }

  export default firebaseApp_