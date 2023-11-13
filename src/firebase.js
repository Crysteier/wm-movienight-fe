// Import the functions you need from the SDKs you need
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZ0nx3YJ9EiWoxCAd6IFHzET6-igN3d5c",
    authDomain: "movienightfe-33b77.firebaseapp.com",
    projectId: "movienightfe-33b77",
    storageBucket: "movienightfe-33b77.appspot.com",
    messagingSenderId: "438101471943",
    appId: "1:438101471943:web:a4e121be8b7ec4dddbc4e2",
    measurementId: "G-M3807XYVB2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;