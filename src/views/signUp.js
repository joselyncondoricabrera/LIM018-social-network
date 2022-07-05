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
            <div class="form-input">
                <img src="./icons/email.png"/>
                <input class="email" type="email" placeholder="email" required>
            </div>
            <div class="form-input">
                <img src="./icons/key.png"/>
                <input class="password" type="password" placeholder="contraseña" required>
            </div>
            <button class="form-button" type="button">Crear cuenta</button>
            <a href="/" class="form-link" >tienes cuenta?</a>
        </form>
    </main>
    `
    const element = document.querySelector('body');
    element.innerHTML = signup;
    return element;
}

export { signUp };