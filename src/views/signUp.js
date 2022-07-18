import {validateInput} from '../lib/index.js';
import {sendDataSignUp} from '../lib/firebase.js';

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
    </main>
    `

    const element = document.querySelector('body');
    element.innerHTML = signup;

    const saveData = () => {
        const username = element.querySelector('.username').value;
        const mail = element.querySelector('.email').value;
        const password = element.querySelector('.password').value;
        sendDataSignUp(validateInput(username, 'userR', 'username', element), 
        validateInput(mail, 'mailR', 'mail', element), 
        validateInput(password, 'passwordR', 'password', element), element);
    }

    element.querySelector('.create-account').addEventListener('click', saveData )

    return element;
}

export { signUp };