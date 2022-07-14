function informationView ()  {
    const information = `
    <main>
        <button>back</button>
        <h1>Mascota</h1>
    </main>
    <footer>
        <p>© Todos los derechos reservados</p>
        <div>
            <p>diseño : </p>
            <a>@Joselyn Condori </a>
            <a>- @Diana Llerena</a>
        </div>
        <div>
            <p>developers : </p>
            <a>@Joselyn Condori </a>
            <a>- @Diana Llerena</a>
        </div>
        <img src="./icons/footer-logo.png"/>
    </footer>
    `

    const element = document.querySelector('body');
    element.innerHTML = information;

   
    return element;
}
export { informationView };