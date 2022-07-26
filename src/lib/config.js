/* eslint-disable import/no-unresolved, object-curly-newline */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js';

import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  collectionGroup,
  addDoc,
  getDocs,
  query,
  where,
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCqyNBMUmtAycnlkwGVANuZa7JyYw2Vtg0',
  authDomain: 'social-network-hugme.firebaseapp.com',
  projectId: 'social-network-hugme',
  storageBucket: 'social-network-hugme.appspot.com',
  messagingSenderId: '98064810188',
  appId: '1:98064810188:web:95af45d902de461c694269',
  measurementId: 'G-4CWFF7HQ9L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, db, provider, storage };

// exportamos funciones storage
export { ref, uploadBytes, getDownloadURL };

// exportamos funciones auth
export {
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
};

// exportamos funciones firestore
export {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  collectionGroup,
  addDoc,
  getDocs,
  query,
  where,
};
