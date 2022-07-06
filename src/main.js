//aquí nuestros imports
//import changeView from './controller/viewControler.js'

import changeView from './controller/viewControler.js';

// aquí inicializamos window

function currentWindowPath() {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', currentWindowPath)

window.addEventListener('hashchange', () => changeView(window.location.hash))


/* function ifWindowPathExist(route) {
    if(route === '#/signup') {
        const getData = document.querySelector('.create-account');
        console.log(getData, ' hola mundo')
        /* getData.addEventListener('click', (e) => {console.log('hola')} )
    }
}

window.addEventListener('hashchange', () => {ifWindowPathExist(window.location.hash)}) */