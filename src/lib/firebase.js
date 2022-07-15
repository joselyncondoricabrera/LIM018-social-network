import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
import { getFirestore, doc, setDoc, getDoc, updateDoc,collection } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
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
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// capturando elementos
const logInButton = document.querySelector('.log-in');
const continueWithGoogle = document.querySelector('.button-authentication');


// iniciar sesión
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
          window.location.hash = '#/home';
          resetForm('form', document)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode)
          resetForm('form', document)
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
    
    alert('inicio de sesión exitoso')
    const docRef = doc(db, "users", user.uid);

    getDoc(docRef)
    .then((doc) => {
      if(doc.exists && doc.data() != undefined){
        console.log('Document data:', doc.data())
        window.location.hash = '#/home';
      } 
      else {
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
          email: user.email,
          publications: [],
        });
        window.location.hash = '#/home';
      }
    })

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage)
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
      publications: [],
    });
    resetForm('form', document)
    console.log('Successfully created new user:', user.emailVerified);
    window.location.hash = ''
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
    resetForm('form', document)
  });
  }
}

//crear publicaciones
const createPublicationF = (type, sex, img, name, description) => {
  //const docRef = doc(db, "users", auth);
  const user = auth.currentUser.uid
  updateDoc(doc(db, "users", user), {
   publications: [
    /* type: type,
    sex: sex,
    img: img,
    petname: name,
    petdescription: description, */
   ]
  })
  /* updateDoc(docRef.publications, {

  }) */
 /*  washingtonRef.update({
    capital: true
})
.then(() => {
    console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
}); */
}


export {sendDataSignUp, createPublicationF};