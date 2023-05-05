// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCsxjv0vHm1GTvW4etTa0tRoYa5mwNHuM",
  authDomain: "ztm-ecommerce-db-3fe2e.firebaseapp.com",
  projectId: "ztm-ecommerce-db-3fe2e",
  storageBucket: "ztm-ecommerce-db-3fe2e.appspot.com",
  messagingSenderId: "332308248350",
  appId: "1:332308248350:web:f86b802207f8d00c3b7b0f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);