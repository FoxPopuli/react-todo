// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyBPyqTce3jjzInONxcPe0bIZX8YaKYglu4",
  authDomain: "react-to-do-development.firebaseapp.com",
  projectId: "react-to-do-development",
  storageBucket: "react-to-do-development.appspot.com",
  messagingSenderId: "59672634167",
  appId: "1:59672634167:web:e9e022802931972f8ff0b2",
  measurementId: "G-YZZ096QTHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
