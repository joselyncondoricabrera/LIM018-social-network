import changeView from './controller/viewControler.js';

// aquí inicializamos window
function currentWindowPath() {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', currentWindowPath)