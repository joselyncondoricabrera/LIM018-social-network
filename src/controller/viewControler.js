import {components} from '../views/components.js';

//aquí recibimos la ruta
export default function changeView (route) {
    switch (route) {
        case '#/signup': {return components.signup()};
        case '#/home':  {return components.home()};
        case '#/newPublication': {return components.publication()};
        case '#/information': {return components.information()};
        default :
        console.log('la pagina a la que esta tratando de acceder no existe')
    }
}