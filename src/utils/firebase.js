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
    apiKey: "AIzaSyBSwW7hVBJgDTeIp-hbTzKH3TsTplzohbs",
    authDomain: "flightticketbookingapp.firebaseapp.com",
    projectId: "flightticketbookingapp",
    storageBucket: "flightticketbookingapp.appspot.com",
    messagingSenderId: "142886191071",
    appId: "1:142886191071:web:3c5eb6bef4d9210f528e6a",
    measurementId: "G-ENTY7LFC7W"
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








