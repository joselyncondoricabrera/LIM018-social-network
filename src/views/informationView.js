function informationView ()  {
    const information = `
    <main class="infornation-view">
    <div class="information-header">
      <button class="button-back">
          <img src='./icons/back.png'>
      </button>
      <h1 class="pet-name"></h1>
      <div class="buttons-group">
        <button class="button-trash">
            <img src='./icons/trash.png'>
        </button>
        <button class="button-edit">
            <img src='./icons/edit.png'>
        </button>
      </div>
    </div>
      <div class="publication-information"></div>
      <div class="div-buttons">
           <button class="button-love">
             <img src="./icons/love.png">
           </button>
           <button class="button-adopt">
             <img src="./icons/logo-buttonAdopt.png">Adoptar
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
            <img class="imageFooter" src="./icons/footer-logo.png"/>
        </div>
    </footer>
    `

    const element = document.querySelector('body');
    element.innerHTML = information;
    const backHomeButton = element.querySelector('.button-back')

    backHomeButton.addEventListener('click', () => { window.location.hash = '#/home'; })
    const editPublication = element.querySelector('.button-edit');

     editPublication.addEventListener('click', () => {
      const name = element.querySelector('.pet-name')
      console.log('clicked')
      window.location.hash = '#/edit/' + name.innerText
    })
  
    return element;
}
export { informationView };