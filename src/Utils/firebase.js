// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALVqVrfL87nO5L1GBrdJTxqqP4D7Hol-k",
  authDomain: "netflixgpt-17f5b.firebaseapp.com",
  projectId: "netflixgpt-17f5b",
  storageBucket: "netflixgpt-17f5b.appspot.com",
  messagingSenderId: "130065774425",
  appId: "1:130065774425:web:1e05f092ecba.l0-a228623e48",
  measurementId: "G-QSVQYZMBMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth()