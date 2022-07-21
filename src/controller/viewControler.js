import {components} from '../views/components.js';
 
/* const anyValue = () => {
    '#/edit/' + 'j'
    //const re = (/[^']/).test('#/edit/');
}

console.log(location.load) */

//aquí recibimos la ruta
export default function changeView (route) {
    switch (route) {
        case '#/signup': {return components.signup()};
        case '#/home':  {return components.home()};
        case '#/newPublication': {return components.publication()};
        case '#/information': {return components.information()};
        case '#/edit': {return components.edit()};
    }
}
