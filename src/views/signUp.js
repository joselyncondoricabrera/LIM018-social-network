function signUp () {
    const signup = `
    <h1 class="form-create" >Crear cuenta</h1>
    <p>Por favor llene los datos antes de continuar.</p>
    <form class="create-account">
        <div class="create-input" >
            <img src="./icons/user.png"/>
            <input class="username" type="text" placeholder="nombre de usuario" required>
        </div>
        <div class="create-input">
            <img src="./icons/email.png"/>
            <input class="email" type="email" placeholder="email" required>
        </div>
        <div class="create-input">
            <img src="./icons/key.png"/>
            <input class="password" type="password" placeholder="contraseña" required>
        </div>
        <button class="form-create-account-button" type="button">Enviar</button>
        <a href="/">tienes cuenta</a>
    </form>
    `
    const element = document.querySelector('body');
    element.innerHTML = signup;
    return element;
}

export { signUp };