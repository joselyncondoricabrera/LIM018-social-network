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
                 <span class="usuarioCorrecto"> nombre de usuario válido</span>
                 <span class="usuarioIncorrecto">nombre de usuario incorrecto</span>
            <div class="form-input">
                <img src="./icons/email.png"/>
                <input class="email" type="email" placeholder="email" required>
            </div>
                <span class="emailCorrecto">email válido</span>
                <span class="emailIncorrecto" >email incorrecto</span>
            <div class="form-input">
                <img src="./icons/key.png"/>
                <input class="password" type="password" placeholder="contraseña" required>
            </div>
                <span class="passwordCorrecto">contraseña válida</span>
                <span class="passwordIncorrecto">contraseña incorrecta</span>
            <button class="form-button create-account" type="button">Crear cuenta</button>
            <a href="/" class="form-link" >tienes cuenta?</a>
        </form>
    </main>
    `
    const element = document.querySelector('body');
    element.innerHTML = signup;
  

    const regex = {
        'userR': /^[a-zA-Z0-9\_\-]{4,16}$/, //letras (mayus, minus), numeros, guion y guion bajo - de 4 a 16 caracteres
        'mailR':  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // letras (mayus, minus), guion bajo antes de numeros, cadena de texto que precede al arroba y
        //al punto, después del punto cadena de caracteres
        'passwordR': /^.{4,12}$/, // caulquier tipo de caracter - de 4 a 12 caracteres

    }

    function saveData(){
        let username= element.querySelector('.username').value;
        let mail=element.querySelector('.email').value;
        let password= element.querySelector('.password').value;
        validarRegex(username,'userR','usuario');
        validarRegex(mail,'mailR','email');
        validarRegex(password,'passwordR','password');
    }

    let btnCreateAccount = element.querySelector('.create-account');
    btnCreateAccount.addEventListener('click',saveData);
    //usuarioCorrecto
    function validarRegex(input,type,className){
        if(regex[`${type}`].test(input)){
            element.querySelector(`.${className}Correcto`).style.display='flex';
            element.querySelector(`.${className}Incorrecto`).style.display='none';
            console.log('correcto');
        }
        else{
            element.querySelector(`.${className}Incorrecto`).style.display='flex';
            element.querySelector(`.${className}Correcto`).style.display='none';
            console.log('incorrecto');

        }

    }


    return element;
}

export { signUp };