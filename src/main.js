//aquí nuestros imports
//import changeView from './controller/viewControler.js'

import changeView from './controller/viewControler.js';

// aquí inicializamos window

function currentWindowPath() {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', currentWindowPath)

window.addEventListener('hashchange', () => changeView(window.location.hash))

function saveData () {
    /* const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    console.log(username, email, password) */
    console.log('hola mundo')
}

function ifWindowPathExist(route) {
    if(route === '#/signup') {
        const getData = document.querySelector('.create-account');
        console.log(getData, ' hola mundo')
        getData.addEventListener('click', () => {console.log('hola')} )
    }
}

window.addEventListener('hashchange', () => {ifWindowPathExist(window.location.hash)})