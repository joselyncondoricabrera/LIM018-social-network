function Home () {
    const home = `
    <main class="form-home">
        <div class="containerHead">
            <img class="imageLogo" src="./icons/hugme-logo.png"/>
            <p class="username">username</p>
            <button class= "buttonAdd">
            <img class="imageAddButton" src="./icons/add.png">
            </button>
        </div>
        
        <h1 class="subtitle">Encuentra un nuevo <br> amigo</h1>
        <div class="containerSearch">
            <input class="inputSearch"  type="text" placeholder="Buscar" />
        </div>

        <div class="containerButtons">
            <button class="buttonOption all">Todo</button>
            <button class="buttonOption do">Perro</button>
            <button class="buttonOption cat">Gato</button>
            <button class="buttonOption rodent" >Roedor</button>
            <button class="buttonOption bird">Ave</button>
        </div>
        <div class="sectionPublication">Publicaciones</div>
    </main>
    <footer class="footer">
        <p>© Todos los derechos reservados</p>
        <div class="containerDataFooter">
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
        </div>
        <img src="./icons/footer-logo.png"/>
    </footer>
    `

    const element = document.querySelector('body');
    element.innerHTML = home;

   
    return element;
}

export { Home };
//<img src="./icons/add.png">