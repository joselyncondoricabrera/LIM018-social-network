/* eslint-disable no-alert, no-unused-vars */
import { selectedOption, resetForm } from '../lib/index.js';
import { createPublication } from '../lib/firebase_utils.js';
import { uploadImg, userSatate } from '../lib/firebase.js';

function newPublication() {
  const publication = `
    <section class="new-publication">
        <div class="new-publication-header">
            <button class="button-back">
                <img src='./imgs/back.png'>
            </button>
            <h1 class="title">Crear publicación</h1>
        </div>
        <form class="form__new-publication">
            <div>
                <p>Selecciona el tipo de tu mascota</p>
                <div class="options-group">
                    <div class="options">
                        <input class="radioButton" type="radio" name="question1__options" value="perro"/>
                        <label>Perro</label>
                    </div>
                    <div class="options">
                        <input class="radioButton" type="radio" name="question1__options" value="gato"/>
                        <label>Gato</label>
                    </div>

                    <div class="options">
                        <input class="radioButton" type="radio" name="question1__options" value="roedor"/>
                        <label>Roedor</label>
                    </div>

                    <div class="options">
                        <input class="radioButton" type="radio" name="question1__options" value="ave"/>
                        <label>Ave</label>
                    </div>
                </div>
            </div>

            <diV>
                <p class="question">Selecciona el sexo de tu mascota</p>
                <div class="options-group">
                    <div class="options">
                        <input class="radioButton" type="radio" name="question2__options" value="hembra"/>
                        <label>Hembra</label>
                    </div>
                    <div class="options">
                        <input class="radioButton" type="radio" name="question2__options" value="macho"/>
                        <label>Macho</label>
                    </div>
                </div>
            </div>

            <div class="question__upload-group">
                <p>Añadir imagen</p>
                <label class="option__upload-file">
                    Subir archivo
                    <input class="question3__img" type="file"/>
                </label>
            </div>

            <div>
                <p class="question">Nombre de la mascota</p>
                <input class="question4__petname" type="text" placeholder="Escribe con amor..."/>
            </div>

            <div>
                <p class="question">Edad de la mascota en meses</p>
                <input class="question5__petAge" type="text" placeholder="01 meses"/>
            </div>

            <div>
                <p class="question">Descripción de la mascota</p>
                <textarea class="question6__description" placeholder="Escribe con amor..."></textarea>
            </div>
            
            <button type="button" class="create-publication">Crear publicación</button>
        </form>
    </section>


    <footer>
      <div class="container__footer-info">
          <div class="container__developers-info">
              <p class="developers-info__title">© Todos los derechos reservados</p>
              <div class="developers-info">
              <p>diseño & desarrollo :</p>
              <a href="https://github.com/joselyncondoricabrera" target="_blank">@Joselyn Condori</a>
              <a href="https://github.com/camotito0" target="_blank">@Diana Llerena</a>
              </div>
          </div>
          <img class="imageFooter" src="./imgs/footer-logo.png"/>
      </div>
    </footer>
    `;

  const element = document.createElement('main');
  element.classList.add('new-main');
  element.innerHTML = publication;

  const backHomeButton = element.querySelector('.button-back');
  backHomeButton.addEventListener('click', () => { window.location.hash = '#/home'; });

  const question1 = element.querySelectorAll('input[name="question1__options"]');
  const question2 = element.querySelectorAll('input[name="question2__options"]');

  const newPub = (type, sex, img, name, age, description) => {
    userSatate((user)=> {
        console.log(user)
        if(user){
            uploadImg(img)
            .then((url) => {
              createPublication(user.uid, type, sex, url, name, age, description);
              alert('La publicaión se ha creado con exito');
              resetForm('form__new-publication', element);
            })
            .catch((error) => {
              alert('Ha ocurrido un error, intenta registrarte más tarde');
              console.log(error.code)
              return resetForm('form__new-publication', element);;
            });
        }
    })
  };

  const publicationData = () => {
    const option1 = selectedOption(question1);
    const option2 = selectedOption(question2);
    const petImg = element.querySelector('.question3__img').files[0];
    const petName = element.querySelector('.question4__petname').value;
    const petAge = element.querySelector('.question5__petAge').value;
    const description = element.querySelector('.question6__description').value;
    newPub(option1, option2, petImg, petName, petAge, description);
  };

  const createPublicationButton = element.querySelector('.create-publication');

  createPublicationButton.addEventListener('click', publicationData);

  return element;
}
export { newPublication };
