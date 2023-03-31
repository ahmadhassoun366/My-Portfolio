// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPcMTVqajMI01gwhjfYEIPgLCV2PIh6k8",
    authDomain: "database-3c8e0.firebaseapp.com",
    databaseURL: "https://database-3c8e0-default-rtdb.firebaseio.com",
    projectId: "database-3c8e0",
    storageBucket: "database-3c8e0.appspot.com",
    messagingSenderId: "86879588902",
    appId: "1:86879588902:web:e871234419bb018f69cce7",
    measurementId: "G-X932TG8WXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// in order to use this auth instance elsewhere
export {db};
export const database = getDatabase(app);
