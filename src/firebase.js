// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9hqa584swb-5LOfRWX4Grb7uGWcAes7k",
  authDomain: "react-chat-76fee.firebaseapp.com",
  projectId: "react-chat-76fee",
  storageBucket: "react-chat-76fee.appspot.com",
  messagingSenderId: "256046890781",
  appId: "1:256046890781:web:7ad82c6bad05e5b03fabf4",
  measurementId: "G-QT4RHXN6RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);