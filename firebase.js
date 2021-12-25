import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBg4zKVNB9s38m2WOIcZmIagMh0edgQyAQ",
    authDomain: "scheduler-8918e.firebaseapp.com",
    databaseURL: "https://scheduler-8918e-default-rtdb.firebaseio.com",
    projectId: "scheduler-8918e",
    storageBucket: "scheduler-8918e.appspot.com",
    messagingSenderId: "234669663710",
    appId: "1:234669663710:web:5822d98c0c82eaaf39694f",
    measurementId: "G-5FL63B5KR2"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };