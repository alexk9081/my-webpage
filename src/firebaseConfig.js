import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//Set up firebase connection
const firebaseConfig = {
    apiKey: "AIzaSyAqJg-fe3fayu8xapocNCJSzKm4XGhzq5E",
    authDomain: "personalwebsite-51254.firebaseapp.com",
    projectId: "personalwebsite-51254",
    storageBucket: "personalwebsite-51254.appspot.com",
    messagingSenderId: "32709056754",
    appId: "1:32709056754:web:3a1cefca604f4be665586b"
};

//Get all image urls from database
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const firestore = getFirestore(app);