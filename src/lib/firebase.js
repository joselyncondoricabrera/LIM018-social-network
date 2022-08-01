/* eslint-disable no-trailing-spaces, object-curly-newline, comma-dangle, 
no-console, arrow-body-style */
/* eslint-disable import/no-unresolved */
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

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

/* Funciones auth (para crear cuenta e iniciar sesión) */

// creando Usuario
const createUser = (mail, password) => createUserWithEmailAndPassword(auth, mail, password);

// sign in user
const signInAuth = (mail, password) => signInWithEmailAndPassword(auth, mail, password);

// sign in with google
const googleAuth = () => signInWithPopup(auth, provider);

// log out user
const logOut = () => signOut(auth);

// verificando si el email es valido
const emailVerification = () => sendEmailVerification(auth.currentUser);

// state user
const userSatate = (state) => onAuthStateChanged(auth, state);

/* Funciones firestore */

// guardando datos del usuario creado en Firestore
const saveUser = async (uid, username, mail) => {
  try {
    // con setDoc establecemos el id de nuestro usuario,
    // en este caso será el id que genera con auth de createUserWithEmailAndPassword
    return await setDoc(doc(db, 'users', uid), {
      username,
      email: mail,
    });
  } catch (e) {
    return e;
    // console.log(e);
  }
};

// trayendo la data del user
const getUserData = async (uid) => {
  const docRef = doc(db, 'users', uid);
  try {
    // con setDoc establecemos el id de nuestro usuario,
    // en este caso será el id que genera con auth de createUserWithEmailAndPassword
    return await getDoc(docRef);
  } catch (e) {
    return e;
    // console.log(e);
  }
};

/* // crear publicación
const createPublication = async (type, sex, img, name, age, description) => {
  try {
    const user = auth.currentUser.uid;
    const pubCollection = collection(db, 'users', user, 'publications');
    return await addDoc(pubCollection, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (e) {
    return e;
    // console.log(e);
  }
}; */

// subir y descargar imagen
const uploadImg = async (img) => {
  const imgRef = ref(storage, img.name);
  const metadata = {
    contentType: img.type,
  };
  try {
    const uploadTask = await uploadBytes(imgRef, img, metadata);
    // console.log(await getDownloadURL(uploadTask.ref));
    return await getDownloadURL(uploadTask.ref);
  } catch (e) {
    return e;
    // console.log(e);
  }
};

/* // listar publicaciones
const showPublications = async () => {
  try {
    const publications = collectionGroup(db, 'publications');
    return await getDocs(publications);
  } catch (e) {
    return e;
    // console.log(e);
  }
}; */

// publicaión tocada
const clickPublication = async (name) => {
  try {
    const publications = query(collectionGroup(db, 'publications'), where('petName', '==', name));
    return await getDocs(publications);
  } catch (e) {
    return e;
    // console.log(e);
  }
};

const publicationsOfCurrentUser = async (pub) => {
  try {
    const user = auth.currentUser.uid;
    const publications = query(collection(db, 'users', user, 'publications'), where('petName', '==', pub));
    return await getDocs(publications);
  } catch (e) {
    return e;
    // console.log(e);
  }
};

const publicationByTypePet = async (type) => {
  try{
    const publications = query(collectionGroup(db, 'publications'), where('petType', '==', type));
    return await getDocs(publications);
  } catch (e){ console.log(e);}

};

const updatePublication = async (pub, user, type, sex, img, name, age, description) => {
  try {
    const publication = doc(db, 'users', user, 'publications', pub);
    return await updateDoc(publication, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (e) {
    return e;
    // console.log(e);
  }
};

const deletePublication = async (userUid, idPublication) => {
  try {
    await deleteDoc(doc(db, 'users', userUid, 'publications', idPublication));
  } catch (e) { console.log(e); }
};

export {
  userSatate,
  createUser,
  signInAuth,
  googleAuth,
  logOut,
  emailVerification,
  saveUser,
  getUserData,
  uploadImg,
  clickPublication,
  updatePublication,
  publicationsOfCurrentUser,
  publicationByTypePet,
  deletePublication,
  // createPublication,
};

export {
  db,
  getDocs,
  collection,
  collectionGroup,
  addDoc,
}