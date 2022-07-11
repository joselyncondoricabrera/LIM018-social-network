import {validateInput, resetForm} from '../lib/index.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

function signUp () {
    const signup = `
    <img class="background" src="./icons/mobile-createA.png" />
    <main class="main-form">
        <h1>Crear cuenta</h1>
        <p>Por favor llene los datos antes de continuar.</p>
        <form class="form">
            <div class="form-input" >
                <img src="./icons/user.png"/>
                <input class="username" name="username" type="text" placeholder="nombre de usuario" required>
            </div>
            <span class="form-alert correct-username">El nombre de usurio es válido</span>
            <span class="form-alert incorrect-username ">El nombre de usurio no es válido</span>

            <div class="form-input">
                <img src="./icons/email.png"/>
                <input class="email" type="email" placeholder="email" required>
            </div>
            <span class="form-alert correct-mail">El email es válido</span>
            <span class="form-alert incorrect-mail">El email no es válido</span>

            <div class="form-input">
                <img src="./icons/key.png"/>
                <input class="password" name="password" type="password" placeholder="contraseña" required>
            </div>
            <span class="form-alert correct-password">La contraseña es válida</span>
            <span class="form-alert incorrect-password">La contraseña debe contener al menos 4 caracteres y como máximo 12</span>

            <button class="form-button create-account" type="button">Crear cuenta</button>
            <a href="/" class="form-link" >tienes cuenta?</a>
        </form>
        <button class="button-authentication" >registrarse con google</button>
    </main>
    `

    const element = document.querySelector('body');
    element.innerHTML = signup;
    //firebase
    const auth = getAuth();


    const saveData = () => {
        const username = element.querySelector('.username').value;
        const mail = element.querySelector('.email').value;
        const password = element.querySelector('.password').value;
        sendData(validateInput(username, 'userR', 'username', element), validateInput(mail, 'mailR', 'mail', element), validateInput(password, 'passwordR', 'password', element))
    }

    element.querySelector('.create-account').addEventListener('click', saveData )

    const sendData = (username, mail, password) => {
        if(username && mail && password != false) {
            //console.log(username,mail, password, 'estas aquí')

            createUserWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...

                // aquí envio datos al firestore
                //llamar al window.location
                alert('Registro exitoso')
                //reseteando formulario
                resetForm('form', element, 'username')
                resetForm('form', element, 'mail')
                resetForm('form', element, 'password')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                console.log(errorCode)
                if(errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    alert('Este usuario ya está en uso, porfavor use otro')
                    resetForm('form', element, 'username')
                    resetForm('form', element, 'mail')
                    resetForm('form', element, 'password')
                } else {
                    alert('Algo salio mal, intentelo de nuevo más tarde')
                    resetForm('form', element, 'username')
                    resetForm('form', element, 'mail')
                    resetForm('form', element, 'password')
                }
                resetForm('form', element, 'username')
                resetForm('form', element, 'mail')
                resetForm('form', element, 'password')
            });
        }
    }

    return element;
}

export { signUp };