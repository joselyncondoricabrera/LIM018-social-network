import {components} from '../views/components.js';

//aquí recibimos la ruta
export default function changeView (route) {
    switch (route) {
        case '#/signup': {return components.signup()};
        default :
        console.log('la pagina a la que esta tratando de acceder no existe')
    }
}

//export { changeView };