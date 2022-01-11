import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, UserCredential, getAuth, signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDFUULhDQvO73oVI6_pYkwr5fGgbClU40Q",
  authDomain: "waco-test-68241.firebaseapp.com",
  projectId: "waco-test-68241",
  storageBucket: "waco-test-68241.appspot.com",
  messagingSenderId: "651934466255",
  appId: "1:651934466255:web:8aa909c6d162d78bc1f7ba"
};

initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'it';

export const loginWithGoogle = (): Promise<UserCredential> => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
}

export const logout = (): Promise<void> => {
  return signOut(auth);
}
