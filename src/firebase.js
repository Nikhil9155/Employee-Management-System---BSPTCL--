// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSyEVTKd0hvfEQr2KsK17W7wtO4ifUfuY",
  authDomain: "electricitybill-7aa8e.firebaseapp.com",
  projectId: "electricitybill-7aa8e",
  storageBucket: "electricitybill-7aa8e.appspot.com",
  messagingSenderId: "399377935196",
  appId: "1:399377935196:web:def862e8d4a019990b6f99",
  measurementId: "G-6NF2X8RE97"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, auth, db, storage };