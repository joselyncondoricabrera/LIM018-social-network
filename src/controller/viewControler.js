import { components } from '../views/components.js';
// aquí recibimos la ruta
export default function changeView(route) {
  switch (route) {
    case '': { return components.login(); }
    case '#/signup': { return components.signup(); }
    case '#/home': { return components.home(); }
    case '#/newPublication': { return components.publication(); }
    case '#/information': { return components.information(); }
    case '#/edit': { return components.edit(); }
    default: { return components.login(); }
  }
}
