//aquí nuestros imports
//import changeView from './controller/viewControler.js'
//import {} from './lib/firebase.js'


import changeView from './controller/viewControler.js';
//codigo nuevo
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore,getDocs, collection} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

/*
const firebaseConfig = {
    apiKey: "AIzaSyCqyNBMUmtAycnlkwGVANuZa7JyYw2Vtg0",
    authDomain: "social-network-hugme.firebaseapp.com",
    projectId: "social-network-hugme",
    storageBucket: "social-network-hugme.appspot.com",
    messagingSenderId: "98064810188",
    appId: "1:98064810188:web:95af45d902de461c694269",
    measurementId: "G-4CWFF7HQ9L"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();*/


//--aqui termina(codigo nuevo)


// aquí inicializamos window

function currentWindowPath() {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}
//se ejecuta cada vez que hay una recarga de la pagina
window.addEventListener('load', currentWindowPath)

window.addEventListener('hashchange', () => changeView(window.location.hash))


//comparando dato para iniciar sesión (codigo nuevo)
/*let buttonSingIn = document.querySelector('.form-button');


buttonSingIn.addEventListener('click', async ()=>{
    let usernameInput = document.querySelector('.username').value;
    //probando si funciona el boton
    console.log('boton funcionando');
    console.log(usernameInput);

    console.log(getDocs(collection(db,'usuario')));

    let arrayNombreUsuario;

    const nuvData = await  getDocs(collection(db,'usuario'));
    nuvData.forEach(element => {
        const usuario = element.data();
        arrayNombreUsuario = usuario.nombreUsuario;
        if(usernameInput == arrayNombreUsuario){
            console.log('ya existe este usuario' );
        }
        else{
            console.log('no existe este usuario');
        }

        
        
        
    });
   

} );*/
//--aqui termina (codigo nuevo)