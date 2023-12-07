import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';






const firebaseConfig = {
  apiKey: "AIzaSyBHyA9OY4UQkm5eaH8KYtMz-WOrxHcxHDQ",
  authDomain: "rockeala-indumentaria.firebaseapp.com",
  projectId: "rockeala-indumentaria",
  storageBucket: "rockeala-indumentaria.appspot.com",
  messagingSenderId: "443663203014",
  appId: "1:443663203014:web:397238b2db79493599b5c7"
};


 initializeApp(firebaseConfig);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
