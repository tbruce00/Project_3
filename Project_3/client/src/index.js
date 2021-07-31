import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import LoadingIndicator from './components/loader/loader';

var firebaseConfig = {
  apiKey: "AIzaSyDCB3ihfMJNCTgJmckzug6TxAKQyvs5Wwg",
  authDomain: "project-3-930bb.firebaseapp.com",
  projectId: "project-3-930bb",
  storageBucket: "project-3-930bb.appspot.com",
  messagingSenderId: "63137074",
  appId: "1:63137074:web:ec542e7067cbc1cfbaa32b",
  measurementId: "G-XW8KQ6T9V2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);



