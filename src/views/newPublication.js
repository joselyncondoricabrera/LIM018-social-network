import {selectedOption} from '../lib/index.js';
import {createPublicationF} from '../lib/firebase.js'

function newPublication ()  {
    const publication = `
    <main class="form-newPublication">
        <button class="button-back">
            <img src='./icons/back.png'>
        </button>
        <h1 class="title">Crear publicación</h1>
        <form class="publication-form">
            <p class="question">Selecciona el tipo de tu mascota</p>
            <div class="publication-form__question1">
                <input class="radioButton" type="radio" name="question1__options" value="perro"/>
                <label>Perro</label>
                <input class="radioButton" type="radio" name="question1__options" value="gato"/>
                <label>Gato</label>
                <input class="radioButton" type="radio" name="question1__options" value="roedor"/>
                <label>Roedor</label>
                <input class="radioButton" type="radio" name="question1__options" value="ave"/>
                <label>Ave</label>
            </div>

            <p class="question">Selecciona el sexo de tu mascota</p>
            <div class="publication-form__question2">
                <input class="radioButton" type="radio" name="question2__options" value="hembra"/>
                <label>Hembra</label>
                <input class="radioButton" type="radio" name="question2__options" value="macho"/>
                <label>Macho</label>
            </div>

            <div class="publication-form__question3">
                <p class="question3">Añadir imagen</p>
                <div class="divInputFile">
                   <p class="textInputFile">Subir Archivo</p>
                   <input class="question3__img" type="file"/>
                </div>
                
            </div>

            <div class="publication-form__questin4">
                <p class="question">Nombre de la mascota</p>
                <input class="question4__petname" type="text" placeholder="Escribe con amor..."/>
            </div>

            <div>
                <p class="question">Edad de la mascota en meses</p>
                <input class="question5__petAge" type="text" placeholder="01 meses"/>
            </div>

            <div class="publication-form__question5">
                <p class="question">Descripción de la mascota</p>
                <textarea class="question5__description" placeholder="Escribe con amor..."></textarea>
            </div>
            <button type="button" class="create-publication">Crear publicación</button>
        </form>
    </main>
    <footer class="footer">
        <div class="containerInfoFooter">
            <p class="infoFooterTitle">© Todos los derechos reservados</p>
            <p>diseño : @Joselyn Condori - @Diana Llerena</p>
            <p>developers : @Joselyn Condori - @Diana Llerena </p>
        </div>
        <img class="imageFooter" src="./icons/footer-logo.png"/>
    </footer>
    `

    const element = document.querySelector('body');
    element.innerHTML = publication;

    const question1 = document.querySelectorAll('input[name="question1__options"]');
    const question2 = document.querySelectorAll('input[name="question2__options"]');

    const publicationData = () => {
        const option1 = selectedOption(question1);
        const option2 = selectedOption(question2);
        const petimg = element.querySelector('.question3__img').value;
        const petname = element.querySelector('.question4__petname').value;
        const description = element.querySelector('.question5__description').value;
        console.log(option1, option2,petimg, petname,description)
        //console.log(createPublicationF());
        createPublicationF(option1, option2, petimg, petname, description)
    }
   
   const createPublication = element.querySelector('.create-publication');

    
   createPublication.addEventListener('click', publicationData )
   return element;
}
export { newPublication };