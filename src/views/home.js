/* eslint-disable no-alert, no-unused-vars */
import {showPublications } from '../lib/firebase_utils.js';
import { clickPublication,  publicationByTypePet } from '../lib/firebase.js';

function Home() {
  const home = `
  <section class="home">
    <div class="home-header">
        <img class="logo-tablet" src="./imgs/logo-tablet.png"/>
        <img class="imageLogo" src="./imgs/hugme-logo.png"/>
        <img class="logo-desktop" src="./imgs/logo-desktop.png"/>
        
        <p class="header__username">username</p>
        <button class= "header__add-button">
          <p>crear publicación</p>
          <img class="imageAddButton" src="./imgs/add.png">
          <img class="imageAddButton-tablet" src="./imgs/add-tablet.png">
        </button>
    </div>
    
    <h1 class="home__subtitle">Encuentra un nuevo <br> amigo</h1>

    <input class="home__input-search" type="text" placeholder="Buscar">

    <div class="home__container-buttons">
        <button class="button-option all">Todo</button>
        <button class="button-option dog">Perro</button>
        <button class="button-option cat">Gato</button>
        <button class="button-option rodent">Roedor</button>
        <button class="button-option bird">Ave</button>
    </div>
    <section class="home-publications"></section>
  </section>
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
  element.classList.add('home-main');
  element.innerHTML = home;

  const addPublicationButton = element.querySelector('.header__add-button');

  addPublicationButton.addEventListener('click', () => { window.location.hash = '#/newPublication'; });
  const allPub = element.querySelector('.home-publications');

  const listPublications = () => {
    showPublications()
      .then((publications) => {
        console.log(publications)
        publications.forEach((pub) => {
          console.log(pub)
          return allPub.innerHTML += `
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
                  <p class="description">${pub.data().petDescription}</p>
                  <div class="div-buttons">
                    <button class="button-love">
                      <img src="./imgs/love.png">
                    </button>
                    <button class="button-adopt">
                      <img src="./imgs/logo-buttonAdopt.png">Adoptar
                    </button>
                  </div>
              </div>
              `;
          });
        });
    } else {
      // console.log('nada')
    }
    const name = element.querySelector('.card-name');
    sessionStorage.setItem('petName', name.innerText);
  });

  //input buscar mascota por nombre 
  const inputName = element.querySelector('.home__input-search');
  inputName.addEventListener('input' , (e) => {
   
    let numberData=0;
   // alert(e.target.value);
    allPub.innerHTML='';
    showPublications()
    .then( (publication)=>{
      publication.forEach((pub)=>{        
        for(let i=0; i<pub.data().petName.length;i++){
          let segmentWord = pub.data().petName.substring(0,i+1);
          if(e.target.value.toLowerCase() == segmentWord.toLowerCase()){
            numberData = numberData + 1;
             console.log(pub.data().petName);
 
             allPub.innerHTML += `
                    <div class="card publication-card">
                    <img class="card-img" src=${pub.data().petImg}/>
                    <div class="card card-info">
                        <p class="card-name">${pub.data().petName}</p>
                    </div>
                    </div>
                `;
            if(e.target.value.toLowerCase() != segmentWord.toLowerCase()){
              console.log('error');

            }
          }
         /* else{
            condition = false;
              //allPub.innerHTML = '';
              allPub.innerHTML+='No se ha encontrado ningún resultado';
            //console.log(e.target.value.toLowerCase() != segmentWord.toLowerCase());
           // alert('No se ha encontrado ningún resultado!.. Pruebe con otro nombre de mascota');
          }*/
        }
      });
      if(numberData===0){
        allPub.innerHTML = 'No se ha encontrado ningún resultado';
      }
    })
    .catch((error)=>{
      alert('Ha ocurrido un error al mostrar el contenido, intentalo más tarde');
      console.log(error.code, error.message);
    })


  });

  //boton petType ->perro
  const buttonOptionDog = element.querySelector('.dog');
  buttonOptionDog.addEventListener('click', ()=>{
    allPub.innerHTML='';
    searchDataTypePet('perro');
  });
  //boton typePet->gato
  const buttonOptionCat = element.querySelector('.cat');
  buttonOptionCat.addEventListener('click', ()=>{
    allPub.innerHTML='';
    searchDataTypePet('gato');
  });
  //boton typePet -> roedor
  const buttonOptionRodent = element.querySelector('.rodent');
  buttonOptionRodent.addEventListener('click', ()=>{
    allPub.innerHTML='';
    searchDataTypePet('roedor');
  });
  //boton typePet -> aves
  const buttonOptionBird = element.querySelector('.bird');
  buttonOptionBird.addEventListener('click', ()=>{
    allPub.innerHTML='';
    searchDataTypePet('ave');
  });
  // boton typePet -> todos
  const buttonAllTypePet = element.querySelector('.all');
  buttonAllTypePet.addEventListener('click', () =>{
    allPub.innerHTML='';
    listPublications();
  });
  //función para traer data segun tipo de mascota
  const searchDataTypePet = (type)=>{
    publicationByTypePet(type)
    .then( (publications)=>{
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
      .catch((error)=>{
        alert('Ha ocurrido un error al mostrar el contenido, intentalo más tarde');
        console.log(error.code, error.message);
      });

  }

  return element;
}

export { Home };
