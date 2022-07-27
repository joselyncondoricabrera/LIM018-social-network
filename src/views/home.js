/* eslint-disable no-alert, no-unused-vars */
import {showPublications } from '../lib/firebase_utils.js';
import { clickPublication } from '../lib/firebase.js';

function Home() {
  const home = `
    <main class="home">
        <div class="home-header">
            <img class="imageLogo" src="./imgs/hugme-logo.png"/>
            <p class="header__username">username</p>
            <button class= "header__add-button">
            <img class="imageAddButton" src="./imgs/add.png">
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
            <img class="imageFooter" src="./imgs/footer-logo.png"/>
        </div>
    </footer>
    `;

  const element = document.querySelector('body');
  element.innerHTML = home;

  const addPublicationButton = element.querySelector('.header__add-button');

  addPublicationButton.addEventListener('click', () => { window.location.hash = '#/newPublication'; });
  const allPub = element.querySelector('.home-publications');

  const listPublications = () => {
    showPublications()
      .then((publications) => {
        publications.forEach((pub) => {
          allPub.innerHTML += `
                    <div class="card publication-card">
                    <img class="card-img" src=${pub.data().petImg}/>
                    <div class="card card-info">
                        <p class="card-name">${pub.data().petName}</p>
                    </div>
                    </div>
                `;
        });
      })
      .catch((error) => {
        alert('Ha ocurrido un error al mostrar el contenido, intentalo más tarde');
        // console.log(error.code, error.message)
      });
  };

  listPublications();

  allPub.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('card-name')) {
      window.location.hash = '#/information';
      clickPublication(e.target.innerText)
        .then((publications) => {
          publications.forEach((pub) => {
            const namePub = document.querySelector('.pet-name');
            const infoPub = document.querySelector('.publication-information');
            namePub.innerHTML = `${pub.data().petName}`;
            infoPub.innerHTML = `
                        <img src=${pub.data().petImg}>
                        <div class="information-content">
                            <h1>Acerca de:</h1>
                            <div class="text-caracter-pet">
                            <p>Tipo de mascota:</p>
                            <p>${pub.data().petType}</p>
                            </div>
                            <div class="text-caracter-pet">
                            <p>Sexo de la mascota:</p>
                            <p>${pub.data().petSex}</p>
                            </div>
                            <div class="text-caracter-pet">
                            <p>Edad de la mascota en meses:</p>
                            <p>${pub.data().petAge}</p>
                            </div>
                        </div>
                        <p class="description">${pub.data().petDescription}</p>
                    `;
          });
        });
    } else {
      // console.log('nada')
    }
    const name = element.querySelector('.card-name');
    sessionStorage.setItem('petName', name.innerText);
  });

  return element;
}

export { Home };
