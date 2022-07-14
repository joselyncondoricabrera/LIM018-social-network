function newPublication ()  {
    const publication = `
    <main>
        <button>Agregar</button>
        <h1>Crear publicación</h1>
        <form>
            <p>Selecciona el tipo de tu mascota</p>
            <div>
                <input type="radio"/>
                <label>Perro</label>
                <input type="radio"/>
                <label>Gato</label>
                <input type="radio"/>
                <label>Roedor</label>
                <input type="radio"/>
                <label>Ave</label>
            </div>
            <p>Selecciona el sexo de tu mascota</p>
            <div>
                <input type="radio"/>
                <label>Hembra</label>
                <input type="radio"/>
                <label>Macho</label>
            </div>
            <div>
                <p>Añadir imagen</p>
                <input type="file"/>
            </div>
            <div>
                <p>Añadir imagen</p>
                <input type="text"/>
            </div>
            <div>
                <p>Añadir imagen</p>
                <input type="text-area"/>
            </div>
            <button>Crear publicación</button>
        </form>
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
    element.innerHTML = publication;

   
    return element;
}
export { newPublication };