// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh7cjFLomLnDZ7SKnONAhDYQWJn0jkbTg",
  authDomain: "react-cursos-9931d.firebaseapp.com",
  projectId: "react-cursos-9931d",
  storageBucket: "react-cursos-9931d.appspot.com",
  messagingSenderId: "411690008192",
  appId: "1:411690008192:web:1f01a1af8cbe867e59b065"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
