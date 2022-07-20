import {components} from '../views/components.js';
 
/*const passValue = () => {
    const petName = document.querySelector('.pet-name') ;
    const url = '#/edit/' + petName.innerText;
    return url
} */

//aquí recibimos la ruta
export default function changeView (route) {
    switch (route) {
        case '#/signup': {return components.signup()};
        case '#/home':  {return components.home()};
        case '#/newPublication': {return components.publication()};
        case '#/information': {return components.information()};
        //case passValue(): {return components.edit()};
    }
}
