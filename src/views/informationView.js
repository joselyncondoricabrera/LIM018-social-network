function informationView ()  {
    const information = `
    <main class="main-infornationView">
        <button class="button-back">
          <img src='./icons/back.png'>
        </button>
        <h1 class="titleName">Lucas</h1>
        <img class="imagePet">
       
        <h1 class="subTitle">Acerca de:</h1>
        <div class="text-caracter-pet">
          <p>Tipo de mascota:</p>
          <p>perro</p>
        </div>
        <div class="text-caracter-pet">
          <p>Sexo de la mascota:</p>
          <p>masculino</p>
        </div>
        <div class="text-caracter-pet">
          <p>Edad de la mascota en meses:</p>
          <p>01 meses</p>
        </div>
        <p class="description">Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. 
        </p>
        
        <div class="div-buttons">
           <button class="button-love">
             <img src="./icons/love.png">
           </button>
           <button class="button-Adopt">
             <img src="./icons/logo-buttonAdopt.png">Adoptar
           </button>
        </div>

    </main>
    <footer>
       <div class="containerInfoFooter">
           <p class="infoFooterTitle">© Todos los derechos reservados</p>
           <p>diseño : @Joselyn Condori - @Diana Llerena</p>
           <p>developers : @Joselyn Condori - @Diana Llerena </p>
       </div>
       <img class="imageFooter" src="./icons/footer-logo.png"/>
    </footer>
    `

    const element = document.querySelector('body');
    element.innerHTML = information;

   
    return element;
}
export { informationView };