import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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

export const auth = getAuth();




