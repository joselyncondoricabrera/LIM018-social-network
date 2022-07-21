import {listPublications, searchPub } from '../lib/firebase.js'

function Home () {
    const home = `
    <main class="home">
        <div class="home-header">
            <img class="imageLogo" src="./icons/hugme-logo.png"/>
            <p class="header__username">username</p>
            <button class= "header__add-button">
            <img class="imageAddButton" src="./icons/add.png">
            </button>
        </div>
        
        <h1 class="home__subtitle">Encuentra un nuevo <br> amigo</h1>

        <input class="home__input-search" type="text" placeholder="Buscar"/>

        <div class="home__container-buttons">
            <button class="button-option">Todo</button>
            <button class="button-option">Perro</button>
            <button class="button-option">Gato</button>
            <button class="button-option">Roedor</button>
            <button class="button-option">Ave</button>
        </div>
        <section class="home-publications"></section>
    </main>
    <footer>
        <div class="container__footer-info">
            <div class="container__developers-info">
                <p class="developers-info__title">© Todos los derechos reservados</p>
                <p>diseño : @Joselyn Condori - @Diana Llerena</p>
                <p>developers : @Joselyn Condori - @Diana Llerena </p>
            </div>
            <img class="imageFooter" src="./icons/footer-logo.png"/>
        </div>
    </footer>
    `

    const element = document.querySelector('body');
    element.innerHTML = home;

    const addPublicationButton = element.querySelector('.header__add-button')

    addPublicationButton.addEventListener('click', ()=> { window.location.hash = '#/newPublication'; })
    const allPub = element.querySelector('.home-publications');
    console.log(allPub)
    listPublications(allPub);

    allPub.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.classList.contains("card-name")){
            searchPub(e.target.innerText)
        } else{
            console.log('nada')
        }
    })

    return element;
}

export { Home };