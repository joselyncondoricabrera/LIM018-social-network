// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
// está parte de código proviene de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEWwbEGF5ilU7fhEKajQgeB6kaVebzEw0",
  authDomain: "socialnetworkhugme.firebaseapp.com",
  projectId: "socialnetworkhugme",
  storageBucket: "socialnetworkhugme.appspot.com",
  messagingSenderId: "675120175290",
  appId: "1:675120175290:web:eccf9fd00fdc4f956a0a83",
  measurementId: "G-KGG2G5SXXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// aquí termina firebase

//const createAccountData =  document.querySelector('#create-account');
const sendData = document.querySelector('.send-data');
/* console.log(createAccountData, 'hola mundo')
 */
//const usersList = [];

const getData = (username, email, password) => {
    const newUser = {
        inputUsername: username,
        inputEmail: email,
        inputPassword: password,
    }
    //usersList.push(newUser);
    //console.log(usersList)
}


function saveData () {
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    getData(username, email, password);
}

/* function validateData (username, email, password) {
    if(  (/^[a-zA-Z0-9\_\-]{4,16}$/).test(email) ) {
        document.querySelector(`.create-account__error-${email}`)
    }
} */

sendData.addEventListener('click', saveData )