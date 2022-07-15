import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
import { getFirestore, doc, setDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
import changeView from "../controller/viewControler.js";
import {validateInput, resetForm} from './index.js'
//getDocs,collection,query,where

//import changeView from './controller/viewControler.js';

const firebaseConfig = {
    apiKey: "AIzaSyCqyNBMUmtAycnlkwGVANuZa7JyYw2Vtg0",
    authDomain: "social-network-hugme.firebaseapp.com",
    projectId: "social-network-hugme",
    storageBucket: "social-network-hugme.appspot.com",
    messagingSenderId: "98064810188",
    appId: "1:98064810188:web:95af45d902de461c694269",
    measurementId: "G-4CWFF7HQ9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// capturando elementos
const logInButton = document.querySelector('.log-in');
const continueWithGoogle = document.querySelector('.button-authentication');


// iniciar sesión code
const saveData = () => {
    const mail = document.querySelector('.login-email').value
    const password = document.querySelector('.login-password').value
    sendDataLogin(validateInput(mail, 'mailR', 'mail', document),
    validateInput(password, 'passwordR', 'password', document))
}

logInButton.addEventListener('click', saveData);

const sendDataLogin = (mail, password) => {
    if( mail && password != false) {
       if(auth.currentUser.emailVerified){
        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('inicio de sesión exitoso')
          window.location.hash = changeView('#/home')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode)
        });
      } else {
        alert('tu cuenta no está verificada')
      }
    }
}

// autenticación con google
 const googleAuthtenticationButton = () => {
  signInWithPopup(auth, provider) 
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

   /* 
   
   
   
   
   agrega data a firestore(codigo nuevo)

    setDoc(doc(db, "users", user.uid), {
      userName: user.displayName,
      email: user.email,
      password: '',
    });
    //---*/

  
    
    alert('inicio de sesión exitoso')
   // const docRef = doc(db, "users", user.uid);

    getDoc(docRef)
    .then((doc) => {
      if(doc.exists && doc.data() != undefined){
        console.log('Document data:', doc.data())
      } 
      else {
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
          email: user.email,
        });
        console.log('No such document')
      }
    })

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage, email)
  });
}

continueWithGoogle.addEventListener('click', googleAuthtenticationButton );


// función para crear usuario 
const sendDataSignUp = (username, mail, password, document) => {
  if( username && mail && password != false ){
 createUserWithEmailAndPassword(auth, mail, password)
  .then((userCredential) => {
    const user = userCredential.user;
    sendEmailVerification(user)
    setDoc(doc(db, "users", user.uid), {
      username: username,
      email: mail,
      password: password,
    });
    window.location.hash = changeView('#/signup')
    console.log('Successfully created new user:', user.emailVerified);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
  }
}

export {sendDataSignUp};