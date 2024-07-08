// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8usM7WQgB2DXByw_0qfMN7AQzHdc3gQc",
  authDomain: "myecommerce-52237.firebaseapp.com",
  projectId: "myecommerce-52237",
  storageBucket: "myecommerce-52237.appspot.com",
  messagingSenderId: "609470313231",
  appId: "1:609470313231:web:04f42512f18f96cba5c47a",
  measurementId: "G-DJGXY5XLX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth }