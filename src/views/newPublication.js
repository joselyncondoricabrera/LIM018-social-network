import {selectedOption} from '../lib/index.js';
import {createPublicationF} from '../lib/firebase.js'

function newPublication ()  {
    const publication = `
    <main>
        <button>atrás</button>
        <h1>Crear publicación</h1>
        <form class="publication-form">
            <p>Selecciona el tipo de tu mascota</p>
            <div class="publication-form__question1">
                <input type="radio" name="question1__options" value="perro"/>
                <label>Perro</label>
                <input type="radio" name="question1__options" value="gato"/>
                <label>Gato</label>
                <input type="radio" name="question1__options" value="roedor"/>
                <label>Roedor</label>
                <input type="radio" name="question1__options" value="ave"/>
                <label>Ave</label>
            </div>

            <p>Selecciona el sexo de tu mascota</p>
            <div class="publication-form__question2">
                <input type="radio" name="question2__options" value="hembra"/>
                <label>Hembra</label>
                <input type="radio" name="question2__options" value="macho"/>
                <label>Macho</label>
            </div>

            <div class="publication-form__question3">
                <p>Añadir imagen</p>
                <input class="question3__img" type="file"/>
            </div>

            <div class="publication-form__question4">
                <p>Nombre de la mascota</p>
                <input class="question4__petname" type="text"/>
            </div>

            <div class="publication-form__question5">
                <p>Descripción de la mascota</p>
                <textarea class="question5__description"></textarea>
            </div>
            <button type="button" class="create-publication">Crear publicación</button>
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

    const question1 = document.querySelectorAll('input[name="question1__options"]');
    const question2 = document.querySelectorAll('input[name="question2__options"]');

    const publicationData = () => {
        const option1 = selectedOption(question1);
        const option2 = selectedOption(question2);
        const petimg = element.querySelector('.question3__img').files[0]
        const petname = element.querySelector('.question4__petname').value;
        const description = element.querySelector('.question5__description').value;
        createPublicationF(option1, option2, petimg, petname, description)
    }
   
   const createPublication = element.querySelector('.create-publication');

    
   createPublication.addEventListener('click', publicationData )
   return element;
}
export { newPublication };