import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification,deleteUser  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
import { getFirestore, doc, setDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
import {validateInput, resetForm} from './index.js'

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
        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...

          alert('inicio de sesión exitoso')

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
}

// autenticación con google
const googleAuthtenticationButton = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)

    
    //console.log(user.auth.currentUser.displayName)

    alert('inicio de sesión exitoso')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage)
  });
}

continueWithGoogle.addEventListener('click', googleAuthtenticationButton );


const sendDataSignUp = (username, mail, password, document) => {
  if(username && mail && password != false) {
      //console.log(username,mail, password, 'estas aquí')
      createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
          //console.log(userCredential)
          // Signed in
          const user = userCredential.user;
          // con setDoc especificamos el id del usuario en este caso utlizaremos el mismo id de auth
          sendEmailVerification(user)
          if(user.emailVerified === true) {
            setDoc(doc(db, "users", user.uid), {
              userName: document.querySelector('.username').value,
              email:  document.querySelector('.email').value,
              password: document.querySelector('.password').value,
            });
            alert('registro exitoso')
          } else {
            deleteUser(user.uid)
            alert('la cuenta no fue verificada')
          }
          //llamar al window.location
          //reseteando formulario
          resetForm('form', document)
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
              alert('Este usuario ya está en uso, porfavor use otro')
              resetForm('form', document)
          } else {
              alert('Algo salio mal, intentelo de nuevo más tarde')
              resetForm('form', document)
          }
          resetForm('form', document)
      });
  }
}

export {sendDataSignUp};