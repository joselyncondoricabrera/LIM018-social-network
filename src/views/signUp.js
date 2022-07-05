function signUp () {
    const signup = `
    <h1>Crear cuenta</h1>
    <form id="create-account">
        <label>Username:</label>
        <input class="username" type="text" required>
        <label>Email:</label>
        <input class="email" type="email" required>
        <span class="create-account__error-email" ></span>
        <label>Contraseña:</label>
        <input class="password" type="password" maxlength="8" required>
            <button class="send-data" type="button">Enviar</button>
            <a href="/">tienes cuenta</a>
    </form>
    `
    const element = document.querySelector('body');
    element.innerHTML = signup;
    return element;
}

export { signUp };