
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getRedirectResult } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2mi9tvk_OAqwWEkbA9kECGhuTYN9qbpA",
  authDomain: "final-hackthon-a8548.firebaseapp.com",
  projectId: "final-hackthon-a8548",
  storageBucket: "final-hackthon-a8548.appspot.com",
  messagingSenderId: "60187385646",
  appId: "1:60187385646:web:153e176df0bbf5c11924bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, provider, GoogleAuthProvider, signInWithPopup, getRedirectResult};