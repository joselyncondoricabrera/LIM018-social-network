/* eslint-disable no-alert */
import { userSatate, publicationsOfCurrentUser } from '../lib/firebase.js';
import { deletePublication } from '../lib/firebase_utils.js';

function informationView() {
  const information = `
    <section class="information-view">
      <div class="information-header">
        <button class="button-back">
            <img class="image-back-button-mobile" src='./imgs/back.png'>
            <img class="image-back-button-tablet" src='./imgs/back-tablet.png'>
        </button>
        <h1 class="pet-name"></h1>
        <div class="buttons-group">
          <button class="button-trash">
              <img class="image-trash-button" src='./imgs/trash.png'>
              <img class="image-trash-button-tablet" src='./imgs/trash-tablet.png'>
          </button>
          <button class="button-edit">
              <img class="image-edit-button" src='./imgs/edit.png'>
              <img class="image-eddit-button-tablet" src='./imgs/edit-tablet.png'>
          </button>
        </div>
      </div>
      <div class="publication-information"></div>
    </section>
    <div class="container__modal-delete">
      <div class="content__modal-delete">
        <p class="title_modal-delete">Borrar publicación</p>
        <p class="subtitle_modal-delete">Si borras esta publicación no la podras recuperar</p>
      </div>
      <button class="button-delete acept" >Borrar</button>
      <button class="button-delete cancel">Cancelar</button>

    </div>
    <footer>
      <div class="container__footer-info">
          <div class="container__developers-info">
              <p class="developers-info__title">© Todos los derechos reservados</p>
              <div class="developers-info">
              <p>diseño & developers :</p>
              <a href="https://github.com/joselyncondoricabrera" target="_blank">@Joselyn Condori</a>
              <a href="https://github.com/camotito0" target="_blank">@Diana Llerena</a>
              </div>
          </div>
          <img class="imageFooter" src="./imgs/footer-logo.png"/>
      </div>
    </footer>
    `;
  
  const element = document.createElement('main');
  element.classList.add('information-main');
  element.innerHTML = information;

  const backHomeButton = element.querySelector('.button-back');

  const trashPublicationButton = element.querySelector('.button-trash');

  const containerModal  = element.querySelector('.container__modal-delete');

  
  containerModal.style.display='none';

  trashPublicationButton.addEventListener('click', () => {
    const buttonCancel = element.querySelector('.cancel');

    const namePet = element.querySelector('.pet-name').innerHTML;
    
    containerModal.style.display = 'flex';
    buttonCancel.addEventListener('click', ()=>{
      containerModal.style.display = 'none';
    });
    
    element.querySelector('.acept').addEventListener('click', () => {
      userSatate((user) => {
        if (user) {
          publicationsOfCurrentUser(namePet)
            .then(
              (pub) => {
                pub.forEach((publication) => {
                  // console.log(publication.id);
                  deletePublication(user.uid, publication.id)
                  .then(() => {
                    alert('La publicación se ha eliminado con éxito');
                    window.location.hash = '#/home';
                  })
                  .catch(() => {

                  });
                });
              })
            .catch(() => {
              alert('Ah ocurrido un error!');});
        }else {
          alert('el usuario no está en sesión');
        }
      });
    });
  });

  backHomeButton.addEventListener('click', () => { window.location.hash = '#/home'; });
  
  const editPublication = element.querySelector('.button-edit');

  editPublication.addEventListener('click', () => {
    //const name = element.querySelector('.pet-name');
    // console.log(name);
    //sessionStorage.setItem('petName', name.innerText);
    window.location.hash = '#/edit';
  });

  return element;
}
export { informationView };
