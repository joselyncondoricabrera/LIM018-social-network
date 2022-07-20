import { updatePublication } from "../lib/firebase.js";
import {selectedOption} from '../lib/index.js';


function editPublication ()  {
    const edit = `
    <main class="new-publication">
        <div class="new-publication-header">
            <button class="button-back">
                <img src='./icons/back.png'>
            </button>
            <h1 class="title">Editar publicación</h1>
        </div>
        <form class="form__edit-publication">
            <div>
                <p>Selecciona el tipo de tu mascota</p>
                <div class="options-group">
                    <div>
                        <input class="radioButton" type="radio" name="question1__options" value="perro"/>
                        <label>Perro</label>
                    </div>
                    <div>
                        <input class="radioButton" type="radio" name="question1__options" value="gato"/>
                        <label>Gato</label>
                    </div>

                    <div>
                        <input class="radioButton" type="radio" name="question1__options" value="roedor"/>
                        <label>Roedor</label>
                    </div>

                    <div>
                        <input class="radioButton" type="radio" name="question1__options" value="ave"/>
                        <label>Ave</label>
                    </div>
                </div>
            </div>

            <diV>
                <p class="question">Selecciona el sexo de tu mascota</p>
                <div class="options-group">
                    <div>
                        <input class="radioButton" type="radio" name="question2__options" value="hembra"/>
                        <label>Hembra</label>
                    </div>
                    <div>
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

            <button type="button" class="edit-publication">Actualizar publicación</button>
        </form>
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
    element.innerHTML = edit;

    const question1 = document.querySelectorAll('input[name="question1__options"]');
    const question2 = document.querySelectorAll('input[name="question2__options"]');
    
    const editData = () => {
        const data = window.location.hash.substring(7);
        const option1 = selectedOption(question1);
        const option2 = selectedOption(question2);
        const petImg = element.querySelector('.question3__img').files[0]
        const petName = element.querySelector('.question4__petname').value;
        const petAge = element.querySelector('.question5__petAge').value;
        const description = element.querySelector('.question6__description').value;
        updatePublication(data, option1, option2, petImg, petName, petAge, description)
    }

    const editPublication = element.querySelector('.edit-publication');

    
    editPublication.addEventListener('click', editData )
    
    return element;
}
export { editPublication };