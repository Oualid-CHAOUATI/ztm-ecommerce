// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
// ----------

const usersCollection = "users";
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, extraInfo = {}) => {
  const userDocRef = doc(db, usersCollection, userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,

        ...extraInfo,
      });
    } catch (err) {
      console.log("error creating doc ", err);
    }
  }
};

export const createUserAuthWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  // console.log(user);
  return await createUserDocFromAuth(user, { displayName });
};
