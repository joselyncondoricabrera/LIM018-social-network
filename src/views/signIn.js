//import { validateInput, resetForm } from '../lib/index.js';
//import { createUser, emailVerification, saveUser } from '../lib/firebase.js';

function signIn () {
    const login =  `
    <img class="background" src="./imgs//mobile-logIn.png"/>
    <main class="main-form" >
      <h1>Iniciar sesión</h1>
      <p>Bienvenidx, gracias por visitarnos nuevamente.</p>
      <form class="form" >
        <div class="form-input">
          <img src="./imgs/email.png" />
          <input class="email login-email" type="text" placeholder="email" required>
        </div>
        <span class="form-alert correct-mail">El email es válido</span>
        <span class="form-alert incorrect-mail">El email no es válido</span>
  
        <div class="form-input">
          <img src="./imgs/key.png" />
          <input class="password login-password" type="password" placeholder="contraseña" required>
        </div>
        <span class="form-alert correct-password">La contraseña es válida</span>
        <span class="form-alert incorrect-password">La contraseña debe contener al menos 4 caracteres y como máximo 12</span>
  
          <button class="form-button log-in" type="button">Iniciar sesión</button>
          <a href="#/signup" class="form-link">no tienes cuenta?</a>
      </form>
      <div class="container-authentication">
        <p>o ingresa con</p>
        <button class="button-authentication">
          <img src="./imgs/googleLogo.png" >
        </button>
      </div>
      
    </main>
    `
    const element = document.querySelector('body');
    element.innerHTML = login;

    
    return element;
}

export { signIn };

/* const saveData = () => {
    const mail = document.querySelector('.login-email').value
    const password = document.querySelector('.login-password').value
    sendDataLogin(validateInput(mail, 'mailR', 'mail', document),
    validateInput(password, 'passwordR', 'password', document))
  }
  
  //logInButton.addEventListener('click', saveData);
  
  const sendDataLogin = (mail, password) => {
  if( mail && password != false) {
    signInWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if(user.emailVerified){
        alert('inicio de sesión exitoso')
        window.location.hash = '#/home';
      } else {
        alert('Tu cuenta no esta verificada, por favor verificala y luego inicia sesión')
        signOut(auth)
      }
      resetForm('form', document)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
      resetForm('form', document)
    });
  }
  } */