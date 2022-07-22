//import { userSatate, publicationsOfCurrentUser, getDocUser } from '../lib/firebase.js'

function informationView ()  {
    const information = `
    <main class="infornation-view">
    <div class="information-header">
      <button class="button-back">
          <img src='./imgs/back.png'>
      </button>
      <h1 class="pet-name"></h1>
      <div class="buttons-group">
        <button class="button-trash">
            <img src='./imgs/trash.png'>
        </button>
        <button class="button-edit">
            <img src='./imgs/edit.png'>
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
    `

    const element = document.querySelector('body');
    element.innerHTML = information;
    const backHomeButton = element.querySelector('.button-back');
    const name = element.querySelector('.pet-name');
    console.log(name)
   /*  const trashPublicationButton= element.querySelector('.button-trash')
    trashPublicationButton.addEventListener('click', () =>{
      alert('elimando publicacion');
      const name = element.querySelector('.pet-name').innerHTML;
      deletePublication(name);
    });*/
   /* trashPublicationButton.addEventListener('click',()=>{
      alert('boton eliminar funcionando');
      const name = element.querySelector('.pet-name').innerHTML;
      deletePublication(name)
      .then(()=>{
        alert('Se eliminó correctamente la publicación ');

      })
      .catch(()=>{
        alert('No se eliminó la publicación');

      })


    });*/
 
    backHomeButton.addEventListener('click', () => { window.location.hash = '#/home'; })
    const editPublication = element.querySelector('.button-edit');
   /*  const belongToUser = () => {
      userSatate((user) => {
        if(user){
          const name = sessionStorage.getItem("petName")
          publicationsOfCurrentUser(name)
          .then(function(publications){
            publications.forEach((pub) => {
              console.log(pub)
              /* getDocUser(pub.id)
              .then((doc) => {
                console.log(doc)
              }) */
              /* const dataUserId = pub._userDataWriter.firestore._authCredentials.currentUser.uid
              console.log( dataUserId != userId)
              console.log(dataUserId === userId)
              if (dataUserId === userId){
                console.log('nada')
              } else {
                const options = element.querySelector('.buttons-group');
                options.style.display = 'none';
              }
              //console.log( dataUserId === userId)
            })
          })
        }
      })
    }
    belongToUser(); */

    editPublication.addEventListener('click', () => {
      const name = element.querySelector('.pet-name')
      console.log(name)
      sessionStorage.setItem("petName", name.innerText);
      window.location.hash = '#/edit'
    })
    
    return element;
}
export { informationView };