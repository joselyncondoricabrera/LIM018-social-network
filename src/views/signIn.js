/* eslint-disable no-alert, no-unused-vars */
import { validateInput, resetForm } from '../lib/index.js';
import {
  signInAuth, logOut, googleAuth, saveUser, getUserData,
} from '../lib/firebase.js';
//import { saveUser} from '../lib/firebase_utils.js';

function signIn() {
  const login = `
   <!-- <img class="backgroundTablet" src="./imgs/tablet-login.png"/> -->
    <img class="background-login-desktop" src="./imgs/loginDesktop.png"/>
    <img class="background-login-mobile" src="./imgs/mobile-logIn.png"/>
    <section class="login-section">
      <h1>Iniciar sesión</h1>
      <p>Bienvenid@, gracias por visitarnos nuevamente.</p>
      <form class="form" >
        <div class="form-input">
          <img class="icon" src="./imgs/user.png" />
          <input class="email login-email" type="text" placeholder="email" required>
        </div>
        <span class="form-alert correct-mail">El email es válido</span>
        <span class="form-alert incorrect-mail">El email no es válido</span>
        <div class="form-input">
          <img class="icon" src="./imgs/key2.png" />
          <input class="password login-password" type="password" placeholder="contraseña" required>
        </div>
        <span class="form-alert correct-password">La contraseña es válida</span>
        <span class="form-alert incorrect-password">La contraseña debe contener al menos 4 caracteres y como máximo 12</span>
        <div class="form-final-options">
          <button class="form-button log-in" type="button">Iniciar sesión</button>
          <a href="#/signup" class="form-link">no tienes cuenta?</a>
        </div>
      </form>
      <div class="container-authentication">
        <p>o ingresa con</p>
        <button class="button-authentication">
          <img src="./imgs/gDL.png" >
        </button>
      </div>
    </section>
  `;

  const element = document.createElement('main');
  element.classList.add('login-main');
  element.innerHTML = login;

  const logIn = (mail, password) => {
    if (mail && password !== false) {
      signInAuth(mail, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            alert('inicio de sesión exitoso');
            window.location.hash = '#/home';
            resetForm('form', element);
          } else {
            resetForm('form', element);
            logOut();
          }
        })
        .catch((error) => {
          resetForm('form', element);
          alert('Ha ocurrido un error, intenta registrarte más tarde');
        // console.log(error.code, error.message)
        });
    }
  };

  const saveData = () => {
    const mail = document.querySelector('.login-email').value;
    const password = document.querySelector('.login-password').value;
    logIn(
      validateInput(mail, 'mailR', 'mail', document),
      validateInput(password, 'passwordR', 'password', document),
    );
  };

  element.querySelector('.log-in').addEventListener('click', saveData);

  const continueWithGoogle = () => {
    googleAuth()
      .then((result) => {
        const user = result.user;
        const uid = result.user.uid;
        getUserData(uid)
          .then((doc) => {
            if (doc !== undefined) {
              // console.log('Document data:', doc.data())
              alert('Inicio de sesión exitoso');
              window.location.hash = '#/home';
            } else {
              saveUser(user.uid, user.displayName, user.email);
              alert('Bienvenido');
              window.location.hash = '#/home';
            }
          });
      })
      .catch((error) => {
        resetForm('form', element);
        alert('Ha ocurrido un error, intenta registrarte más tarde');
      // console.log(error.code, error.message)
      });
  };

  element.querySelector('.button-authentication').addEventListener('click', continueWithGoogle);

  return element;
}

export { signIn };
