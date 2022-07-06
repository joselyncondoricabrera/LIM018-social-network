import { saveData } from "../lib/index.js";

function signUp () {
    const signup = `
    <img class="background" src="./icons/mobile-createA.png" />
    <main class="main-form">
        <h1>Crear cuenta</h1>
        <p>Por favor llene los datos antes de continuar.</p>
        <form class="form">
            <div class="form-input" >
                <img src="./icons/user.png"/>
                <input class="username" type="text" placeholder="nombre de usuario" required>
            </div>
            <span class="form-alert incorrect-input">El nombre de usurio no es válido</span>

            <div class="form-input">
                <img src="./icons/email.png"/>
                <input class="email" type="email" placeholder="email" required>
            </div>
            <span class="form-alert incorrect-input">El email no es válido</span>

            <div class="form-input">
                <img src="./icons/key.png"/>
                <input class="password" type="password" placeholder="contraseña" required>
            </div>
            <span class="form-alert incorrect-input">La contraseña no es válida</span>

            <button class="form-button create-account" type="button">Crear cuenta</button>
            <a href="/" class="form-link" >tienes cuenta?</a>
        </form>
    </main>
    `
    const element = document.querySelector('body');
    element.innerHTML = signup;
    element.querySelector('.create-account').addEventListener('click', saveData )
    return element;
}

export { signUp };