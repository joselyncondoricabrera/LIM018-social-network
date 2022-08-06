/* eslint-disable no-alert */
import { userSatate, publicationsOfCurrentUser, deletePublication } from '../lib/firebase.js';

function informationView() {
  const information = `
    <main class="infornation-view">
    <div class="information-header">
      <button class="button-back">
          <img class="imageBackButton" src='./imgs/back.png'>
          <img class="imageBackButton-tablet" src='./imgs/back-tablet.png'>
      </button>
      <h1 class="pet-name"></h1>
      <div class="buttons-group">
        <button class="button-trash">
            <img class="imageTrashButton" src='./imgs/trash.png'>
            <img class="imageTrashButton-tablet" src='./imgs/trash-tablet.png'>
        </button>
        <button class="button-edit">
            <img class="imageEditButton" src='./imgs/edit.png'>
            <img class="imageEditButton-tablet" src='./imgs/edit-tablet.png'>
        </button>
      </div>
    </div>
      <div class="publication-information"></div>
      <div class="div-buttons">
           <button class="button-love">
             <img src="./imgs/love.png">
           </button>
           <button class="button-adopt">
             <img src="./imgs/logo-buttonAdopt.png">Adoptar
           </button>
      </div>
    </main>
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
                <p>diseño : @Joselyn Condori - @Diana Llerena</p>
                <p>developers : @Joselyn Condori - @Diana Llerena </p>
            </div>
            <img class="imageFooter" src="./imgs/footer-logo.png"/>
        </div>
    </footer>
    `;
  
  const element = document.createElement('section');
  element.classList.add('section-information');
  element.innerHTML = information;

  const backHomeButton = element.querySelector('.button-back');

  const trashPublicationButton = element.querySelector('.button-trash');

  const containerModal  = element.querySelector('.container__modal-delete');

  
  containerModal.style.display='none';

  trashPublicationButton.addEventListener('click', () => {
    const buttonCancel = element.querySelector('.cancel');
    const buttonDelete = element.querySelector('.acept');
    // const data = sessionStorage.getItem('petName');

    const namePet = element.querySelector('.pet-name').innerHTML;
    containerModal.style.display = 'flex';
    buttonCancel.addEventListener('click', ()=>{
      containerModal.style.display = 'none';
    });
    
    buttonDelete.addEventListener('click',()=>{
      userSatate((user) => {
        if (user) {
          publicationsOfCurrentUser(namePet)
            .then(
              (pub) => {
                pub.forEach((publication) => {
                  // console.log(publication.id);
                  deletePublication(user.uid, publication.id)
                  .then(
                    (e)=>{console.log(e); }
                  )
                  .catch();
                  alert('La publicación se ha eliminado con éxito');
                  window.location.hash = '#/home';
                  // window.location.reload();
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
    const name = element.querySelector('.pet-name');
    // console.log(name);
    sessionStorage.setItem('petName', name.innerText);
    window.location.hash = '#/edit';
  });

  return element;
}
export { informationView };
