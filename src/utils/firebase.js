import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBlQhOA6BJvQo9EsXhsYTJKEqn-xI2OkGc",
    authDomain: "devlink-ef28a.firebaseapp.com",
    projectId: "devlink-ef28a",
    storageBucket: "devlink-ef28a.appspot.com",
    messagingSenderId: "140355747830",
    appId: "1:140355747830:web:471ac39c96a03bded711d7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

export const auth = getAuth();
export const signInWithPopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
}