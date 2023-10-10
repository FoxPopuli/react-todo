// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaxdY5hMGhyepQiqnOP-8T0w3r4zMEClc",
  authDomain: "react-todo-75b5d.firebaseapp.com",
  databaseURL: "https://react-todo-75b5d-default-rtdb.firebaseio.com",
  projectId: "react-todo-75b5d",
  storageBucket: "react-todo-75b5d.appspot.com",
  messagingSenderId: "418189707884",
  appId: "1:418189707884:web:c2259802f129d18b126649",
  measurementId: "G-GEH7Q5KBPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
