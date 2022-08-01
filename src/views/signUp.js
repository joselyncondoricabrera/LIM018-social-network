import { validateInput, resetForm } from '../lib/index.js';
import { createUser, emailVerification, saveUser } from '../lib/firebase.js';

function signUp() {
  const signup = `
    <img class="background" src="./imgs/mobile-createA.png" />
    <main class="main-form">
        <h1>Crear cuenta</h1>
        <p>Por favor llene los datos antes de continuar.</p>
        <form class="form">
            <div class="form-input" >
                <img src="./imgs/user.png"/>
                <input class="username" name="username" type="text" placeholder="nombre de usuario" required>
            </div>
            <span class="form-alert correct-username">El nombre de usurio es válido</span>
            <span class="form-alert incorrect-username ">El nombre de usurio no es válido</span>

            <div class="form-input">
                <img src="./imgs/email.png"/>
                <input class="email" type="email" placeholder="email" required>
            </div>
            <span class="form-alert correct-mail">El email es válido</span>
            <span class="form-alert incorrect-mail">El email no es válido</span>

            <div class="form-input">
                <img src="./imgs/key.png"/>
                <input class="password" name="password" type="password" placeholder="contraseña" required>
            </div>
            <span class="form-alert correct-password">La contraseña es válida</span>
            <span class="form-alert incorrect-password">La contraseña debe contener al menos 4 caracteres y como máximo 12</span>

            <button class="form-button create-account" type="button">Crear cuenta</button>
            <a href="/" class="form-link" >tienes cuenta?</a>
        </form>
    </main>
    `;

  const element = document.createElement('section');
  element.classList.add('section-signup');
  element.innerHTML = signup;

  const sendVerifactionEmail = () => {
    emailVerification()
      .then((email) => { alert('Se ha enviado un email de verificación al correo '+ email); })
      .catch((error) => { alert('Ha ocurrido un error, intentelo más tarde'); 
      console.log(error);});
  };

  // función para crear usuario
  const registerUser = (username, mail, password) => {
    if (username && mail && password !== false) {
      createUser(mail, password)
        .then((userCredential) => {
          const user = userCredential.user.uid;
          alert('Usuario creado con exito');
          sendVerifactionEmail();
          saveUser(user, username, mail, password);
          resetForm('form', element);
          window.location.hash = '';
        })
        .catch((error) => {
          resetForm('form', element);
          alert('Ha ocurrido un error, intenta registrarte más tarde');
          // console.log(error);
        });
    }
  };

  const saveData = () => {
    const username = element.querySelector('.username').value;
    const mail = element.querySelector('.email').value;
    const password = element.querySelector('.password').value;
    registerUser(
      validateInput(username, 'userR', 'username', element),
      validateInput(mail, 'mailR', 'mail', element),
      validateInput(password, 'passwordR', 'password', element),
    );
  };

  element.querySelector('.create-account').addEventListener('click', saveData);

  return element;
}

export { signUp };
