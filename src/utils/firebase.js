// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore , collection , addDoc , getDocs, writeBatch , doc } from "firebase/firestore";
import flightDetails from '../utils/Flights'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUtJunYviVbQrIKR3dtOfFJYMhXWkmf2I",
  authDomain: "flightbookinfinal.firebaseapp.com",
  projectId: "flightbookinfinal",
  storageBucket: "flightbookinfinal.firebasestorage.app",
  messagingSenderId: "80806590491",
  appId: "1:80806590491:web:84905231be03a46b8a60be",
  measurementId: "G-NKCCPS2KFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

// console.log("flight details" , flightDetails);







export {
    app,
    db,
    getDocs,
    // flightTicketsCollection,
    // collection,
    flightDetails,
    doc,
    auth

}








