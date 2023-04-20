import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9lbwvBZxJOHuoTSlnWI6N1ytFS-VKoJM",
  authDomain: "fisa-90e90.firebaseapp.com",
  projectId: "fisa-90e90",
  storageBucket: "fisa-90e90.appspot.com",
  messagingSenderId: "73733762599",
  appId: "1:73733762599:web:f6388eec42f776fd20e802"
};

firebase.initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
