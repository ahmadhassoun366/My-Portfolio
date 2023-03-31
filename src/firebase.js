import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getFunctions } from 'firebase/functions';

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

// Get the Firestore and Realtime Database instances
const db = getFirestore(app);
const database = getDatabase(app);

// Get the Cloud Functions instance
const functions = getFunctions(app);

export { db, database, functions };