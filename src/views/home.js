function Home () {
    const home = `
    <main>
        <div>
            <img src="./icons/hugme-logo.png"/>
            <button class="publication-add">Agregar</button>
        </div>
        <p>username</p>
        <h1>Encuentra un nuevo amigo</h1>
        <div>
            <input type="text" placeholder="Buscar" />
        </div>

        <div>
            <button>Todo</button>
            <button>Perro</button>
            <button>Gato</button>
            <button>Roedor</button>
            <button>Ave</button>
        </div>
        <div>Publicaciones</div>
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
    element.innerHTML = home;

    const addPublicationButton = element.querySelector('.publication-add')

    addPublicationButton.addEventListener('click', ()=> { window.location.hash = '#/newPublication';} )

   
    return element;
}

export { Home };